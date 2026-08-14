import React from 'react';

export default function Cursor() {
  return (
    <>
      <div id="cursor-container">
        <div className="cursor-dot" style={{'width': '7px', 'height': '7px', 'opacity': '1.0', 'background': 'var(--accent)'}}></div>
        <div className="cursor-dot" style={{'width': '5.8px', 'height': '5.8px', 'opacity': '0.85', 'background': 'var(--accent)'}}></div>
        <div className="cursor-dot" style={{'width': '4.6px', 'height': '4.6px', 'opacity': '0.7', 'background': 'var(--accent)'}}></div>
        <div className="cursor-dot" style={{'width': '3.4px', 'height': '3.4px', 'opacity': '0.55', 'background': 'var(--accent)'}}></div>
        <div className="cursor-dot" style={{'width': '2.2px', 'height': '2.2px', 'opacity': '0.4', 'background': 'var(--accent)'}}></div>
        <div className="cursor-dot" style={{'width': '1.0px', 'height': '1.0px', 'opacity': '0.25', 'background': 'var(--accent)'}}></div>
      </div>
    </>
  );
}
