import Hero from "../components/Hero"
import Clients from "../components/Clients"
import Community from "../components/Community"
import Unlock from "../components/Unlock"
import Achievements from "../components/Achievements"
import Calender from "../components/Calender"
import Customer from "../components/Customer"
import Updates from "../components/Updates"
import Footer from "../components/Footer"

const Home = () => {
    return (
        <div>
            <Hero />
            <Clients />
            <Community />
            <Unlock />
            <Achievements />
            <Calender />
            <Customer />
            <Updates />
            <Footer />
        </div>
    )
}

export default Home