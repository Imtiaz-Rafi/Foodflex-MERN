import React, { useState } from "react";
import PropTypes from "prop-types";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";

const AccountDropDown = ({ isLoggedIn }) => {
    const [isDropDownOpen, setIsDropdownOpen] = useState(false);
    const toogleDropdown = () => {
        setIsDropdownOpen(!isDropDownOpen);
    };
    const handleLogOut = async () => {
        const res = await fetch("/logout", {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            credentials: "include",
        });
        const data = res.json();
        if (res.status === 404 || !data) {
            window.alert("Something ERROR!");
        } else {
            isLoggedIn();
            window.alert("Logout Successfully");
        }
    };
    return (
        <div>
            <Dropdown toggle={toogleDropdown} isOpen={isDropDownOpen}>
                <DropdownToggle className="section-btn">
                    <span style={{ margin: "0px 5px 0px 0px" }}>My Account</span>
                    <i class="fa fa-angle-down"></i>
                </DropdownToggle>
                <DropdownMenu end className="dropdown-menu">
                    <DropdownItem className="dropdown-item">PROFILE</DropdownItem>
                    <DropdownItem className="dropdown-item">ADDRESS</DropdownItem>
                    <DropdownItem className="dropdown-item">ORDERS</DropdownItem>
                    <DropdownItem className="dropdown-item">RATES AND REVIEWS</DropdownItem>
                    <DropdownItem className="dropdown-item">FAVOURITES</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem className="dropdown-item" onClick={handleLogOut}>
                        LOG OUT
                    </DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </div>
    );
};

AccountDropDown.propTypes = {
    isLoggedIn: PropTypes.func.isRequired,
};

export default AccountDropDown;
