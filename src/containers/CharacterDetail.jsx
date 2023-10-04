import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CharacterDetail = () => {
  const [charaterDetails, setCharacterDetails] = useState([]);
  const params = useParams();
  const id = params.id;

  const fetchCharacterDetails = async () => {
    const characterData = await axios.get(
      `http://gateway.marvel.com/v1/public/characters/${id}?ts=1&apikey=e6c9c435b2749b7e32c08cc5177f6440&hash=ae369e887c2a25835770d3b084a3707c`
    );
    setCharacterDetails(characterData.data.data.results);
  };
  useEffect(() => {
    fetchCharacterDetails();
  }, []);

  return (
    <>
      {charaterDetails.map((item, index) => (
        <>
          <div className="p-5 w-full flex max-md:flex-col">
            <div className=" bg-cover bg-center  border-2 mr-3  max-md:mb-5 ">
              <img
                src={`${item.thumbnail.path}.${item.thumbnail.extension}`}
                alt="Image"
                width={600}
                height={400}
                className="max-md:w-full "
              />
            </div>
            <div className="py-5 px-10 w-11/12 bg-slate-50 max-sm:w-full max-md:w-full">
              <h2 className="text-md font-bold text-gray-500">
                Character Details
              </h2>
              <h3 className="mt-1  text-3xl font-bold">{item.name}</h3>
              <p className="mt-5 ml-3">
                {item.description ? (
                  item.description
                ) : (
                  <h3 className="font-bold text-red-400">
                    ! Description not available
                  </h3>
                )}
              </p>
              <hr className="my-5" />
              <p className="mb-5 font-bold flex flex-wrap">
                Comics Appeared In:
                {item?.comics?.items?.map((item, index) => (
                  <span
                    className="ml-2 bg-orange-500 rounded-lg py-1 px-2 mb-2 text-white text-sm "
                    key={index}
                  >
                    {item.name}
                  </span>
                ))}
              </p>
              <hr className="my-5" />
              <p className="font-bold flex flex-wrap ">
                Series:
                {item?.series?.items?.map((item, index) => (
                  <span
                    className="ml-2 bg-orange-500 rounded-lg py-1 px-2 mb-2 text-white text-sm "
                    key={index}
                  >
                    {item.name}
                  </span>
                ))}
              </p>
            </div>
          </div>
        </>
      ))}
      ;
    </>
  );
};

export default CharacterDetail;
