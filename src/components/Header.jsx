import { useState } from "react";
import Hamburger from "./Hamburger";
import Logo from "./Logo";
import Nav from "./Nav";

export default function Header() {
  const [open, setOpen] = useState(false);

  function handleToggleClick() {
    setOpen(!open);
  }

  return (
    <header className={`Header ${open ? "isActive" : ""}`}>
      <Logo />
      <Hamburger onToggleClick={handleToggleClick} />
      <Nav onToggleClick={handleToggleClick} open={open} />
    </header>
  );
}
