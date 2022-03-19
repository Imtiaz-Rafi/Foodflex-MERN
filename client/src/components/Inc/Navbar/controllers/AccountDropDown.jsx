import React, { useState } from "react";
import PropTypes from "prop-types";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";

const AccountDropDown = (props) => {
    const [isDropDownOpen, setIsDropdownOpen] = useState(false);
    const toogleDropdown = () => {
        setIsDropdownOpen(!isDropDownOpen);
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
                    <DropdownItem className="dropdown-item">LOG OUT</DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </div>
    );
};

AccountDropDown.propTypes = {};

export default AccountDropDown;
