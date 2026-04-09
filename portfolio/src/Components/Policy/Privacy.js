import React from 'react';
import { Link } from 'react-router-dom';
import './Policy.css';

function Privacy() {
  return (
    <div className="policy-page">
      <div className="policy-container">
        <h1 className="policy-title">Privacy Policy</h1>
        <p className="policy-subtitle">Personal Finance Tools</p>
        <p className="policy-effective">Last Updated: April 2026</p>

        <div className="policy-content">
          <div className="policy-info">
            <p>
              <strong>Owner:</strong> Salman Djingueinabaye
            </p>
            <p>
              <strong>Contact:</strong>{' '}
              <a href="mailto:salmandjing@gmail.com">salmandjing@gmail.com</a>
            </p>
            <p>
              This is a personal-use application built for individual financial
              tracking. It is not a commercial product and is not intended for
              public distribution.
            </p>
          </div>

          <h2>1. Information We Collect</h2>
          <p>
            This application collects financial data through the Plaid API to
            provide personal financial tracking and daily spending reminders.
            The data collected includes:
          </p>
          <ul>
            <li>
              <strong>Account balances:</strong> Current and available balances
              from linked financial accounts.
            </li>
            <li>
              <strong>Transaction history:</strong> Transaction details including
              merchant names, amounts, dates, and categories.
            </li>
          </ul>
          <p>
            No additional personal information is collected beyond what is
            necessary to provide the financial tracking service.
          </p>

          <h2>2. Purpose of Data Collection</h2>
          <p>
            All data collected is used exclusively for the following purposes:
          </p>
          <ul>
            <li>Personal financial tracking and budgeting.</li>
            <li>Daily spending reminders and notifications.</li>
            <li>Transaction categorization and analysis for personal use.</li>
          </ul>

          <h2>3. Consumer Consent</h2>
          <p>
            This application uses Plaid Link to connect to financial
            institutions. The Plaid Link flow provides explicit consent before
            any data is accessed. Users must authenticate with their financial
            institution and authorize the specific data permissions requested
            before any financial data is retrieved.
          </p>
          <p>
            No financial data is accessed without the user&rsquo;s explicit,
            informed consent through the Plaid authorization flow.
          </p>

          <h2>4. Data Storage &amp; Encryption</h2>
          <p>
            We take data security seriously and implement industry-standard
            protections:
          </p>
          <ul>
            <li>
              <strong>Encryption at rest:</strong> All stored data is encrypted
              using AES-256 encryption.
            </li>
            <li>
              <strong>Encryption in transit:</strong> All data transmissions use
              TLS 1.2 or higher.
            </li>
            <li>
              <strong>Infrastructure:</strong> Data is stored on secured personal
              infrastructure with restricted access.
            </li>
          </ul>

          <h2>5. Data Sharing</h2>
          <p>
            <strong>
              No data is shared with any third parties under any circumstances.
            </strong>{' '}
            Financial data is stored locally on personal infrastructure and is
            used solely by the application owner for personal financial tracking.
          </p>

          <h2>6. Data Retention</h2>
          <p>
            Financial data is retained for personal use only and is maintained
            as long as necessary for the financial tracking service. Users can
            request complete deletion of their data at any time by contacting{' '}
            <a href="mailto:salmandjing@gmail.com">salmandjing@gmail.com</a>.
            Data deletion requests will be fulfilled within 30 days.
          </p>

          <h2>7. Authentication &amp; Access Controls</h2>
          <ul>
            <li>
              <strong>Multi-factor authentication:</strong> The application uses
              biometric authentication and device-level security to protect
              access.
            </li>
            <li>
              <strong>Single-user application:</strong> This application is
              designed for single-user access with role-based access controls.
            </li>
            <li>
              <strong>Zero-trust architecture:</strong> All requests are
              authenticated and authorized regardless of network location.
            </li>
          </ul>

          <h2>8. Vulnerability Management</h2>
          <p>
            Regular security updates are applied to all infrastructure
            components. Dependencies are monitored for known vulnerabilities and
            patched promptly. Security best practices are followed in all aspects
            of application development and deployment.
          </p>

          <h2>9. Your Rights</h2>
          <p>As a user, you have the right to:</p>
          <ul>
            <li>Request access to your stored data.</li>
            <li>Request correction of inaccurate data.</li>
            <li>Request deletion of your data at any time.</li>
            <li>Revoke access to your financial accounts through Plaid.</li>
            <li>
              Disconnect your financial institution at any time through the
              application.
            </li>
          </ul>

          <h2>10. Changes to This Policy</h2>
          <p>
            This privacy policy may be updated from time to time. Any changes
            will be reflected on this page with an updated effective date.
          </p>

          <h2>11. Contact</h2>
          <p>
            For any questions, concerns, or requests regarding this privacy
            policy or your data, please contact:
          </p>
          <p>
            <strong>Salman Djingueinabaye</strong>
            <br />
            <a href="mailto:salmandjing@gmail.com">salmandjing@gmail.com</a>
          </p>
        </div>

        <div className="policy-links">
          <Link to="/security">Security Practices</Link>
          <span className="policy-divider">|</span>
          <Link to="/">Back to Portfolio</Link>
        </div>

        <footer className="policy-footer">
          <p>&copy; 2026 Salman Djingueinabaye. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}

export default Privacy;
