import { useEffect, useState } from "react";
import { getStock } from "../services/stockService";

function StockTable() {
  const [stock, setStock] = useState([]);
  const [threshold, setThreshold] = useState("");

  useEffect(() => {
    loadStock();
  }, []);

  const loadStock = async (value = "") => {
    try {
      const res = await getStock(value);
      console.log(res);
      
      setStock(res.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleFilter = () => {
    loadStock(threshold);
  };

  return (
    <div style={{ marginTop: "30px" }}>
      <h2>Stock List</h2>

      <input
        type="number"
        placeholder="Low Stock Threshold"
        value={threshold}
        onChange={(e) => setThreshold(e.target.value)}
      />

      <button
        onClick={handleFilter}
        style={{ marginLeft: "10px" }}
      >
        Filter
      </button>

      <br />
      <br />

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Product</th>
            <th>Store</th>
            <th>Quantity</th>
          </tr>
        </thead>

        <tbody>
          {stock.map((item) => (
            <tr key={item._id}>
              <td>{item.product?.name}</td>
              <td>{item.store?.name}</td>
              <td>{item.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StockTable;