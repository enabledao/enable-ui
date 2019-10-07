import React from 'react'
import { connect } from 'react-redux'
import KovanNotice from './kovanNotice'
import MainnetNotice from './mainnetNotice'
import NoWeb3Notice from './noWeb3Notice'

interface ModalWipProps {
    networkId: number
}

const ModalWip: React.FC<ModalWipProps> = ({ networkId }) => {
    switch (networkId) {
        case 1:
            return <MainnetNotice />
        case 42:
            return <KovanNotice />
        default:
            return <NoWeb3Notice />
    }
}

function mapState(state) {
    return { networkId: state.networkId }
}

export default connect(
    mapState,
    {}
)(ModalWip)
