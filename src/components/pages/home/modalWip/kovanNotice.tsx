/* eslint-disable jsx-a11y/accessible-emoji */

import React from 'react'
import { ModalWipWrapper } from './styled'

const KovanNotice: React.FC = () => {
    return (
        <React.Fragment>
            <h4>🚀 This is a Kovan testnet version of Enable! 🚀</h4>
            <p>
                This lives on a testnet that uses Kovan Dai that doesn't have
                any value.
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
                        Click on the <b>Faucet</b> to get free testnet Dai
                    </p>
                </li>
                <li>
                    <p>
                        <a
                            href="https://www.enable.credit/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <b>Enable</b>{' '}
                        </a>
                        is an open source project to build peer-to-peer
                        stablecoin loans
                    </p>
                </li>
            </ModalWipWrapper>
        </React.Fragment>
    )
}

export default KovanNotice
