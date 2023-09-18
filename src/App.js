"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_router_dom_1 = require("react-router-dom");
const NavBar_1 = __importDefault(require("./Components/NavBar"));
const Home_1 = __importDefault(require("./Components/Home"));
const SignIn_1 = __importDefault(require("./Components/SignIn"));
const Signup_1 = __importDefault(require("./Components/Signup"));
const Forum_1 = __importDefault(require("./Components/Forum"));
const Profile_1 = __importDefault(require("./Components/Profile"));
const Footer_1 = __importDefault(require("./Components/Footer"));
const UpdateProfile_1 = __importDefault(require("./Components/UpdateProfile"));
const react_1 = __importDefault(require("react"));
function App() {
    return (react_1.default.createElement("div", { className: "App" },
        react_1.default.createElement(react_router_dom_1.BrowserRouter, null,
            react_1.default.createElement(NavBar_1.default, null),
            react_1.default.createElement(react_router_dom_1.Routes, null,
                react_1.default.createElement(react_router_dom_1.Route, { path: "/", element: react_1.default.createElement(Home_1.default, null) }),
                react_1.default.createElement(react_router_dom_1.Route, { path: "/forum", element: react_1.default.createElement(Forum_1.default, null) }),
                react_1.default.createElement(react_router_dom_1.Route, { path: "/Profile/:id", element: react_1.default.createElement(Profile_1.default, null) }),
                react_1.default.createElement(react_router_dom_1.Route, { path: "/SignIn", element: react_1.default.createElement(SignIn_1.default, null) }),
                react_1.default.createElement(react_router_dom_1.Route, { path: "/Profile/update/:id", element: react_1.default.createElement(UpdateProfile_1.default, null) }),
                react_1.default.createElement(react_router_dom_1.Route, { path: "/SignUp", element: react_1.default.createElement(Signup_1.default, null) })),
            react_1.default.createElement(Footer_1.default, null))));
}
exports.default = App;
