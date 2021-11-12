import classNames from "classnames";
import React from "react";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

import styles from "../css/index.module.css";
import { TheFooter } from "../components/base/TheFooter";
import { PageMainBrief } from "../components/main/PageMainBrief";

export default function initIndexPage() {
    const context = useDocusaurusContext();
    const {
        tagline,
        customFields: { keywords }
    } = context.siteConfig;

    return (
        <Layout description={ tagline } keywords={ keywords }>
            <div className={ classNames(styles.landing,
                             styles["overflow-hidden"]) }>
                <PageMainBrief />
                <div className="main">
                    <TheFooter />
                </div>
            </div>
        </Layout>
    );
}
