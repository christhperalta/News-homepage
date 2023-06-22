import { useContext } from "react";
import { DataContext } from "../provider/DataProvider";

export default function Main() {
  const { main } = useContext(DataContext);
  const { heading, paragraph, btn } = main;
  return (
    <main className='Main'>
      <article className='Main-article'>
        <picture className='Main-picture'>
          <source
            srcSet='./assets/images/image-web-3-mobile.jpg'
            media='(max-width : 1024px)'
          />

          <img
            src='./assets/images/image-web-3-desktop.jpg'
            alt='image-web-3-desktop'
          />
        </picture>

        <h2 className='Main-h2'>{heading}</h2>
        <p className='Main-p'>{paragraph}</p>
        <button className='Main-btn'>{btn}</button>
      </article>
    </main>
  );
}
