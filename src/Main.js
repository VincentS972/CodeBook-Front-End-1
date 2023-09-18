"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
const Home = () => react_1.default.createElement("div", null, "this is home");
const Forum = () => react_1.default.createElement("div", null, "this is a Forum");
const Articles = () => react_1.default.createElement("div", null, "this is the Articles");
const Main = () => (react_1.default.createElement("main", null,
    react_1.default.createElement(react_router_dom_1.Switch, null,
        react_1.default.createElement(react_router_dom_1.Route, { exact: true, path: '/', component: Home }),
        react_1.default.createElement(react_router_dom_1.Route, { exact: true, path: '/forum', component: Forum }),
        react_1.default.createElement(react_router_dom_1.Route, { exact: true, path: '/articles', component: Articles }))));
exports.default = Main;
