import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import HeroImg from "../image/hero.jpg"
import { Link } from 'react-router-dom';
import { AiOutlineRight} from "react-icons/ai"

const Hero = () => {
    
  return (
    <div className="container-fluid vh-100">
        <div className="container">
            <div className="row justify-content-between align-items-center">
                <div className="col-12 col-md-6 mt-5 mt-md-0">
                    
                    <div>
                        <h1 className="text-uppercase text-success">Category</h1>
                        <p className="text-capitalize">Helping you cook a variety of food all over the world</p>
                        <Link to="/cuisine/Chinese">
                            <button className="btn btn-outline-success">
                                <span className="text-uppercase me-2">explore</span>
                                < AiOutlineRight />
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="col-12 col-md-6">
                    <img src={HeroImg} alt="" className="img-responsive w-100" />
                </div>
                <div className="col-12">
                    <div className="row justify-content-center ">
                        <div className="col-12 col-md-3 text-center border bg-success shadow mx-3 p-3 rounded">
                            <h1 className="text-white">200+</h1>
                            <p className="text-white">Recipes</p>
                        </div>
                        <div className="col-12 col-md-3 text-center border bg-success shadow mx-3 p-3 rounded">
                            <h1 className="text-white">30+</h1>
                            <p className="text-white">Countries</p>
                        </div>
                        <div className="col-12 col-md-3 text-center border bg-success shadow mx-3 p-3 rounded">
                            <h1 className="text-white">100+</h1>
                            <p className="text-white">Contributer</p>
                        </div>
                       
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
export default Hero