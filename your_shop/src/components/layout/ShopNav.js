import { Link } from 'react-router-dom';
import React from 'react';



function ShopNav() {

    return (

        <div id="ShopNav"> 
            <nav>
                <ul className="nav justify-content-center">
                    <li>
                        <Link className="px-4 m-3 btn btn-danger " to="/">Clothes</Link>
                    </li>
                    <li>
                        <Link className="px-4 m-3 btn btn-danger" to="/accessories">Accessories</Link>
                    </li>
                    <li>
                        <Link className="px-4 m-3 btn btn-danger" to="/shoes">Shoes</Link>
                    </li>
                </ul>
            </nav>
        </div>
        
        );
}

export default ShopNav;