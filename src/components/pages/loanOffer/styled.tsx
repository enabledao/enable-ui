import styled from 'styled-components'
import { MaxWidth } from '../../../styles/utils'

const CheckoutWrapper = styled.div`
    background-image: linear-gradient(to bottom, #ffffff, #f6f7fb);
`

const HeroWrapper = styled.div`
    background-color: #363bd3;
    min-height: 50vh;
    position: relative;
`

const HeroCell = styled.div`
    background-color: white;
    padding: 30px;
    ${MaxWidth.sm`
        padding: 20px 20px 20px;
    `}
`

const CheckoutContainer = styled.div`
    top: -45vh;
    max-width: 900px;
    margin: auto;
    small {
        color: grey;
        font-size: 12px;
    }
    ${MaxWidth.md`
      padding-left: 20px;
      padding-right: 20px;
    `}
    ${MaxWidth.sm`
    padding-left: 20px;
    padding-right: 20px;
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

export {
    CheckoutWrapper,
    CheckoutContainer,
    HeroWrapper,
    HeroCell,
    LoanAmountSimulation,
}
