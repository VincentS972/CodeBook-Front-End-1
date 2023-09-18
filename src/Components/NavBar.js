"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Button_1 = __importDefault(require("react-bootstrap/Button"));
const Container_1 = __importDefault(require("react-bootstrap/Container"));
const Form_1 = __importDefault(require("react-bootstrap/Form"));
const Nav_1 = __importDefault(require("react-bootstrap/Nav"));
const Navbar_1 = __importDefault(require("react-bootstrap/Navbar"));
const NavDropdown_1 = __importDefault(require("react-bootstrap/NavDropdown"));
function NavBar() {
    return (react_1.default.createElement(Navbar_1.default, { expand: "lg", className: "bg-body-tertiary" },
        react_1.default.createElement(Container_1.default, { fluid: true },
            react_1.default.createElement(Navbar_1.default.Brand, { href: "/" },
                react_1.default.createElement("img", { alt: "", src: "./icon.ico", width: "50", height: "50", className: "d-inline-block align-top" })),
            react_1.default.createElement(Navbar_1.default.Toggle, { "aria-controls": "navbarScroll" }),
            react_1.default.createElement(Navbar_1.default.Collapse, { id: "navbarScroll" },
                react_1.default.createElement(Nav_1.default, { className: "me-auto my-2 my-lg-0", style: { maxHeight: "100px" }, navbarScroll: true },
                    react_1.default.createElement(Nav_1.default.Link, { href: "/" }, "Home"),
                    react_1.default.createElement(Nav_1.default.Link, { href: "/Profile" }, "Profile"),
                    react_1.default.createElement(Nav_1.default.Link, { href: "/Forum" }, "Forum"),
                    react_1.default.createElement(NavDropdown_1.default, { title: "Resources", id: "navbarScrollingDropdown" },
                        react_1.default.createElement(NavDropdown_1.default.Item, { href: "https://www.w3schools.com/" }, "W3 School"),
                        react_1.default.createElement(NavDropdown_1.default.Item, { href: "https://developer.mozilla.org/en-US/" }, "MozillaDev"),
                        react_1.default.createElement(NavDropdown_1.default.Item, { href: "https://stackoverflow.com/" }, "stackoverflow"))),
                react_1.default.createElement(Form_1.default, { className: "d-flex" },
                    react_1.default.createElement(Form_1.default.Control, { type: "search", placeholder: "Search", className: "me-2", "aria-label": "Search" }),
                    react_1.default.createElement(Button_1.default, { variant: "outline-success", style: {
                            borderColor: "#564256",
                            color: "#564256",
                            marginRight: "5px",
                            marginLeft: "5px",
                        } }, "Search")),
                react_1.default.createElement(Button_1.default, { className: "sign", href: "/SignIn", style: {
                        borderColor: "#564256",
                        backgroundColor: "#564256",
                        marginRight: "5px",
                        marginLeft: "5px",
                    } }, "Sign-In")))));
}
exports.default = NavBar;
