export type Project = {
  title: string;
  techs: string[];
  link: string;
  isComingSoon?: boolean;
};

const projects: Project[] = [
/*
title: "Dictionary of App",
techs: ["skill1", "skill2", "skill3"],
link: " url of the project",
*/
  {
    title: "Python for Finance",
    techs: ["#document", "#python", "#finance"],
    link: "https://www.klynoroales-aguilar.com/00-greeting/",
    isComingSoon: false,
  },
];

export default projects;