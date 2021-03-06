import React, {useState, useEffect} from 'react'
import '@splidejs/splide/dist/css/splide.min.css';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import styled from 'styled-components'
import { FaHeartbeat } from 'react-icons/fa'
import { Link } from 'react-router-dom';

const Popular = () => {
    const [popular, setPopular] = useState([]);
    const fetchPopular = async () => {
        const res = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`);
        const data = await res.json();
        // console.log(data.recipes);
        setPopular(data.recipes);
    }
    useEffect(() => {
        fetchPopular();
    },[]);

  return (
    <div className="container my-5">
        <h4 className="text-uppercase">Popular Recipes</h4>
        <Splide
          options = { {
                type         : 'loop',
                perPage      : 4,
                breakpoints: {
                  830: {
                    perPage: 3
                  },
                  640: {
                    perPage: 1
                  }
                },
                pauseOnHover : false,
                resetProgress: false,
                pagination: false,
                gap: '1rem',
                autoplay: true
            }}
        >
          {popular.map((item) => {
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
                  </div>
                </Link>
              </Card>
            )
          })}
        </Splide>
    </div>
  )
}

const Card = styled(SplideSlide)`
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

export default Popular