import React from "react";
import Menu from "./menu/Menu";
import ContactsNav from "./contacts/ContactsNav";
export default function Header() {
  return (
    <header>
      <ContactsNav />
      <Menu />
    </header>
  );
}
