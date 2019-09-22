import React from 'react'
import { Container } from '../../../styles/bases'
import { NavLink } from 'react-router-dom'
import {
    NavbarWrapper,
    NavbarBox,
    NavbarBrand,
    NavbarMenu,
    NavbarItems,
    NavbarBrandSmall,
} from './styled'
import { AppPath } from '../../../constant/appPath'

const NavbarItemActive: any = {
    fontWeight: 700,
}

const Navbar: React.FC = () => {
    return (
        <NavbarWrapper>
            <Container>
                <NavbarBox>
                    <NavbarBrand>
                        <NavLink exact={true} to={AppPath.home}>
                            Ines Fund
                            <NavbarBrandSmall>By Enable 🙌</NavbarBrandSmall>
                        </NavLink>
                    </NavbarBrand>
                    <NavbarMenu>
                        <NavbarItems>
                            <NavLink
                                exact={true}
                                to={AppPath.home}
                                activeStyle={NavbarItemActive}
                            >
                                Home
                            </NavLink>
                        </NavbarItems>
                        <NavbarItems>
                            <NavLink
                                exact={true}
                                to={AppPath.myLoan}
                                activeStyle={NavbarItemActive}
                            >
                                My Investment
                            </NavLink>
                        </NavbarItems>
                        <NavbarItems>
                            <NavLink
                                exact={true}
                                to={AppPath.faucet}
                                activeStyle={NavbarItemActive}
                            >
                                Faucet
                            </NavLink>
                        </NavbarItems>
                    </NavbarMenu>
                </NavbarBox>
            </Container>
        </NavbarWrapper>
    )
}

export default Navbar
