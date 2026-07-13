import { useState } from "react";
import { createStore } from "../services/storeService";

function StoreForm({ refreshStores }) {
  const [form, setForm] = useState({
    name: "",
    location: "",
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
      const res = await createStore(form);

      alert(res.data.message);

      setForm({
        name: "",
        location: "",
      });

      if (refreshStores) {
        refreshStores();
      }

    } catch (err) {
      alert(err.response?.data?.message || "Failed to create store");
    }
  };

  return (
    <div style={{ marginTop: "30px" }}>
      <h2>Create Store</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Store Name"
          value={form.name}
          onChange={handleChange}
          required
        />

        <br /><br />

        <input
          type="text"
          name="location"
          placeholder="Location"
          value={form.location}
          onChange={handleChange}
          required
        />

        <br /><br />

        <button type="submit">
          Save Store
        </button>
      </form>
    </div>
  );
}

export default StoreForm;