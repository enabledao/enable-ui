import React from 'react'
import { ModalWipWrapper } from './styled'

interface ModalWipProps {
    networkName: string
}
class ModalWip extends React.Component<ModalWipProps, {}> {
    render() {
        return (
            <React.Fragment>
                <h4>🚀 This is a testnet site! 🚀</h4>
                <p>
                    This site lives on the{' '}
                    <a
                        href={
                            this.props.networkName === 'mainnet'
                                ? `https://etherscan.io/`
                                : `https://${this.props.networkName}.etherscan.io/`
                        }
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {this.props.networkName === 'mainnet'
                            ? 'ethereum '
                            : ''}{' '}
                        {this.props.networkName}{' '}
                        {this.props.networkName === 'mainnet' ? '' : 'testnet'}
                    </a>
                    , and uses real-life currency that doesn't have any value.
                </p>
                <ModalWipWrapper>
                    <li>
                        <p>
                            Any "loans" made to Ines on this site are <b>NOT</b>{' '}
                            real
                        </p>
                    </li>
                    <li>
                        <p>
                            Interested to help us with user testing? &nbsp;
                            <a
                                href="https://calendly.com/felix-yuniar/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <b>Sign up here</b>
                            </a>
                        </p>
                    </li>
                    <li>
                        <p>
                            Learn more about &nbsp;
                            <a
                                href="https://www.enable.credit/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <b>Enable</b>
                            </a>
                            , a initiative to build borderless stablecoin loans
                        </p>
                    </li>
                </ModalWipWrapper>
            </React.Fragment>
        )
    }
}

export default ModalWip
