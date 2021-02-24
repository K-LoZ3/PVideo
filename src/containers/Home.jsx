import React, { useEffect, useState } from 'react';

import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Footer from '../components/Footer';
import useInitialState from '../hooks/useInitialState';

import '../assets/styles/App.scss';

const API = 'http://localhost:3000/initialState';

const Home = () => {
  const initialState = useInitialState(API);
  const categories = Object.keys(initialState);

  return initialState.length === 0 ? <h1>Loading...</h1> : (
    <div className="App">
      <Header />
      <Search />
      {categories.map(categorie =>
        initialState[categorie]?.length > 0 &&
          <Categories key={categorie} title={categorie}>
            <Carousel>
              {initialState[categorie].map(item => 
                <CarouselItem key={item.id} {...item} />
              )}
            </Carousel>
          </Categories>
      )}
      <Footer />
    </div>
  );
}

export default Home;