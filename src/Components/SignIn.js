"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Col_1 = __importDefault(require("react-bootstrap/Col"));
const Form_1 = __importDefault(require("react-bootstrap/Form"));
const Row_1 = __importDefault(require("react-bootstrap/Row"));
const Button_1 = __importDefault(require("react-bootstrap/Button"));
// import InputGroup from 'react-bootstrap/InputGroup';
// import { FormGroup } from 'react-bootstrap';
const react_router_dom_1 = require("react-router-dom");
const react_1 = require("react");
const react_2 = __importDefault(require("react"));
const Signin = () => {
    const Navigate = (0, react_router_dom_1.useNavigate)();
    const URL = `${process.env.REACT_APP_BACKEND_URI}/profile/login`;
    const [signinInput, setSigninInput] = (0, react_1.useState)({
        emailAddress: "",
        password: "",
    });
    //hangles the change in text inputs
    const handleChange = (e) => {
        const value = e.target.value;
        setSigninInput(Object.assign(Object.assign({}, signinInput), { [e.target.name]: value }));
    };
    //handles the submit action
    const handleSubmit = (e) => __awaiter(void 0, void 0, void 0, function* () {
        e.preventDefault();
        const response = yield fetch(URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(signinInput),
        });
        const data = yield response.json();
        console.log("checking data", data);
        Navigate(`/profile/${data._id}`);
    });
    return (react_2.default.createElement("div", null,
        react_2.default.createElement("div", null,
            react_2.default.createElement("h1", null, "Sign in")),
        react_2.default.createElement(Form_1.default, { onSubmit: handleSubmit },
            react_2.default.createElement(Row_1.default, { className: "mb-3" },
                react_2.default.createElement(Form_1.default.Group, { as: Col_1.default, xs: 7, controlId: "formGridEmail" },
                    react_2.default.createElement(Form_1.default.Label, null, "Email"),
                    react_2.default.createElement(Form_1.default.Control, { type: "email", name: "emailAddress", onChange: handleChange, placeholder: "Enter email" })),
                react_2.default.createElement(Form_1.default.Group, { as: Col_1.default, controlId: "formGridPassword" },
                    react_2.default.createElement(Form_1.default.Label, null, "Password"),
                    react_2.default.createElement(Form_1.default.Control, { type: "password", name: "password", onChange: handleChange, placeholder: "Password" }))),
            react_2.default.createElement(Button_1.default, { variant: "primary", type: "submit" }, "Submit"),
            react_2.default.createElement(Row_1.default, { className: "mb-3" },
                react_2.default.createElement("p", null,
                    " ",
                    "Don't have an account yet?",
                    react_2.default.createElement("a", { href: "/Signup" }, "Sign Up"),
                    " ")))));
};
exports.default = Signin;
