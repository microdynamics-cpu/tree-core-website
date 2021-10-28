import classNames from "classnames";
import React from "react";

import styles from "../../index.module.css";
import { Button } from "../../components/Button";
import { Heading } from "../../components/Heading";
import { Subtitle } from "../../components/Subtitle";

export function CommercialServices() {
    return (
        <div className={ classNames("hero hero--primary",
                                    styles["overflow-hidden"],
                                    styles.whyus) }>
            <div className="container">
                <div className="section">
                    <div className="row">
                        <div className={ classNames("col col--5",
                                                    styles["section-content"])}>
                            <Subtitle>商业支持</Subtitle>
                            <Heading className={ styles["heading-white"] }>
                                寻找更多？
                            </Heading>
                            <p className={ classNames(styles.text,
                                                      styles.paragraph) }>
                                木心项目现在和将来都是永久免费的，
                                但是我们可以为您提供额外的附加值服务：
                            </p>
                            <ul className={ classNames(styles.text,
                                                       styles.bullets) }>
                                <li>付费技术咨询</li>
                                <li>定制处理器核</li>
                                <li>定制开发环境</li>
                                <li>硬件和软件协同解决方案</li>
                            </ul>
                            <div className={ styles["center-if-sm"] }>
                                <Button to="https://github.com/microdynamics-cpu">
                                    联系我们
                                </Button>
                            </div>
                        </div>
                        <div className={ classNames("col",
                                                    styles["section-content"],
                                                    styles["section-bgwhite"]) }>
                            <span className={
                                classNames(
                                    styles["section-bgwhite-block"],
                                    styles["section-bgwhite-block-right"]) } />
                            <div className={ classNames("row",
                                                        styles["blue-accent"],
                                                        styles.padding) }>
                                <div className="col">
                                    <div className={
                                        classNames(styles["solid-border-box"],
                                                   styles["commercial-box"]) }>
                                        <Heading>定制化的处理器核</Heading>
                                        <ul>
                                            <li>1</li>
                                            <li>2</li>
                                            <li>3</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className={ classNames("row",
                                                        styles["green-accent"],
                                                        styles.padding) }>
                                <div className="col">
                                    <div className={
                                        classNames(
                                            styles["solid-border-box"],
                                            styles["commercial-box"],
                                            styles["commercial-box-right"]) }>
                                    <Heading>定制化的开发环境</Heading>
                                    <ul>
                                        <li>1</li>
                                        <li>2</li>
                                        <li>3</li>
                                    </ul>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
