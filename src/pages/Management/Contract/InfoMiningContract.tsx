import styled from 'styled-components'

import FormMiningContract from '../../../components/Management/Contract/FormMiningContract'

const InfoMiningContract = () => {
  return (
    <Wrapper>
      <FormMiningContract />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  background-color: var(--primary-color);
`
export default InfoMiningContract
