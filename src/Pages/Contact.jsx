import { useState } from "react";

const Contact = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !email || !message) {
            return alert('Please fill all fields');

        }
        // else if (!email) {
        //     alert('Please enter email');
        //     return
        // }
        // else if (!message) {
        //     alert('Please enter message')
        //     return
        // }
        else {
            setName('');
            setEmail('');
            setMessage('');
            alert('Form submitted succesfully');
            console.log("Name:", name);
            console.log("Email:", email);
            console.log("Message:", message);
        }

    }

    return (
        <form className="d-flex flex-column align-items-center" onSubmit={handleSubmit}>
            <div style={{ height: "100px", }}></div>
            <h2 className="text-center d-grey fw-semibold">Contact Us</h2>
            <div className="mb-3 col-lg-5 col-md-6 col-9">
                <label htmlFor="exampleFormControlInput1" className="form-label">Name</label>
                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="mb-3 col-lg-5 col-md-6 col-9">
                <label htmlFor="exampleFormControlInput2" className="form-label">Email </label>
                <input type="email" className="form-control" id="exampleFormControlInput2" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="mb-3 col-lg-5 col-md-6 col-9">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Message</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Enter Message" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
            </div>
            <button type="submit" className="btn-signup border-0 text-white my-4">Submit</button>
        </form>
    )
}

export default Contact