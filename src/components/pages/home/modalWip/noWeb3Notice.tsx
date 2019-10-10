/* eslint-disable jsx-a11y/accessible-emoji */

import React from 'react'
import { ModalWipWrapper } from './styled'

const NoWeb3Notice: React.FC = () => {
    return (
        <React.Fragment>
            <h4>⌛ Waiting to connect to Ethereum ⌛</h4>
            <p>
                To participate in the crowdfund, you'll need one of the
                following:
            </p>
            <ModalWipWrapper>
                <li>
                    <p>
                        <a
                            href="https://metamask.io/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <b>Metamask</b>
                        </a>{' '}
                        if you're on desktop
                    </p>
                </li>
                <li>
                    <p>
                        <a
                            href="https://trustwallet.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <b>Trust Wallet</b>
                        </a>{' '}
                        or{' '}
                        <a
                            href="https://wallet.coinbase.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <b>Coinbase Wallet</b>
                        </a>{' '}
                        if you're on mobile
                    </p>
                </li>
            </ModalWipWrapper>
        </React.Fragment>
    )
}

export default NoWeb3Notice
