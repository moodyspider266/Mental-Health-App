import React from 'react';
import "../components_styling/Sidebar.css";

const Sidebar = () => {
  const options = [
    { name: 'Dashboard', icon: 'dashboard', link: '/dashboard' },
    { name: 'Community', icon: 'community', link: '/community' },
    { name: 'Surveys', icon: 'surveys', link: '/surveys' },
    { name: 'To-do-List', icon: 'to-do-list', link: '/to-do-list' },
    { name: 'Recommendations', icon: 'recommendations', link: '/recommendations' },
    { name: 'Settings', icon: 'settings', link: '/settings' },  
  ];

  return (
    <div className="sidebar">
      <div className='logo-container'>
        <a href="/" className='logo'><h1>YourMind</h1></a>
      </div>
      <div className="sidebar-options-container">
        <ul className="sidebar-options">
          {options.map((option) => (
            <li key={option.name} className="sidebar-option">
                <a href={option.link}>
                    <span className={`sidebar-option-icon ${option.icon}`}></span>
                    <span className="sidebar-option-name">{option.name}</span>
                </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;