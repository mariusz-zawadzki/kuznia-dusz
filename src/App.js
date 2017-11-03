import { connect } from 'react-redux'
import * as actions from './actions'
import AppBase from './App.bare'
import Games from './components/games/Games'
import SignOut from './components/auth/signout'
import SignIn from './components/auth/signin'

function mapStateToProps(){
  return {
    components:{
      Games,
      SignIn,
      SignOut
    }
  }
}

export default connect(mapStateToProps, actions)(AppBase);
