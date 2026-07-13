import { useState } from "react";
import { createProduct } from "../services/productService";

function ProductForm({ refreshProducts }) {
  const [form, setForm] = useState({
    name: "",
    sku: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await createProduct(form);

      alert(res.data.message);

      setForm({
        name: "",
        sku: "",
      });

      if (refreshProducts) {
        refreshProducts();
      }

    } catch (err) {
      alert(err.response?.data?.message || "Failed to create product");
    }
  };

  return (
    <div>
      <h2>Create Product</h2>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          name="name"
          placeholder="Product Name"
          value={form.name}
          onChange={handleChange}
          required
        />

        <br /><br />

        <input
          type="text"
          name="sku"
          placeholder="SKU"
          value={form.sku}
          onChange={handleChange}
          required
        />

        <br /><br />

        <button type="submit">
          Save Product
        </button>

      </form>
    </div>
  );
}

export default ProductForm;