import React from 'react'
import styled from 'styled-components'
import VN from '../assets/VNlogo.png'
import { DownOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import { Link, useNavigate } from 'react-router-dom'
import Nouser from '../assets/nouser.png'
interface User {
  displayName: string | null
  email: string | null
  photoURL: string | null
  uid: string
  phoneNumber: string | null
  datePorn: string | null
}

interface NavbarProps {
  user: User | null
}
const Language = styled.div`
  position: fixed;
  top: 0;
  height: 50px;
  right: 0;
  margin-right: 30px;
  color: #fff;
  padding: 5px 5px;
  font-size: 14px;
  line-height: 20px;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.015em;

  .language {
    display: flex;
    align-items: center;
    text-align: center;
    padding: 5px 5px;
    border-radius: 4px;
    border: 1px solid #fff;
  }

  img {
    margin: 0 5px;
    width: 22px;
    height: 22px;
    border-radius: 50%;
  }
`
const UserInfo = styled.div`
  .avatar {
    text-decoration: none;
    background-color: transparent;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    :hover {
      border: none;
    }
    img {
      margin-left: 15px;
      width: 40px;
      height: 40px;
    }
  }
  .user-info {
    margin-left: 5px;
    display: flex;
    background-color: transparent;
    flex-direction: column;
    h3,
    p {
      margin: 0;
    }
    p {
      color: #b65100;
    }
  }
`

const Navbar: React.FC<NavbarProps> = ({ user }) => {
  const navigate = useNavigate()
  const { displayName, photoURL } = user || {}
  return (
    <Language>
      <div className='language'>
        Tiếng việt <img src={VN} alt='VN' />
        <DownOutlined />
      </div>
      <UserInfo>
        <Link to='/dashboard' className='avatar'>
          <img src={`${photoURL ? photoURL : Nouser}`} alt='avatar' />
          <div className='user-info'>
            <h3>{displayName}</h3>
            <p>Admin</p>
          </div>
        </Link>
      </UserInfo>
    </Language>
  )
}

export default Navbar
