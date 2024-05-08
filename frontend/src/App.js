import { useState } from "react";
import Navbar from "./Components/Navbar";
import PageRouter from "./Router/pageRouter";
import LoginPagePop from "./Components/LoginPagePop/LoginPagePop";

function App() {
  const [showLogin, setShowLogin] = useState(false)
  return (
    <>
    {showLogin ? <LoginPagePop setShowLogin={setShowLogin}/>:<></>}
    <div className="app">
      <Navbar setShowLogin = {setShowLogin}/>
      <PageRouter/>
    </div>
    </>
  );
}

export default App;
