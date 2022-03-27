import { AuthenticatedTemplate, UnauthenticatedTemplate, useMsal } from "@azure/msal-react";

import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import Button from "react-bootstrap/Button";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/esm/Dropdown";

import { loginRequest, b2cPolicies } from "../authConfig";

export const NavigationBar = () => {

    const { instance } = useMsal();

    const handleLogin = () => {
        instance.loginPopup(loginRequest)
            .catch((error) => console.log(error))
    }
    /**
     * Most applications will need to conditionally render certain components based on whether a user is signed in or not. 
     * msal-react provides 2 easy ways to do this. AuthenticatedTemplate and UnauthenticatedTemplate components will 
     * only render their children if a user is authenticated or unauthenticated, respectively.
     */
    return (
        <>
            <Navbar bg="primary" variant="dark">
                <a className="navbar-brand" href="/">Smart Office</a>
                <AuthenticatedTemplate>
					<Nav.Link as={Button} href="/hrh?floor=3">HRH 3</Nav.Link>
                    <Nav.Link as={Button} href="/hrh?floor=11">HRH 11</Nav.Link>
                    <Nav.Link as={Button} href="/hrh?floor=12">HRH 12</Nav.Link>
                    
                    <div className="ml-auto">
                        <Button variant="info" onClick={() => instance.loginPopup(b2cPolicies.authorities.editProfile)} className="ml-auto">Edit Profile</Button>
                        <DropdownButton variant="warning" className="ml-auto" drop="left" title="Sign Out">
                            <Dropdown.Item as="button" onClick={() => instance.logoutPopup({ postLogoutRedirectUri: "/", mainWindowRedirectUri: "/" })}>Sign out using Popup</Dropdown.Item>
                            <Dropdown.Item as="button" onClick={() => instance.logoutRedirect({ postLogoutRedirectUri: "/" })}>Sign out using Redirect</Dropdown.Item>
                        </DropdownButton>
                    </div>
                </AuthenticatedTemplate>
                <UnauthenticatedTemplate>
                    <DropdownButton variant="secondary" className="ml-auto" drop="left" title="Sign In">
                        <Dropdown.Item as="button" onClick={handleLogin}>Sign in using Popup</Dropdown.Item>
                        <Dropdown.Item as="button" onClick={() => instance.loginRedirect(loginRequest)}>Sign in using Redirect</Dropdown.Item>
                    </DropdownButton>
                </UnauthenticatedTemplate>
            </Navbar>
        </>
    );
};