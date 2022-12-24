import Admissions from "./components/Admissions";
import Events from "./components/Events";
import Footer from "./components/Footer";
import {Routes,Route,Switch} from 'react-router-dom'
import Signup from "./Pages/Signup";
import Signin from "./Pages/Signin";
import { AuthContextProvider } from "./context/AuthContext";
import Home from "./components/Home";


function App() {
  return (
   <div>
    <AuthContextProvider>
      {/* <Home/> */}
  
    <Routes>
      
     <Route path="/" element={<Home/>}/>
     
 
 
    </Routes>
    </AuthContextProvider>
   
   </div>
  );
}

export default App;
