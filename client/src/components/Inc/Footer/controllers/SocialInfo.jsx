import React from "react";
import { Link } from "react-router-dom";

const SocialInfo = () => {
    return (
        <div className="col-md-2 col-sm-4">
            <ul className="wow fadeInUp social-icon" data-wow-delay="0.4s">
                <li>
                    <Link to="/" className="fa fa-facebook-square" attr="facebook icon" />
                </li>
                <li>
                    <Link to="/" className="fa fa-twitter" />
                </li>
                <li>
                    <Link to="/" className="fa fa-instagram" />
                </li>
                <li>
                    <Link to="/" className="fa fa-google" />
                </li>
            </ul>
            <div className="wow fadeInUp copyright-text" data-wow-delay="0.8s">
                <p>
                    <br />
                    Copyright © 2022 <br />
                    FoodFlex
                    <br />
                    <br />
                    Developer:
                    <a href="https://github.com/Imtiaz-Rafi/Foodflex-MERN"> Imtiaz-Rafi</a>
                </p>
            </div>
        </div>
    );
};

export default SocialInfo;
