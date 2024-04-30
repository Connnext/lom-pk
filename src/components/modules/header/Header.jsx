import React from "react";
import Contacts from "./contacts/ContactsNav";
import Menu from "./menu/Menu";
//import "./header.css";
export default function Header() {
  return (
    <header className="header">
      <Contacts />
      <Menu />
    </header>
  );
}
