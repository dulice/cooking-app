import "bootstrap"
import React , {useState, useEffect} from "react";
import {GiChopsticks, GiHamburger, GiFullPizza, GiNoodles, GiBubblingBowl} from "react-icons/gi";
import { BsSearch } from "react-icons/bs"
import styled from "styled-components";
import { NavLink, useNavigate} from "react-router-dom"

const Nav = () => {
    const navigate = useNavigate();
    const [search, setSearch] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        navigate("searched/" + search);
    }
  return (
    <StickNav className="container-fluid shadow p-2">
        <div className="container">              
            <div className="d-flex justify-content-between align-items-center">
                <div>
                    <FormStyle onSubmit={handleSubmit}>
                        < BsSearch />
                        <input 
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            type="text" placeholder="Search Recipe..." className="ms-2"/>
                    </FormStyle>
                </div>
                <div className="d-flex">
                    <NLink to="/cuisine/Chinese" className="me-3">
                        <GiChopsticks />
                        <h6>Chinese</h6>
                    </NLink>
                    <NLink to="/cuisine/American" className="me-3">
                        <GiHamburger />
                        <h6>American</h6>
                    </NLink>
                    <NLink to="/cuisine/Italian" className="me-3">
                        <GiFullPizza />
                        <h6>Italian</h6>
                    </NLink>
                    <NLink to="/cuisine/Thai" className="me-3">
                        <GiNoodles />
                        <h6>Thai</h6>
                    </NLink>
                    <NLink to="/cuisine/Indian" className="me-3">
                        <GiBubblingBowl />
                        <h6>Indian</h6>
                    </NLink>
                </div>
            </div>
        </div>
    </StickNav>
  )
}

const NLink = styled(NavLink)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 70px;
    height: 70px;
    margin-left: 3rem;
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
const FormStyle = styled.form`
    display: flex;
    max-width: 300px;
    overflow: hidden;
    align-items: center;
    background: #313131;
    padding: .5rem 1rem;
    color: white;
    border-radius: 2rem;
    input {
        outline: none;
        border: none;
        background-color: transparent;
        text-decoration: none;
        color: white;
        user-select: none;
    }
`

const StickNav = styled.div`  
    position: sticky;
    top: 0;
    width: 100%;
    background: white;
    z-index: 2000;
`

export default Nav