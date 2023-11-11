import { WikipediaPluginSettings } from "./interfaces";

export const DEFAULT_SETTINGS: WikipediaPluginSettings = {
  template: `{{text}}\n> [Wikipedia]({{url}})`,
  shouldUseParagraphTemplate: true,
  shouldBoldSearchTerm: true,
  paragraphTemplate: `> {{paragraphText}}\n>\n`,
  language: "en",
};

export const extractApiUrl =
  "wikipedia.org/w/api.php?format=json&action=query&prop=extracts&explaintext=1&redirects&origin=*&titles=";
