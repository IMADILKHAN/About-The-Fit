import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart, AiOutlineUser, AiOutlineLogin, AiOutlineLogout } from "react-icons/ai";
import { signout } from "../auth/helper";

export default function NavBar() {
    // Check if the user is authenticated (you should have a mechanism to determine this)
    const isAuthenticated = true; // You can replace this with your authentication logic

    return (
        <>
            <nav className="navbar navbar-expand-sm bg-dark">
                <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                    <ul className="navbar-nav mr-1 mt-0 mt-lg-6">
                        {/* Link to the homepage */}
                        <Link to={`/`}>
                            <li className="navbar-brand text-light">
                                About The Fit
                            </li>
                        </Link>

                        {/* Link to the cart page */}
                        <Link to={`/cart`}>
                            <li className="text-light navbar-brand">
                                <AiOutlineShoppingCart />
                            </li>
                        </Link>

                        {/* Link to the user dashboard */}
                        <Link to={`/user/dashboard`}>
                            <li className="text-light navbar-brand">
                                <AiOutlineUser />
                            </li>
                        </Link>

                        {isAuthenticated ? (
                            // Show the logout button when the user is authenticated
                            <li onClick={() => { signout(); }} className="text-light navbar-brand">
                                <AiOutlineLogout />
                            </li>
                        ) : (
                            // Show the login button when the user is not authenticated
                            <Link to={`/signin`}>
                                <li className="text-light navbar-brand">
                                    <AiOutlineLogin />
                                </li>
                            </Link>
                        )}
                    </ul>
                </div>
            </nav>
        </>
    );
}
