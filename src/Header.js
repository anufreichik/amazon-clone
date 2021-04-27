import React from 'react';
import './Header.css'
import {Link} from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket"
import {useStateValue} from "./StateProvider";
function Header(props) {

    const [{basket}, dispatch]=useStateValue();

    return (
        <nav className="header">
            {/* logo on the left = > img*/}
            <Link to="/">
                <img className="header_logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt=""/>
            </Link>
            {/* search box */}
            <div className="header_search">
                <input type="text" className="header_searchInput"/>
                <SearchIcon className="header_searchIcon"/>
            </div>

            {/* 3 links : sign in, orders, print*/}
            <div className="header_nav">
                {/*1st link*/}
                <Link  to="/login"  className="header_link">
                    <div className="header_option">
                        <span className="header_optionLineOne">Hello Marina</span>
                        <span className="header_optionLineTwo">Sign In</span>
                    </div>
                </Link>
                {/*2st link*/}
                <Link  to="/"  className="header_link">
                    <div className="header_option">
                        <span className="header_optionLineOne">Returns</span>
                        <span className="header_optionLineTwo">& Orders</span>
                    </div>
                </Link>
                {/*3st link*/}
                <Link  to="/"  className="header_link">
                    <div className="header_option">
                        <span className="header_optionLineOne">Your</span>
                        <span className="header_optionLineTwo">Prime</span>
                    </div>
                </Link>

                <Link  to="/checkout"  className="header_link">
                   <div className="header_optionBasket">
                       {/* Shopping basket icon*/}
                        <ShoppingBasketIcon/>
                       {/* Number Items*/}
                       <span className="header_optionLineTwo header_basketCount">{basket?.length}</span>
                   </div>
                </Link>

            </div>
            {/* basket icon with number*/}
        </nav>
    );
}

export default Header;
