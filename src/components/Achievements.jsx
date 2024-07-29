import People from "../assets/icons/people-dark.png"
import Finger from "../assets/icons/finger.png"
import Wallet from "../assets/icons/wallet.png"
import Hands from "../assets/icons/hands-dark.png"

const Achievements = () => {
    return (
        <>
            <section className="container-fluid bg-main d-flex align-items-center py-5 flex-md-row flex-column ">
                <div className="d-flex justify-content-center col-12 col-md-4 col-lg-6  " >
                    <div className="text-md-start text-center">
                        <h2 className="fw-semibold d-grey">Helping a local <span className="d-block green">business reinvent itself</span></h2>
                        <p className="dark">We reached here with our hard work and dedication</p>
                    </div>
                </div>

                <div className="col-12 col-md-8 col-lg-6 d-flex flex-column row-gap-4 pt-3 pt-md-0">

                    <div className="d-flex justify-content-evenly ">

                        <div className="d-flex align-items-center col-6  ">
                            <img src={People} alt="" className="img-fluid me-3" />
                            <div className="d-flex flex-column">
                                <h3 className="fw-bold d-grey mb-0">2,245,341</h3>
                                <p className="grey mb-0 ">Members</p>
                            </div>
                        </div>

                        <div className="d-flex align-items-center col-6  ">
                            <img src={Hands} alt="" className="img-fluid me-3" />
                            <div className="d-flex flex-column">
                                <h3 className="fw-bold d-grey mb-0">46,328</h3>
                                <p className="grey mb-0">Clubs</p>
                            </div>
                        </div>

                    </div>

                    <div className="d-flex justify-content-evenly ">

                        <div className="d-flex align-items-center col-6 ">
                            <img src={Finger} alt="" className="img-fluid me-3" />
                            <div className="d-flex flex-column">
                                <h3 className="fw-bold d-grey mb-0">828,867</h3>
                                <p className="grey mb-0">Event Bookings</p>
                            </div>
                        </div>

                        <div className="d-flex align-items-center col-6 ">
                            <img src={Wallet} alt="" className="img-fluid me-3" />
                            <div className="d-flex flex-column">
                                <h3 className="fw-bold d-grey mb-0">1,926,436</h3>
                                <p className="grey mb-0">Payments</p>
                            </div>
                        </div>


                    </div>
                </div>

                {/* <div className="container  ">
                    <div className="row d-flex justify-content-evenly">
                        <div className="col-6 col-md-3 d-flex align-items-center mb-3 mb-md-0">
                            <img src={Finger} alt="" className="img-fluid me-3" />
                            <div className="d-flex flex-column">
                                <h3 className="fw-bold d-grey mb-0">828,867</h3>
                                <p className="grey mb-0">Event Bookings</p>
                            </div>
                        </div>

                        <div className="col-6 col-md-3 d-flex align-items-center mb-3 mb-md-0">
                            <img src={Wallet} alt="" className="img-fluid me-3" />
                            <div className="d-flex flex-column">
                                <h3 className="fw-bold d-grey mb-0">1,926,436</h3>
                                <p className="grey mb-0">Payments</p>
                            </div>
                        </div>
                    </div>
                    <div className="row d-flex justify-content-evenly">
                        <div className=" col-md-3 d-flex align-items-center mb-3 mb-md-0">
                            <img src={Hands} alt="" className="img-fluid me-3" />
                            <div className="d-flex flex-column">
                                <h3 className="fw-bold d-grey mb-0">46,328</h3>
                                <p className="grey mb-0">Clubs</p>
                            </div>
                        </div>

                        <div className=" col-md-3 d-flex align-items-center mb-3 mb-md-0">
                            <img src={People} alt="" className="img-fluid me-3" />
                            <div className="d-flex flex-column">
                                <h3 className="fw-bold d-grey mb-0">2,245,341</h3>
                                <p className="grey mb-0">Members</p>
                            </div>
                        </div>
                    </div>
                </div> */}
            </section >


        </>
    )
}

export default Achievements