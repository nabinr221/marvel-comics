import { useEffect, useState } from 'react';
import TableComponents from '../components/card/TableComponents';
import axios from 'axios';
import BarDiagram from '../components/chart/BarDiagram/BarDiagram';
// import 'dotenv/config';

const Home = () => {
  const [comics, setComics] = useState([]);
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const fetchMarvelData = async () => {
    const marvelData = await axios.get(
      `http://gateway.marvel.com/v1/public/characters?limit=100&ts=1&apikey=e6c9c435b2749b7e32c08cc5177f6440&hash=ae369e887c2a25835770d3b084a3707c`
    );
    if (marvelData) {
      setComics(marvelData.data.data.results);
    }
  };
  useEffect(() => {
    fetchMarvelData();
  }, []);

  //  code for pagination
  const recordsPerPage = 20;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;

  // ============= code for filter items =============
  const filterRecord = comics.filter((item) => {
    return search.toLowerCase() === ''
      ? item
      : item.name.toLowerCase().includes(search);
  });

  const records = filterRecord.slice(firstIndex, lastIndex);
  const totaPpage = Math.ceil(filterRecord.length / recordsPerPage);
  const numbers = [...Array(totaPpage + 1).keys()].slice(1);

  const prevPage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  const changeCPage = (id) => {
    setCurrentPage(id);
  };
  const nextPage = () => {
    if (currentPage !== totaPpage) {
      setCurrentPage(currentPage + 1);
    }
  };

  // code for barchart
  const data = records
    .filter((item) => item.comics.available)
    .map((item) => {
      const availableComics = item.comics.available;
      const name = item.name;
      return {
        name: name,
        availableComics: availableComics,
      };
    });

  return (
    <div className="max-w-full border-2">
      <div className="py-2 px-5 ">
        <BarDiagram data={data} />
      </div>
      <div className=" px-10 mt-9 flex flex-row justify-between ">
        <h3 className="font-bold border-b-2 w-fit text-lg">Charactors</h3>
        <div className="border-2 mr-5">
          <form>
            <input
              placeholder="Search..."
              onChange={(e) => setSearch(e.target.value)}
              className="py-2  px-5 border-none focus:border-none"
            />
          </form>
        </div>
      </div>
      <div className="w-full">
        <TableComponents
          comics={comics}
          search={search}
          records={records}
          numbers={numbers}
          prevPage={prevPage}
          changeCPage={changeCPage}
          nextPage={nextPage}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
};

export default Home;
