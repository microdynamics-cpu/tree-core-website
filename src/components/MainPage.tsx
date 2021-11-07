import classNames from "classnames";
import React from "react";

import styles from "../css/index.module.css";
import { TheFooter } from "./base/TheFooter";
import { TheHeader } from "./base/TheHeader";

export function MainPage() {
    return (
        <div className={ classNames(styles.landing,
                                    styles["overflow-hidden"]) }>
            <TheHeader />
            <div className="main">
                <TheFooter />
            </div>
        </div>
    );
}
