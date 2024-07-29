import Icon1 from "../assets/icons/Icon 1.png"
import Icon2 from "../assets/icons/Icon 2.png"
import Icon3 from "../assets/icons/Icon 3.png"
import Icon4 from "../assets/icons/Icon 4.png"
import Icon5 from "../assets/icons/Icon 5.png"
import Icon6 from "../assets/icons/Icon 6.png"

const Clients = () => {
    return (
        <section id="service" className="my-5 container-fluid d-flex flex-column align-items-center ">
            <h2 className="d-grey fw-semibold ">
                Our Clients
            </h2>
            <p className="grey text-center">We have been working with some Fortune 500+ clients</p>
            <div className="d-flex justify-content-evenly w-100 py-3 flex-wrap ">
                <img src={Icon1} className="img-fluid" alt="" />
                <img src={Icon2} className="img-fluid" alt="" />
                <img src={Icon3} className="img-fluid" alt="" />
                <img src={Icon4} className="img-fluid" alt="" />
                <img src={Icon5} className="img-fluid" alt="" />
                <img src={Icon6} className="img-fluid" alt="" />
                <img src={Icon3} className="img-fluid" alt="" />
            </div>
        </section>
    )
}

export default Clients