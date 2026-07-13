import StockTable from "../components/StockTable";

function ShopperDashboard() {
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

          <h2 className="fw-bold text-success">
            🛒 Shopper Dashboard
          </h2>

          <p className="text-muted">
            Browse available products and stock across all stores.
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

      {/* Information Cards */}

      <div className="row mb-4">

        <div className="col-md-4">

          <div className="card border-0 shadow-sm">

            <div className="card-body">

              <h5 className="text-primary">
                📦 Products
              </h5>

              <p className="text-muted mb-0">
                View available products.
              </p>

            </div>

          </div>

        </div>

        <div className="col-md-4">

          <div className="card border-0 shadow-sm">

            <div className="card-body">

              <h5 className="text-success">
                🏬 Stores
              </h5>

              <p className="text-muted mb-0">
                Check stock at each store.
              </p>

            </div>

          </div>

        </div>

        <div className="col-md-4">

          <div className="card border-0 shadow-sm">

            <div className="card-body">

              <h5 className="text-warning">
                📊 Inventory
              </h5>

              <p className="text-muted mb-0">
                Read-only stock information.
              </p>

            </div>

          </div>

        </div>

      </div>

      {/* Stock Table */}

      <div className="card border-0 shadow-sm">

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

export default ShopperDashboard;