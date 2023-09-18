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
const react_bootstrap_1 = require("react-bootstrap");
const react_1 = require("react");
const react_router_dom_1 = require("react-router-dom");
const react_2 = __importDefault(require("react"));
const Signup = () => {
    const Navigate = (0, react_router_dom_1.useNavigate)();
    const [profileInput, setProfileInput] = (0, react_1.useState)({
        userName: "",
        firstName: "",
        lastName: "",
        profilePicture: "",
        emailAddress: "",
        getsUpdates: true,
        password: "",
    });
    //sets the url for profile creation
    const URL = `${process.env.REACT_APP_BACKEND_URI}/profile`;
    //function to handle the change in the textboxes
    const handleChange = (e) => {
        const value = e.target.value;
        setProfileInput(Object.assign(Object.assign({}, profileInput), { [e.target.name]: value }));
    };
    //function to handle cnahge in checkbox
    const handleUpdateCheck = (e) => {
        const checked = e.target.checked;
        setProfileInput(Object.assign(Object.assign({}, profileInput), { [e.target.name]: checked }));
    };
    //handles the submit to create the profile in the database
    const handleSubmit = (e) => __awaiter(void 0, void 0, void 0, function* () {
        console.log(profileInput);
        const response = yield fetch(URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(profileInput),
        });
        if (response.status !== 201)
            console.log("error");
        Navigate(`/SignIn`);
    });
    return (react_2.default.createElement("div", null,
        react_2.default.createElement("div", null,
            react_2.default.createElement("h1", null, "Sign Up")),
        react_2.default.createElement(Form_1.default, { onSubmit: handleSubmit },
            react_2.default.createElement(Row_1.default, { className: "mb-3" },
                react_2.default.createElement(react_bootstrap_1.FormGroup, { as: Col_1.default, xs: 7, controlId: "formGridName" },
                    react_2.default.createElement(Form_1.default.Label, null, "Username"),
                    react_2.default.createElement(Form_1.default.Control, { type: "text", onChange: handleChange, name: "userName", placeholder: "username" }),
                    react_2.default.createElement(Form_1.default.Label, null, "First Name"),
                    react_2.default.createElement(Form_1.default.Control, { type: "text", onChange: handleChange, name: "firstName", placeholder: "FirstName" }),
                    react_2.default.createElement(Form_1.default.Label, null, "Last Name"),
                    react_2.default.createElement(Form_1.default.Control, { type: "text", onChange: handleChange, name: "lastName", placeholder: "LastName" }),
                    react_2.default.createElement(Form_1.default.Label, null, "Profile Picture URL"),
                    react_2.default.createElement(Form_1.default.Control, { type: "text", onChange: handleChange, name: "profilePicture", placeholder: "" }))),
            react_2.default.createElement(Row_1.default, { className: "mb-3" },
                react_2.default.createElement(Form_1.default.Group, { as: Col_1.default, xs: 7, controlId: "formGridEmail" },
                    react_2.default.createElement(Form_1.default.Label, null, "Email"),
                    react_2.default.createElement(Form_1.default.Control, { type: "email", onChange: handleChange, name: "emailAddress", placeholder: "Enter email" })),
                react_2.default.createElement(Form_1.default.Group, { as: Col_1.default, controlId: "formGridPassword" },
                    react_2.default.createElement(Form_1.default.Label, null, "Password"),
                    react_2.default.createElement(Form_1.default.Control, { type: "password", secureTextEntry: true }),
                    "[true] onChange=",
                    handleChange,
                    "name=\"password\" placeholder=\"Password\" />")),
            react_2.default.createElement(Form_1.default.Group, { className: "mb-3", id: "formGridCheckbox" },
                react_2.default.createElement(Form_1.default.Check, { type: "checkbox", defaultChecked: profileInput.getsUpdates, name: "getsUpdates", onChange: handleUpdateCheck, label: "Check to recieve updates" })),
            react_2.default.createElement(Button_1.default, { variant: "primary", type: "submit" }, "Submit"))));
};
exports.default = Signup;
