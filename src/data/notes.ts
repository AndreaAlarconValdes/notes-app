import type { Note } from "../types/note-object";

export const notes: Note[] = [
  {
    id: 0,
    title: "Hi, I'm Andrea",
    description:
      "Full-Stack developer specializing in Front-end development. Now looking for new job opportunities",
    color: "#8cd5cb",
    creationDate: "February 5",
    creationTime: "21:30",
    creationDay: "Fri",
    category:"ideas",
  },
  {
    id: 1,
    title: "Try me",
    description:
      "Try adding your own note, choosing the colour, editing and deleting it.",
    color: "#d59ef6",
    creationDate: "February 5",
    creationTime: "21:30",
    creationDay: "Fri",
    category:"others",

  },
  {
    id: 2,
    title: "GitHub ",
    description:
      "This is a personal project to practice and improve my skills. You can find the code on my GitHub @AndreaAlarconValdes",
    creationDate: "February 5",
    creationTime: "15:21",
    color: "#f4a89e" ,
    creationDay: "Fri",
    category:"reminder",

  },
  {
    id: 3,
    title: "Contact me",
    description:
      "You can contact me through my email address alarconvaldes.a@gmail.com or through Linkedin @andreaalarconvaldes",
    creationDate: "February 5",
    creationTime: "11:04",
    color: "#f4d79a",
    creationDay: "Fri",
    category:"important",

  },
];
