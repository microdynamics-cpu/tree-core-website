import React from "react";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

export default function initCommunityPartnersPage() {
    const context = useDocusaurusContext();
    const {
        tagline,
        customFields: { keywords }
    } = context.siteConfig;

    return (
        <Layout description={ tagline } keywords={ keywords }>
        </Layout>
    );
}
