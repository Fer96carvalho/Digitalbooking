import { IoMdClose } from 'react-icons/io';
import { Link, useLocation } from 'react-router-dom';
import { MediaSocial } from '../../../../../../components/MediaSocial';
import { UserProfile } from '../UserProfile';
import { useMenuMobile } from '../../../../../../hooks/useMenuMobile';

import styled from './styles.module.scss';
import { useSession } from '../../../../../../hooks/useSession';

export function MenuMobile() {
  const { statusMenu, setStatusMenu } = useMenuMobile();
  const { pathname } = useLocation();
  const { session, deleteSession } = useSession();

  return (
    <div className={statusMenu ? styled.container : 'd-none'}>
      <header>
        <button onClick={() => setStatusMenu(false)} type="button">
          <IoMdClose size={27} color="#ffffff"/>
        </button>
        {session.user && <UserProfile bgColor="bg-light" textColor="text-white"/>}
      </header>
      <div>
        {(pathname === "/" && !session.user) &&
          <>
            <Link to="/login" onClick={() => setStatusMenu(false)}>Iniciar Sessão</Link>
            <Link to="/register" onClick={() => setStatusMenu(false)}>Criar Conta</Link>
          </>
        }

        {(pathname === "/register" && !session.user) &&
          <Link to="/login" onClick={() => setStatusMenu(false)}>Iniciar Sessão</Link>
        }

        {(pathname === "/login" && !session.user) &&
          <Link to="/register" onClick={() => setStatusMenu(false)}>Criar Conta</Link>
        }

        {session.user && <button onClick={() => {
          deleteSession();
          setStatusMenu(false);
        }}>Sair</button>}
      </div>
      <footer>
        <MediaSocial color="#FBC02D" />
      </footer>
    </div>
  );
}
