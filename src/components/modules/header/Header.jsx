// Header.js
import React from "react";
import StickyHeader from "helpers/StickyHeader";
import ContactsNav from "./contacts/ContactsNav";
import Menu from "./menu/Menu";
import "./header.css";

export default function Header() {
  return (
    <StickyHeader>
      <ContactsNav />
      <Menu />
    </StickyHeader>
  );
}
