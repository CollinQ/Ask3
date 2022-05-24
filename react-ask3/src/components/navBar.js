
import React from "react";
import { Nav, NavLink, NavMenu }
    from "./navBarElements";

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavMenu>
                    <NavLink to="/login" activeStyle>
                        Login
                    </NavLink>
                    <NavLink to="/questions" activeStyle>
                        Questions
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    );
};

export default Navbar;