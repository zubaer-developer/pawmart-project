import { Link, NavLink } from "react-router-dom";

const user = false;

const Navbar = () => {
  // dynamic route
  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/pets-and-supplies">Pets & Supplies</NavLink>
      </li>
      {
        // after login
        user && (
          <>
            <li>
              <NavLink to="/add-listing">Add Listing</NavLink>
            </li>
            <li>
              <NavLink to="/my-listings">My Listings</NavLink>
            </li>
            <li>
              <NavLink to="/my-orders">My Orders</NavLink>
            </li>
          </>
        )
      }
    </>
  );

  return (
    <header
      style={{
        padding: "10px 20px",
        backgroundColor: "#eee",
        borderBottom: "1px solid #ccc",
      }}
    >
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* logo and name */}
        <div style={{ display: "flex", alignItems: "center" }}>
          <h1 style={{ margin: 0, fontSize: "1.5em" }}>🐾 PawMart</h1>
        </div>

        {/* navigation */}
        <ul style={{ listStyle: "none", display: "flex", gap: "20px" }}>
          {navLinks}
        </ul>

        {/* login and profile */}
        <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
          {user ? (
            // after login
            <div style={{ fontWeight: "bold" }}>Profile Avatar | Logout</div>
          ) : (
            // before login
            <>
              <Link
                to="/login"
                style={{ textDecoration: "none", color: "blue" }}
              >
                Login
              </Link>
              <Link
                to="/register"
                style={{ textDecoration: "none", color: "blue" }}
              >
                Register
              </Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
