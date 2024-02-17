type Social = {
  label: string;
  link: string;
};

type Presentation = {
  mail: string;
  title: string;
  descriptionEnglish: string;
  descriptionJapanese: string;
  socials: Social[];
  profile?: string;
};

const presentation: Presentation = {
  mail: "aguilarklyno@gmail.com",
  title: "Hi, I’m Klyno R Aguilar 👋",
  profile: "/profile.jpg",
  descriptionEnglish:
    "Nice to meet you, I am *Aguilar*, a student at Keio University faculty of Economics. I am currently studying *AI* and *finance* with *a foundation in data analysis*, and I mainly use *Next.JS*, *Typescript*, and *Python*. Other technology stacks are listed in *Skills*.",
  descriptionJapanese:
    "はじめまして、慶應義塾大学 経済学部の*アギラー*です。現在は*データ分析を基礎*として*AI*や*金融*の勉強をしています。*Next.JS*, *Typescript*, *Python*を主に使用しています。その他技術スタックは*Skills*に記載しています。",
  socials: [
    {
      label: "X",
      link: "https://twitter.com/KlynoAguilar",
    },
    {
      label: "Linkedin",
      link: "https://www.linkedin.com/in/klynoroales-aguilar-8b693126b/",
    },
    {
      label: "Github",
      link: "https://github.com/aguilarklyno",
    },
    {
      label: "Qiita",
      link: "https://qiita.com/aguilarklyno",
    },
  ],
};

export default presentation;
