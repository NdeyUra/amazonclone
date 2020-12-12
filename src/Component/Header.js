import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import logo from "../Logo/amazon_PNG11.png";
import { Link } from "react-router-dom";
import { useStateValue } from "../Container/Stateprovider";
import fire from "../firebase";
function Header() {
  const [{ basket, user }] = useStateValue();
  const handleAuthentication = () => {
    if (user) {
      fire.auth().signOut()
    }
  }
  return (
    <div className="header">
      <Link to="/">
        <img src={logo} alt="amazon" className="header__logo" />
      </Link>
      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon"></SearchIcon>
      </div>
      <div className="header__nav">
        <Link to={!user&&'/login'}>
        <div onClick={handleAuthentication} className="header__option">
            <span className="header__optionOne">Hello,{!user?'Guest':user.email}</span>
          <span className="header__optionTwo">{user?'Sign Out':'Sign In'}</span>
        </div>
        </Link>
        <div className="header__option">
          <span className="header__optionOne">Returns</span>
          <span className="header__optionTwo">&Orders</span>
        </div>
        <div className="header__option">
          <span className="header__optionOne">Your</span>
          <span className="header__optionTwo">Prime</span>
        </div>
        <Link to='/checkout'>
          <div className="header__optionBasket">
            <AddShoppingCartIcon />
            <span className="header__optionTwo header__basketCount">{basket?.length}</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
