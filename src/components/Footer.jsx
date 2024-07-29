import Down from "../assets/icons/Down.svg"
import Twitter from "../assets/icons/twitter.svg"
import Youtube from "../assets/icons/youtube.svg"
import Insta from "../assets/icons/insta.svg"
import Dribble from "../assets/icons/dribble.svg"
import Logo from "../assets/logos/Logo dark.svg"
import Send from "../assets/icons/send.svg"

const Footer = () => {
    return (
        <>
            <div style={{ height: "100px", }}></div>
            <footer>
                <section className=" container-fluid bg-main d-flex flex-column py-5  ">
                    <h1 className="text-center fw-semibold black">Pellentesque suscipit <br />fringilla libero eu.</h1>
                    <button className="btn-demo text-white fw-medium border-0 mx-auto mt-4">Get a Demo<img src={Down} className=" ms-2" alt="" /></button>
                </section>
                <section className="container-fluid bg-footer d-flex py-5 flex-md-row flex-column">
                    <div className="col-lg-5 col-md-4 d-flex flex-column align-items-center silver pb-5  ">
                        <div className="mt-3">
                            <img src={Logo} alt="" className="mb-4" />
                            <p className="my-3">Copyright © 2020 Nexcent ltd. <br />All rights reserved</p>
                            <div className="pt-3">
                                <img src={Insta} alt="" className="img-fluid pe-2"></img>
                                <img src={Dribble} alt="" className="img-fluid px-2"></img>
                                <img src={Twitter} alt="" className="img-fluid px-2"></img>
                                <img src={Youtube} alt="" className="img-fluid px-2"></img>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7 col-md-8 d-flex  justify-content-lg-evenly justify-content-around flex-wrap">
                        <nav>
                            <h4 className="fw-semibold text-white">Company</h4>
                            <ul className="navbar-nav silver">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#" >About us</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">Blog</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">Contact us</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">Pricing</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">Testimonials</a>
                                </li>
                            </ul>
                        </nav>
                        <nav>
                            <h4 className="fw-semibold text-white">Support</h4>
                            <ul className="navbar-nav silver">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#" >Help center</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">Terms of service</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">Legal</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">Privacy policy</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">Status</a>
                                </li>
                            </ul>
                        </nav>
                        <form className="pt-4 pt-md-0 me-4 me-md-0">
                            <h4 className="fw-semibold text-white mb-4">Stay up to date</h4>
                            <div className="position-relative">
                                <input type="email" placeholder="Your email address" className="input-email ps-2" />
                                <img src={Send} alt="Send" className="position-absolute end-0 top-50 translate-middle-y pe-3" />
                            </div>
                        </form>
                    </div>

                </section>

            </footer>
        </>
    )
}

export default Footer