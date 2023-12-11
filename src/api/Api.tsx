import axios from "axios";
import { useState, useEffect } from "react";

function Api() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/products")
      .then((response) => setData(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <section>
        <div className="bg-red-300 py-[10px] mx-w-[1250px] border">
          <div className="flex justify-evenly gap-[20px] flex-wrap items-center">
            {data.map((item) => (
              <div key={item.id}>
                <img
                  className="w-[250px] h-[200px]"
                  src={item.thumbnail}
                  alt=""
                />
                <div className="flex justify-between py-[20px]">
                  <p>Price: ${item.price}</p> <span>{item.description}</span>
                </div>
                <button>Add to Cart</button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Api;
