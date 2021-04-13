import React from 'react';
import './App.css';
import {Switch,Route} from 'react-router-dom';


import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component.jsx';
import Header from './components/header/header.component.jsx';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;

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