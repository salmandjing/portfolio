import React from 'react';
import { Link } from 'react-router-dom';
import './LockIn.css';

function LockInTerms() {
  return (
    <div className="lockin-page">
      <div className="lockin-container lockin-legal">
        <h1 className="lockin-title">Terms of Service</h1>
        <p className="lockin-subtitle">Lock-In Bot</p>
        <p className="lockin-effective">Effective Date: March 2026</p>

        <div className="lockin-content">
          <h2>1. Service Description</h2>
          <p>
            Lock-In Bot is an AI-powered SMS accountability coach. The service sends
            scheduled text messages including check-ins, reminders, and motivational
            prompts to help you stay on track with your personal goals.
          </p>

          <h2>2. Message Frequency</h2>
          <p>
            You may receive up to 4 messages per day from Lock-In Bot. Message
            frequency varies based on your preferences and interaction patterns.
          </p>

          <h2>3. Carrier Rates</h2>
          <p>
            Standard message and data rates from your mobile carrier may apply.
            Lock-In Bot does not charge for the service itself, but your carrier's
            standard SMS rates will apply to messages sent and received.
          </p>

          <h2>4. User Responsibilities</h2>
          <p>By using Lock-In Bot, you agree to:</p>
          <ul>
            <li>Provide a valid mobile phone number that you own or are authorized to use.</li>
            <li>Not use the service for any unlawful or prohibited purpose.</li>
            <li>Understand that AI-generated responses are automated and may not always be perfectly accurate.</li>
          </ul>

          <h2>5. Disclaimer</h2>
          <p>
            Lock-In Bot is a personal productivity and accountability tool. It is
            <strong> not</strong> a substitute for professional medical, psychological,
            therapeutic, or any other professional advice. If you are experiencing a
            crisis or need professional help, please contact a qualified professional
            or emergency services.
          </p>

          <h2>6. Modifications &amp; Discontinuation</h2>
          <p>
            We reserve the right to modify, suspend, or discontinue the Lock-In Bot
            service at any time, with or without notice. We may also update these
            Terms of Service from time to time. Continued use of the service after
            changes constitutes acceptance of the updated terms.
          </p>

          <h2>7. Opt Out</h2>
          <p>
            You may opt out of Lock-In Bot at any time by replying <strong>STOP</strong> to
            any message. Upon opting out, you will no longer receive messages from the service.
          </p>

          <h2>8. Contact</h2>
          <p>
            For questions or concerns about these terms, please contact us
            at <a href="https://djsalman.dev">djsalman.dev</a>.
          </p>
        </div>

        <div className="lockin-links">
          <Link to="/lockin">Back to Lock-In Bot</Link>
          <span className="lockin-divider">|</span>
          <Link to="/lockin/privacy">Privacy Policy</Link>
        </div>

        <footer className="lockin-footer">
          <p>&copy; 2026 Lock-In Bot</p>
        </footer>
      </div>
    </div>
  );
}

export default LockInTerms;
