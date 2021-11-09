import classNames from "classnames";
import React from "react";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

import styles from "../../css/index.module.css";
import { BaseCardShowcase } from "./BaseCardShowcase";

export function TheFooter() {
    const context = useDocusaurusContext();
    const { websiteBar, teamEmail } = context.siteConfig.customFields;

    const websiteBarArr = [
        websiteBar.docs,
        websiteBar.community,
        websiteBar.communication
    ];

    return (
        <footer className={ classNames("hero hero--primary", styles.footer) }>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <BaseCardShowcase />
                    </div>
                    {
                        websiteBarArr.map((bar, i) => {
                            return (
                                <div key={ i } className={
                                    classNames("col", styles["offset-column"]) }>
                                    <h2 className={
                                        classNames(styles.text,
                                                   styles["footer-heading"]) }>
                                        { bar.label }
                                    </h2>
                                    <ul className={ styles.bullets }>
                                        {
                                            bar.items.map((item, j) => {
                                                return (
                                                    <Link key={ j } to={ item.to }>
                                                        <li>{ item.label }</li>
                                                    </Link>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>
                            )
                        })
                    }





                    {/* <div className={ classNames("col",
                                                styles["offset-column"]) }>
                        <h2 className={ classNames(styles.text,
                                                   styles["footer-heading"]) }>
                            文档
                        </h2>
                        <ul className={ styles.bullets }>
                            {
                                websiteBar.docs.map((item) => {
                                    return (
                                        <Link to={ item.to }>
                                            <li>{ item.label }</li>
                                        </Link>
                                    );
                                })
                            }
                        </ul>
                    </div>
                    <div className={ classNames("col",
                                                styles["offset-column"]) }>
                        <h2 className={ classNames(styles.text,
                                                   styles["footer-heading"]) }>
                            社区
                        </h2>
                        <ul className={ styles.bullets }>
                            {
                                websiteBar.community.map((item) => {
                                    return (
                                        <Link to={ item.to }>
                                            <li>{ item.label }</li>
                                        </Link>
                                    );
                                })
                            }
                        </ul>
                    </div>

                    <div className={ classNames("col",
                                                styles["offset-column"]) }>
                        <h2 className={ classNames(styles.text,
                                                   styles["footer-heading"]) }>
                            交流
                        </h2>
                        <ul className={ styles.bullets }>
                            {
                                websiteBar.communication.map((item) => {
                                    return (
                                        <Link to={ item.to }>
                                            <li>{ item.label }</li>
                                        </Link>
                                    );
                                })
                            }
                        </ul>
                    </div> */}


                    {/* <div className={ classNames("col",
                                                styles["offset-column"]) }>
                        <h2 className={ classNames(styles.text,
                                                styles["footer-heading"]) }>
                            交流
                        </h2>
                        <Link to={ `mailto:${ teamEmail }` }>
                            <p className={ classNames(styles.text, styles.paragraph) }>
                                { teamEmail }
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
                    </div> */}
                </div>
            </div>
        </footer>
    );
}
