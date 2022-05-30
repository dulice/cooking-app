import "bootstrap"
import React , {useState} from "react";
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
            <div className="w-100">
                <FormStyle onSubmit={handleSubmit}>
                    < BsSearch />
                    <input 
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        type="text" placeholder="Search Recipe..." className="ms-2"/>
                </FormStyle>                
            </div>
        </div>
    </StickNav>
  )
}

const FormStyle = styled.form`
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