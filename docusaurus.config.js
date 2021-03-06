const customFields = require("./src/configs/customFields");
const math = require('remark-math');
const katex = require('rehype-katex');
const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/oceanicNext');

// Katex use the exact same versions.
// The latest versions are incompatible with Docusaurus 2.
// Need to follow online docs
module.exports = {
    title: "木心项目",
    url: "https://microdynamics-cpu.github.io",
    baseUrl: "/",
    favicon: "favicon.ico",
    trailingSlash: true,
    i18n: {
        defaultLocale: "zh-CN",
        locales: ["en", "zh-CN"],
    },
    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "throw",
    onDuplicateRoutes: "throw",
    tagline: customFields.projectTagline,
    organizationName: "microdynamics-cpu",
    projectName: "tree-core-website",
    themeConfig: {
        colorMode: {
            defaultMode: "dark",
            disableSwitch: false,
            respectPrefersColorScheme: false
        },
        metadata: [{ name: "keywords", content: "eda, sta" }],
        announcementBar: {
            id: "treecore-bar",
            content: "如果你喜欢木心项目，请在" +
                "<a target='_blank' href='https://github.com/microdynamics-cpu'>GitHub</a>" +
                "上给我们点一个星！⭐️",
            backgroundColor: "#afb42b",
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
                customFields.websiteBar.support,
                {
                    type: "localeDropdown",
                    position: "right",
                    dropdownItemsAfter: [
                        {
                            type: 'html',
                            value: '<hr style="margin: 0.3rem 0;">',
                        },
                        {
                            href: "https://github.com/microdynamics-cpu",
                            label: "Help us translate",
                        },
                    ],
                },
                {
                    label: "GitHub",
                    href: "https://github.com/microdynamics-cpu",
                    position: "right",
                },
                {
                    type: 'search',
                    position: 'right',
                },
            ],
            hideOnScroll: false
        },
        docs: {
            sidebar: {
                hideable: true,
                autoCollapseCategories: true,
            },
        },
        prism: {
            theme: lightCodeTheme,
            darkTheme: darkCodeTheme,
            defaultLanguage: "verilog"
        },
        algolia: {
            appId: "9B4M4LY1NS",
            apiKey: "f9e6016c21db9cade0ce260e03e14c7f",
            indexName: "treecore",
        },
    },

    presets: [[
        "@docusaurus/preset-classic", {
            docs: {
                path: "./docs",
                sidebarPath: require.resolve("./sidebars.js"),
                remarkPlugins: [math],
                rehypePlugins: [katex],
            },
            blog: {
                id: "blog",
                path: "./blog",
                routeBasePath: "blog",
                blogTitle: "博客",
                blogDescription: "木心项目的博客",
                blogSidebarCount: 10,
                blogSidebarTitle: "最近的博客",
                postsPerPage: 15,
                showReadingTime: true
            },
            theme: {
                customCss: require.resolve("./src/css/custom.css")
            },
        }
    ]],
    customFields: customFields,
    stylesheets: [
        {
            href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
            type: 'text/css',
            integrity:
                'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
            crossorigin: 'anonymous',
        },
    ],
};
