import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './LockIn.css';

function LockInLanding() {
  React.useEffect(() => { document.title = "Lock-In Bot — SMS Accountability Coach"; return () => { document.title = "Salman's Portfolio"; }; }, []);
  const [phone, setPhone] = useState('');
  const [consent, setConsent] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (consent && phone) {
      setSubmitted(true);
    }
  };

  return (
    <div className="lockin-page">
      <div className="lockin-container">
        <h1 className="lockin-title">Lock-In Bot</h1>
        <p className="lockin-subtitle">Your Personal AI Accountability Coach</p>

        <div className="lockin-description">
          <p>
            Lock-In Bot sends you daily SMS check-ins to keep you on track with your goals.
            Powered by AI, it adapts to your schedule and provides personalized nudges,
            reminders, and accountability prompts to help you stay focused.
          </p>
          <ul className="lockin-features">
            <li>Daily check-in messages tailored to your goals</li>
            <li>AI-powered personalized accountability</li>
            <li>Flexible scheduling that adapts to you</li>
            <li>Simple opt-out anytime by texting STOP</li>
          </ul>
        </div>

        {submitted ? (
          <div className="lockin-success">
            <p>Thanks for signing up! You'll receive your first check-in soon.</p>
          </div>
        ) : (
          <form className="lockin-form" onSubmit={handleSubmit}>
            <div className="lockin-field">
              <label htmlFor="phone">Phone Number</label>
              <input
                id="phone"
                type="tel"
                placeholder="+1 (555) 123-4567"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>

            <div className="lockin-consent">
              <label>
                <input
                  type="checkbox"
                  checked={consent}
                  onChange={(e) => setConsent(e.target.checked)}
                  required
                />
                <span>
                  I agree to receive scheduled SMS check-ins and reminders from Lock-In Bot.
                  Message frequency varies. Message and data rates may apply.
                  Reply STOP to unsubscribe. Reply HELP for help.
                </span>
              </label>
            </div>

            <button type="submit" className="lockin-submit" disabled={!consent || !phone}>
              Sign Up
            </button>
          </form>
        )}

        <div className="lockin-links">
          <Link to="/lockin/privacy">Privacy Policy</Link>
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

export default LockInLanding;
