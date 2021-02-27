import React from 'react';
import { connect } from 'react-redux';

import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';

import '../assets/styles/App.scss';

const Home = ({ myList, trends, originals }) => {
  const list = [ myList, trends, originals ];
  const categories = ["Mi lista", "Tendencias", "Originales"]/* Object.keys(list) */;

  return (
    <>
      <Search />
      {categories.map((categorie, i) =>
        list[i]?.length > 0 &&
          <Categories key={i} title={categorie}>
            <Carousel>
              {list[i].map(item => 
                <CarouselItem key={item.id} {...item} />
              )}
            </Carousel>
          </Categories>
      )}
    </>
  );
}

const mapStateToProps = state => {
  return {
    myList: state.myList,
    trends: state.trends,
    originals: state.originals,
  }
}

export default connect(mapStateToProps, null)(Home);