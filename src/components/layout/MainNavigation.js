import classes from "./MainNavigation.module.css";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { GiShoppingCart } from "react-icons/gi";
import { MdCancel } from "react-icons/md";
import DrawerToggleButton from "./DrawerToggleButton";
import { useEffect, useState } from "react";
import { useDispatch,useSelector } from 'react-redux';
import {authActions} from '../../store'
import{auth} from '../../firebase/Config';
import { signOut, onAuthStateChanged } from "firebase/auth";
import { toast } from "react-toastify";


const MainNavigation = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [displayName, setDisplayName] = useState('');
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const toggleNavMenu = () => {
    setShowMenu((prevState) => !prevState);
  };

  const hideNavMenu = () => {
    setShowMenu(false);
  };
 
  const NavLinkHandler = (navData) => {
    return navData.isActive ? classes.active : "";
  };

  const logo = (
    <div className={classes.logo}>
      <Link to={"/"}>
        <h2>
          vee <span>Shop</span>
        </h2>
      </Link>
    </div>
  );

  const cart = (
    <span className={classes.cart}>
      <Link to={"/cart"}>
        Cart
        <GiShoppingCart size={30} />
        <p>0</p>
      </Link>
    </span>
  );



const signOutHandler = ()=>{  
  signOut(auth).then(() => {
   // Sign-out successful.
   toast.success('Logout Successful')
   navigate('/')
  }).catch((error) => {
    // An error happened.
    toast.error(error.message)
  });
}

let user = ''; 

useEffect(()=>{
  // user = auth.currentUser;
  onAuthStateChanged(auth,(user)=>{
    if (user) {

      console.log(user)
      if(user.displayName === null){
        const mail = user.email;
        const mail0 = mail.split('@')
        console.log(mail0)
        const mail1 = mail0[0]
        const mail2 = mail1.charAt(0).toUpperCase() + mail1.slice(1)
        console.log(mail2);
        setDisplayName(mail2)
      }else{
        setDisplayName (user.displayName)
      };
  
      dispatch(authActions.createActiveUser({
        
      }))
    }
  })
  
      
},[])


  return (
    <header>
      <div className={classes.header}>
        {logo}
        <nav
          className={
            showMenu ? classes["show-navigation"] : classes["hide-navigation"]
          }>
          <div
            className={
              showMenu
                ? `${classes["nav-backdrop"]} ${classes["show-nav-backdrop"]}`
                : ""
            }
            onClick={hideNavMenu}
          />
          <ul onClick={hideNavMenu}>
            <li className={classes["mobile-logo"]}>
              {logo}
              <MdCancel
                size={22}
                onClick={hideNavMenu}
                style={{ color: "black" }}
              />
            </li>
            <li>
              <NavLink className={NavLinkHandler} to={"/"}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className={NavLinkHandler} to={"/contact"}>
                Contact Us
              </NavLink>
            </li>
          </ul>
          <div className={classes["right-nav"]} onClick={hideNavMenu}>
            <span className={classes.links}>
              <NavLink className={NavLinkHandler} to={'/login'}>
                Login
              </NavLink>
              <a href="#" style={{color:'red'}}>Hi {displayName} </a>
              <NavLink className={NavLinkHandler} to={"/register"}>
                Register
              </NavLink>
              <NavLink className={NavLinkHandler} to={"/orders"}>
                My Orders
              </NavLink>
              <NavLink className={NavLinkHandler} onClick={signOutHandler} to={'/'}>Logout</NavLink>
            </span>
            {cart}
          </div>
        </nav>

        <div className={classes["menu-icon"]}>
          {cart}
          <div className={classes.spacer}></div>
          <div className={classes.toggle}>
            <DrawerToggleButton size={28} lisalipps={toggleNavMenu} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default MainNavigation;
