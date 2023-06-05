import { TbBrandBooking } from "react-icons/tb";
import { GrYoga } from "react-icons/gr";
import { CiCalendarDate } from "react-icons/ci";
import { GiWineBottle, GiCupcake } from "react-icons/gi";
import { MdOutlineChecklist, MdEditNote } from "react-icons/md";
import { BsCalendarWeek } from "react-icons/bs";

export const ProjectList = [
  {
    id: 1,
    title: "Sweet Blog",
    data: "[05/2023]",
    link: "https://sweetblog.vercel.app/",
    img: <GiCupcake />,
    tech: "{Next, Animation Css, Sass}",
  },
  {
    id: 2,
    title: "Dates App",
    data: "[04/2023]",
    link: "https://daily-planner-ruby.vercel.app/",
    img: <BsCalendarWeek />,
    tech: "{React, Redux, BootStrap, Sass}",
  },
  {
    id: 3,
    title: "To Do App",
    data: "[04/2023]",
    link: "https://redux-to-do-woad.vercel.app/",
    img: <MdOutlineChecklist />,
    tech: "{React, Redux, Sass}",
  },
  {
    id: 4,
    title: "Note-ToDo App",
    data: "[03/2023]",
    link: "https://next-to-do-note.vercel.app/note",
    img: <MdEditNote />,
    description: "Note e To Do List",
    tech: "{React, Next.js, Javascript, Sass}",
  },
  {
    id: 5,
    title: "Booking.com",
    data: "[02/2023]",
    link: "https://project-cb5-yin-r76h-pgjkovitz-chiacirrito.vercel.app/",
    img: <TbBrandBooking />,
    description: "Clone Booking in team ",
    tech: "{React, Next.js, Sass, (agile methodology)}",
  },
  {
    id: 6,
    title: "Wine App",
    data: "[01/2023]",
    link: "https://wine-app-next.vercel.app/",
    img: <GiWineBottle />,
    description: "Lista di vini e rispettivi produttori",
    tech: "{React, Next.js, Scss}",
  },
  {
    id: 7,
    title: "Calendar App",
    data: "[10/2022]",
    link: "https://chiacirrito.github.io/calendar-app/",
    img: <CiCalendarDate />,
    description: "Appuntamenti di un centro estetico",
    tech: "{HTML, CSS, JS}",
  },

  {
    id: 8,
    title: "nicoletta.napoli.it",
    data: "[02/2022]",
    link: "www.nicolettanapoli.it",
    img: <GrYoga />,
    description: "Sito vetrina per Nicoletta Napoli",
    tech: "{Wordpress}",
  },
];
