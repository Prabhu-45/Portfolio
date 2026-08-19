import React from 'react';

export default function Contact() {
  return (
    <>
      <section id="contact">
  <div className="ct-bg"></div>
  <div className="ct-watermark" data-text="PRABHU PRASAD MISHRA">PRABHU PRASAD MISHRA</div>
  <div className="ct-inner">
    
    <div className="ct-left">
      <div className="ct-info">
        <div className="ct-info-item">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
          prabhuprasadmishrawork@gmail.com
        </div>
        <div className="ct-info-item">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
          +91-9692839751
        </div>
        <div className="ct-info-item">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
          Bhubaneswar, India
        </div>
      </div>

      <form className="ct-form" onSubmit={(e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');
        const text = `Hi Prabhu,\n\nMy name is ${name} (${email}).\n\n${message}`;
        
        // Use window.location.href for deep linking to the native SMS app
        window.location.href = `sms:+919692839751?body=${encodeURIComponent(text)}`;
      }}>
        <input type="text" name="name" placeholder="Name" className="ct-input" required />
        <input type="email" name="email" placeholder="Email" className="ct-input" required />
        <textarea name="message" placeholder="Message" className="ct-textarea" rows="4" required></textarea>
        
        <button type="submit" className="ct-submit">Send via SMS</button>
      </form>
    </div>

    <div className="ct-card">
      <div className="ct-card-icon">
        <svg viewBox="0 0 24 24"><path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
      </div>
      <div className="ct-header-wrap">
        <div className="ct-status-dot-wrap">
          <div className="ct-status-pulse"></div>
          <div className="ct-status-dot"></div>
        </div>
        <h2 className="ct-card-title">Drop Me a Message</h2>
      </div>
      <p className="ct-card-desc">Prefer email clients or direct messaging? Reach out through the links below to connect instantly.</p>
      
      <div className="ct-btn-group">
        <a href="mailto:prabhuprasadmishrawork@gmail.com?subject=Portfolio%20Enquiry" target="_blank" rel="noopener noreferrer" className="ct-btn primary">
          <svg viewBox="0 0 24 24"><path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
          Send me an email
        </a>
        <a href="https://wa.me/919692839751?text=Hi%20Prabhu%2C%20I%20found%20your%20portfolio%20and%20would%20love%20to%20connect!" target="_blank" className="ct-btn secondary">
          <svg viewBox="0 0 24 24"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0012.04 2zm5.78 13.9c-.24.68-1.24 1.25-1.74 1.32-.48.06-.97.11-3.08-.76-2.69-1.12-4.41-3.86-4.55-4.04-.13-.18-1.09-1.45-1.09-2.76 0-1.31.68-1.96.93-2.22.25-.26.54-.33.72-.33h.52c.16 0 .37-.06.57.43.21.5.72 1.77.79 1.91.07.14.12.31.02.5-.1.19-.15.31-.3.49-.15.17-.32.39-.46.53-.16.15-.32.32-.14.64.18.31.81 1.33 1.74 2.16 1.2 1.07 2.21 1.4 2.52 1.56.32.16.51.13.7-.09.19-.22.82-.95 1.04-1.28.22-.33.44-.28.74-.17.3.11 1.91.9 2.26 1.08.36.18.59.26.68.41.09.15.09.87-.15 1.55z"/></svg>
          MESSAGE ON WHATSAPP
        </a>
      </div>

      <div className="ct-divider">or connect via</div>

      <div className="ct-social-grid">
        <a href="https://github.com/Prabhu-45" target="_blank" className="ct-social-btn" aria-label="GitHub Profile">
          <svg viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.11.82-.26.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.74.084-.726.084-.726 1.205.08 1.838 1.23 1.838 1.23 1.07 1.83 2.809 1.3 3.495.99.108-.77.417-1.3.76-1.6-2.665-.3-5.466-1.33-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.3-.54-1.52.105-3.17 0 0 .805-.26 2.63 1.01.765-.21 1.58-.32 2.39-.32.81 0 1.62.11 2.39.32 1.825-1.27 2.63-1.01 2.63-1.01.55 1.4.2 2.47.1 2.72.77.84 1.235 1.91 1.235 3.22 0 4.61-2.805 5.62-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.3 24 12c0-6.63-5.37-12-12-12z"/></svg>
        </a>
        <a href="https://linkedin.com/in/prabhu-prasad-mishra" target="_blank" className="ct-social-btn" aria-label="LinkedIn Profile">
          <svg viewBox="0 0 24 24"><path d="M22.23 0H1.77C.8 0 0 .77 0 1.72v20.56C0 23.23.8 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.2 0 22.23 0zM7.12 20.45H3.56V9H7.12v11.45zM5.34 7.43c-1.14 0-2.06-.92-2.06-2.06 0-1.14.92-2.06 2.06-2.06 1.14 0 2.06.92 2.06 2.06 0 1.14-.92 2.06-2.06 2.06zm15.11 13.02h-3.56v-5.6c0-1.34-.03-3.05-1.86-3.05-1.86 0-2.14 1.45-2.14 2.95v5.7h-3.56V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29z"/></svg>
        </a>
      </div>

    </div>
  </div>
</section>
    </>
  );
}
