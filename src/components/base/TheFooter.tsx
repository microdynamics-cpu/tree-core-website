import classNames from "classnames";
import React from "react";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

import styles from "../../css/index.module.css";
import { TheFooterCard } from "./TheFooterCard";

export function TheFooter() {
    const context = useDocusaurusContext();
    const { websiteBar } = context.siteConfig.customFields;
    const websiteBarArr = [
        websiteBar.docs,
        websiteBar.community,
        websiteBar.communication
    ];

    return (
        <footer className={ classNames("hero hero--primary", styles.footer) }>
            <div className="container">
                <div className="row">
                    <div className="col" style={{ flexGrow: 3 }}>
                        <TheFooterCard />
                    </div>
                    <div className={ classNames("col",
                                                styles["offset-column"]) }></div>
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
                </div>
            </div>
        </footer>
    );
}
