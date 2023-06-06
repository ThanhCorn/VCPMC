import styled from 'styled-components'

import FormCopyContract from '../../../components/Management/Contract/FormCopyContract'

const CopyContract = () => {
  return (
    <Wrapper>
      <FormCopyContract />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  background-color: var(--primary-color);
`
export default CopyContract
