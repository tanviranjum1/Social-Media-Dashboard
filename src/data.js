import { ReactComponent as Fb } from "./images/icon-facebook.svg";
import { ReactComponent as Tweet } from "./images/icon-twitter.svg";
import { ReactComponent as Insta } from "./images/icon-instagram.svg";
import { ReactComponent as Ytube } from "./images/icon-youtube.svg";

const elements = [
  {
    icon: <Fb />,
    name: "@nathanf",
    count: "1987",
    type: "F o l l o w e r s",
    today: 12,
    up: true,
    color: ["hsl(208, 92%, 53%)"],
  },
  {
    icon: <Tweet />,
    name: "@nathanf",
    count: "1044",
    type: "F o l l o w e r s",
    today: 99,
    up: true,
    color: ["hsl(203, 89%, 53%)"],
  },
  {
    icon: <Insta />,
    name: "@realnathanf",
    count: "11K",
    type: "F o l l o w e r s",
    today: 1099,
    up: true,
    color: ["hsl(37, 97%, 70%)", "hsl(329, 70%, 58%)"],
  },
  {
    icon: <Ytube />,
    name: "Nathan F.",
    count: "8239",
    type: "S u b s c r i b e r s",
    today: 144,
    up: false,
    color: ["hsl(348, 97%, 39%)"],
  },
];

const secondelements = [
  { icon: <Fb />, type: "Page Views", count: "87", percent: 3, up: true },
  { icon: <Fb />, type: "Likes", count: "52", percent: 2, up: false },
  { icon: <Insta />, type: "Likes", count: "5462", percent: 2257, up: true },
  {
    icon: <Insta />,
    type: "Profile Views",
    count: "52k",
    percent: 1375,
    up: true,
  },
  { icon: <Tweet />, type: "Retweets", count: "117", percent: 303, up: true },
  { icon: <Tweet />, type: "Likes", count: "507", percent: 553, up: true },
  { icon: <Ytube />, type: "Likes", count: "107", percent: 19, up: false },
  {
    icon: <Ytube />,
    type: "Total Views",
    count: "1407",
    percent: 12,
    up: false,
  },
];

export { elements, secondelements };
