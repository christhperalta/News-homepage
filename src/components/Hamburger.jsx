export default function Hamburger({onToggleClick}) {
  return (
    <button className='Header-hamburger' onClick={() => onToggleClick()}>
      <img src='./assets/images/icon-menu.svg' alt='icon-menu' />
    </button>
  );
}
