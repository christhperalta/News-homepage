import { useContext } from "react";
import { DataContext } from "../provider/DataProvider";

export default function Nav({ open, onToggleClick }) {
  const { header } = useContext(DataContext);
  const { menu } = header;

  return (
    <nav className={`Header-nav ${open ? "isActive" : ""}`}>
      <button
        className='Header-hamburger-close'
        onClick={() => onToggleClick()}>
        <img src='./assets/images/icon-menu-close.svg' alt='icon-menu-close' />
      </button>
      <ul className='Header-ul'>
        {menu.map((item) => (
          <li className='Header-li' key={item.id}>
            <a className='Header-a' href={item.href}>
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
