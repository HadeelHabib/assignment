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

export const commonFaq:CommonFaq[] = [
 { question: "Will i recieve a certificate for each course?",
   answer: "",
 },
 { question: "Can i get source code of each course?",
   answer: "",
},
{ question: "Can i ask about anything realted cource or my if code doesn't work?",
  answer: "",
},
{ question: "Can i download any cource videos?",
  answer: "", 
}
];
export const comunicate:Communication[] = [
  {
    title : "About",
    subtitle1 : "Our story",
    url1 : "/",
    subtitle2 : "privacy policy",
    url2 : "/",
    subtitle3 : "FAQ",
    url3 : "#FAQ",
  },
  {
    title : "Quick links",
    subtitle1 : "Cources",
    url1 : "/cources",
    subtitle2 : "My Account",
    url2 : "/",
    subtitle3 : "Course Dashboard",
    url3 : "/",
  },
  {
    title : "Social Links",
    subtitle1 : "Youtube",
    url1 : "https://youtube.com",
    subtitle2 : "instagram",
    url2 : "https://instagram.com",
    subtitle3 : "github",
    url3 : "https://github.com",
  },

]