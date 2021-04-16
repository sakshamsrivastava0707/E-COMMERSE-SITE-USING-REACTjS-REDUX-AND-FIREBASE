import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import './App.scss'

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import CheckoutPage from './pages/checkout/checkout.component';

import Header from './components/header/header.component';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';

import { setCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      }

      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/checkout' component={CheckoutPage} />
          <Route
            exact
            path='/signin'
            render={() =>
              this.props.currentUser ? (
                <Redirect to='/' />
              ) : (
                <SignInAndSignUpPage />
              )
            }
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);


// import HomePage from './pages/homepage/homepage.component';

// // const BatsPage = (props)=> {
// //   console.log(props);
// //   <button onClick = {()=> props.history.push('/hats')}> GO TO BATS BUTTON </button>
  


// //   return
// //    (   
// //     //  props.history.push('/hats')  USE IT IN CASE OF THE COMPONENTdIDmOUNT (FETCHING OR SOMETHING)
// //    <><h1>hey this is bets page</h1>
// //   {/* <button onClick = {()=> props.history.push('/hats')}></button> */}
// //   {/* // <Link to= {`${props.match.url}/17`}>17</Link>
// //   // <Link to= {`${props.match.url}/14`}>14</Link>

// //   // <Link to= {`${props.match.url}/43`}>43</Link> */}
// //   </>
// //   )
// // }
// const HatsPage = () => (
//   <div>
//     <h1>HATS PAGE </h1>
//   </div>
// );

// function App() {
//   return (
//     <div>
    
//       <Switch>
//         <Route exact path='/' component={HomePage} />
//         <Route path='/hats' component={HatsPage} />
//       </Switch>
      
//     </div>
//   );
// }

// export default App;