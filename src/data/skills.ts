export type Skills = {
  title: string;
  techs: string[];
  link: string;
  isComingSoon?: boolean;
};

const skills: Skills[] = [
/*
title: "Dictionary of App",
techs: ["skill1", "skill2", "skill3"],
link: " url of the project",
*/
  {
    title: "Next.JS",
    techs: ["React", "Typescript", "TailwindCSS"],
    link: "https://nextjs.org/",
  },
  {
    title: "Python",
    techs: ["Numpy", "Pandas", "Matplotlib"],
    link: "https://www.python.org/",
  },
  {
    title: "Django",
    techs: ["Django", "Django REST Framework"],
    link: "https://www.djangoproject.com/",
  },
  {
    title: "Docker",
    techs: ["Docker", "Docker Compose"],
    link: "https://www.docker.com/",
  },
  {
    title: "PostgreSQL",
    techs: ["PostgreSQL", "psycopg2"],
    link: "https://www.postgresql.org/",
  },
  {
    title: "AWS",
    techs: ["EC2", "S3", "RDS"],
    link: "https://aws.amazon.com/",
  },
  {
    title: "Git",
    techs: ["Git", "Github"],
    link: "https://git-scm.com/",
  },
];

export default skills;