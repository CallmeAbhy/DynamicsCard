// local imports
import shippingIcon from "./assets/icons/svg/cart-add.svg";
import paymentIcon from "./assets/icons/svg/not-allowed.svg";
import supportIcon from "./assets/icons/svg/support-alt.svg";
import productOneIcon from "./assets/WeddingPoster.png";
import productTwoIcon from "./assets/BuildingPoster.png";
import productThreeIcon from "./assets/BirthdayPoster.png";
import plantIcon from "./assets/icons/svg/ok-circle.svg";
import sunIcon from "./assets/icons/svg/dashboard.svg";
import waterIcon from "./assets/icons/svg/settings.svg";
import temperatureIcon from "./assets/icons/svg/print.svg";

export const heroTitle = "Unlock Your Creativity: Design Any Card, Anytime";
export const heroSubtitle =
  "Where Dreams Take Shape and Moments Find Expression";

export const services = [
  {
    title: "One Stop Solution",
    subtitle: "Versatile Card Creation",
    icon: shippingIcon,
  },
  {
    title: "Free of Cost",
    subtitle: "Creativity knows no financial bounds",
    icon: paymentIcon,
  },
  {
    title: "AI Support",
    subtitle: "ChatBot Always There",
    icon: supportIcon,
  },
];

export const productsTitle = "Craft Cards";
export const productsBtnText = "See Collection";

export const products = [
  {
    title: "Wedding Card",
    // price: "$65.99",
    price: "$0",
    img: productOneIcon,
    link: "/wedding",
  },
  {
    title: "Business Card",
    price: "$0",
    img: productTwoIcon,
    link: "/business",
  },
  {
    title: "Birthday Card",
    price: "$0",
    img: productThreeIcon,
    link: "/birthday",
  },
];

export const referenceTitle = "Explore Our Collection";
export const referenceSubtitle = "Find the Perfect Card for Every Occasion";

export const careTitle = "Craft your Card";
export const careSubtitle =
  "Follow the below step to craft the message for your loved ones";

export const careList = [
  {
    title: "Select the Required Template",
    subtitle:
      "Select the template according to your need like birthday,business and Wedding card All the Required Template Availaible in one place",
    img: sunIcon,
  },
  {
    title: "Customization",
    subtitle: "Insert Your Detail, your Required Color in Card",
    img: waterIcon,
  },
  {
    title: "Finalize",
    subtitle: "After Inserting Whole Detail Successfully Confirm your Detail",
    img: plantIcon,
  },
  {
    title: "Take the Print",
    subtitle:
      "Now You can take print of your card and sent it to your loved Ones",
    img: temperatureIcon,
  },
];

export const newsletter = "Newsletter";

export const footerLinksColumnOne = [
  {
    title: "Support",
    links: ["About Us", "Contact Us"],
  },
  {
    title: "Useful Links",
    links: ["Payment & Tax", "Terms of service", "Privacy Policy"],
  },
];

export const footerLinksColumnTwo = [
  {
    title: "Our Menu",
    links: ["Wedding", "Business", "Birthday"],
  },
  {
    title: "Address",
    links: [
      "JL. Setiabudhi No. 193 Sukasari, Bandung West Zone, India",
      "abhaydusane.skn.it@gmail.com",
    ],
  },
];
