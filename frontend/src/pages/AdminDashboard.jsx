import ProductForm from "../components/ProductForm";
import StoreForm from "../components/StoreForm";
import AdjustStockForm from "../components/AdjustStockForm";
import TransferStockForm from "../components/TransferStockForm";
import StockTable from "../components/StockTable";

function AdminDashboard() {
  return (
    <div
      className="container-fluid py-4"
      style={{
        minHeight: "100vh",
        background: "#f4f7fb",
      }}
    >
      {/* Header */}
      <div className="row mb-4">

        <div className="col-md-8">
          <h2 className="fw-bold text-primary">
            📦 Multi-Store Stock Management
          </h2>

          <p className="text-muted">
            Welcome, Administrator
          </p>
        </div>

        <div className="col-md-4 text-end">
          <button
            className="btn btn-danger"
            onClick={() => {
              localStorage.clear();
              window.location.href = "/login";
            }}
          >
            Logout
          </button>
        </div>

      </div>

      {/* First Row */}

      <div className="row">

        <div className="col-md-6 mb-4">

          <div className="card shadow-sm border-0">

            <div className="card-header bg-primary text-white">
              Create Product
            </div>

            <div className="card-body">
              <ProductForm />
            </div>

          </div>

        </div>

        <div className="col-md-6 mb-4">

          <div className="card shadow-sm border-0">

            <div className="card-header bg-success text-white">
              Create Store
            </div>

            <div className="card-body">
              <StoreForm />
            </div>

          </div>

        </div>

      </div>

      {/* Second Row */}

      <div className="row">

        <div className="col-md-6 mb-4">

          <div className="card shadow-sm border-0">

            <div className="card-header bg-warning">
              Adjust Stock
            </div>

            <div className="card-body">
              <AdjustStockForm />
            </div>

          </div>

        </div>

        <div className="col-md-6 mb-4">

          <div className="card shadow-sm border-0">

            <div className="card-header bg-info text-white">
              Transfer Stock
            </div>

            <div className="card-body">
              <TransferStockForm />
            </div>

          </div>

        </div>

      </div>

      {/* Stock Table */}

      <div className="card shadow-sm border-0">

        <div className="card-header bg-dark text-white">
          Current Stock
        </div>

        <div className="card-body">
          <StockTable />
        </div>

      </div>

    </div>
  );
}

export default AdminDashboard;