"use client";

import { useState } from "react";

export default function EnrollmentForm({ courseTitle }) {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <div>
      {submitted ? (
        <div className="form-message" role="status">
          Thanks, {name.trim()}! Your demo enrolment interest for <strong>{courseTitle}</strong> has been recorded on this page. No payment was taken.
          <button type="button" className="text-link" style={{ display: "block", marginTop: 12, border: 0, background: "none", cursor: "pointer" }} onClick={() => setSubmitted(false)}>Edit details</button>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <label htmlFor="enrol-name" style={{ display: "block", fontSize: ".85rem", fontWeight: 750, margin: "16px 0 7px" }}>Your name</label>
          <input id="enrol-name" value={name} onChange={(event) => setName(event.target.value)} required minLength={2} maxLength={70} autoComplete="name" placeholder="Enter your name" style={inputStyle} />
          <label htmlFor="enrol-email" style={{ display: "block", fontSize: ".85rem", fontWeight: 750, margin: "13px 0 7px" }}>Email address</label>
          <input id="enrol-email" type="email" value={email} onChange={(event) => setEmail(event.target.value)} required autoComplete="email" placeholder="you@example.com" style={inputStyle} />
          <button className="btn btn-primary" type="submit" style={{ width: "100%", marginTop: 16 }}>Enrol your interest →</button>
          <p className="muted" style={{ fontSize: ".76rem", lineHeight: 1.6, marginBottom: 0 }}>Demo form only. Your details are not sent to a server.</p>
        </form>
      )}
    </div>
  );
}

const inputStyle = { width: "100%", minHeight: 46, padding: "11px 12px", border: "1px solid var(--line)", borderRadius: 12, background: "#fff", color: "var(--ink)" };
