const projectDomain = "treecore.xyz";
const orgGitHubUrl = "https://github.com/microdynamics-cpu";

module.exports = {
    websiteUrl: `https://${projectDomain}`,
    websiteBar: {
        docs: {
            label: "文档",
            position: "left",
            items: [{
                label: "木心工具集",
                to: "/docs/treecore_ide/intro/intro_background"
            }, {
                label: "木心处理器",
                to: "/docs/treecore_cpu/intro/intro_background"
            }, {
                label: "数字后端实验教程",
                to: "/docs/backend-design-tutorial/intro"
            }]
        },
        blog: {
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
        },
        community: {
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
                label: "在线教程",
                to: "/community/courses"
            }, {
                label: "外部资源",
                to: "/community/resources"
            }, {
                label: "合作伙伴",
                to: "/community/partners"
            }]
        },
        download: {
            label: "下载",
            to: "/download",
            position: "left"
        },
        team: {
            label: "团队",
            to: "/team",
            position: "left"
        },
        support: {
            label: "支持",
            to: "/support",
            position: "left"
        },
        communication: {
            label: "交流",
            items: [{
                label: "论坛",
                to: "",
                icon: ""
            }, {
                label: "邮箱",
                to: "mailto:" + this.teamEmail,
                icon: ""
            }, {
                label: "组织",
                to: orgGitHubUrl,
                icon: ""
            }, {
                label: "微信",
                to: "",
                icon: ""
            }, {
                label: "QQ",
                to: "",
                icon: ""
            }]
        }
    },
    websiteCopyright: `Copyright © ${new Date().getFullYear()} MicroDynamics CPU`,
    projectTagline: "创建免费、易用的RISC-V处理器核和开发工具集",
    projectCPUGitHubUrl: `${orgGitHubUrl}/tree-core-cpu`,
    projectIDEGitHubUrl: `${orgGitHubUrl}/tree-core-ide`,
    projectKeywords: ["cpu", "ide", "risc-v"],
    teamEmail: "microdynamics@126.com",
    teamGitHubUrl: "https://github.com/microdynamics",
}
