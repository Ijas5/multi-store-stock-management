import { useEffect, useState } from "react";
import { getProducts } from "../services/productService";
import { getStores } from "../services/storeService";
import { adjustStock } from "../services/stockService";

function AdjustStockForm() {
  const [products, setProducts] = useState([]);
  const [stores, setStores] = useState([]);

  const [form, setForm] = useState({
    product: "",
    store: "",
    quantityChange: "",
  });

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const productRes = await getProducts();
      const storeRes = await getStores();

      setProducts(productRes.data.data);
      setStores(storeRes.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await adjustStock({
        ...form,
        quantityChange: Number(form.quantityChange),
      });

      alert(res.data.message);

      setForm({
        product: "",
        store: "",
        quantityChange: "",
      });

    } catch (err) {
      alert(err.response?.data?.message || "Failed to adjust stock");
    }
  };

  return (
    <div style={{ marginTop: "30px" }}>
      <h2>Adjust Stock</h2>

      <form onSubmit={handleSubmit}>

        <select
          name="product"
          value={form.product}
          onChange={handleChange}
          required
        >
          <option value="">Select Product</option>

          {products.map((product) => (
            <option key={product._id} value={product._id}>
              {product.name}
            </option>
          ))}

        </select>

        <br /><br />

        <select
          name="store"
          value={form.store}
          onChange={handleChange}
          required
        >
          <option value="">Select Store</option>

          {stores.map((store) => (
            <option key={store._id} value={store._id}>
              {store.name}
            </option>
          ))}

        </select>

        <br /><br />

        <input
          type="number"
          name="quantityChange"
          placeholder="Quantity (+ or -)"
          value={form.quantityChange}
          onChange={handleChange}
          required
        />

        <br /><br />

        <button type="submit">
          Adjust Stock
        </button>

      </form>
    </div>
  );
}

export default AdjustStockForm;