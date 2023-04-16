import classes from "./MainNavigation.module.css";
import { Link, NavLink } from "react-router-dom";
import { GiShoppingCart } from "react-icons/gi";
import { MdCancel } from "react-icons/md";
import DrawerToggleButton from "./DrawerToggleButton";
import { useState } from "react";

const MainNavigation = () => {
  const [showMenu, setShowMenu] = useState(false);

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
              <NavLink className={NavLinkHandler} to={"#"}>
                Login
              </NavLink>
              <a href="#">Hi Vawkei!</a>
              <NavLink className={NavLinkHandler} to={"/register"}>
                Register
              </NavLink>
              <NavLink className={NavLinkHandler} to={"/orders"}>
                My Orders
              </NavLink>
              <NavLink className={NavLinkHandler} to={"/logout"}>
                Logout
              </NavLink>
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
