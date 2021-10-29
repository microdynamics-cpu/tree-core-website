module.exports = {
    title: "木心项目",
    tagline: "创建免费、易用的RISC-V处理器核和开发环境",
    url: "https://microdynamics-cpu.github.io",
    baseUrl: "/",
    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",
    favicon: "favicon.ico",
    organizationName: "microdynamics-cpu",
    projectName: "tree-core-website",
    presets: [[
        "@docusaurus/preset-classic",
        {
            docs: {
                path: "./docs",
                sidebarPath: require.resolve("./sidebars.js")
            },
            theme: {
                customCss: require.resolve("./src/css/custom.css")
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
            id: "treecore bar",
            content: "如果你喜欢木心项目，请在" +
                     "<a target='_blank' href='https://github.com/microdynamics-cpu'>GitHub</a>" +
                     "上给我们点一个星！⭐️",
            backgroundColor: "#000",
            textColor: "#fff",
            isCloseable: true
        },
        navbar: {
            logo: {
                alt: "treecore logo",
                src: "img/treecore.svg"
            },
            items: [{
                label: "文档",
                to: "/docs/intro/intro_background",
                position: "left"
            }, {
                label: "开始",
                to: "/docs/start/start_installation",
                position: "left",
            }, {
                label: "教程",
                to: "/docs/tutorials/tutorials",
                position: "left",
            }, {
                label: "示例",
                to: "/docs/examples/examples",
                position: "left"
            }, {
                label: "接口",
                to: "/docs/api/api_module_doc",
                position: "left",
            }, {
                label: "代码",
                href: "https://github.com/microdynamics-cpu",
                position: "left"
            }],
            hideOnScroll: false
        },
        hideableSidebar: true,
        footer: {
            links: []
        },
        prism: {
            theme: require("prism-react-renderer/themes/oceanicNext"),
            defaultLanguage: "verilog"
        },
        // algolia: {
        //     algoliaOptions: {},
        //     apiKey: "",
        //     indexName: "treecore",
        // },
        // googleAnalytics: {
        //     trackingID: ""
        // },
        // gtag: {
        //     trackingID: "",
        // }
    },
    customFields: {
        email: "microdynamics@126.com",
        keywords: ["risc-v"]
    }
};
