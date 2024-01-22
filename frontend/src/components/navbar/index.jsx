import React from "react";
import style from "./index.module.scss";
import { Link } from "react-router-dom"; 
import {Menu, Search, ShoppingCart, User} from "lucide-react"

function Navbar() {
  return (
    <>
      <nav>
        <div className={style.container}>
          <div className={style.logo}>Time Zome</div>
          <ul className={style["page-link"]}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/add-product">Add Product</Link></li>
          <li>Shop</li>
          <li>About</li>
          <li>Blog</li>
          <li></li>
          </ul>

          <div className={style.icon}>
          <Search />
          <User />
          <ShoppingCart />
          </div>

          <div className={style.menu}>
          <Menu />
          </div>

        </div>
      </nav>
    </>
  );
}

export default Navbar;
