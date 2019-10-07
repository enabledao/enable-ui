import styled from 'styled-components'

const HeroWrapper = styled.div`
    background-color: #f7f7f7;
    position: relative;
    min-height: calc(100vh - (60px + 68px));
`

const HeroContent = styled.div`
    background-color: white;
    padding: 50px;
    position: relative;
    height: auto;
    display: block;
`

const HeroTitle = styled.div`
    background-color: #363bd3;
    padding: 40px 0;
    position: relative;
    height: 300px;
`

export { HeroWrapper, HeroContent, HeroTitle }
