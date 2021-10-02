import React, { useState } from "react";
import styles from "./NavBar.module.css";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  const [checked, setChecked] = useState(false);
  console.log('checked', checked);

  function handleClick() {
    setChecked(!checked);
  }

  return (
    <div className={styles.navBar}>
      <div className={styles.name}>
        Vrolijke Noo<span className={styles.noot}>♪</span>zaak
      </div>

      <label htmlFor="hamburger" className={styles.hamburgerIcon}>
        &#9776;
      </label>

      <input
        type="checkbox"
        className={styles.hamburger}
        id="hamburger"
        checked={checked}
        onChange={() => {
          setChecked(!checked);
        }}
      />
      {checked && (
        <div className={styles.menuMobile}>
          <NavLink
            exact
            to="/"
            className={styles.link}
            activeClassName={styles.active}
            onClick={handleClick}
          >
            Home
          </NavLink>
          <NavLink
            to="/nieuws"
            className={styles.link}
            activeClassName={styles.active}
            onClick={handleClick}
          >
            Nieuws
          </NavLink>
          <NavLink
            to="/coaching"
            className={styles.link}
            activeClassName={styles.active}
            onClick={handleClick}
          >
            Coaching en Mediation
          </NavLink>
          <NavLink
            to="/werkwijze"
            className={styles.link}
            activeClassName={styles.active}
            onClick={handleClick}
          >
            Werkwijze
          </NavLink>
          <NavLink
            to="/over"
            className={styles.link}
            activeClassName={styles.active}
            onClick={handleClick}
          >
            Persoon
          </NavLink>
          <NavLink
            to="/contact"
            className={styles.link}
            activeClassName={styles.active}
            onClick={handleClick}
          >
            Contact
          </NavLink>
        </div>
      )}

      {!checked && (
        <div className={styles.menuWeb}>
          <NavLink
            exact
            to="/"
            className={styles.link}
            activeClassName={styles.active}
          >
            Home
          </NavLink>
          <NavLink
            to="/nieuws"
            className={styles.link}
            activeClassName={styles.active}
          >
            Nieuws
          </NavLink>
          <NavLink
            to="/coaching"
            className={styles.link}
            activeClassName={styles.active}
          >
            Coaching en Mediation
          </NavLink>
          <NavLink
            to="/werkwijze"
            className={styles.link}
            activeClassName={styles.active}
          >
            Werkwijze
          </NavLink>
          <NavLink
            to="/over"
            className={styles.link}
            activeClassName={styles.active}
          >
            Persoon
          </NavLink>
          <NavLink
            to="/contact"
            className={styles.link}
            activeClassName={styles.active}
          >
            Contact
          </NavLink>
        </div>
      )}
    </div>
  );
}
