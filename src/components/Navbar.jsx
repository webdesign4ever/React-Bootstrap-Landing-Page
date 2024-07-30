import { Link } from "react-router-dom"
import Logo from "../assets/logos/Logo.svg"

const Navbar = () => {
    return (
        <nav className="navbar bg-main navbar-expand-lg position-fixed z-3 w-100 shadow-sm"  >
            <div className="container">
                <Link to='/' className="navbar-brand" >
                    <img src={Logo} alt="" />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                        <li className="nav-item px-2 ">
                            <Link to='/' className="nav-link active" aria-current="page">Home</Link>
                        </li>
                        <li className="nav-item px-2">
                            <Link to='/services' className="nav-link active" aria-current="page" >Services</Link>
                        </li>
                        <li className="nav-item px-2">
                            <Link to='/about' className="nav-link active" aria-current="page" href="#feature">About</Link>
                        </li>
                        {/* <li className="nav-item px-2">
                            <a className="nav-link active" aria-current="page" href="#product" >Product</a>
                        </li> */}
                        {/* <li className="nav-item px-2">
                            <a className="nav-link active" aria-current="page" href="#testimonial">Testimonial</a>
                        </li> */}
                        <li className="nav-item px-2">
                            <Link to='/contact' className="nav-link active" aria-current="page" >Contact Us</Link>
                        </li>
                    </ul>
                    <form className="d-flex" role="search">
                        <button className="btn-login border-0" type="submit">Login</button>
                        <button className="btn-signup border-0 text-white ms-2 " type="submit">Sign up</button>
                    </form>
                </div>
            </div>
        </nav >

    )
}

export default Navbar