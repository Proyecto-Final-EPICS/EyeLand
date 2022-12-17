import React from 'react'
import Hero from '../components/Home/Hero'
import Methodology from '../components/Home/Methodology'
import TeamWork from '../components/Home/TeamWork'
import OurTeam from '../components/Home/OurTeam'
import Accesibility from '../components/Home/Accesibility'

function Home() {
    return (
        <div>
            <Hero />
            <Methodology />
            <TeamWork />
            <Accesibility />
            <OurTeam />
        </div>
    )
}

export default Home