import React from 'react'


function Footer() {
    return (

        <div>
            <div id="myFooter"  className=" text-center p-5 w-100 bg-dark text-white ">
                <div className="row">
                    <div className="col ">
                        <h5 className="text-danger">Our Location</h5>
                        <br />
                        <ul className="myList">
                            <li>x.y.z.. street, ......</li>
                            <br />
                            <li>Marrakesh,........</li>
                        </ul>
                    </div>
                    <div className="col">
                        <h5 className="text-danger">Opening Hours</h5>
                        <br />
                        <ul className="myList">
                            <li>Monday-Saturday</li>
                            <br />
                            <li>8:00 AM - 6:00 PM</li>
                        </ul>
                    </div>
                    <div className="col">
                        <h5 id="ContFooter"className="text-danger">Contact us</h5>
                        <br />
                        <ul className="myList">
                            <li>95 (61) 346613895</li>
                            <br />
                            <li> holiday@gmail.com</li>
                            <br />
                            <li><i className="bi bi-facebook px-2"></i><i className="bi bi-instagram px-2"></i> <i className="bi bi-twitter"></i></li>
                        </ul>
                    </div>
                </div>
            </div>

            <footer className="bg-dark text-white text-center position-relative mt-2 py-3">
                <div className="container">
                    <p>Copyrigth &copy; 2021 Yassir Boui</p>
                    <a href="#" className="position-absolute bottom-0 end-0 p-3">
                        <i className="bi bi-arrow-up-circle text-danger h2"></i>
                    </a>
                </div>
            </footer>
        </div>
    );

}

export default Footer;