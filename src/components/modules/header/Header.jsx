import React from "react";
import Contacts from "./contacts/ContactsNav";
import Menu from "./menu/Menu";
export default function Header() {
  return (
    <header>
      <Contacts />
      <Menu />
    </header>
  );
}
