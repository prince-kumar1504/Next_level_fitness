import React from "react";

const WorkoutSessions = () => {
  return (
    <section className="workout_session">
      <div className="wrapper">
        <h1>TOP WORKOUT SESSIONS</h1>
        <p>
          Discover our range of top workout sessions designed to fit every fitness goal and level. Join us to transform your health and fitness!
        </p>
        <div className="image-container">
          <img src="/img5.jpg" alt="workout" />
        </div>
      </div>
      <div className="wrapper">
        <h1>FEATURED BOOTCAMPS</h1>
        <p>
          Our bootcamps offer high-intensity workouts that push you to your limits. Explore our diverse range of bootcamps to find the right fit for you!
        </p>
        <div className="bootcamps">
          <div>
            <h4>Yoga Classes</h4>
            <p>
              Improve flexibility and mental well-being with our yoga classes. Suitable for all levels, from beginners to advanced practitioners.
            </p>
          </div>
          <div>
            <h4>Zumba</h4>
            <p>
              Dance your way to fitness with our high-energy Zumba classes. Fun and effective workouts set to the latest music hits.
            </p>
          </div>
          <div>
            <h4>HIIT</h4>
            <p>
              Maximize your results with High-Intensity Interval Training. Short bursts of intense exercise followed by rest periods.
            </p>
          </div>
          <div>
            <h4>Cardio</h4>
            <p>
              Boost your cardiovascular health with our varied cardio sessions. Includes running, cycling, and more.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkoutSessions;
