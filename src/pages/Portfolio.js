import React from 'react'
import Title from "../Title";
import "../Portfolio.css";
import portfolios from "../PortfolioComponent";
import Categories from "../Portfolio_category";
import MenuItems from "../Portfolio_menu";
import {useState} from 'react';

function Portfolio(){
    const [categories, setCategories] = useState(null);
    const [menuItems, setMenuItems] = useState(portfolios);
    return(
        <div className="Portfolio">
           <div className="Title">
               <Title title={'Portfolios'} span={'Portfolios'} />
           </div>
            <div className="portfolios">
                <Categories />
                <MenuItems menuItem={menuItems} />

            </div>

        </div>
    );
}

export default Portfolio;