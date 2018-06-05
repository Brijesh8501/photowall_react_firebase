import MainPage from './MainPage'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as actions from '../redux/action'
import {withRouter} from 'react-router'

function mapStateToProps(state)
{
    return {
        postInfo : state.PostInfoReducer,
        commentInfo : state.CommentsReducer

    }
}
function bindActionForRemove(dispatch)
{
    return bindActionCreators(actions,dispatch)
}

const App = withRouter(connect(mapStateToProps, bindActionForRemove)(MainPage))

export default App