import { Link, useLocation } from 'react-router-dom';

import { UserProfile } from '../UserProfile';
import { useSession } from '../../../../../../hooks/useSession';

import styled from './styles.module.scss';
import { AiOutlinePoweroff } from 'react-icons/ai';

export function MenuDesktop() {
  const { session, deleteSession } = useSession();
  const { pathname } = useLocation();

  return (
    <div className={styled.container}>

      {session.user && (
        <>
          <UserProfile bgColor="bg-primary" textColor="text-dark"/>
          <button className={styled.logout} type="button" onClick={() => deleteSession()}>
            <AiOutlinePoweroff/>
          </button>
        </>
      )}

      {!session.user && (
        <div className={styled.box_button}>
          {pathname === "/" && (
            <>
              <Link to="/login">Iniciar Sessão</Link>
              <Link to="/register">Criar Conta</Link>
            </>
          )}
          {pathname === "/register" && <Link to="/login">Iniciar Sessão</Link>}
          {pathname === "/login" && <Link to="/register">Criar Conta</Link>}
        </div>
      )}
    </div>
  )
}
