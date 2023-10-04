import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Card from '../components/card/Card';

const Characters = () => {
  const [comics, setComics] = useState();

  const fetchMarvelData = async () => {
    const marvelData = await axios.get(
      'http://gateway.marvel.com/v1/public/characters?ts=1&apikey=e6c9c435b2749b7e32c08cc5177f6440&hash=ae369e887c2a25835770d3b084a3707c'
    );
    if (marvelData) {
      setComics(marvelData.data.data.results);
    }
  };
  useEffect(() => {
    fetchMarvelData();
     }, []);
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 p-8">
        {comics?.map((item, index) => (
          <Card comics={item} key={index} />
        ))}
      </div>
    </>
  );
};

export default Characters;
