import styled from 'styled-components'

const NavbarWrapper = styled.div`
    position: relative;
    background-color: #363bd3;
`

const NavbarBox = styled.div`
    width: 100%;
    height: 90px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const NavbarBrand = styled.div`
    font-size: 20px;
    font-weight: 600;
    a {
        position: relative;
        color: white;
    }
`

const NavbarBrandSmall = styled.div`
    font-size: 12px;
    display: inline-block;
    font-weight: 400;
    position: absolute;
    top: calc(100%);
    left: 0;
`

const NavbarMenu = styled.ul`
    list-style: none;
    display: flex;
`

const NavbarItems = styled.li`
    padding: 0 12px;
    font-weight: 400;
    &:last-child {
        padding-right: 0;
    }
    a {
        color: white;
    }
`

export {
    NavbarWrapper,
    NavbarBox,
    NavbarBrand,
    NavbarMenu,
    NavbarItems,
    NavbarBrandSmall,
}
