import { createContext } from "react";
import { v4 as uuidv4 } from "uuid";

const data = {
  header: {
    menu: [
      { id: uuidv4(), title: "Home", href: "#" },
      { id: uuidv4(), title: "New", href: "#" },
      { id: uuidv4(), title: "Popular", href: "#" },
      { id: uuidv4(), title: "Trending", href: "#" },
      { id: uuidv4(), title: "Categories", href: "#" },
    ],
  },
  main: {
    heading: { title: "The Bright Future of Web 3.0?" },
    paragraph: {
      title:
        "We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?",
    },
    btn: { title: "READ MORE" },
  },

  aside: {
    heading: { title: "New" },
    content: [
      {
        id: uuidv4(),
        title: "Hydrogen VS Electric Cars",
        text: "Will hydrogen-fueled cars ever catch up to EVs?",
      },
      {
        id: uuidv4(),
        title: "The Downsides of AI Artistry",
        text: "What are the possible adverse effects of on-demand AI image generation?",
      },
      {
        id: uuidv4(),
        title: "Is VC Funding Drying Up?",
        text: "Private funding by VC firms is down 50% YOY. We take a look at what that means.",
      },
    ],
  },

  footer: {
    articles: [
      {
        id: uuidv4(),
        src: "./assets/images/image-retro-pcs.jpg",
        number: "01",
        title: "Reviving Retro PCs",
        paragraph: "What happens when old PCs are given modern upgrades?",
      },
      {
        id: uuidv4(),
        src: "./assets/images/image-top-laptops.jpg",
        number: "02",
        title: "Top 10 Laptops of 2022",
        paragraph: "Our best picks for various needs and budgets.",
      },
      {
        id: uuidv4(),
        src: "./assets/images/image-gaming-growth.jpg",
        number: "03",
        title: "The Growth of Gaming",
        paragraph: "How the pandemic has sparked fresh opportunities.",
      },
    ],
  },
};

export const DataContext = createContext(null);

export default function DataProvider({ children }) {
  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
}
