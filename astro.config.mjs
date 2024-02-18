import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";
import { SITE_URL } from "./src/data/config";
import starlight from "@astrojs/starlight";
import mdx from "@astrojs/mdx";
import astroExpressiveCode from "astro-expressive-code";

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,
  markdown: {
    syntaxHighlight: "shiki",
    shikiConfig: {
      theme: "nord",
      wrap: false,
    },
  },
  integrations: [
    tailwind(),
    sitemap(),
    robotsTxt(),
    astroExpressiveCode(),
    starlight({
      title: "Python for Finance",
      logo: {
        src: "./public/icons-3d-color/dollar-front.png",
      },
      social: {
        github: "https://github.com/aguilarklyno",
        "x.com": "https://twitter.com/KlynoAguilar",
        linkedin: "https://www.linkedin.com/in/klynoroales-aguilar-8b693126b/",
      },
      locales: {
        root: {
          label: "Japanese",
          lang: "ja",
        },
        en: {
          label: "English",
          lang: "en",
        },
      },
    }),
    mdx(),
  ],
});
