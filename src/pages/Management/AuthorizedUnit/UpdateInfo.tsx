import { RightOutlined } from '@ant-design/icons'
import styled from 'styled-components'
import FormUpdateInfo from '../../../components/Management/Authority/FormUpdateInfo'

const UpdateInfo = () => {
  return (
    <Wrapper>
      <div className='content'>
        <p style={{ opacity: '0.5' }}>
          Quản lý <RightOutlined style={{ color: 'var(--text-primary)' }} /> Đối tác ủy quyền{' '}
          <RightOutlined style={{ color: 'var(--text-primary)' }} /> Cập nhật thông tin người dùng
        </p>
        <h1>Cập nhật thông tin</h1>
        <FormUpdateInfo />
      </div>
    </Wrapper>
  )
}

export default UpdateInfo

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  position: relative;
  flex: 1;
  background-color: var(--primary-color);
  .content {
    width: 1541px;
    margin-top: 50px;
    margin-left: 50px;
  }
`
