import React from "react";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

export default function initCommunityCompetitionsPage() {
    const context = useDocusaurusContext();
    const {
        customFields: { projectTagline }
    } = context.siteConfig;

    return (
        <Layout description={ projectTagline }>
        </Layout>
    );
}
