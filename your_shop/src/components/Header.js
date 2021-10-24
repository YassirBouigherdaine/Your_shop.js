import React from 'react'


function Header() {

    return (
       
        <div >

            <div className= "justify-content-center">
                <nav className="navbar navbar-dark bg-dark">
                    <div >
                        <a className="navbar-brand" href="#"><h2 className="m-3 position-absolute top-0 start-50 translate-middle">Your<span className="text-danger">Shop</span></h2></a>
                    </div>
                </nav>
                
                <ul className="nav justify-content-center">
                   
                    <li className="nav-item ">
                        <a className="nav-link text-black fw-bold active" href="#home">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-black fw-bold" href="#shop">Shop</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-black fw-bold" href="#contact">Contact us</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-black fw-bold" href="#about">About us</a>
                    </li>
                </ul>
            </div>

            <div id="myCarousel" className=" px-5 py-4 w-100 h-100 figure" style={{backgroundImage: `url("pics/pic18.jpg")`}}>
                <div className="w-100 h-75 mt-5 pt-5 text-white ">
                    <h1 className="mt-5 mb-5">New Fashion</h1>
                    <p className="mt-4 mb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit iure</p>
                   
                    <p className="mt-4 mb-2">Lorem ipsum dolor sit amet consectetur optio</p>
                   
                    <a href='#shop' className="btn btn-danger btn-lg mt-5 mb-5">SHOP NOW</a>
                </div>
            </div>



        </div>
           
        );
}


export default Header;