import styled from 'styled-components'
import { MaxWidth } from '../../../../styles/utils'

const HeroWrapper = styled.div`
    padding-top: 20px;
    position: relative;
    width: 100%;
    background-color: #363bd3;
`

const HeroCell = styled.div`
    background-color: white;
    padding: 30px;
    ${MaxWidth.sm`
        padding: 0 20px 20px;
    `}
`

const HeroButtonLendMobile = styled.div`
    display: none;
    ${MaxWidth.sm`
    display: block;
    position: fixed;
    bottom: 0;
    padding: 20px;
    background-color: #f9f9f9;
    border-top: 1px solid #e7ebf2;
    width: 100%;
    left: 0;
    z-index: 10;
  `}
`

const HeroLink = styled.div`
    cursor: pointer;
`

const HeroStatsRight = styled.div`
    float: right;
    color: #6c6d7a;
`

const HeroStats = styled.div`
    display: inline-block;
    h5,
    h4 {
        font-size: 20px;
        small {
            font-size: 16px;
        }
    }
    p {
        font-size: 12px;
    }
`

const HeroImage = styled.div`
    position: relative;
`

const HeroVideo = styled.div`
    className: video;
    position: relative;
    padding-bottom: 56.25%;
    padding-top: 25
    height: 0
    ${MaxWidth.sm`
        padding-top: 0;
        margin-top: -8px;
        margin-left: -20px;
        margin-right: -20px;
    `}
`

export {
    HeroWrapper,
    HeroCell,
    HeroButtonLendMobile,
    HeroLink,
    HeroStats,
    HeroImage,
    HeroVideo,
    HeroStatsRight,
}
