export type ProjectType = {
  id: string | number;
  name: string;
  description: string;
  github: string;
  url?: string;
  url2?: string;
};

export type ResponseError = {
  message: string;
};

export const projects = [
  {
    id: "1",
    name: "Portfolio",
    description: "The Project you're browsing right now.",
    url: "https://nc-games-nine.vercel.app",
    github: "https://github.com/abrasumente999/portfolio",
  },
  {
    id: "2",
    name: "Plantly",
    description:
      "A React Native app which helps users keep track of their houseplants with realtime watering updates. The app also features user authentication, a plant identifier, encyclopedia and user forum.",
    github: "https://github.com/abrasumente999/plantly-fe",
  },
  {
    id: "3",
    name: "NC Games",
    description:
      "A board game reviews web app which allows users to read, post and vote on game reviews and post comments.",
    url: "https://nc-games-nine.vercel.app",
    github: "https://github.com/abrasumente999/nc-games",
  },
];
