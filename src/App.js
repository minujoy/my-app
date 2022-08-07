import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import "./App.css"
import HomePage from "./Pages/HomePage";
import OnePage from "./Components/Watch/OnePage";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import { AuthContextProvider } from "./Context/AuthContext";
import Signup from "./Pages/Signup";
import Account from "./Pages/Account";
import Login from './Pages/Login';
import ProtectedRoute from "./Components/Watch/Protectedroute";

function App() {
  return (
    <>
     <AuthContextProvider>
    
      <Router>
      <Header />
      <Routes>
          <Route exact path='/' element={<HomePage/>} />
          <Route path='/OnePage/:id'  element={<OnePage/>} /> 
          <Route path='/Login'  element={<Login/>} />
          <Route path='/Signup'  element={<Signup/>} />
          <Route path='/Account'  element={ <ProtectedRoute>
                <Account />
              </ProtectedRoute>} />
        </Routes>      
        <Footer /> 
      </Router>
      </AuthContextProvider>
    </>
  )
}

export default App;