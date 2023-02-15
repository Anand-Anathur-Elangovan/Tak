import ServiceContent from "../ServiceContent";
import Footer from "../../common/Footer";
import HeaderSection from "../../common/Header";
import Home from "../Home/index";
import Gallery from "../Gallery";

const headerLinks = [
  {
    item: "GET A QUOTE",
    to: "/",
    href: "/Quote",
    id: "get_a_quote",
  },
  {
    item: "CONTACT",
    to: "/",
    href: "#home",
    id: "float_right"
  },
  {
    item: "GALLERY",
    to: "/",
    href: "#gallery",
    id: "float_right"
  },
  {
    item: "SERVICES",
    to: "/",
    href: "#services",
    id: "float_right"
  },
  {
    item: "ABOUT",
    to: "/",
    href: "#about",
    id: "float_right"
  },
  {
    item: "HOME",
    to: "/",
    href: "#home",
    id: "float_right"
  },
  {
    item: "TAK FABRICATION",
    to: "/",
    href: "/",
    id: "float_left",
  },
];

export default function Layout({ children }) {
  return (
    <>
      <HeaderSection links={headerLinks}/>
      <main>{children}</main>
      <Footer />
    </>
  );
}
