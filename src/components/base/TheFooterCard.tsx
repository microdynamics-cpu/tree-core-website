import classNames from "classnames";
import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

import styles from "../../css/index.module.css";

export function TheFooterCard() {
    const context = useDocusaurusContext();
    const { websiteCopyright, projectTagline } = context.siteConfig.customFields;

    return (
        <div className={ classNames(styles["showcase-card"],
                                    styles["border-dashed"]) }>
            <div>
                <img alt="microdynamics-cpu logo" src="img/microdynamics-cpu.svg"
                     style={{ height: 5.5 + "em"}} />
                <img alt="treecore logo" src="img/treecore.svg"
                     style={{ height: 5.5 + "em" }} />
            </div>
            <p className={ classNames(styles.text, styles.paragraph) }>
                { projectTagline }。让更多的人喜欢上处理器设计！
            </p>
            <p className={ classNames(styles.text, styles.paragraph) }>
                { websiteCopyright }
            </p>
        </div>
    );
}
