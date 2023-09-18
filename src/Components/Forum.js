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
const react_1 = __importDefault(require("react"));
const react_2 = require("react");
const react_router_dom_1 = require("react-router-dom");
const Forum = () => {
    const navigate = (0, react_router_dom_1.useNavigate)();
    const [Forum, setForum] = (0, react_2.useState)([]);
    const URL = `${process.env.REACT_APP_BACKEND_URI}/forum`;
    (0, react_2.useEffect)(() => {
        const fetchData = () => __awaiter(void 0, void 0, void 0, function* () {
            const response = yield fetch(URL);
            const data = yield response.json();
            setForum(data);
        });
        fetchData();
    }, [URL]);
    //deletes the current profile from database
    const handleDelete = (_e) => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield fetch(URL, {
            method: "delete",
        });
        if (response.status !== 204)
            console.log("error");
        navigate("/");
    });
    const display = Forum.map((forum) => {
        return (react_1.default.createElement("div", { key: forum._id },
            react_1.default.createElement("p", null,
                "Question:",
                forum.Body)));
    });
    return react_1.default.createElement("div", null, display);
};
//Fernanda needs it
exports.default = Forum;
