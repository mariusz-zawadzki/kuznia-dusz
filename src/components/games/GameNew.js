import { connect } from 'react-redux'
import * as actions from '../../actions'

import GameNew from './GameNew.bare'
const mapStateToProps = (state, ownProps) => {
    let newprops = {};
    if (ownProps.match) {
        newprops = {
            initialValues: state.games.map[ownProps.match.params.id]
        }
    }
    return newprops;
}

export default connect(mapStateToProps, actions)(GameNew);