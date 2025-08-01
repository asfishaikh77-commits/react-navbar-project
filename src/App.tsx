import React from "react";
import Navbar from "./Navbar";

export default function App() {
  return (
    <div>
      <Navbar />
      <div style={{ padding: "2rem" }}>
        <h1>Welcome to My Website</h1>
        <p>This is a demo of a redesigned desktop navbar.</p>
      </div>
    </div>
  );
}
