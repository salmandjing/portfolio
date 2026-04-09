import React from 'react';
import { Link } from 'react-router-dom';
import './Policy.css';

function Security() {
  return (
    <div className="policy-page">
      <div className="policy-container">
        <h1 className="policy-title">Security Practices</h1>
        <p className="policy-subtitle">Personal Finance Tools</p>
        <p className="policy-effective">Last Updated: April 2026</p>

        <div className="policy-content">
          <div className="policy-info">
            <p>
              This document outlines the security practices implemented to
              protect financial data accessed through the Plaid API. Security is
              a top priority in the design, development, and operation of this
              application.
            </p>
          </div>

          <h2>1. Encryption Standards</h2>

          <h3>Data in Transit</h3>
          <p>
            All data transmitted between the application, Plaid API, and
            financial institutions is encrypted using TLS 1.2 or higher.
            Certificate validation is enforced on all connections, and
            connections using outdated or insecure protocols are rejected.
          </p>

          <h3>Data at Rest</h3>
          <p>
            All stored financial data is encrypted using AES-256 encryption, an
            industry-standard encryption algorithm approved for use by the U.S.
            government for classified information. Encryption keys are managed
            securely and rotated on a regular schedule.
          </p>

          <h2>2. Access Control</h2>

          <h3>Role-Based Access Control (RBAC)</h3>
          <p>
            The application implements role-based access control to ensure that
            only authorized users can access financial data. As a single-user
            application, access is restricted to the application owner with
            administrative privileges.
          </p>

          <h3>Multi-Factor Authentication (MFA)</h3>
          <p>
            Access to the application is protected by multi-factor
            authentication, including biometric authentication (fingerprint or
            face recognition) and device-level security controls. This ensures
            that even if one authentication factor is compromised, unauthorized
            access is prevented.
          </p>

          <h3>Zero-Trust Architecture</h3>
          <p>
            The application follows zero-trust security principles: no request
            is trusted by default regardless of its origin. Every API call and
            data access request is authenticated and authorized independently.
            Network location does not confer any implicit trust.
          </p>

          <h2>3. Vulnerability Management</h2>

          <h3>Dependency Monitoring</h3>
          <p>
            All application dependencies are continuously monitored for known
            security vulnerabilities. Automated tools scan for CVEs (Common
            Vulnerabilities and Exposures), and patches are applied promptly
            when vulnerabilities are identified.
          </p>

          <h3>Security Updates</h3>
          <p>
            Regular security updates are applied to all infrastructure
            components including the operating system, runtime environments,
            libraries, and application code. Critical security patches are
            applied within 48 hours of release.
          </p>

          <h3>Secure Development Practices</h3>
          <ul>
            <li>Input validation on all user-supplied data.</li>
            <li>
              Parameterized queries to prevent SQL injection attacks.
            </li>
            <li>Output encoding to prevent cross-site scripting (XSS).</li>
            <li>
              Secure configuration management with no hardcoded credentials.
            </li>
            <li>
              Regular code reviews with security as a primary consideration.
            </li>
          </ul>

          <h2>4. Data Handling Procedures</h2>

          <h3>Data Collection</h3>
          <p>
            Financial data is collected exclusively through the Plaid API using
            secure, authenticated connections. Only the minimum data necessary
            for the application&rsquo;s functionality is requested and stored.
          </p>

          <h3>Data Storage</h3>
          <p>
            Data is stored on secured personal infrastructure with encrypted
            storage volumes. Access to storage systems requires authentication
            and is logged for audit purposes.
          </p>

          <h3>Data Retention &amp; Deletion</h3>
          <p>
            Data is retained only as long as necessary for the financial
            tracking service. Complete data deletion can be performed upon
            request. When data is deleted, it is permanently removed from all
            storage systems including backups within 30 days.
          </p>

          <h3>Data Isolation</h3>
          <p>
            Financial data is logically isolated and not commingled with any
            other data. No financial data is shared with, transmitted to, or
            accessible by any third party.
          </p>

          <h2>5. Incident Response</h2>
          <p>
            In the unlikely event of a security incident, the following
            procedures are in place:
          </p>
          <ul>
            <li>
              Immediate investigation and containment of the incident.
            </li>
            <li>
              Revocation of Plaid API tokens and disconnection of affected
              accounts.
            </li>
            <li>Assessment of the scope and impact of the breach.</li>
            <li>
              Notification to affected users within 72 hours if personal data
              is compromised.
            </li>
            <li>
              Post-incident review and implementation of additional safeguards.
            </li>
          </ul>

          <h2>6. Plaid API Security</h2>
          <p>
            The application leverages Plaid&rsquo;s security infrastructure,
            which includes:
          </p>
          <ul>
            <li>SOC 2 Type II certified infrastructure.</li>
            <li>
              End-to-end encryption of financial credentials (credentials are
              never stored by this application).
            </li>
            <li>
              Token-based authentication that does not require storing bank
              login credentials.
            </li>
            <li>
              Plaid Link provides a secure, sandboxed environment for users to
              authenticate with their financial institutions.
            </li>
          </ul>

          <h2>7. Contact</h2>
          <p>
            For any security concerns, vulnerability reports, or questions about
            these security practices, please contact:
          </p>
          <p>
            <strong>Salman Djingueinabaye</strong>
            <br />
            <a href="mailto:salmandjing@gmail.com">salmandjing@gmail.com</a>
          </p>
        </div>

        <div className="policy-links">
          <Link to="/privacy">Privacy Policy</Link>
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

export default Security;
