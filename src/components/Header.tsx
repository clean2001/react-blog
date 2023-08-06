import React, { ReactNode, useRef, useState } from "react";
import styles from "./header.module.css";

export default function Header() {
    return (
        <div id="header">
            <span className={styles.title}>Blog</span>
        </div>
    );
}