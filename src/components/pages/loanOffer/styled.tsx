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
        padding: 0 20px 20px;
    `}
`

const CheckoutContainer = styled.div`
    top: -45vh;
    padding-left: 200px;
    padding-right: 200px;
    small {
        color: grey;
        font-size: 12px;
    }
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
