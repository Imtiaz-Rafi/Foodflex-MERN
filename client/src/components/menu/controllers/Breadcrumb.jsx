import React from "react";
import { Link } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
// import styles from "./menu.module.css";

const BreadCrumb = () => {
    return (
        <Breadcrumb color="light">
            {/* <Breadcrumb color="light" className={styles.breadCrumb}> */}
            <BreadcrumbItem>
                <Link to="/">Home</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>Menu</BreadcrumbItem>
        </Breadcrumb>
    );
};

export default BreadCrumb;
