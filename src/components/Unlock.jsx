import UnlockImg from "../assets/images/Unlock.png"

const Unlock = () => {
    return (
        <section id="feature" className="container-fluid d-flex align-items-center py-4 pb-5 py-lg-0 flex-md-row flex-column ">

            <div className="col-md-5 col-12 d-flex justify-content-center ">
                <img src={UnlockImg} className="img-fluid" alt="" />
            </div>
            <div className="col-md-7 col-12 text-md-start text-center">
                <h2 className="d-grey fw-semibold ">The unseen of spending three <span className="d-md-block">years at Pixelgrade</span></h2>
                <p className="grey w-md-75 py-2 ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.</p>
                <button className="btn-learn border-0 text-white mt-3 ">Learn More</button>
            </div>

        </section>
    )
}

export default Unlock