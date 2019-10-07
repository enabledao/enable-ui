import Navbar from './component'
import { connect } from 'react-redux'

function mapState(state) {
    return { networkId: state.networkId }
}
export default connect(
    mapState,
    {}
)(Navbar)
