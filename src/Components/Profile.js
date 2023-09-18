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
const Profile = () => {
    const navigate = (0, react_router_dom_1.useNavigate)();
    const [profile, setProfile] = (0, react_2.useState)(undefined);
    const { id } = (0, react_router_dom_1.useParams)();
    const URL = `${process.env.REACT_APP_BACKEND_URI}/profile/${id}`;
    (0, react_2.useEffect)(() => {
        const fetchData = () => __awaiter(void 0, void 0, void 0, function* () {
            const response = yield fetch(URL);
            const data = yield response.json();
            setProfile(data);
        });
        fetchData();
    }, [id, URL]);
    //deletes the current profile from database
    const handleDelete = (e) => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield fetch(URL, {
            method: "delete",
        });
        if (response.status !== 204)
            console.log("error");
        navigate("/");
    });
    const display = profile && (react_1.default.createElement("div", { style: { margin: "auto" } },
        react_1.default.createElement("h1", null, profile.userName),
        react_1.default.createElement("img", { src: profile.profilePicture }),
        react_1.default.createElement("p", null, profile.emailAddress),
        react_1.default.createElement("div", null,
            react_1.default.createElement("h4", null,
                profile.firstName,
                " ",
                profile.lastName)),
        react_1.default.createElement("a", { href: `/Profile/update/${id}` }, "Update"),
        react_1.default.createElement("button", { onClick: handleDelete }, "Delete")));
    return react_1.default.createElement("div", null, display);
};
exports.default = Profile;
