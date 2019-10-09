import BoxLogo from '../../../../images/3boxLogo.png'
import { IdentityBox, ProfileSocialLink, TweakOfProfileBox } from './styled'
import Facebook from '../../../../images/socialMedia/facebook.svg'
import InesSquare from '../../../../images/inesSquare.png'
import Instagram from '../../../../images/socialMedia/instagram.svg'
import { Margin, Padding } from '../../../../styles/utils'
import Linkedin from '../../../../images/socialMedia/linkedin.svg'
import ProfileHover from 'profile-hover'
import React from 'react'
import { Row, Col } from '../../../lib'
import Twitter from '../../../../images/socialMedia/twitter.svg'

const borrowerIdentityCard: any = () => (
    <IdentityBox>
        <Row>
            <Col lg={6}>
                <h5>Identity</h5>
            </Col>

            <Col lg={6} text="right">
                <img src={BoxLogo} alt="3DBox - logo" />
            </Col>
        </Row>
        <div style={{ position: 'absolute' }}>
            <img src={InesSquare} alt="Ines - Square" />
        </div>
        <Padding left={124}>
            <h5>Widya Imanesti</h5>
            <p>Jakarta - Indonesia</p>
            <Margin top={16}>
                <ProfileSocialLink
                    href="https://id.linkedin.com/in/widya-imanesti"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img src={Linkedin} alt="Socila - Media" width={20} />
                </ProfileSocialLink>
                <ProfileSocialLink
                    href="https://www.instagram.com/wimanesti/?hl=en"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img src={Instagram} alt="Socila - Media" width={20} />
                </ProfileSocialLink>
                <ProfileSocialLink
                    href="https://twitter.com/itsenamiw"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img src={Twitter} alt="Socila - Media" width={20} />
                </ProfileSocialLink>
                <ProfileSocialLink
                    href="https://www.facebook.com/widya.imanesti"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img src={Facebook} alt="Socila - Media" width={20} />
                </ProfileSocialLink>
            </Margin>
        </Padding>
        <TweakOfProfileBox>
            <ProfileHover
                noTheme
                orientation={'top'}
                address={'0xf585e6B4173914A296c9b3AFa83f86bfaF4240f6'}
            >
                <Margin top={24}>
                    <div
                        style={{
                            backgroundColor: '#f7f7f7',
                            padding: 16,
                            marginTop: 24,
                            overflow: 'scroll',
                        }}
                    >
                        <b>
                            <small>ETH Wallet Key</small>
                        </b>

                        <small>
                            <p>0xf585e6B4173914A296c9b3AFa83f86bfaF4240f6</p>
                        </small>
                    </div>
                </Margin>
            </ProfileHover>
        </TweakOfProfileBox>
        <Margin top={24}>
            <h6 style={{ color: '#21b549', cursor: 'pointer' }}>
                Admission Proof Document
            </h6>
        </Margin>
    </IdentityBox>
)

export default borrowerIdentityCard
