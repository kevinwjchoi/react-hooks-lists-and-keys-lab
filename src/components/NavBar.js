import React from "react";

function NavBar() {
  const links = ["#home", "#about", "#projects"];
  const linksArray = links.map((link) => {
    return <a href={link} key={link}>{link}</a>
  })
  return <nav>{linksArray}</nav>;
}

export default NavBar;
