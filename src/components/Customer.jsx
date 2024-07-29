import Tesla from "../assets/images/tesla.png"
import Icon1 from "../assets/icons/Icon 1 blue.png"
import Icon2 from "../assets/icons/Icon 2.png"
import Icon3 from "../assets/icons/Icon 3.png"
import Icon4 from "../assets/icons/Icon 4.png"
import Icon5 from "../assets/icons/Icon 5.png"
import Icon6 from "../assets/icons/Icon 6.png"
import Right from "../assets/icons/Right.svg"

const Customer = () => {
    return (
        <section id="testimonial" className="container-fluid bg-main d-flex  py-5 ">
            <div className="row">
                <div className="col-xl-4 col-lg-4 col-md-12 d-flex justify-content-center   ">
                    <img src={Tesla} className="img-fluid " alt="" />
                </div>

                <div className="col-xl-8 col-lg-8 col-md-12 pe-xl-5 px-lg-3 text-lg-start text-center">

                    <p className="grey fw-medium ">Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.</p>
                    <h4 className="green fw-semibold">Tim Smith</h4>
                    <p className="l-grey">British Dragon Boat Racing Association</p>

                    <div className="d-flex align-items-center justify-content-between py-3 flex-wrap  ">
                        <img src={Icon1} className="img-fluid" alt="" />
                        <img src={Icon2} className="img-fluid" alt="" />
                        <img src={Icon3} className="img-fluid" alt="" />
                        <img src={Icon4} className="img-fluid" alt="" />
                        <img src={Icon5} className="img-fluid" alt="" />
                        <img src={Icon6} className="img-fluid" alt="" />
                        <h4 className="green fw-semibold pt-4 pt-md-0 mx-auto mx-md-0">
                            Meet all customers
                            <span><img src={Right} className="img-fluid ms-2" alt="" /></span>
                        </h4>
                    </div>

                </div>

            </div>
        </section>
    )
}

export default Customer