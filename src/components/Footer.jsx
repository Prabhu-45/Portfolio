import React from 'react';

export default function Footer() {
  return (
    <>
      <footer>
        <div className="ft-copy">&copy; 2026 Designed &amp; developed by <span>Prabhu Prasad Mishra</span>.</div>
      </footer>
      <button className="ft-back" aria-label="Back to top">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="19" x2="12" y2="5"></line><polyline points="5 12 12 5 19 12"></polyline></svg>
      </button>
    </>
  );
}
