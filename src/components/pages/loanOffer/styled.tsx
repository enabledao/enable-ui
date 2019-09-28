import styled from 'styled-components'
import { MaxWidth } from '../../../styles/utils'

const CheckoutWrapper = styled.div`
    padding: 100px 0;
    display: flex;
    align-items: center;
    min-height: 100vh;
    ${MaxWidth.md`
    padding: 80px 0;
  `}

    ${MaxWidth.sm`
    padding: 60px 0;
  `}
`

const LoanAmountSimulation = styled.div`
    margin: 48px;
    ${MaxWidth.md`
    margin: 48px 0;
  `}

    ${MaxWidth.sm`
    margin-top: 0;
    margin-bottom: 48px;
  `}
`

export { CheckoutWrapper, LoanAmountSimulation }
