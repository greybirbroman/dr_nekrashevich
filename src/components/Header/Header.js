import Logo from "../Logo/Logo";
import HeaderLink from "../HeaderLink/HeaderLink";

function Header() {
  return (
    <header className='flex justify-between items-center py-3 px-5 z-50'>
      <Logo />
      <nav className='flex'>
        <HeaderLink href='#t1' text='Обо мне' />
        <HeaderLink href='#t2' text='Записаться в клинику' />
      </nav>
    </header>
  );
}
export default Header;
