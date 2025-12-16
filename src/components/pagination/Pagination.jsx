import { useEffect, useState } from "react";

const LIMIT = 30;

const Pagination = () => {
  const [totalPages, setTotalPages] = useState(0);
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  const getProductsData = async () => {
    try {
      const response = await fetch(
        `https://dummyjson.com/products?limit=${LIMIT}&skip=${currentPage * LIMIT}`
      );

      const data = await response.json();
      console.log("data is::",data)
      setTotalPages(Math.ceil(data.total / LIMIT));
      setProducts(data.products);
    } catch (err) {
      console.log("error is:::", err);
    }finally{
      console.log("finally is executed")
    }
  };

  useEffect(() => {
    getProductsData();
  }, [currentPage]);
// const newArr=[...Array(totalPages).keys()]
// console.log(newArr)
  return (
    <div className="w-3/4">
      {products.map((product) => (
        <div key={product.id}>
          <p className="text-md font-bold">{product.title}</p>
          <p className="text-xs">{product.description}</p>
        </div>
      ))}

      <div className="mt-4 flex gap-2">
        <button
          disabled={currentPage === 0}
          onClick={() => setCurrentPage((p) => p - 1)}
          className="px-3 py-1 border rounded"
        >
          Prev
        </button>

        <span>
          Page {currentPage + 1} of {totalPages}
        </span>

        <button
          disabled={currentPage + 1 === totalPages}
          onClick={() => setCurrentPage((p) => p + 1)}
          className="px-3 py-1 border rounded"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
