import { useEffect, useState } from "react";
import { getProducts } from "../services/productService";
import { getStores } from "../services/storeService";
import { transferStock } from "../services/stockService";

function TransferStockForm() {
  const [products, setProducts] = useState([]);
  const [stores, setStores] = useState([]);

  const [form, setForm] = useState({
    product: "",
    fromStore: "",
    toStore: "",
    quantity: "",
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
      const res = await transferStock({
        ...form,
        quantity: Number(form.quantity),
      });

      alert(res.data.message);

      setForm({
        product: "",
        fromStore: "",
        toStore: "",
        quantity: "",
      });

    } catch (err) {
      alert(err.response?.data?.message || "Transfer failed");
    }
  };

  return (
    <div style={{ marginTop: "30px" }}>
      <h2>Transfer Stock</h2>

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
          name="fromStore"
          value={form.fromStore}
          onChange={handleChange}
          required
        >
          <option value="">From Store</option>

          {stores.map((store) => (
            <option key={store._id} value={store._id}>
              {store.name}
            </option>
          ))}
        </select>

        <br /><br />

        <select
          name="toStore"
          value={form.toStore}
          onChange={handleChange}
          required
        >
          <option value="">To Store</option>

          {stores.map((store) => (
            <option key={store._id} value={store._id}>
              {store.name}
            </option>
          ))}
        </select>

        <br /><br />

        <input
          type="number"
          name="quantity"
          placeholder="Quantity"
          value={form.quantity}
          onChange={handleChange}
          required
        />

        <br /><br />

        <button type="submit">
          Transfer Stock
        </button>

      </form>
    </div>
  );
}

export default TransferStockForm;