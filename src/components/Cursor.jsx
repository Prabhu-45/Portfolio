import React from 'react';

export default function Cursor() {
  return (
    <>
      <div id="cursor-container">
        <div className="cursor-dot main-dot" style={{'width': '8px', 'height': '8px', 'background': 'var(--accent)'}}></div>
        <div className="cursor-dot ring-dot" style={{'width': '40px', 'height': '40px', 'background': 'transparent', 'border': '1px solid var(--accent)'}}></div>
      </div>
    </>
  );
}
