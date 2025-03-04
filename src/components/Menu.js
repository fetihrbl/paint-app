import React from "react";
import "../App.css";

function Menu({ setLineColor, setLineWidth, setLineOpacity }) {
    return (
        <div className="menu-container">
          <div className="menu-item">
            <label>Brush Color</label>
            <input
              type="color"
              onChange={(e) => setLineColor(e.target.value)}
            />
          </div>
          <div className="menu-item">
            <label>Brush Width</label>
            <input
              type="range"
              min="3"
              max="20"
              defaultValue="5"
              onChange={(e) => setLineWidth(parseInt(e.target.value, 10))}
            />
          </div>
          <div className="menu-item">
            <label>Brush Opacity</label>
            <input
              type="range"
              min="1"
              max="100"
              defaultValue="100"
              onChange={(e) => setLineOpacity(e.target.value / 100)}
            />
          </div>
        </div>
      );
}

export default Menu