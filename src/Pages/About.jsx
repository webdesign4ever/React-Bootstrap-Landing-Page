import Img from '../assets/Right_Side.gif'

const About = () => {
    return (
        <>
            <div style={{ height: "80px", }}></div>
            <section id="feature" className="container-fluid d-flex align-items-center py-4 pb-5 py-lg-0 flex-md-row flex-column ">

                <div className="col-lg-6 col-md-5 col-12 d-flex justify-content-center ">
                    <img src={Img} className="img-fluid" alt="" />
                </div>
                <div className="col-lg-6 col-md-7 col-12 text-md-start text-center ms-md-5 ms-lg-0">
                    <h2 className="d-grey fw-semibold ">About Us</h2>
                    <p className="grey py-2 col-md-10">We are a software development company with an excellent record of helping businesses to grow and access user-friendly IT solutions in the United States and around the globe. We enable our clients to progress by providing the highest professional standards of web solutions. A collaborative process with our clients makes both our employees and the customers share a comfortable space where smooth processing pours perfection into the end products.</p>
                </div>

            </section>
        </>
    )
}

export default About