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
      sidebar: [
        {
          label: '§0-greeting', collapsed: false, // 折りたたまない
          autogenerate: {directory: '§0-greeting',collapsed: true }, // 折りたたむ
        },
        {
          label: '§2-統計学',collapsed: false, // 折りたたまない
          autogenerate: {directory: '§2-統計学',collapsed: true },　// 折りたたむ
        },
        {
          label: '§3-データ分析基礎',collapsed: false, // 折りたたまない
          autogenerate: {directory: '§3-データ分析基礎',collapsed: true },　// 折りたたむ
        },
        {
          label: '§4-コンセプト別',collapsed: false, // 折りたたまない
          autogenerate: {directory: '§4-コンセプト別',collapsed: true },　// 折りたたむ
        },
        {
          label: '§5-深層学習',collapsed: false, // 折りたたまない
          autogenerate: {directory: '§5-深層学習',collapsed: true },　// 折りたたむ
        },
        {
          label: 'z-その他',collapsed: false, // 折りたたまない
          autogenerate: {directory: 'z-その他',collapsed: true },　// 折りたたむ
        },
      ],
    }),
    mdx(),
  ],
});
