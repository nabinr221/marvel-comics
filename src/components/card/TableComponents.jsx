import { Link } from 'react-router-dom';
const TableComponents = ({
  records,
  numbers,
  prevPage,
  changeCPage,
  nextPage,
  currentPage,
}) => {
  return (
    <>
      <div className="relative py-2 w-full p-5  max-sm:p-1 max-sm:py-5">
        <table className=" text-sm  text-left border-2 text-gray-500 dark:text-gray-400  ">
          <thead className="text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                SN
              </th>
              <th scope="col" className="px-6 py-3">
                Thumbnail
              </th>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Description
              </th>
            </tr>
          </thead>
          <tbody>
            {records.map((item, index) => (
              <tr
                key={index}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <th
                  scope="row"
                  className="w-32 px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  <Link to={`/character/${item.id}`}> {index + 1}</Link>
                </th>
                <th
                  scope="row"
                  className="w-32 px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  <div className="w-fit  h-auto h-max-4: , bg-cover bg-center">
                    <Link to={`/character/${item.id}`}>
                      <img
                        src={`${item.thumbnail.path}.${item.thumbnail.extension}`}
                        alt="img"
                        className="w-full"
                      />
                    </Link>
                  </div>
                </th>
                <td className="px-6 py-4 font-bold">
                  <Link to={`/character/${item.id}`}> {item.name} </Link>
                </td>
                <td className="px-6 py-4">
                  <Link to={`/character/${item.id}`}>
                    {item.description ? (
                      item.description
                    ) : (
                      <h3 className="font-bold text-red-400">
                        ! Description not available
                      </h3>
                    )}
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/*        --- code for pagination  ---        */}
        <nav className="my-5 mx-auto flex justify-center">
          <ul className="flex items-center -space-x-px h-10 text-base">
            <li
              onClick={() => {
                prevPage();
              }}
              className="flex items-center justify-center px-4 h-10 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              <span className="sr-only">Previous</span>
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 1 1 5l4 4"
                />
              </svg>
            </li>

            {numbers.map((item, index) => (
              <li
                onClick={() => {
                  changeCPage(item);
                }}
                key={index}
                className={`flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white ${
                  currentPage === item ? 'active' : ''
                }`}
              >
                {item}
              </li>
            ))}

            <li
              onClick={() => {
                nextPage();
              }}
              className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              <span className="sr-only">Next</span>
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="m1 9 4-4-4-4"
                />
              </svg>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default TableComponents;
