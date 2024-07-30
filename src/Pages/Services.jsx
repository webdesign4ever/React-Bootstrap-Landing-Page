import { FaLaptopCode, FaMobileAlt, FaPencilRuler, FaChartLine } from "react-icons/fa"


const Services = () => {
    return (
        <>
            <div style={{ height: "100px", }}></div>
            <h2 className="text-center mb-5 fw-semibold d-grey">Our Services</h2>
            <div className=" mx-2 row row-cols-1 row-cols-md-2  g-4 mb-5">
                <div className="col">
                    <div className="card ">
                        {/* <img src="..." className="card-img-top" alt="..." /> */}
                        <FaLaptopCode className="card-img-top green mt-3" size={70} />
                        <div className="card-body text-center">
                            <h5 className="card-title d-grey">Web Development</h5>
                            <p className="card-text grey">Get highly customized web solutions to enhance your business by taking our advanced Web Development services.</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card ">
                        {/* <img src="..." className="card-img-top" alt="..." /> */}
                        <FaMobileAlt className="card-img-top green  mt-3" size={70} />
                        <div className="card-body text-center">
                            <h5 className="card-title d-grey">Mobile App Development</h5>
                            <p className="card-text grey">We develop mobile applications to steer your business to the highest levels of success.</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        {/* <img src="..." className="card-img-top" alt="..." /> */}
                        <FaPencilRuler className="card-img-top green  mt-3" size={70} />
                        <div className="card-body text-center">
                            <h5 className="card-title d-grey">UI/UX Design</h5>
                            <p className="card-text grey">Our UI/UX designers takes the branding of your business to a next level by engaging your customers in unimaginable ways.</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        {/* <img src="..." className="card-img-top" alt="..." /> */}
                        <FaChartLine className="card-img-top green mt-3" size={70} />
                        <div className="card-body text-center">
                            <h5 className="card-title d-grey">Quality Assurance</h5>
                            <p className="card-text grey">Quality assurance is one of our core services. We ensure that our clients get the best products as per their expectations.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Services