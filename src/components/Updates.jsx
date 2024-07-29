import Human from "../assets/images/image 18.png"
import Laptop from "../assets/images/image 19.png"
import Laptop1 from "../assets/images/image 20.png"
import Right from "../assets/icons/Right.svg"

const Updates = () => {
    return (

        <section id="faq" className="container-fluid my-5 ">
            <h2 className="d-grey fw-semibold text-center ">Caring is the new marketing</h2>
            <p className="grey text-center mx-auto w-md-50  py-1 " > The Nexcent blog is the best place to read about the latest membership insights, trends and more.See who &#39;s joining the community, read about how our community are increasing their membership income and lot &#39;s more.</p>

            <div className="d-flex justify-content-evenly flex-wrap ">

                <div className="position-relative custom-lg-3">
                    <img src={Human} alt="" className="img-fluid " />
                    <div className="custom-card mb-3 mb-sm-0 position-absolute top-75 start-50 translate-middle card bg-main col-xl-10 col-11  ">
                        <div className="card-body ">
                            <h4 className="card-title grey fw-semibold text-center">Creating Streamlined Safeguarding Processes with OneRen</h4>
                            <h4 className="text-center mt-4">
                                <a href="#" className="green fw-semibold link-underline link-underline-opacity-0 ">Readmore<span><img src={Right} className="img-fluid ms-2" alt="" /></span></a>
                            </h4>
                        </div>
                    </div>
                </div>

                <div className="position-relative custom-lg-3  ">
                    <img src={Laptop} alt="" className="img-fluid" />
                    <div className="custom-card card bg-main  mb-3 mb-sm-0 position-absolute top-75 start-50 translate-middle col-xl-10 col-11 ">
                        <div className="card-body">
                            <h4 className="card-title grey fw-semibold text-center">What are your safeguarding responsibilities and how can you manage them?</h4>
                            <h4 className="text-center mt-4 ">
                                <a href="#" className="green fw-semibold link-underline link-underline-opacity-0 ">Readmore<span><img src={Right} className="img-fluid ms-2" alt="" /></span></a>
                            </h4>
                        </div>
                    </div>
                </div>

                <div className="position-relative custom-lg-3 mb-0 ">
                    <img src={Laptop1} alt="" className="img-fluid" />
                    <div className="custom-card card bg-main mb-3 mb-sm-0 position-absolute top-75 start-50 translate-middle col-xl-10 col-11">
                        <div className="card-body">
                            <h4 className="card-title grey fw-semibold text-center">Revamping the Membership Model with Triathlon Australia</h4>
                            <h4 className="text-center mt-4">
                                <a href="#" className="green fw-semibold link-underline link-underline-opacity-0 ">Readmore<span><img src={Right} className="img-fluid ms-2" alt="" /></span></a>
                            </h4>
                        </div>
                    </div>
                </div>

                {/* <div className="bg-main w-25">
                    <h4 className="grey fw-semibold">Creating Streamlined Safeguarding Processes with OneRen</h4>
                    <button className="green border-0 fw-semibold">Readmore<span><img src={Right} className="img-fluid ms-2" alt="" /></span></button>
                </div> */}
            </div>
        </section >


    )
}

export default Updates