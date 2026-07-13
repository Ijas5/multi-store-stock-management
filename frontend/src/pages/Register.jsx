import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../services/api";

function Register() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "shopper",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const res = await api.post("/auth/register", form);

      alert(res.data.message || "Registration Successful");

      setForm({
        name: "",
        email: "",
        password: "",
        role: "shopper",
      });

      navigate("/login");
    } catch (err) {
      alert(err.response?.data?.message || "Registration Failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="container-fluid d-flex justify-content-center align-items-center"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg,#2563EB,#1E40AF)",
      }}
    >
      <div
        className="card shadow-lg border-0"
        style={{
          width: "430px",
          borderRadius: "18px",
        }}
      >
        <div className="card-body p-4">

          <div className="text-center mb-4">

            <div style={{ fontSize: "45px" }}>
              📦
            </div>

            <h2 className="fw-bold mt-2">
              Create Account
            </h2>

            <p className="text-muted mb-0">
              Multi-Store Stock Management
            </p>

          </div>

          <form onSubmit={handleSubmit}>

            <div className="mb-3">
              <label className="form-label fw-semibold">
                Full Name
              </label>

              <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Enter your full name"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label fw-semibold">
                Email Address
              </label>

              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="Enter your email"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label fw-semibold">
                Password
              </label>

              <input
                type="password"
                name="password"
                className="form-control"
                placeholder="Enter your password"
                value={form.password}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-4">
              <label className="form-label fw-semibold">
                Account Type
              </label>

              <select
                name="role"
                className="form-select"
                value={form.role}
                onChange={handleChange}
              >
                <option value="shopper">
                  Customer
                </option>

                <option value="admin">
                  Administrator
                </option>
              </select>
            </div>

            <button
              type="submit"
              className="btn btn-success w-100"
              disabled={loading}
            >
              {loading ? "Creating Account..." : "Create Account"}
            </button>

          </form>

          <div className="text-center mt-4">

            <span className="text-muted">
              Already have an account?
            </span>

            <Link
              to="/login"
              className="fw-bold text-decoration-none ms-2"
            >
              Sign In
            </Link>

          </div>

          <hr />

          <p
            className="text-center text-muted mb-0"
            style={{ fontSize: "12px" }}
          >
            © 2026 Multi-Store Stock Management
          </p>

        </div>
      </div>
    </div>
  );
}

export default Register;