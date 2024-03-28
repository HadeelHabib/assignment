import { atom } from "jotai";
export const logo = "Becodemy";
export const activeNavItem = atom<string>("/");

export const navItems: NavItems[] = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "About us",
    url: "/about-us",
  },
  {
    title: "Courses",
    url: "/courses",
  },
  {
    title: "Resources",
    url: "/resources",
  },
  {
    title: "Support Center",
    url: "/support",
  },
];

export const commonFaq: CommonFaq[] = [
  { question: "Will i recieve a certificate for each course?", answer: "" },
  { question: "Can i get source code of each course?", answer: "" },
  {
    question:
      "Can i ask about anything realted cource or my if code doesn't work?",
    answer: "",
  },
  { question: "Can i download any cource videos?", answer: "" },
];

export const comunicate: Communication[] = [
  {
    title: "About",
    footerItems: [
      {
        title: "Our Story",
        href: "/",
      },
      {
        title: "Privacy Policy",
        href: "/",
      },
      {
        title: "FAQ",
        href: "/",
      },
    ],
  },
  {
    title: "Quick Links",
    footerItems: [
      {
        title: "Courses",
        href: "/",
      },
      {
        title: "My Account",
        href: "/",
      },
      {
        title: "Course Dashboard",
        href: "/",
      },
    ],
  },
  {
    title: "Social Links",
    footerItems: [
      {
        title: "Youtube",
        href: "/",
      },
      {
        title: "Instagram",
        href: "/",
      },
      {
        title: "Github",
        href: "/",
      },
    ],
  },
];
