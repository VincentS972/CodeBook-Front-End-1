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
const Card_1 = __importDefault(require("react-bootstrap/Card"));
const CardGroup_1 = __importDefault(require("react-bootstrap/CardGroup"));
const Container_1 = __importDefault(require("react-bootstrap/Container"));
const Row_1 = __importDefault(require("react-bootstrap/Row"));
const Col_1 = __importDefault(require("react-bootstrap/Col"));
const Image_1 = __importDefault(require("react-bootstrap/Image"));
const react_iframe_1 = __importDefault(require("react-iframe"));
const codebookbanner_png_1 = __importDefault(require("./codebookbanner.png"));
const codepic_jpeg_1 = __importDefault(require("./codepic.jpeg"));
const Form_1 = __importDefault(require("react-bootstrap/Form"));
const Button_1 = __importDefault(require("react-bootstrap/Button"));
const react_router_dom_1 = require("react-router-dom");
const react_1 = require("react");
const react_2 = __importDefault(require("react"));
const Home = () => {
    const Navigate = (0, react_router_dom_1.useNavigate)();
    const URL = `${process.env.REACT_APP_BACKEND_URI}/forum`;
    const [forumInput, setForumInput] = (0, react_1.useState)({
        Body: "",
    });
    //hangles the change in text inputs
    const handleChange = (e) => {
        const value = e.target.value;
        setForumInput(Object.assign(Object.assign({}, forumInput), { [e.target.name]: value }));
    };
    //handles the submit action
    const handleSubmit = (e) => __awaiter(void 0, void 0, void 0, function* () {
        console.log(forumInput);
        e.preventDefault();
        const response = yield fetch(URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(forumInput),
        });
        const data = yield response.json();
        console.log("checking data", data);
        Navigate(`/forum`);
    });
    return (react_2.default.createElement("div", { style: { margin: "auto" } },
        react_2.default.createElement(Container_1.default, { style: { marginTop: "50px", textAlign: "center" } },
            react_2.default.createElement(Image_1.default, { style: {
                    width: "100%",
                    border: "1px solid #E8E9EB",
                    marginTop: "0px",
                    marginBottom: "5px",
                }, src: codebookbanner_png_1.default }),
            react_2.default.createElement(Row_1.default, { style: {
                    borderBottom: "1px solid #E8E9EB",
                    display: "flex",
                    justifyContent: "space-evenly",
                } }),
            react_2.default.createElement(Row_1.default, null,
                react_2.default.createElement(Col_1.default, { xs: true, lg: "4", style: {
                        border: "1px solid #E8E9EB",
                        borderRadius: "10px",
                        marginRight: " 50px",
                        marginTop: "20px",
                    } },
                    react_2.default.createElement(Image_1.default, { style: {
                            width: "425px",
                            border: "1px solid #E8E9EB",
                            marginTop: "0px",
                            marginBottom: "5px",
                        }, src: codepic_jpeg_1.default }),
                    react_2.default.createElement("h4", { style: { color: " #564256" } }, "Today's News"),
                    react_2.default.createElement("h5", null, "* GitHub research highlights the impact of AI on developers")),
                react_2.default.createElement(Col_1.default, { style: {
                        border: "2px solid #E8E9EB",
                        borderRadius: "10px",
                        marginTop: "20px",
                        marginBottom: "5px",
                        marginRight: "23px",
                        justifyItems: "center",
                    } },
                    react_2.default.createElement(Form_1.default, { onSubmit: handleSubmit },
                        react_2.default.createElement("h4", { style: { color: " #564256" } }, "Post your questions here!"),
                        react_2.default.createElement(Form_1.default.Group, { className: "mb-3" },
                            react_2.default.createElement(Form_1.default.Control, { as: "textarea", rows: 6, onChange: handleChange, name: "Body" }),
                            react_2.default.createElement(Button_1.default, { variant: "secondary", type: "submit" }, "Post")))),
                react_2.default.createElement(Row_1.default, null,
                    react_2.default.createElement(Col_1.default, { style: {
                            border: "2px solid #E8E9EB",
                            borderRadius: "10px",
                            marginTop: "20px",
                            marginBottom: "5px",
                            justifyItems: "center",
                        } },
                        react_2.default.createElement("h4", { style: { color: " #564256" } }, "Stressed? "),
                        react_2.default.createElement(react_iframe_1.default, { id: "iFrameExample", title: "iFrame Example", width: "100%", height: "400px", display: "flex", src: "https://codepen.io/jh3y/pen/LYNZwGm?editors=1000" }))),
                react_2.default.createElement("h4", { style: {
                        color: " #564256",
                        marginTop: "10px",
                        marginBottom: "10px",
                    } },
                    " ",
                    "Resources",
                    " "),
                react_2.default.createElement(CardGroup_1.default, { fluid: true },
                    react_2.default.createElement(Card_1.default, null,
                        react_2.default.createElement(Card_1.default.Body, null,
                            react_2.default.createElement(Card_1.default.Title, { style: { color: " #564256" } }, "W3Schools"),
                            react_2.default.createElement(Card_1.default.Text, null, "W3Schools is optimized for learning and training. Examples might be simplified to improve reading and learning. Tutorials, references, and examples.")),
                        react_2.default.createElement(Card_1.default.Footer, null,
                            react_2.default.createElement(Card_1.default.Link, { href: "https://www.w3schools.com/" },
                                "W3Schools",
                                " "))),
                    react_2.default.createElement(Card_1.default, null,
                        react_2.default.createElement(Card_1.default.Body, null,
                            react_2.default.createElement(Card_1.default.Title, { style: { color: " #564256" } }, "Stack Overflow"),
                            react_2.default.createElement(Card_1.default.Text, null,
                                "Empower Your Teams and Start Collaborating, Sharing Knowledge, & Scaling Productivity. Learn How Stack Overflow for Teams Can Empower Teams In Your Organization. Manage Data Sprawl. Data Stays Fresh. Attract & Retain Talent.",
                                " ")),
                        react_2.default.createElement(Card_1.default.Footer, null,
                            react_2.default.createElement(Card_1.default.Link, { href: "https://stackoverflow.com/" },
                                " ",
                                "Stack Overflow",
                                " "))),
                    react_2.default.createElement(Card_1.default, null,
                        react_2.default.createElement(Card_1.default.Body, null,
                            react_2.default.createElement(Card_1.default.Title, { style: { color: " #564256" } }, "MDN"),
                            react_2.default.createElement(Card_1.default.Text, null, "The MDN Web Docs site provides information about Open Web technologies including HTML, CSS, and APIs for both Web sites and progressive web apps.")),
                        react_2.default.createElement(Card_1.default.Footer, null,
                            react_2.default.createElement(Card_1.default.Link, { href: "https://developer.mozilla.org/en-US/" }, "MDN"))))))));
};
exports.default = Home;
