import { TbBrandBooking } from "react-icons/tb";
import { CgPokemon } from "react-icons/cg";
import { GrYoga } from "react-icons/gr";
import { CiCalendarDate } from "react-icons/ci";
import { GiWineBottle, GiCupcake, GiCandleLight } from "react-icons/gi";
import { MdOutlineChecklist, MdEditNote } from "react-icons/md";
import { BsCalendarWeek } from "react-icons/bs";
import { ImFilePicture } from "react-icons/im";

export const ProjectList = [
  {
    id: 1,
    title: "Navigare Mostre",
    data: "[09/2023]",
    link: "https://www.navigaresrl.com/",
    img: <ImFilePicture />,
    tech: "{Wordpress, Css}",
  },
  {
    id: 2,
    title: "Ecommerce Candle",
    data: "[07/2023]",
    link: "https://ecommerce-candle.vercel.app/",
    img: <GiCandleLight />,
    tech: "{MongoDB, Next.js, Css, Sass}",
  },
  {
    id: 3,
    title: "Pokemon",
    data: "[07/2023]",
    link: "https://pokemon-ng.vercel.app/",
    img: <CgPokemon />,
    tech: "{Angular, Typescript, Sass}",
  },
  {
    id: 4,
    title: "Sweet Blog",
    data: "[05/2023]",
    link: "https://sweetblog.vercel.app/",
    img: <GiCupcake />,
    tech: "{Next, Animation Css, Sass}",
  },
  {
    id: 5,
    title: "Dates App",
    data: "[04/2023]",
    link: "https://daily-planner-ruby.vercel.app/",
    img: <BsCalendarWeek />,
    tech: "{React, Vite.js, Redux, BootStrap, Sass}",
  },
  {
    id: 6,
    title: "To Do App",
    data: "[04/2023]",
    link: "https://redux-to-do-woad.vercel.app/",
    img: <MdOutlineChecklist />,
    tech: "{React, Vite.js, Redux, Sass}",
  },
  {
    id: 7,
    title: "Note-ToDo App",
    data: "[03/2023]",
    link: "https://next-to-do-note.vercel.app/note",
    img: <MdEditNote />,
    description: "Note e To Do List",
    tech: "{React, Next.js, Sass}",
  },
  {
    id: 8,
    title: "Booking.com",
    data: "[02/2023]",
    link: "https://project-cb5-yin-r76h-pgjkovitz-chiacirrito.vercel.app/",
    img: <TbBrandBooking />,
    description: "Clone Booking in team ",
    tech: "{React, Next.js, Sass, (agile methodology)}",
  },
  {
    id: 9,
    title: "Wine App",
    data: "[01/2023]",
    link: "https://wine-app-next.vercel.app/",
    img: <GiWineBottle />,
    description: "Lista di vini e rispettivi produttori",
    tech: "{React, Next.js, Scss}",
  },
  {
    id: 10,
    title: "Calendar App",
    data: "[10/2022]",
    link: "https://chiacirrito.github.io/calendar-app/",
    img: <CiCalendarDate />,
    description: "Appuntamenti di un centro estetico",
    tech: "{HTML, CSS, JS}",
  },

  {
    id: 11,
    title: "nicoletta.napoli.it",
    data: "[02/2022]",
    link: "www.nicolettanapoli.it",
    img: <GrYoga />,
    description: "Sito vetrina per Nicoletta Napoli",
    tech: "{Wordpress}",
  },
];
