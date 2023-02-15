import Image from "next/image";
import Link from "next/link";
import AnchorLink from "react-anchor-link-smooth-scroll";
import React from "react";
import { useEffect, useState } from "react";
import { Header, Segment } from "semantic-ui-react";
import logoImage from "../../../public/logo01.png";
import Home from "../../custom/Home";

const Links = (props) => {
  return props?.links?.map((link, index) => {
    return link?.id === "float_left" ? (
      <Header as="h4" floated="left" key={index} className="button">
        {/* <Image src={logoImage} alt="N Image" width={300} height={50}></Image> */}
        <Link href={link?.href}>
        <Image src={logoImage} alt="N Image" width={150} height={50}></Image>
        {/* {link?.item} */}
        </Link>
      </Header>
    ) : (
      <Header as="h4" floated="right" key={index} className="button">
        {link?.id !== "get_a_quote" && (
          <AnchorLink href={link?.href}>{link?.item}</AnchorLink>
        )}
        {link?.id === "get_a_quote" && (
          <Link href={link?.href}>{link?.item}</Link>
        )}
      </Header>
    );
  });
};

const HeaderSection = (props) => {
  useEffect(() => {
    const header = document.getElementById("myHeader");
    const topScroll = document.getElementById("topScroll");
    const sticky = header?.offsetTop;
    const scrollCallBack = window.addEventListener("scroll", () => {
      // console.log(
      //   "window.pageYOffset",
      //   window.pageYOffset,
      //   typeof window.pageYOffset,
      //   sticky,
      //   header?.offsetTop
      // );
      if (window.pageYOffset > sticky) {
        if (window.pageYOffset > 1500) {
          header?.classList.add("sticky");
          topScroll?.classList.add("arrowTop");
        }
      }
      // else {
      if (window.pageYOffset < 1500) {
        header?.classList.remove("sticky");
        topScroll?.classList.remove("arrowTop");
      }
      // }
    });
    return () => {
      window.removeEventListener("scroll", scrollCallBack);
    };
  }, []);

  return (
    <>
      <Segment id="myHeader" clearing className="container">
        <Links links={props?.links} />
      </Segment>
      <AnchorLink id="topScroll" href="#home"></AnchorLink>
    </>
  );
};

export default HeaderSection;
