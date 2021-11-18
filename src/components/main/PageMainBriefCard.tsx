import classNames from "classnames";
import React from "react";

import styles from "../../css/index.module.css";
import { BaseSystemWindow } from "../base/BaseSystemWindow";

export function PageMainBriefCard() {
    return (
        <div className={ classNames(styles["floating-example"]) }>
            <BaseSystemWindow>
                <div style={{ backgroundColor: "white" }}>
                    <img alt="treecore cpu" src="img/treecore_cpu.svg" />
                </div>
            </BaseSystemWindow>
            <BaseSystemWindow style={{ left: 30 + "%" }} >
                <div style={{ backgroundColor: "#18191a" }}>
                    <img alt="treecore ide" src="img/treecore_ide.svg" />
                </div>
            </BaseSystemWindow>
        </div>
    );
}
