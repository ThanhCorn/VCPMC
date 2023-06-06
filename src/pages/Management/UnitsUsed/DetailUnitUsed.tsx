import styled from 'styled-components'
import ListDetailUnitUsed from '../../../components/Management/UnitUsed/ListDetailUnitUsed'

const DetailUnitUsed = () => {
  return (
    <Wrapper>
      <ListDetailUnitUsed />
    </Wrapper>
  )
}

export default DetailUnitUsed

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  position: relative;
  flex: 1;
  background-color: var(--primary-color);
`
