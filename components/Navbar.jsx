import React from 'react'
import styles from './navbar.module.scss'

const Navbar = () => {
    return (
        <nav className={styles.navbarParent}>
            <div className={styles.company}>
                <div className={styles.logo}>
                    <img src="assets/logo.png" alt="" />
                </div>
                <h1>
                    Bintan<br/>
                    <span>
                        Tour Travel & Taxi
                    </span>
                </h1>
            </div>
            <div className={styles.navigation}>
                <a href="#activities" className={styles.link}><h3>Activities</h3></a>
                <a href="#book" className={styles.orangeBtn}><h3>Book Now</h3></a>
            </div>
        
        </nav>
    )
}

export default Navbar