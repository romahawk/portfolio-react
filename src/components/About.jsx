import React from "react";

const About = () => {
  return (
    <section id="about" className="section">
      <h2 className="section__title">&gt; About Me</h2>

      <div className="about__container">
        {/* Row 1: Photo and My MedTech Journey */}
        <div className="about__row about__row--two-columns">
          <div className="about__photo">
            {/* Use your real image in public/assets/img/profile.jpg or keep the placeholder */}
            <div className="about__photo-placeholder">Profile Image</div>
          </div>

          <div className="about__text">
            <h3 className="about__subtitle">My MedTech Journey</h3>
            <p>
              For over a decade, I’ve been immersed in the MedTech industry, where I’ve worn many hats—driving sales for cutting-edge medical equipment, streamlining B2B and B2C supply chains, providing hands-on support to surgeons, and even prototyping innovative solutions for startups. That journey taught me how to solve real-world problems with precision and empathy, but it also sparked a new passion: technology.
            </p>
          </div>
        </div>

        {/* Row 2 */}
        <div className="about__row">
          <h3 className="about__subtitle">Why I’m Pivoting to Tech</h3>
          <p>
            I’m now pivoting into the tech world, fueled by a desire to build solutions that bridge my MedTech expertise with the limitless possibilities of software. I’m motivated by the chance to create tools that not only solve problems but also transform lives—whether that’s through smarter analytics, seamless user experiences, or innovative platforms. Right now, I’m diving deep into Python, web development (HTML, CSS, JavaScript), data analytics, and project management, with plans to master React and Tailwind CSS next.
          </p>
        </div>

        {/* Row 3 */}
        <div className="about__row">
          <h3 className="about__subtitle">My Values &amp; Vision</h3>
          <p>
            My core values—innovation, education, and continuous growth—guide everything I do. I believe in pushing boundaries, learning every day, and evolving with the ever-changing tech landscape. Looking ahead, I envision a future where I combine my MedTech insights, tech skills, and startup mindset to create impactful solutions—think healthcare platforms powered by AI, data-driven MedTech innovations, or even my own tech startup.
          </p>
        </div>

        {/* Row 4 */}
        <div className="about__row">
          <h3 className="about__subtitle">Let’s Collaborate</h3>
          <p>
            I’m driven, curious, and always open to collaboration. Whether you’re in MedTech, tech, or somewhere in between, I’d love to connect and explore how we can build something impactful together.
          </p>
        </div>

        {/* Row 5: Interests */}
        <div className="about__row about__item">
          <h3 className="about__subtitle">Beyond Tech: What Drives Me</h3>
          <p>Life isn’t just about code — here’s what energizes and inspires me:</p>
          <ul className="about__list">
            <li>
              <span className="tech-icon"><i className="fas fa-basketball-ball"></i> Basketball</span> — My lifelong passion. Player, coach, and student of the game.
            </li>
            <li>
              <span className="tech-icon"><i className="fas fa-volleyball-ball"></i> Beach Volleyball</span> — Sand, sun, and strategy.
            </li>
            <li>
              <span className="tech-icon"><i className="fas fa-hiking"></i> Hiking</span> — Love exploring new trails and staying grounded in nature.
            </li>
            <li>
              <span className="tech-icon"><i className="fas fa-plane"></i> Travel</span> — Curious about new cultures, food, and ideas.
            </li>
            <li>
              <span className="tech-icon"><i className="fas fa-book"></i> Lifelong Learner</span> — Always building, improving, and growing.
            </li>
          </ul>

          <blockquote className="about__quote">
            “Basketball taught me teamwork, strategy, and discipline — qualities I now apply to building projects and collaborating in tech.”
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default About;
