import { useContext } from 'react';
import Navbar from './Navbar';
import UserInfo from './UserInfo';
import styled from 'styled-components';
import { UserContext } from '../context/UserContext';
import Nouser from '../assets/nouser.png';
import { CameraOutlined } from '@ant-design/icons';

const PageContent: React.FC = () => {
  const { currentUser } = useContext(UserContext);
  return (
    <Wrapper>
      <Navbar user={currentUser} />
      <div className="basic-info">
        <h1>Thông tin cơ bản</h1>
        <div className="avatar">
          <img
            src={`${currentUser?.photoURL ? currentUser.photoURL : Nouser} `}
            alt={`${currentUser?.photoURL ? 'User image' : 'No user image'} `}
          />
          <CameraOutlined className="icon-camera" />
          <h4>{currentUser?.displayName}</h4>
        </div>
      </div>
    </Wrapper>
  );
};

export default PageContent;

const Wrapper = styled.div`
  position: relative;
  flex: 1;
  background-color: var(--primary-color);
`;
