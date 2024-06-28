import React, { useState } from 'react';
import '../components_styling/Settings.css';
import Profile from '../components/Profile';
import AccSecurity from '../components/AccSecurity';
import AccManage from '../components/AccManage';
import Notif from '../components/Notif';

export default function Settings() {
    const options = [
        { name: 'Personal Info', icon: 'profile', component: <Profile /> },
        { name: 'Account Security', icon: 'security', component: <AccSecurity /> },
        { name: 'Manage Account', icon: 'account', component: <AccManage /> },
        { name: 'Notifications', icon: 'notif', component: <Notif /> },
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
                        {selectedOption.component}
                    </React.Fragment>
                )}
            </div>
        </div>
    );
}
