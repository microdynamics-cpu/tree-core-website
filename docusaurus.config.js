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
    plugins: [require.resolve("./plugins/docusaurus-plugin-hotjar")],
    presets: [[
        "@docusaurus/preset-classic",
        {
            docs: {
                path: "./docs",
                sidebarPath: require.resolve("./sidebars.json")
            },
            pages: {
                path: "./pages"
            },
            theme: {
                customCss: require.resolve("./src/theme/index.css")
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
            title: "",
            logo: {
                alt: "treecore logo",
                src: "img/treecore.svg"
            },
            items: [{
                label: "文档",
                to: "/docs/intro/intro_background",
                position: "left"
            }, {
                label: "入门",
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
        // },
        hotjar: {
            hjid: 000
        }
    },
    customFields: {
        email: "microdynamics@126.com",
        keywords: ["forms", "react", "schema"],
        companies: [{
            url: "https://www.deskpro.com/",
            image: "deskpro.png",
            alt: "Deskpro"
        }, {
            url: "https://www.nokia.com/",
            image: "nokia.png",
            alt: "Nokia"
        }, {
            url: "https://github.com/react-page/react-page/tree/master/packages/plugins/createPluginMaterialUi",
            image: "react-page.png",
            alt: "React Page",
        }, {
            url: "https://graphback.dev",
            image: "graphback.png",
            alt: "Graphback",
        }, {
            url: "https://www.onyx-one.com/",
            image: "onyx-one.png",
            alt: "Onyx one",
        }, {
            url: "https://aerogear.org",
            image: "aerogear.png",
            alt: "Aerogear"
        }, {
            url: "https://cleverbeagle.com/together",
            image: "cleverbeagle.png",
            alt: "Clever Beagle",
        }, {
            url: "http://www.orionjs.org",
            image: "orionjs.png",
            alt: "Orion.js"
        }, {
            url: "https://boulder.care",
            image: "boulder.svg",
            alt: "Boulder Care",
        }],
    }
};
