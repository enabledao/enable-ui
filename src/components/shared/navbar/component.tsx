/* eslint-disable jsx-a11y/accessible-emoji */

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

interface NavbarProps {
    networkId: number
}

const Navbar: React.FC<NavbarProps> = ({ networkId }) => {
    return (
        <NavbarWrapper>
            <Container>
                <NavbarBox>
                    <NavbarBrand>
                        <NavLink exact={true} to={AppPath.home}>
                            Ines Fund
                            <NavbarBrandSmall>
                                By Enable <span>🙌</span>
                            </NavbarBrandSmall>
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
                        {networkId === 42 && (
                            <NavbarItems>
                                <NavLink
                                    exact={true}
                                    to={AppPath.faucet}
                                    activeStyle={NavbarItemActive}
                                >
                                    Faucet
                                </NavLink>
                            </NavbarItems>
                        )}
                    </NavbarMenu>
                </NavbarBox>
            </Container>
        </NavbarWrapper>
    )
}

export default Navbar
