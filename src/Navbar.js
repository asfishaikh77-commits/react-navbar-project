import React, { useState } from "react";

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  return (
    <nav style={styles.nav}>
      <div style={styles.logo}>MyWebsite</div>
      <ul style={styles.navItems}>
        <li style={styles.item}>
          <button
            onClick={() => toggleDropdown("services")}
            style={styles.button}
          >
            Services
          </button>
          {openDropdown === "services" && (
            <ul style={styles.dropdown}>
              <li>Web Design</li>
              <li>SEO</li>
              <li>Branding</li>
            </ul>
          )}
        </li>
        <li style={styles.item}>Portfolio</li>
        <li style={styles.item}>About</li>
        <li style={styles.item}>Contact</li>
      </ul>
    </nav>
  );
}

const styles = {
  nav: {
    backgroundColor: "#fff",
    padding: "1rem 2rem",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: {
    fontSize: "20px",
    fontWeight: "bold",
  },
  navItems: {
    listStyle: "none",
    display: "flex",
    gap: "1.5rem",
    margin: 0,
    padding: 0,
  },
  item: {
    position: "relative",
  },
  button: {
    background: "none",
    border: "none",
    cursor: "pointer",
    fontSize: "16px",
  },
  dropdown: {
    position: "absolute",
    top: "30px",
    left: 0,
    backgroundColor: "#fff",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
    listStyle: "none",
    padding: "0.5rem 1rem",
    margin: 0,
  },
};
