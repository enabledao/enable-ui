import React from 'react'
import { ModalWipWrapper } from './styled'
import { connect } from 'react-redux'

interface ModalWipProps {
    networkId: number
}

const ModalWip: React.FC<ModalWipProps> = ({ networkId }) => {
    return (
        <React.Fragment>
            <h4>🚀 This is a testnet site! 🚀</h4>
            <p>
                This site lives on the {networkId}
                {/* <a
                    href={
                        networkName === 'mainnet'
                            ? `https://etherscan.io/`
                            : `https://${networkName}.etherscan.io/`
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {networkName === 'mainnet' ? 'ethereum ' : ''} {networkName}{' '}
                    {networkName === 'mainnet' ? '' : 'testnet'}
                </a> */}
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

function mapState(state) {
    return { networkId: state.networkId }
}

export default connect(
    mapState,
    {}
)(ModalWip)
