/* eslint-disable jsx-a11y/accessible-emoji */
/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react'
import { ModalWipWrapper } from './styled'

const MainnetNotice: React.FC = () => {
    return (
        <React.Fragment>
            <h4>🚀 Welcome to Enable! 🚀</h4>
            <p>
                This is an experiment to use the <a>Dai stablecoin </a>and{' '}
                <a>smart contracts </a> to do a peer-to-peer income share
                agreement.
            </p>
            <ModalWipWrapper>
                <li>
                    <p>
                        All smart contracts have been audited carefully, but are
                        offered <b>without warranty</b> as this is experimental
                        software.
                    </p>
                </li>
                <li>
                    <p>Please participate at your own risk</p>
                </li>
                <li>
                    <p>
                        Please note the financial risks involved in an{' '}
                        <a href="https://www.investopedia.com/terms/u/unsecuredloan.asp">
                            unsecured
                        </a>{' '}
                        income share agreement
                    </p>
                </li>
                <li>
                    <p>
                        Learn more about{' '}
                        <a
                            href="https://www.enable.credit/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <b>Enable's</b>{' '}
                        </a>
                        open source effort to build peer-to-peer stablecoin
                        loans
                    </p>
                </li>
            </ModalWipWrapper>
        </React.Fragment>
    )
}

export default MainnetNotice
