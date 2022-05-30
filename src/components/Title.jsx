import React from 'react'
import {GiChopsticks, GiHamburger, GiFullPizza, GiNoodles, GiBubblingBowl} from "react-icons/gi";
import { NavLink } from "react-router-dom"
import styled from "styled-components";

const Title = () => {
  return (
    <div className='container'>
        <div className="row mt-5 justify-content-center align-items-center">
            <div className="col-4 col-md-2">
                <NLink to="/cuisine/Chinese" className="me-3 mb-3">
                    <GiChopsticks />
                    <h6>Chinese</h6>
                </NLink>
            </div>
            <div className="col-4 col-md-2">
                <NLink to="/cuisine/American" className="me-3 mb-3">
                    <GiHamburger />
                    <h6>American</h6>
                </NLink>
            </div>
            <div className="col-4 col-md-2">
                <NLink to="/cuisine/Italian" className="me-3 mb-3">
                    <GiFullPizza />
                    <h6>Italian</h6>
                </NLink>
            </div>
            <div className="col-4 col-md-2">
                <NLink to="/cuisine/Thai" className="me-3 mb-3">
                    <GiNoodles />
                    <h6>Thai</h6>
                </NLink>
            </div>
            <div className="col-4 col-md-2">
                <NLink to="/cuisine/Indian" className="me-3 mb-3">
                    <GiBubblingBowl />
                    <h6>Indian</h6>
                </NLink>
            </div>                                        
        </div>
    </div>
  )
}

const NLink = styled(NavLink)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 70px;
    height: 70px;
    border-radius: 50%;
    background: #414141;
    color: white;
    text-decoration: none;
    :hover {
        color: white;
        background: #198754;
        transition: .5s;
    }
    &.active {
        background: #198754;
    }
    h6 {
        font-size: .7rem;
    }
    svg {
        margin: 0;
        padding: 0;
    }
`

export default Title