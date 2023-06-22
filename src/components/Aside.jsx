import { useContext } from "react";
import { DataContext } from "../provider/DataProvider";

export default function Aside() {
  const { aside } = useContext(DataContext);
  const { heading, content } = aside;

  return (
    <aside className='Aside'>
      <h2 className='Aside-h2'>{heading}</h2>
      <ul className='Aside-ul'>
        {content.map((item) => (
          <li className='Aside-li' key={item.id}>
            <article className='Aside-article'>
              <h3 className='Aside-h3'>{item.title}</h3>
              <p className='Aside-p'>{item.text}</p>
            </article>
          </li>
        ))}
      </ul>
    </aside>
  );
}
