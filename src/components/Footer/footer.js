import React from "react";
import styles from "./footer.css";
import { Link } from "react-router-dom";
import { CURRENT_YEAR } from "../../config/config";

export default function footer() {
  return (
    <div className={styles.footer}>
      <Link to="/" className={styles.logo}>
        <img alt="NBA logo" src="/images/nba_logo.png" />
      </Link>
      <div className={styles.right}>
        @MBA {CURRENT_YEAR} All rights reserved.
      </div>
    </div>
  );
}
