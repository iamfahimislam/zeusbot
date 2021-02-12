const { MessageEmbed } = require('discord.js');
const request = require('node-superfetch');
const { stripIndents } = require('common-tags');
const { embedURL, cleanAnilistHTML, trimArray } = require('../../handlers/util');
const searchGraphQL = stripIndents`
	query ($search: String) {
		characters: Page (perPage: 1) {
			results: characters (search: $search) { id }
		}
	}
`;
const resultGraphQL = stripIndents`
	query ($id: Int!) {
		Character (id: $id) {
			id
			name {
				first
				last
			}
			image {
				large
				medium
			}
			description(asHtml: false)
			siteUrl
			media(page: 1, perPage: 5) {
				edges {
					node {
						title {
							english
							userPreferred
						}
						type
						siteUrl
					}
				}
			}
		}
	}
`;
const types = {
  ANIME: 'Anime',
  MANGA: 'Manga'
};

module.exports = {
  name: "character",
  aliases: ['anilist-character', 'character', 'manga-character', 'manga-char', 'ani-char', 'char', 'anime-char'],
  description: 'Searches AniList for your query, getting character results.',
  usage: "character <anime_character_name>",
   category: "• Utility",
  run: async (client, message, args) => {
    var query = message.content
      .split(/\s+/g)
      .slice(1)
      .join(" ");
    try {
      const id = await search(query);
      if (!id) return message.channel.send('Could not find any results.');
      const character = await fetchCharacter(id);
      const embed = new MessageEmbed()
        .setColor(0x02A9FF)
        .setAuthor('AniList', 'https://i.imgur.com/iUIRC7v.png', 'https://anilist.co/')
        .setURL(character.siteUrl)
        .setThumbnail(character.image.large || character.image.medium || null)
        .setTitle(`${character.name.first || ''}${character.name.last ? ` ${character.name.last}` : ''}`)
        .setDescription(character.description ? cleanAnilistHTML(character.description, false) : 'No description.')
        .addField('❯ Appearances', trimArray(character.media.edges.map(edge => {
          const title = edge.node.title.english || edge.node.title.userPreferred;
          return embedURL(`${title} (${types[edge.node.type]})`, edge.node.siteUrl);
        }), 5).join(', '));
      return message.channel.send(embed);
    } catch (err) {
      return message.channel.send(`Oh no, an error occurred: \`${err.message}\`. Try again later!`);
    }
    async function search(query) {
      const { body } = await request
        .post('https://graphql.anilist.co/')
        .send({
          variables: { search: query },
          query: searchGraphQL
        });
      if (!body.data.characters.results.length) return null;
      return body.data.characters.results[0].id;
    }

    async function fetchCharacter(id) {
      const { body } = await request
        .post('https://graphql.anilist.co/')
        .send({
          variables: { id },
          query: resultGraphQL
        });
      return body.data.Character;
    }

  }
}
