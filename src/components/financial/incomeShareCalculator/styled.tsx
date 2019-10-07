import styled from 'styled-components'
import { MaxWidth } from '../../../styles/utils'

const SimulationWrapper = styled.div`
    background-color: #f7f7f7;
    padding: 20px;
    padding-bottom: 20px;
`

const SocialAvatar = styled.div`
    border: 1px solid #e7ebf2;
    display: inline-flex;
    width: 40px;
    height: 40px;
    position: relative;
    border-radius: 100px;
    position: absolute;
    img {
        border-radius: 100px;
    }
`

const SocialContent = styled.div`
    padding: 24px 0 8px 0;
    border-radius: 4px;
`

const SliderInput = styled.input`
    -webkit-appearance: none;
    width: 100%;
    height: 10px;
    background-color: #f6f7fb;
    outline: none;
    -webkit-transition: 0.2s;
    transition: opacity 0.2s;
    border-radius: 100px;
    border: 1px solid #e7ebf2;
    ::-webkit-slider-thumb {
        -webkit-appearance: none;
        appearance: none;
        width: 24px;
        height: 24px;
        background-color: #36b37e;
        cursor: pointer;
        border-radius: 100px;
    }
    ::-moz-range-thumb {
        width: 24px;
        height: 24px;
        background-color: #36b37e;
        cursor: pointer;
    }
`

const OtherMenu = styled.a`
    display: inline-block;
    cursor: pointer;
    margin-top: 16px;
`

const SliderMinMax = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 4px;
    font-size: 12px;
`

const ButtonLendSimulation = styled.div`
    ${MaxWidth.sm`
    display: none;
  `}
`

const IdentityBox = styled.div`
    background-color: #fff;
    padding: 24px;
    box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.15);
`

const ProfileSocialLink = styled.a`
    + a {
        padding-left: 24px;
    }
    img {
        filter: grayscale();
    }
`

export {
    ProfileSocialLink,
    SliderInput,
    OtherMenu,
    SliderMinMax,
    ButtonLendSimulation,
    SimulationWrapper,
    SocialAvatar,
    SocialContent,
    IdentityBox,
}
