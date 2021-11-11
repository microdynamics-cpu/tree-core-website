import classNames from "classnames";
import React from "react";
import Link from "@docusaurus/Link";

import styles from "../../css/index.module.css";

export type ButtonProps = JSX.IntrinsicElements["button"] & { to: string };

export function BaseButton({ children, className, to, ...props }: ButtonProps) {
    return (
        <Link to={ to }>
            <button
                { ...props }
                className={ classNames("button button--lg button--primary",
                                       styles["call-to-action"],
                                       className) }>
                { children }
            </button>
        </Link>
    );
}
