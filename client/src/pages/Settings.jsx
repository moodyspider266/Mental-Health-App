import React, { useState } from 'react';
import '../components_styling/Settings.css';

export default function Settings() {
    const options = [
        { name: 'Personal Info', icon: 'profile', link: '/profile' },
        { name: 'Account Security', icon: 'security', link: '/security' },
        { name: 'Manage Account', icon: 'account', link: '/account' },
        { name: 'Notifications', icon: 'notif', link: '/notif' },
    ];
  
    const [selectedOption, setSelectedOption] = useState(options[0]);

    function handleOptionClick(option) {
        console.log('Current Selected Option:', selectedOption);
        console.log('Option clicked:', option); 
        setSelectedOption(option);
    }

    return (
        <div className="settings-container">
            <div className="settings-options">
                {options.map((option, index) => (
                    <div 
                        key={index} 
                        className={`settings-option ${selectedOption.name === option.name ? 'selected' : ''}`} 
                        onClick={() => handleOptionClick(option)}
                    >
                        <span className={`settings-option-icon ${option.icon}`}></span>
                        <span className="settings-option-name">{option.name}</span>
                    </div>
                ))}
            </div>
            <div className="settings-content">
                {selectedOption && (
                    <React.Fragment>
                        <h2>{selectedOption.name}</h2>
                        {/* Display the content for the selected option here */}
                    </React.Fragment>
                )}
            </div>
        </div>
    );
}
