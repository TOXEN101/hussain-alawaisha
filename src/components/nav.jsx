"use client";
import { useState } from "react";
// *** Components ***
import Link from "next/link";

export default function Nav({}) {
  const [navState, setNavState] = useState("الرئيسية");
  function handleNavState(pageName) {
    setNavState(pageName);
  }

  const navItemsNames = [
    ["الرئيسية", ""],
    ["الكتب", "books"],
    ["المقالات", "articles"],
    ["سؤال وجواب", "fatawas"],
    ["المحاضرات", "lectures"],
    ["مواقع التواصل", "socialMedia"],
  ];
  let navItems = navItemsNames.map((itemName) => {
    return (
      <Link
        key={itemName[1]}
        href={`/${itemName[1]}`}
        style={{ textDecoration: "none" }}
        value={itemName[0]}
        className={`navElements ${itemName[0] === navState ? "active" : ""}  `}
        onClick={() => {
          handleNavState(itemName[0]);
        }}
      >
        {itemName[0]}
      </Link>
    );
  });
  return <nav className="navBar">{navItems}</nav>;
}
