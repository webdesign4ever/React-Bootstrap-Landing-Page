import Illustration from "../assets/images/Illustration.png"



const Hero = () => {
    return (
        <main className="bg-main container-fluid d-flex pt-md-5 py-md-0 py-5  flex-md-row flex-column-reverse">
            <section className="col-md-7 d-flex flex-column justify-content-center align-items-center pt-md-0 pt-5">
                <div className="text-md-start text-center">
                    <h1 className="d-grey fw-semibold">Lessons and insights <span className="green d-block">from 8 years</span></h1>
                    <p className="grey">Where to grow your business as a photographer: site or social media?</p>
                    <button className="btn-register text-white border-0 ">Register</button>
                </div>
            </section>
            <section className="col-md-5 py-5">
                <img src={Illustration} className="img-fluid" alt="" />
            </section>
        </main>
    )
}

export default Hero