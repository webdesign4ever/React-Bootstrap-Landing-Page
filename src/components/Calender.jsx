import Pana from "../assets/images/pana.png"

const Calender = () => {
    return (
        <section id="product" className="container-fluid d-flex align-items-center py-5 flex-md-row flex-column">
            <div className="col-md-5 col-12 d-flex justify-content-center  ">
                <img src={Pana} className="img-fluid" alt="" />
            </div>
            <div className="col-md-7 col-12 text-md-start text-center py-5 py-md-0">
                <h2 className="d-grey fw-semibold">How to design your site footer like <span className="d-lg-block">we did</span></h2>
                <p className="grey w-md-75 py-2">Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.</p>
                <button className="btn-learn border-0 text-white mt-3">Learn More</button>
            </div>
        </section>
    )
}

export default Calender