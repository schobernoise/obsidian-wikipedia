export interface WikipediaExtract {
  title: string;
  text: string;
  url: string;
}

export interface WikipediaPluginSettings {
  template: string;
  shouldUseParagraphTemplate: boolean;
  shouldBoldSearchTerm: boolean;
  paragraphTemplate: string;
  language: string;
}
