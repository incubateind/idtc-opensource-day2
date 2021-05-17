import React from 'react';

function Portfolio_menu({menuItem}){
    return(
        <div className="portfolio-container">
            {
                menuItem.map((item)=>{
                    return <div className="portfolio-menu" key={item.id}>
                        <div className="image-data">
                            <img src={item.image} alt=""/>
                            <ul className="hover-items">
                                <li>
                                    <a href={item.link1}>{item.icon1}</a>
                                    <a href={item.link2}>{item.icon2}</a>
                                </li>
                            </ul>
                        </div>
                        <h5>
                            {item.title}
                        </h5>
                        <p>Placeholder paragraph</p>
                    </div>
                })
            }
        </div>
    );
}

export default Portfolio_menu;