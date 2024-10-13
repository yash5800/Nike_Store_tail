import {headerLogo} from '../assets/images';
import {hamburger} from '../assets/icons';

const Nav = () => {
  const head = ["Home","About Us","Products","Contact Us","Sign in / Explore"];

  return (
    <header className='padding-x py-8 absolute z-10 w-full'>
      <nav className='flex justify-between items-center max-container'>
        <a href="/">
           <img src={headerLogo} 
           alt="Nike_Logo" 
           width={130}
           height={29} />
        </a>
        <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
           {
            head.map((sel) => <li key={sel}>
              <a href={'#'+sel}
              className='font-montserrat leading-normal text-lg text-slate-gray'
              >
                {sel}
              </a>
              </li>)
           }
        </ul>
        <div className='hidden max-lg:block'>
          <img 
             src={hamburger}
             width={25}
             height={25}
           />
        </div>
      </nav>
    </header>
  )
}

export default Nav
