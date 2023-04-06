import React from 'react'
import './AdminLayout.scss'
import { LoginAdmin } from '../../pages/admin'
import { useAuth } from '../../hooks'
import { TopMenu, SideMenu } from '../../components/admin'

export function AdminLayout(props) {

  const { auth } = useAuth()

  const { children } = props;

  if (!auth) return <LoginAdmin />;

  return (
    <div className='admin-layout'>
      <div className='admin-layout__menu'>
        <TopMenu />
      </div>
      <div className='admin-layout__main-content'>
        <SideMenu>
          {children}
        </SideMenu>
      </div>
    </div>
  )
}
