import classNames from "classnames";
import React from "react";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

import styles from "../../pages/index.module.css";
import { BaseButton } from "./BaseButton";

type SystemWindowProps = JSX.IntrinsicElements["div"];

const os = [{
    alt: "Windows",
    src: "os/windows.svg",
    to: ""
}, {
    alt: "Linux",
    src: "os/linux.svg",
    to: ""
}, {
    alt: "Mac",
    src: "os/mac.png",
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
                            {title}
                        </span>
                        <span className={ classNames(styles.description,
                                                     styles.text,
                                                     styles["text-huge"]) }>
                            { tagline }
                        </span>
                        <ul className={ classNames(styles.text, styles.bullets) }>
                            <li>简单易学</li>
                            <li>图表交互</li>
                            <li>扩展性强</li>
                            <li>兼容性强</li>
                        </ul>
                        <div className={ styles["center-if-sm"] }>
                            <p className={ classNames(styles.text, styles.supported) }>
                                支持的操作系统:
                            </p>
                            {/* { os.map(({ alt, src, to }) => (
                                <Link className={ styles["theme-icon"] }
                                      key={ alt }
                                      to={ to }>
                                    <img alt={ alt } src={`assets/${ src }`} />
                                    <span> { alt }</span>
                                </Link>
                            )) } */}
                        </div>
                        <div className={ styles["center-if-sm"] }>
                            <BaseButton to="/docs/tutorials/tutorials">
                                开始上手
                            </BaseButton>
                        </div>
                    </div>
                    <div className="col">
                        {/* <Showcase /> */}
                    </div>
                </div>
            </div>
        </div>
    );
}
