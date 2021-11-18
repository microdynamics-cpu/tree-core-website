import classNames from "classnames";
import React from "react";

import styles from "../../css/index.module.css";

type BaseSystemWindowProps = JSX.IntrinsicElements["div"];

export function BaseSystemWindow({ children, className, ...props } :
                                 BaseSystemWindowProps) {
    return (
        <div
            className={ classNames(styles["system-window"],
                                   styles["blue-accent"],
                                   styles["preview-border"],
                                   className) }
            style={{ borderBottomLeftRadius: 0,
                     borderBottomRightRadius: 0 }}
            {...props} >
            <div className={ styles["system-top-bar"] }>
                <span
                    className={ styles["system-top-bar-circle"] }
                    style={{ backgroundColor: "var(--periwinkle)" }} />
                <span
                    className={ styles["system-top-bar-circle"] }
                    style={{ backgroundColor: "var(--bright-cyan)" }} />
                <span
                    className={ styles["system-top-bar-circle"] }
                    style={{ backgroundColor: "var(--sea-green)" }} />
            </div>
            { children }
        </div>
    );
}
