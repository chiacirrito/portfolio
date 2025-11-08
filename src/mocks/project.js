import { TbBrandBooking } from "react-icons/tb";
import { GrYoga, GrProjects } from "react-icons/gr";
import { GiWineBottle, GiCandleLight, GiAlienEgg } from "react-icons/gi";
import { BsCalendarWeek } from "react-icons/bs";
import { ImFilePicture } from "react-icons/im";

export const ProjectList = [
  {
    id: 1,
    title: "Project Work Digital Marketing",
    data: "[11/2025]",
    link: "https://www.canva.com/design/DAG4HYw97ZE/YaXpuIGhLGFO4FtOjrOK6w/view?utm_content=DAG4HYw97ZE&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hc2281ba86e",
    img: <GrProjects />,
    description: "Progetto di strategia digitale",
    tech: "{Canva, ChatGPT}",
  },
  {
    id: 1,
    title: "Mostra Giger",
    data: "[06/2024]",
    link: "https://www.mostragiger.com/",
    img: <GiAlienEgg />,
    description: "Landind page per la mostra su Giger",
    tech: "{Elementor, Css}",
  },
  {
    id: 3,
    title: "Navigare Mostre",
    data: "[09/2023]",
    link: "https://www.navigaresrl.com/",
    img: <ImFilePicture />,
    description: "Sito ufficiale di Navigare Srl",
    tech: "{Wordpress, Css}",
  },
  {
    id: 4,
    title: "Ecommerce Candle",
    data: "[07/2023]",
    link: "https://ecommerce-candle.vercel.app/",
    img: <GiCandleLight />,
    tech: "{MongoDB, Next.js, Css, Sass}",
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
    title: "Booking.com",
    data: "[02/2023]",
    link: "https://project-cb5-yin-r76h-pgjkovitz-chiacirrito.vercel.app/",
    img: <TbBrandBooking />,
    description: "Clone Booking in team ",
    tech: "{React, Next.js, Sass, (agile methodology)}",
  },
  {
    id: 7,
    title: "Wine App",
    data: "[01/2023]",
    link: "https://wine-app-next.vercel.app/",
    img: <GiWineBottle />,
    description: "Lista di vini e rispettivi produttori",
    tech: "{React, Next.js, Scss}",
  },
  {
    id: 8,
    title: "nicoletta.napoli.it",
    data: "[02/2022]",
    link: "https://nicolettanapoli.it/",
    img: <GrYoga />,
    description: "Sito vetrina per Nicoletta Napoli",
    tech: "{Wordpress}",
  },
];
