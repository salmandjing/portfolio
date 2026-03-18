import React from 'react';
import { Link } from 'react-router-dom';
import './LockIn.css';

function LockInPrivacy() {
  return (
    <div className="lockin-page">
      <div className="lockin-container lockin-legal">
        <h1 className="lockin-title">Privacy Policy</h1>
        <p className="lockin-subtitle">Lock-In Bot</p>
        <p className="lockin-effective">Effective Date: March 2026</p>

        <div className="lockin-content">
          <h2>1. Information We Collect</h2>
          <p>
            When you sign up for Lock-In Bot, we collect the following information:
          </p>
          <ul>
            <li><strong>Phone number:</strong> Used to send you SMS check-in messages.</li>
            <li><strong>Message content:</strong> Your replies to check-in messages are used to provide AI-powered personalized accountability and context for future interactions.</li>
          </ul>

          <h2>2. How We Use Your Data</h2>
          <p>
            Your data is used solely to provide the Lock-In Bot service:
          </p>
          <ul>
            <li>Sending scheduled SMS check-in messages and reminders.</li>
            <li>Personalizing accountability prompts based on your responses and goals.</li>
            <li>Improving the quality and relevance of AI-generated messages.</li>
          </ul>

          <h2>3. Data Storage &amp; Security</h2>
          <p>
            Your data is stored securely on Amazon Web Services (AWS) infrastructure.
            All data is encrypted both in transit and at rest. Message history and
            associated data are retained for a maximum of 90 days, after which they
            are automatically deleted.
          </p>

          <h2>4. Third-Party Sharing</h2>
          <p>
            We do not sell, rent, or share your personal information with third parties.
            Your data is used exclusively to operate the Lock-In Bot service.
          </p>

          <h2>5. How to Opt Out</h2>
          <p>
            You can stop receiving messages at any time by:
          </p>
          <ul>
            <li>Replying <strong>STOP</strong> to any Lock-In Bot message.</li>
            <li>Contacting us at the address below.</li>
          </ul>
          <p>
            Upon opting out, your data will be deleted within 30 days.
          </p>

          <h2>6. Contact</h2>
          <p>
            If you have questions about this privacy policy or your data, please
            contact us at <a href="https://djsalman.dev">djsalman.dev</a>.
          </p>
        </div>

        <div className="lockin-links">
          <Link to="/lockin">Back to Lock-In Bot</Link>
          <span className="lockin-divider">|</span>
          <Link to="/lockin/terms">Terms of Service</Link>
        </div>

        <footer className="lockin-footer">
          <p>&copy; 2026 Lock-In Bot</p>
        </footer>
      </div>
    </div>
  );
}

export default LockInPrivacy;
