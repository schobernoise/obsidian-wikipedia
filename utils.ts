export const formatWikiToMarkdown = (wikiText: string): string => {
  // Replace section headers with Markdown headings
  const formattedText = wikiText
    .replace(/======([^=]+)======/g, (match, group) => {
      return `###### ${group.trim()}`;
    })
    .replace(/====([^=]+)====/g, (match, group) => {
      return `##### ${group.trim()}`;
    })
    .replace(/===(.+)===/g, (match, group) => {
      return `### ${group.trim()}`;
    })
    .replace(/==(.+)==/g, (match, group) => {
      return `## ${group.trim()}`;
    });

  return formattedText;
};

//  In this modification, I'm adding another replace call to handle level
// three headings with three equal signs on each side.
// This should correctly format level one, level two,
// and level three headings in Markdown.
