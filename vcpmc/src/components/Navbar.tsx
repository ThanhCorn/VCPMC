import React from 'react';
import styled from 'styled-components';
import VN from '../assets/VNlogo.png';
import { DownOutlined } from '@ant-design/icons';

const Language = styled.p`
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
  .avatar {
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      margin-left: 15px;
      width: 40px;
      height: 40px;
    }
    .user-info {
      margin-left: 5px;
      display: flex;
      flex-direction: column;
      h4,
      p {
        margin: 0;
      }
      p {
        color: #b65100;
      }
    }
  }
`;

const Navbar = () => {
  return (
    <>
      <Language>
        <div className="language">
          Tiếng việt <img src={VN} alt="VN" />
          <DownOutlined />
        </div>
        <div className="avatar">
          <img src={VN} alt="avatar" />
          <div className="user-info">
            <h4>Ngoc Thanh</h4>
            <p>Admin</p>
          </div>
        </div>
      </Language>
    </>
  );
};

export default Navbar;
