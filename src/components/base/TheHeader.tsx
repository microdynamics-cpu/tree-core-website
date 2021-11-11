import classNames from "classnames";
import React from "react";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

import styles from "../../css/index.module.css";
import { BaseButton } from "./BaseButton";

import Icon from "@mdi/react";
import { mdiMicrosoftWindows, mdiLinux, mdiApple } from "@mdi/js";

type SystemWindowProps = JSX.IntrinsicElements["div"];

const os = [{
    alt: "Windows",
    path: mdiMicrosoftWindows,
    to: ""
}, {
    alt: "Linux",
    path: mdiLinux,
    to: ""
}, {
    alt: "Mac",
    path: mdiApple,
    to: ""
}];

export function TheHeader() {
    const context = useDocusaurusContext();
    const { siteConfig = {} } = context;
    const { title, tagline } = siteConfig;

    return (
        <div className="hero hero--primary">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <span className={ classNames(styles.text,
                                                     styles["text-big"],
                                                     styles.title) }>
                            { title }
                        </span>
                        <span className={ classNames(styles.description,
                                                     styles.text,
                                                     styles["text-huge"]) }>
                            { tagline }
                        </span>
                        <ul className={ classNames(styles.text,
                                                   styles.bullets) }>
                            <li>简单易学</li>
                            <li>扩展性强</li>
                            <li>兼容性强</li>
                            <li>开源免费</li>
                        </ul>
                        <div className={ styles["center-if-sm"] }>
                            <p className={ classNames(styles.text,
                                                      styles.supported) }>
                                支持的操作系统:
                            </p>
                            {
                                os.map(({ alt, path, to }) => (
                                    <Link className={ styles["theme-icon"] }
                                          key={ alt }
                                          to={ to }
                                          style={{ width: 80,
                                                   textAlign: "center",
                                                   marginRight: 0 }}>
                                        <Icon path={ path }
                                              size={ 1.5 } />
                                        <div> { alt }</div>
                                    </Link>
                                ))
                            }
                        </div>
                        <div className={ styles["center-if-sm"] }>
                            <BaseButton to="/docs/tutorials/tutorials"
                                        style={{ marginTop: 3 + "em" }}>
                                开始上手
                            </BaseButton>
                        </div>
                    </div>
                    <div className="col">

                    </div>
                </div>
            </div>
        </div>
    );
}
