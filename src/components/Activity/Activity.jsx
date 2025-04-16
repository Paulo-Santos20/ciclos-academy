import React from "react";
import "./Activity.css";

const activities = [
    { name: "Musculação", icon: "🏋️‍♂️", link: "/musculacao" },
    { name: "Funcional", icon: "🤸‍♀️", link: "/funcional" },
    { name: "Jump", icon: "🦘", link: "/jump" },
    { name: "Dança", icon: "💃", link: "/danca" },
    { name: "Pilates", icon: "🧘‍♂️", link: "/pilates" },
  ];
  
  const Activity = () => (
    <section className="activity-section">
      <h2 className="activity-title">O que a academia oferece</h2>
      <div className="activity-row">
        {activities.map((item) => (
          <a
            key={item.name}
            href={item.link}
            className="activity-card"
          >
            <span className="activity-icon">{item.icon}</span>
            <span className="activity-name">{item.name}</span>
          </a>
        ))}
      </div>
    </section>
  );
  
  export default Activity;