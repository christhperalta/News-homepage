import { useContext } from "react";
import { DataContext } from "../provider/DataProvider";

export default function Footer() {
  const { footer } = useContext(DataContext);
  const { articles: content } = footer;

  return (
    <footer className='Footer'>
      <ul className='Footer-ul'>
        {content.map((item) => (
          <li className='Footer-li' key={item.id}>
            <article className='Footer-article'>
              <img className='Footer-img' src={item.src} alt={item.alt} />
              <h2 className='Footer-h2'>{item.number}</h2>
              <h3 className='Footer-h3'>{item.title}</h3>
              <p className='Footer-p'>{item.paragraph}</p>
            </article>
          </li>
        ))}
      </ul>
    </footer>
  );
}
