import styled from 'styled-components'
import ListUnitUsed from '../../../components/Management/UnitUsed/ListUnitUsed'

const UnitUsed = () => {
  return (
    <Wrapper>
      <ListUnitUsed />
    </Wrapper>
  )
}

export default UnitUsed

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  position: relative;
  flex: 1;
  background-color: var(--primary-color);
`
