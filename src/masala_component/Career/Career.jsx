import React from 'react';
// import "./Career.css";

const jobs = [
  { title: "Production Supervisor", location: "Raipur", salary: "₹25-35k", type: "Full-time" },
  { title: "Sales Executive", location: "Chhattisgarh", salary: "₹20-30k + Incentive", type: "Field" },
  { title: "Quality Controller", location: "Raipur", salary: "₹18-25k", type: "Full-time" }
];

export default function Career() {
  const handleApply = (e) => {
    e.preventDefault();
    alert('Application submitted! We will contact you.');
  };

  return (
    <section className="career-section">
      <div className="container">
        <h1>Join Our Team</h1>
        
        <div className="jobs-grid">
          {jobs.map((job, idx) => (
            <div key={idx} className="job-card">
              <h3>{job.title}</h3>
              <div className="job-meta">
                <span>{job.location}</span>
                <span>{job.salary}</span>
                <span>{job.type}</span>
              </div>
              <button className="apply-btn">Apply Now</button>
            </div>
          ))}
        </div>

        {/* Apply Form */}
        <div className="apply-section">
          <h2>Apply for Position</h2>
          <form onSubmit={handleApply}>
            <div className="form-row">
              <input name="name" placeholder="Full Name *" required />
              <input name="email" type="email" placeholder="Email *" required />
            </div>
            <select name="position" required>
              <option>Select Position</option>
              {jobs.map(j => <option key={j.title}>{j.title}</option>)}
            </select>
            <input type="file" name="resume" accept=".pdf,.doc" required />
            <button type="submit">Submit Application</button>
          </form>
        </div>
      </div>
    </section>
  );
}