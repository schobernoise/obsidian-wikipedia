# Obsidian Wikipedia Extended

This is a plugin for [Obsidian](https://obsidian.md). It is based on [obsidian-wikipedia](https://github.com/jmilldotdev/obsidian-wikipedia) by Jonathan Miller.

**I will rename it in the future**

The idea was to get extended functionality for inserting information from wikipedia with the wikipedia api. For now it is not officially released, but please feel free to test it, fork it, clone it, extend it, send pull requests. 

**Feel free to share your ideas**


## Usage


- `Get Wikipedia for Active Note`, which gets the first section of Wikipedia using the active note's title as search term.
- `Get Wikipedia for Search Term`, which gets the first section of Wikipedia for a search term.
- `Get whole Wikipedia Article for Active Note`, which inserts the whole article in markdown format.


## Ideas / Plans

- [ ] Get Section headers and let users choose which one they want to insert.
- [ ] Make Articles search interactive like in this plugin: [obsidian-wikipedia-search](https://github.com/StrangeGirlMurph/obsidian-wikipedia-search), to deal better with disambiguation.


## Settings

- **Language Prefix**: The prefix before `wikipedia.org` used to access the language of Wikipedia you want. (Default: 'en')
- **Extract Template**: The template to use to paste your extract. Available variables are {{text}}, {{searchTerm}}, and {{url}}
- **Bold Search Term?**: If set to True, bolds the first instance of the search term in the extract
- **Use Paragraph Template?**: If set to true, the paragraph template will be inserted for each paragraph of text for {{text}} in main template.
- **Paragraph Template**: If *Use Paragraph Template* is set to true, this template will be inserted for each paragraph in the text extract. Available variable: {{paragraphText}}.