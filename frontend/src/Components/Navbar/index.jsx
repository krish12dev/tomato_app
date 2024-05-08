import { useContext, useState } from "react"
import { assets } from "../../assets/assets"
import './navbar.css'
import { Link } from "react-router-dom"
import { storeContext } from "../Context/StoreContext"

const Navbar =({setShowLogin})=>{
    const [menu, setMenu] = useState("home")
    const {getTotalCartAmount} = useContext(storeContext)
    return(
        <>
        <div className="navbar">
            <Link to='/'><img className="logo" src={assets.logo} alt="logo"/></Link>
            <ul className="navbar-menu">
                <Link to={'/'}><li onClick={()=>setMenu("home")} className={menu === "home" ? "active" : ""}>home</li></Link>
                <a href="#explore-menu" onClick={()=> setMenu("menu")} className={menu === "menu" ? "active" : ""}>menu</a>
                <a href="#app-download" onClick={()=>setMenu("mobile-app")} className={menu === "mobile-app" ? "active" : ""}>mobile-app</a>
                <a href="#footer" onClick={()=>setMenu("contact-us")} className={menu === "contact-us" ? "active" : ""}>contact us</a>
            </ul>
            <div className="navbar-right">
               <img src={assets.search_icon} alt="search_ icon"/> 
               <div className="navbar-search-icon">
                <Link to='/cart'><img src={assets.basket_icon} alt=""/></Link>
                <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
               </div>
                <button onClick={()=>setShowLogin(true)}>sign in</button>
            </div>
        </div>
        </>
    )
}
export default Navbar