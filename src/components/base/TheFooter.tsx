import classNames from "classnames";
import React from "react";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

import styles from "../../pages/index.module.css";
import { BaseCardShowcase } from "./BaseCardShowcase";

export function TheFooter() {
    const context = useDocusaurusContext();
    const { email } = context.siteConfig.customFields;

    return (
        <footer className={ classNames("hero hero--primary", styles.footer) }>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <BaseCardShowcase />
                    </div>
                    <div className={ classNames("col",
                                                styles["offset-column"]) }>
                        <h2 className={ classNames(styles.text,
                                                   styles["footer-heading"]) }>
                            文档
                        </h2>
                        <ul className={ styles.bullets }>
                            <Link to="/docs/intro/intro_background">
                                <li>项目介绍</li>
                            </Link>
                            <Link to="/docs/start/start_installation">
                                <li>开始上手</li>
                            </Link>
                            <Link to="/docs/tutorials/tutorials">
                                <li>教程文档</li>
                            </Link>
                            <Link to="/docs/examples/examples">
                                <li>示例文档</li>
                            </Link>
                            <Link to="/docs/api/api_module_doc">
                                <li>接口文档</li>
                            </Link>
                            <Link to="/docs/faq/faq">
                                <li>常见问题</li>
                            </Link>
                        </ul>
                    </div>
                    <div className={ classNames("col",
                                                styles["offset-column"]) }>
                        <h2 className={ classNames(styles.text,
                                                   styles["footer-heading"]) }>
                            社区
                        </h2>
                        <ul className={ styles.bullets }>
                            <Link to="https://github.com/microdynamics-cpu">
                                <li>代码仓库</li>
                            </Link>
                            <Link to="/blog">
                                <li>项目博客</li>
                            </Link>
                        </ul>
                    </div>
                    <div className={ classNames("col",
                                                styles["offset-column"]) }>
                        <h2 className={ classNames(styles.text,
                                                styles["footer-heading"]) }>
                            交流
                        </h2>
                        <Link to={ `mailto:${ email }` }>
                            <p className={ classNames(styles.text, styles.paragraph) }>
                                { email }
                            </p>
                        </Link>
                        <a href="https://github.com/microdynamics">
                            <img
                                className={ styles.vazco }
                                alt="MicroDyanmics Homepage"
                                src="assets/microdynamics.svg"
                                style={{ height: "6em" }} />
                        </a>
                        <br />
                    <p className={ classNames(styles.text, styles.paragraph) }
                       style={{ display: "inline-block", fontSize: "0.8em" }}>
                        Copyright © 2021 MicroDyanmics.
                        <br />
                        All Rights Reserved.
                    </p>
                </div>
                </div>
            </div>
        </footer>
    );
}
