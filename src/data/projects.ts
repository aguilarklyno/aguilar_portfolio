import { addAttribute } from "astro/compiler-runtime";

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
    title: "Portfolio / coming soon...",
    techs: ["Astro"],
    link: "/",
    isComingSoon: true,
  },
];

export default projects;
