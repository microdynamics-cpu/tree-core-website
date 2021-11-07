module.exports = {
    title: "木心项目",
    tagline: "创建免费、易用的RISC-V处理器核和开发环境",
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
            items: [{
                label: "文档",
                position: "left",
                items: [{
                    label: "项目介绍",
                    to: "/docs/intro/intro_background"
                }, {
                    label: "开始上手",
                    to: "/docs/start/start_configuration"
                }, {
                    label: "教程文档",
                    to: "/docs/tutorials/tutorials"
                }, {
                    label: "示例文档",
                    to: "/docs/examples/examples"
                }, {
                    label: "接口文档",
                    to: "/docs/api/api_under_tech"
                }, {
                    label: "风格指南",
                    to: "/docs/guide/guide"
                }, {
                    label: "常见问题",
                    to: "/docs/faq/faq"
                }]
            }, {
                label: "博客",
                position: "left",
                items: [{
                    label: "全部内容",
                    to: "/blog"
                }, {
                    label: "版本发布",
                    to: "/blog/tags/version"
                }, {
                    label: "应用案例",
                    to: "/blog/tags/apps"
                }, {
                    label: "新闻动态",
                    to: "/blog/tags/news"
                }]
            }, {
                label: "社区",
                position: "left",
                items: [{
                    label: "插件市场",
                    to: "/community/plugins"
                }, {
                    label: "代码仓库",
                    to: "/community/repositories"
                }, {
                    label: "交流论坛",
                    to: "/community/forum"
                }, {
                    label: "比赛活动",
                    to: "/community/competitions"
                }, {
                    label: "在线课程",
                    to: "/community/courses"
                }, {
                    label: "外部资源",
                    to: "/community/resources"
                }, {
                    label: "合作伙伴",
                    to: "/community/partners"
                }]
            }, {
                label: "下载",
                to: "/download",
                position: "left"
            }, {
                label: "团队",
                to: "/team",
                position: "left"
            }, {
                label: "支持",
                to: "/support",
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
        algolia: {
            apiKey: "treecore",
            indexName: "treecore",
        },
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
