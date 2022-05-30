import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import styled from "styled-components";
import { GiBowlOfRice } from "react-icons/gi"
import { MdAttachMoney } from "react-icons/md";
import { FaUserFriends } from "react-icons/fa";
import { motion } from 'framer-motion';

const Detail = () => { 
  const [details, setDetails] = useState([]);
  const [activeBtn, setActiveBtn] = useState("Instructions");
  const params = useParams();
    const fetchDetail = async (id) => {
        const res = await fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${process.env.REACT_APP_API_KEY}`);
        const data = await res.json();
        setDetails(data);
    }

    useEffect(() => {
      fetchDetail(params.id);
    },[params.id]);

  return (
    <motion.div
      animate = {{ y : 0}}
      initial = {{ y : 100}}
      exit = {{ y : 100}}
      transition = {{duration : .5}}
     className="container-fluid">
       <div className="container">
         <div className="row">
           <Layout className="col-12 col-lg-6 ">
             <img src={details.image} alt="" />
             <div className="mt-3 d-flex justify-content-center align-items-start text-center">
                
                <Icons className="bg-success">
                  <MdAttachMoney />
                <h6>$ {(details.pricePerServing / 100).toFixed(2)} per person</h6>
                </Icons>
                <Icons className="bg-success">
                  <FaUserFriends />
                <h6>{details.servings} people</h6>
                </Icons>
                <Icons className="bg-success text-white">
                  <GiBowlOfRice />
                  <h6>{details.dishTypes}</h6>                                
                </Icons>
             </div>
           </Layout>
             <Layout className="col-12 col-lg-6 ps-3 ">
               <div className="mb-3">
                 <button onClick={() => setActiveBtn("Instructions")} className={activeBtn === "Instructions" ? "active" : ""} >Instructions</button>
                  <button onClick={() => setActiveBtn("Ingredients")} className={activeBtn === "Ingredients" ? "active" : ""} >Ingredients</button>
               </div>
                  {activeBtn === "Instructions" && (
                    <div>
                      <p dangerouslySetInnerHTML={{__html: details.summary}}></p>
                      <p dangerouslySetInnerHTML={{__html: details.instructions}}></p>
                    </div>
                  )}
                  {activeBtn === "Ingredients" && (
                    <div>
                      <ul>
                        {details.extendedIngredients.map((extendedIngredient) => {
                          return (
                            <li key={extendedIngredient.id}>{extendedIngredient.original}</li>
                          )
                        })}
                      </ul>
                    </div>
                  )}
             </Layout>           
           </div>
       </div>
    </motion.div>
  )
}

const Layout = styled.div`
  margin-top: 2rem;
  .active {
    background-color:  #198754;
    color: white;
  }
  button {
    border: 1px solid #198754;
    padding: .5rem 1rem;
    margin-right: .5rem;
  }
`
const Icons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  margin: 1rem;
  border-radius: 2rem;
  svg {
    color: white;
    margin-bottom: .5rem;
    font-size: 1.5rem;
  }
  h6 {
    color: white;
    margin: 0;
  }
`


export default Detail