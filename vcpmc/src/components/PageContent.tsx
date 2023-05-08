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
    </Wrapper>
  );
};

export default PageContent;

const Wrapper = styled.div`
  position: relative;
  flex: 1;
  background-color: var(--primary-color);
`;
