import React from 'react';
import styled from 'styled-components';
import SideMenu from '../components/SideMenu';
import PageContent from '../components/PageContent';

const UnitUsed = () => {
  return (
    <Wrapper>
      <SideMenu />
      <PageContent />
    </Wrapper>
  );
};

export default UnitUsed;

const Wrapper = styled.div`
  position: relative;
  flex: 1;
  background-color: var(--primary-color);
  .side-option {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 0;
    transform: translate(-12%, 50%);
    right: 0;
    button {
      color: #fff;
      font-size: 12px;
      font-weight: 500;
      background-color: #2f2f41;
      width: 110px;
      line-height: 18px;
      letter: 0.5%;
      height: 130px;
      background: #2f2f41;
      border: none;
      h3 {
        font-size: 12px;
      }
    }
    .icon-setting {
      font-size: 2rem;
      color: #ff7506;
    }
  }
  .basic-info {
    width: 30vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 50px;
    margin-left: -60px;
    h1 {
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 700;
      font-size: 36px;
      line-height: 48px;
      color: #fff;
    }
    .avatar {
      position: relative;
      display: flex;
      flex-direction: column;
      width: 273px;
      height: 280px;
      img {
        border-radius: 50%;
      }
      .icon-camera {
        position: absolute;
        right: 50px;
        bottom: 40px;
        width: 13px;
        height: 13px;
        font-size: 36px;
        color: #fff;
      }
      h4 {
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fff;
        weight: 600;
        size: 20px;
        line-height: 24px;
        letter: -0.2%;
      }
    }
  }
  .user-info {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .button-confirm {
      display: flex;
      justify-content: center;
      align-items: center;
      transform: translateY(-150px);
    }
    .ant-row {
      transform: translateY(-250px);
      margin: 14px 40px 0px 0;
    }
    .ant-input {
      width: 274px;
      height: 40px;
    }
    .row-1,
    .row-2,
    .row-3 {
      display: flex;
    }
    .row-3 {
      flex-direction: column;
    }
    label {
      color: #fff;
    }
    input {
      background-color: #2b2b3f;
      border-radius: 8px;
      border: none;
      color: #fff;
    }
    input::placeholder {
      color: #fff;
    }
    .custom-input::placeholder {
      color: #fff;
      opacity: 0.2;
    }
  }
`;
