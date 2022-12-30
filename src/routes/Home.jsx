import React from 'react'
import Hero from '../components/Home/Hero'
import Methodology from '../components/Home/Methodology'
import TeamWork from '../components/Home/TeamWork'
import OurTeam from '../components/Home/OurTeam'
import Accesibility from '../components/Home/Accesibility'
import NavBar from '../components/Home/NavBar'
import Footer from '../components/common/Footer'

function Home() {
    return (
        <div className='home'>
            <NavBar />
            <Hero />
            <Methodology />
            <TeamWork />
            {/* <Accesibility /> */}
            <OurTeam />
            <Footer />
        </div>
    )
}

export default Home