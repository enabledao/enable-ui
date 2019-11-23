import React from 'react'
import { Container } from '../../../styles/bases'
import { BoxStats, HeroWrapper, HeroTitle } from '../myLoan/styled'
import { Margin } from '../../../styles/utils'
import { Button, Row, Col } from '../../lib'
import PatternImage from '../../../images/pattern.png'
import {
    connectToWallet,
    getInjectedAccountAddress,
} from '../../../utils/web3Utils'

const renderConnect = connectWallet => (
    <HeroWrapper>
        <HeroTitle>
            <img
                style={{
                    position: 'absolute',
                    top: 0,
                    height: '100%',
                    left: 0,
                    transform: 'scaleX(-1)',
                }}
                src={PatternImage}
                alt="pattern"
            />
            <img
                style={{
                    position: 'absolute',
                    top: 0,
                    height: '100%',
                    right: 0,
                }}
                src={PatternImage}
                alt="pattern"
            />
            <HeroTitle>
                <img
                    style={{
                        position: 'absolute',
                        top: 0,
                        height: '100%',
                        left: 0,
                        transform: 'scaleX(-1)',
                    }}
                    src={PatternImage}
                    alt="pattern"
                />
                <img
                    style={{
                        position: 'absolute',
                        top: 0,
                        height: '100%',
                        right: 0,
                    }}
                    src={PatternImage}
                    alt="pattern"
                />
                <Container>
                    <Margin vertical={48}>
                        <Row>
                            <Col lg={12} md={12} sm={12} xs={12}>
                                <BoxStats>
                                    <Col lg={9} md={12}>
                                        <p>Connect your wallet to proceed</p>
                                    </Col>
                                    <Col lg={3} md={12}>
                                        <Button
                                            color="green"
                                            onClick={async () =>
                                                connectWallet()
                                            }
                                        >
                                            Connect Wallet
                                        </Button>
                                    </Col>
                                </BoxStats>
                            </Col>
                        </Row>
                    </Margin>
                </Container>
            </HeroTitle>
        </HeroTitle>
    </HeroWrapper>
)

interface RenderConnectWalletProps {
    children?: any
    onConnect?: () => {}
}
interface RenderConnectWalletState {
    loaded: boolean
}

class renderConnectWallet extends React.Component<
    RenderConnectWalletProps,
    RenderConnectWalletState
> {
    state = {
        loaded: false,
    }
    UNSAFE_componentWillMount = async () => {
        await this.connectWallet()
    }

    connectWallet = async () => {
        const { onConnect } = this.props
        try {
            await connectToWallet()
            const account = await getInjectedAccountAddress()
            this.setState({ loaded: !!account }, () =>
                this.state.loaded && onConnect ? onConnect() : null
            )
        } catch {
            this.setState({ loaded: false })
        }
        // this.forceUpdate()
    }

    render() {
        const { children } = this.props
        return this.state.loaded
            ? children || null
            : renderConnect(this.connectWallet)
    }
}
export default renderConnectWallet
