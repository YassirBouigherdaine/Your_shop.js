import { Route, Switch } from 'react-router-dom';
import React from 'react';

import Clothes from '../shoPages/Clothes.js';
import Accessories from '../shoPages/Accessories';
import Shoes from '../shoPages/Shoes';

import ShopNav from './layout/ShopNav.js'

function Body() {



    /* submit button*/

    const submit = () => {
        alert("Submited!");
    }

    return (

        <div >


            <div id="shop">
                <div className="container py-4 ">
                    <h3 className="display-6 text-center">New Fashion</h3>

                    <p className="card-text">Le Lorem Ipsum est simplement du faux texte employé dans la composition et impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices.</p>
                </div>

                <ShopNav/>

                <Switch id="mySwitch">

                    <Route path="/" exact>
                        <Clothes />
                    </Route>

                    <Route path="/accessories">
                        <Accessories />
                    </Route>

                    <Route path="/shoes">
                        <Shoes />
                    </Route>

                </Switch>
            </div>

                <div id="contact" className="container bg-dark text-white w-75 px-5 ">
                    <div className="container p-5 m-5 ">
                        <h2 className="display-5 text-center p-2 text-danger">Contact Us</h2>
                        <div className="row">
                            <div className="col py-4  mt-5">
                                <h5>Contact us</h5>
                                <br />
                                <ul className="myList">
                                    <li>95 (61) 346613895</li>
                                    <br />
                                    <li> holiday@gmail.com</li>
                                    <br />
                                    <li><i className="bi bi-facebook px-2"></i><i className="bi bi-instagram px-2"></i> <i className="bi bi-twitter"></i></li>
                                </ul>
                            </div>
                            <div className="col py-5 m-4">
                            <form id="myForm">
                                    <div className="mb-3">
                                        <label for="exampleInputEmail1" className="form-label">Name</label>
                                        <input type="name" className="form-control" id="name" />

                                    </div>
                                    <div className="mb-3">
                                        <label for="exampleInputEmail1" className="form-label">Email address</label>
                                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                                    </div>
                                    <div className="mb-3">
                                        <label for="exampleFormControlTextarea1" className="form-label">Message</label>
                                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                    </div>
                                    <div cclassNamelass="mb-3 form-check">
                                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                        <label className="form-check-label px-1" for="exampleCheck1">Check me out</label>
                                    </div>
                                    <br />
                                <button type="submit" className="btn btn-danger" onClick={submit} >Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
               
           

            <div id="about" className="m-5  myText text-dark">
                <div className="border border-dark container p-5">
                    <h2 className="display-5 text-center p-2 text-dark">About us</h2>
                    <div className="row align-items-center px-5 m-1">

                        <div className="col">
                            <img src='/pics/pic6.jpg' className="card-img-top  myCardimg" alt="..." />
                        </div>
                        <div className="col">
                            <div className="card-body">
                                <h5 className="card-title  p-3">We Are</h5>
                                <p className="card-text">Le Lorem Ipsum est simplement dans la composition et impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices.</p>
                            </div>

                        </div>
                        <div className="col">
                            <img src='pics/pic5.jpg' className="card-img-top  myCardimg" alt="..." />
                        </div>
                    </div>
                    <div className="row align-items-center m-1 px-5">

                        <div className="col">
                            <div className="card-body">
                                <h5 className="card-title  p-3">Our vision</h5>
                                <p className="card-text">Le Lorem Ipsum est simplement la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices.</p>
                            </div>
                        </div>
                        <div className="col">
                            <img src='/pics/pic3.jpg' className="card-img-top  myCardimg" alt="..." />
                        </div>
                        <div className="col">
                            <div className="card-body">
                                <h5 className="card-title p-3 ">Our Approch</h5>
                                <p className="card-text">Le Lorem Ipsum texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices.</p>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>



        </div >

    );
}


export default Body;
