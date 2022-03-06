import { Link } from 'react-router-dom';
import { FiMenu } from 'react-icons/fi';

import logo from '../../../../Assets/img/logo1.png';

import { MenuDesktop } from './components/MenuDesktop';
import { MenuMobile } from './components/MenuMobile';

import styled from './styles.module.scss';
import { useMenuMobile } from '../../../../hooks/useMenuMobile';

export function Header() {
  const { setStatusMenu } = useMenuMobile();
  
  return (
    <nav className={styled.nav}>
      <div>
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
        <button 
          className={styled.menu_toggle} 
          onClick={() => setStatusMenu(true)}
        >
          <FiMenu size={22}/>
        </button>
        <MenuDesktop/>
        <MenuMobile/>
      </div>
    </nav>
  )
}
