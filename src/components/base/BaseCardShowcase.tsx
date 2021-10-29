import classNames from "classnames";
import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

import styles from "../../pages/index.module.css";

export function BaseCardShowcase() {
    const context = useDocusaurusContext();
    const { tagline } = context.siteConfig;

    return (
        <div className={ classNames(styles["showcase-card"],
                                    styles["border-dashed"]) }>
            <img alt="TreeCore Logo" src="img/treecore.svg" />
            <p className={ classNames(styles.text, styles.paragraph) }>
                { tagline }。让更多的人喜欢上处理器设计！
            </p>
        </div>
    );
}
