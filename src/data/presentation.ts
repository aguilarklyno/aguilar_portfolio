type Social = {
  label: string;
  link: string;
};

type Presentation = {
  mail: string;
  title: string;
  description: string;
  socials: Social[];
  profile?: string;
};

const presentation: Presentation = {
  mail: "aguilarklyno@gmail.com",
  title: "Hi, I’m Klyno R Aguilar 👋",
  // profile: "/profile.webp",
  description:
    "Hellow, i'm a *Japanese frontend and data analysis learner* with over *2 years of studing and working experience* as an intern. I am currently working with *NextJS, Typescript and Python*. Outside of work, I also learning finance especially *Corporate Finance and Algorithmic Trading*.",
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
