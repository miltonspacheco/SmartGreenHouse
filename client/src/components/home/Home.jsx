import React from 'react'
import "./home.css"
import logo1 from "../../assets/logo1.png"

const Home = () => {
  return (
        <section className="home section" id="home">
            <div className="home__container container grid">
                <div className="midpage grid">
                    <div className="homeLeft">
                        <h1>Sistema de Relatórios</h1>
                        <p>XXXXXXXXXXXXXXXXXXXXXXXXXXXX</p>
                    </div>
                    <div className="homeRight">
                        <img src={logo1} alt="logo1" />
                    </div>
                </div>
            </div>

        </section>
  )
}

export default Home