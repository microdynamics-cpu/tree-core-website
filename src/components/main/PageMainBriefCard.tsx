import classNames from "classnames";
import React from "react";

import styles from "../../css/index.module.css";
import { BaseSystemWindow } from "../base/BaseSystemWindow";

export function PageMainBriefCard() {
    return (
        <div className={ classNames(styles["floating-example"]) }>
            <BaseSystemWindow>
            </BaseSystemWindow>
            <BaseSystemWindow>
            </BaseSystemWindow>
        </div>
    );
}
