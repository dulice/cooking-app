import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { FaHeartbeat } from 'react-icons/fa';
import styled from 'styled-components';
import { motion } from 'framer-motion';
const Cuisine = () => {
  const [cuisine, setCuisine] = useState([]);
  const params = useParams();
  const fectchCategories = async (name) => {
        const res = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}`);
        const data = await res.json();
        // console.log(data.results);
        setCuisine(data.results);
    }
    useEffect(() => {
      fectchCategories(params.type);
    },[params.type])
  return (
    <Grid
      animate = {{ opacity: 1 }}
      initial = {{ opacity: 0 }}
      exit = {{ opacity: 0 }}
      transition = {{ duration: 1 }}
    >
      {cuisine.map((item) => {
            return (
              <Card className="shadow border" key={item.id}>
                <Link to={"/detail/" + item.id}>
                  <img src={item.image} alt="" />
                  <div>
                    <p>{item.title}</p>
                    <Information className="border rounded p-1 shadow">
                      <p className="text-muted">{item.healthScore}</p>
                      < FaHeartbeat />
                    </Information>
                  </div >
                </Link>
              </Card>
            )
          })}
    </Grid>
  )
}

const Grid = styled(motion.div)`
  padding-top: 2rem;
  display: grid;
   grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
`
const Card = styled.div`
  margin-bottom: 3rem;
  width: 300px;
  border-radius: 2rem;
  overflow: hidden;
  padding: 1rem;
  img {
     border-radius: 2rem;
    width: 100%
  }
  div {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin-top: 1rem;
  }
  h6 {
    width: 75%;
  }
  p {
    margin: 0;
  }
  a {
    text-decoration: none;
    color: black;
  }
`
const Information = styled.div`
display: flex;
justify-content: space-between;
align-itmes: center;
svg {
    color: red;
    margin-left: 10px;
    padding: 0;
  }
  p {
    margin: 0;
    padding: 0;
  }
`

export default Cuisine