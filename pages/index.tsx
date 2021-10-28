import React from "react";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

import { LandingPage } from "../pages-parts/LandingPage/LandingPage";

export default function IndexPage() {
    const context = useDocusaurusContext();
    const {
        tagline,
        customFields: { keywords }
    } = context.siteConfig;

    return (
        <Layout description={ tagline } keywords={ keywords }>
            <LandingPage />
        </Layout>
    );
}
