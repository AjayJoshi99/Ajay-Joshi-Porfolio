import React, { useEffect, useState } from 'react';
import './App.css';

const sections = [
  { id: 'home', title: 'Home' },
  { id: 'about', title: 'About' },
  { id: 'projects', title: 'Projects' },
  { id: 'skills', title: 'Skills' },
  { id: 'contact', title: 'Contact' },
];

const projectsData = [
  {
    title: 'Digital Evidance Catalogging Syatem',
    description: 'The Digital Evidence Cataloging System (DECS) is a web-based application designed to securely manage and organize digital evidence. It features role-based access, allowing different users (Admin, Investigator, and Analyst) to access and manage evidence data based on their roles. The system includes advanced search capabilities, audit trails, and a user-friendly interface. It’s built using Flask and MongoDB to ensure scalability and secure data handling.',
    link: 'https://github.com/AjayJoshi99/Digital_Evidance_Catalogue_System',
  },
  {
    title: 'Online Aptitude App',
    description: 'The Online Aptitude App is a web application designed to help users improve their aptitude skills through various quizzes and practice tests. It offers a wide range of questions across different topics, helping users to practice and track their progress. The app provides detailed results and feedback to help users identify areas for improvement. Built with React, Node.js, Express, and MongoDB, the app ensures smooth performance and scalability.',
    link: 'https://github.com/AjayJoshi99/AptitudeQuizApp',
  },
  {
    title: 'ATM Software',
    description: 'The ATM Software is a simple, yet powerful, application designed to simulate an ATM machine. It allows users to perform essential banking operations such as balance checking, withdrawals, and deposits. Built using Java, JDBC, and MySQL, the software ensures secure transaction handling and user authentication. The interface is intuitive, making it easy for users to interact with the system and perform transactions efficiently.',
    link: 'https://github.com/AjayJoshi99/ATM_Software',
  },
  {
    title: 'Online lost and found portal for campus',
    description: 'The Lost and Found Portal is a web-based platform designed to help users report lost or found items within a community, organization, or campus. It enables users to create detailed listings with item descriptions, images, contact details, and location information. The portal includes search and filter functionality for quick item discovery, role-based access for admins to approve or manage posts, and email notifications to alert users about matching found items. Built using React, Node.js, Express, and MongoDB, the portal ensures efficient and user-friendly interaction for retrieving lost belongings.',
    link: 'https://github.com/AjayJoshi99/Lost-Found',
  },
];

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 3;

      sections.forEach(({ id }) => {
        const section = document.getElementById(id);
        if (section) {
          if (
            section.offsetTop <= scrollPos &&
            section.offsetTop + section.offsetHeight > scrollPos
          ) {
            setActiveSection(id);
          }

          if (
            window.scrollY + window.innerHeight > section.offsetTop + 100
          ) {
            section.classList.add('fade-in-visible');
          }
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id) => {
    setNavOpen(false);
    const section = document.getElementById(id);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      <nav>
        <div className="nav-logo" aria-label="Portfolio Logo">Ajay Joshi - Portfolio</div>
        <button
          className="menu-button"
          aria-label="Toggle navigation menu"
          onClick={() => setNavOpen(!navOpen)}
        >
          ☰
        </button>
        <div className="nav-links" role="navigation">
          {sections.map(({ id, title }) => (
            <div
              key={id}
              className={`nav-link ${activeSection === id ? 'active' : ''}`}
              onClick={() => handleNavClick(id)}
              role="link"
              tabIndex={0}
              onKeyDown={e => {
                if (e.key === 'Enter') handleNavClick(id);
              }}
              aria-current={activeSection === id ? 'page' : undefined}
            >
              {title}
            </div>
          ))}
        </div>
      </nav>

      <div className={`mobile-nav ${navOpen ? 'open' : ''}`}>
        {sections.map(({ id, title }) => (
          <div
            key={id}
            className={`nav-link ${activeSection === id ? 'active' : ''}`}
            onClick={() => handleNavClick(id)}
            role="link"
            tabIndex={0}
            onKeyDown={e => {
              if (e.key === 'Enter') handleNavClick(id);
            }}
            aria-current={activeSection === id ? 'page' : undefined}
          >
            {title}
          </div>
        ))}
      </div>

      <main>
      <section id="home" className="fade-in-section" tabIndex={-1}>
      <h1>Welcome to My Portfolio</h1>
<p>
  Hi and welcome! I am <strong>Ajay Joshi</strong> a developer who loves creating smooth and attractive websites. I have experience with many modern web technologies and enjoy building easy-to-use, scalable apps that solve real-life problems. Take a look at my portfolio to see my work, skills, and how we can connect for projects or opportunities.
</p>

</section>


        <section id="about" className="fade-in-section" tabIndex={-1} aria-label="About me section">
          <div className="about-image" aria-hidden="true" />
          <p>
            I am a full-stack developer with experience in React, JavaScript, Express, MongoDB and other modern web technologies. 
            I enjoy turning ideas into real, working applications. I am always excited to learn new tools and improve my skills, whether it's working on the front-end, back-end, or both.
          </p>
        </section>

        <section id="projects" className="fade-in-section" tabIndex={-1}>
          <h2>Projects</h2>
          <div className="projects-list" role="list">
            {projectsData.map(({ title, description, link }, index) => (
              <div
                className="project-card"
                key={index}
                onClick={() => window.open(link, '_blank')}
                role="button"
                tabIndex={0}
                onKeyDown={e => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    window.open(link, '_blank');
                  }
                }}
                aria-label={`Open project ${title}`}
              >
                <div className="project-title">{title}</div>
                <div className="project-desc">{description}</div>
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                  onClick={e => e.stopPropagation()}
                >
                  View Source
                </a>
              </div>
            ))}
          </div>
        </section>

        <section id="skills" className="fade-in-section" tabIndex={-1}>
          <h2>Skills</h2>
          <div className="skills-list" aria-label="List of skills">
            {[
              'Python',
              'C++',
              'C',
              'JavaScript',
              'React',
              'HTML5',
              'CSS3',
              'Node.js',
              'Express',
              'Git',
              'Responsive Design',
              'CSS Animations',
              'REST APIs',
              'Docker',
              'PHP',
              'Laravel',
              'Flask',
              'Machine Learnig',
              '.Net'
            ].map((skill, idx) => (
              <div key={idx} className="skill-item" tabIndex={0}>
                {skill}
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="fade-in-section" tabIndex={-1}>
          <h2>Contact Me</h2>
          <p>
            I am always open to connecting! You can reach me via email or through my social links.
          </p>
          <button
            className="contact-button"
            onClick={() => {
              window.location.href = 'mailto:ajayjoshi1908@gmail.com';
            }}
            aria-label="Send email"
          >
            Email Me
          </button>
        </section>

        <div
          id="connect"
          style={{
            backgroundColor: '#f0f4f8',
            padding: '40px 20px',
            textAlign: 'center',
            fontFamily: 'Arial, sans-serif',
            marginTop: '40px',
          }}
        >
          <h2 style={{ fontSize: '30px', marginBottom: '10px', color: '#333' }}>Let's Connect</h2>
          <p style={{ fontSize: '18px', color: '#555' }}>
            Feel free to reach out or follow me on any of these platforms.
          </p>

          <div
            style={{
              marginTop: '25px',
              display: 'flex',
              justifyContent: 'center',
              gap: '40px',
              fontSize: '32px',
              flexWrap: 'wrap',
            }}
          >
            <a
              href="https://www.linkedin.com/in/ajay-joshi-99b752252/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              style={{ color: '#0077b5' }}
            >
              <i className="fab fa-linkedin"></i>
            </a>

            <a
              href="https://github.com/AjayJoshi99/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              style={{ color: '#333' }}
            >
              <i className="fab fa-github"></i>
            </a>

            <a
              href="https://leetcode.com/u/Ajay_Joshi/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LeetCode"
              style={{ color: '#f89f1b' }}
            >
              <i className="fas fa-code"></i>
            </a>

            <a
              href="https://www.geeksforgeeks.org/user/joshiajay/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GeeksforGeeks"
              style={{ color: '#2f8d46' }}
            >
              <i className="fas fa-laptop-code"></i>
            </a>
          </div>
      </div>
      </main>
    </>
  );
}

