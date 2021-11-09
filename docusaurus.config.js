const customFields = require("./src/configs/customFields");

module.exports = {
    title: "木心项目",
    tagline: customFields.projectTagline,
    url: "https://microdynamics-cpu.github.io",
    baseUrl: "/",
    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",
    favicon: "favicon.ico",
    trailingSlash: true,
    organizationName: "microdynamics-cpu",
    projectName: "tree-core-website",
    presets: [[
        "@docusaurus/preset-classic", {
            docs: {
                path: "./docs",
                sidebarPath: require.resolve("./sidebars.js")
            },
            blog: {
                id: "blog",
                path: "./blog",
                routeBasePath: "blog",
                blogTitle: "博客",
                blogDescription: "木心项目的博客。",
                blogSidebarCount: 10,
                blogSidebarTitle: "最近的博客",
                postsPerPage: 15,
                showReadingTime: true
            },
            theme: {
                customCss: require.resolve("./src/css/index.module.css")
            },
            sidebarCollapsible: false
        }
    ]],
    themeConfig: {
        colorMode: {
            defaultMode: "dark",
            disableSwitch: false,
            respectPrefersColorScheme: false
        },
        announcementBar: {
            id: "treecore-bar",
            content: "如果你喜欢木心项目，请在" +
                     "<a target='_blank' href='https://github.com/microdynamics-cpu'>GitHub</a>" +
                     "上给我们点一个星！⭐️",
            backgroundColor: "#000",
            textColor: "#fff",
            isCloseable: true
        },
        navbar: {
            title: "",
            logo: {
                alt: "treecore logo",
                src: "/img/treecore.svg"
            },
            items: [
                customFields.websiteBar.docs,
                customFields.websiteBar.blog,
                customFields.websiteBar.community,
                customFields.websiteBar.download,
                customFields.websiteBar.team,
                customFields.websiteBar.support
            ],
            hideOnScroll: false
        },
        hideableSidebar: true,
        prism: {
            theme: require("prism-react-renderer/themes/oceanicNext"),
            defaultLanguage: "verilog"
        },
        algolia: {
            apiKey: "treecore",
            indexName: "treecore",
        }
    },
    customFields: customFields
};
