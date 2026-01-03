import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer
      style={{
        marginTop: "50px",
        padding: "30px 20px",
        backgroundColor: "#333",
        color: "white",
        textAlign: "center",
        borderTop: "1px solid #555",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "20px",
          textAlign: "left",
        }}
      >
        {/* logo and description */}
        <div>
          <h3 style={{ margin: "0 0 10px 0" }}>🐾 PawMart</h3>
          <p style={{ fontSize: "0.9em" }}>
            PawMart connects local pet owners and buyers for adoption and pet
            care products.PawMart connects local pet owners and buyers for
            adoption and pet care products.PawMart connects local pet owners and
            buyers for adoption and pet care products.PawMart connects local pet
            owners and buyers for adoption and pet care products.
          </p>
        </div>

        {/* links */}
        <div>
          <h4 style={{ marginBottom: "10px" }}>Useful Links</h4>
          <ul style={{ listStyle: "none", padding: 0 }}>
            <li>
              <Link to="/" style={{ color: "white", textDecoration: "none" }}>
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                style={{ color: "white", textDecoration: "none" }}
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                to="/terms"
                style={{ color: "white", textDecoration: "none" }}
              >
                Terms & Privacy
              </Link>
            </li>
          </ul>
        </div>

        {/* social contact */}
        <div>
          <h4 style={{ marginBottom: "10px" }}>Connect</h4>
          <p>Email: contact@pawmart.com</p>
          <p>Social Links (X, Facebook - to be added)</p>
        </div>
      </div>

      <div
        style={{
          borderTop: "1px solid #555",
          marginTop: "20px",
          paddingTop: "10px",
        }}
      >
        <p style={{ fontSize: "0.8em", margin: 0 }}>
          &copy; {new Date().getFullYear()} PawMart. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
