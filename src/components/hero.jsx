import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import HeroImg from "../image/hero.jpg"
import { NavLink } from 'react-router-dom';
import { AiOutlineRight} from "react-icons/ai"
import { GiBubblingBowl } from "react-icons/gi"

const Hero = () => {
    
  return (
    <div className="container-fluid vh-100">
        <div className="container">
            <NavLink to="/" className="text-success text-decoration-none d-flex align-items-center mt-3">
                <GiBubblingBowl className="fs-3" />
                <h4 className="ms-3">Recipes</h4>
            </NavLink>
            <div className="row justify-content-between align-items-center">
                <div className="col-12 col-md-6">
                    
                    <div>
                        <h1 className="text-uppercase text-success">Category</h1>
                        <p className="text-capitalize">Helping you cook a variety of food all over the world</p>
                        <div to="/home">
                            <button className="btn btn-outline-success">
                                <span className="text-uppercase me-2">explore</span>
                                < AiOutlineRight />
                            </button>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6">
                    <img src={HeroImg} alt="" className="img-responsive w-100" />
                </div>
                <div className="col-12">
                    <div className="row justify-content-center ">
                        <div className="col-12 col-md-4 text-center">
                            <h1 className="text-success">200+</h1>
                            <p className="">Recipes</p>
                        </div>
                        <div className="col-12 col-md-4 text-center">
                            <h1 className="text-success">30+</h1>
                            <p className="">Countries</p>
                        </div>
                        <div className="col-12 col-md-4 text-center">
                            <h1 className="text-success">100+</h1>
                            <p className="">Contributer</p>
                        </div>
                       
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
export default Hero