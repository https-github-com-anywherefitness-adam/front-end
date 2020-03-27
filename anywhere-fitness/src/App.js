import React, { useState } from "react";
import Register from './components/Register'
import Success from './components/Success';
import Login from './components/Login';
import './App.css';

// class Apps extends Component {
//   render() {
//     return (      
//        <BrowserRouter>
//         <div>
//           <Navigation />
//             <Switch>
//              <Route path="/" component={Home} exact/>
//              <Route path="/Login" component={Login}/>
//              <Route path="/Register" component={Register}/>
//             <Route component={Error}/>
//            </Switch>
//         </div> 
//       </BrowserRouter>
//     );
//   }
// }
 
//export default Apps;
export default function App() {
  const [formSuccess, setFormSuccess] = useState(false);
  const formSubmit = () => {
    setFormSuccess(true);
  };
  return (
    <div className="App">
      {formSuccess ? <Success /> : <Register submitHandler={formSubmit} />}
      <Login />
      
    </div>
  );
}

