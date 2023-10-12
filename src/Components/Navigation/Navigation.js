import React from 'react';
import styles from "./Navigation.module.css"; // Correct import statement

const Navigation = () => {
    return (
        <nav className={`${styles.navigation} container`}> {/* Correct usage of styles */}
            <div className="logo">
                <img src="/photos/logo.png" alt="" />
            </div>
            <ul>
               <li>HOME</li>
               <li>ABOUT</li>
               <li>CONTACT</li>
            </ul>
        </nav>
    )
}

export default Navigation;
