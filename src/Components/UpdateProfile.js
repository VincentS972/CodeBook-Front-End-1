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
function UpdateProfile() {
    const navigate = (0, react_router_dom_1.useNavigate)();
    const [profileInput, setProfileInput] = (0, react_2.useState)(null);
    const { id } = (0, react_router_dom_1.useParams)();
    const URL = `${process.env.REACT_APP_BACKEND_URI}/profile/${id}`;
    (0, react_2.useEffect)(() => {
        const fetchData = () => __awaiter(this, void 0, void 0, function* () {
            const responce = yield fetch(URL);
            const data = yield responce.json();
            setProfileInput(data);
        });
        fetchData();
    }, [id, URL]);
    const handleChange = (e) => {
        const value = e.target.value;
        setProfileInput(Object.assign(Object.assign({}, profileInput), { [e.target.name]: value }));
    };
    const handleSubmit = (e) => __awaiter(this, void 0, void 0, function* () {
        e.preventDefault();
        const response = yield fetch(URL, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(profileInput)
        });
        if (response.status !== 204)
            console.log('error!'); // add error handling later
        navigate(`/profile/${id}`);
    });
    const display = profileInput && (react_1.default.createElement("form", { onSubmit: handleSubmit },
        react_1.default.createElement("input", { required: true, onChange: handleChange, value: profileInput['userName'], name: 'userName', placeholder: 'Username' }),
        react_1.default.createElement("input", { required: true, onChange: handleChange, value: profileInput['firstName'], name: 'firstName', placeholder: 'Fist Name' }),
        react_1.default.createElement("input", { required: true, onChange: handleChange, value: profileInput['lastName'], name: 'lastName', placeholder: 'Last name' }),
        react_1.default.createElement("input", { required: true, onChange: handleChange, value: profileInput['emailAddress'], name: 'emailAddress', placeholder: 'New Email' }),
        react_1.default.createElement("input", { required: true, onChange: handleChange, value: profileInput['profilePicture'], name: 'profilePicture', placeholder: 'New image' }),
        react_1.default.createElement("input", { required: true, onChange: handleChange, value: profileInput['password'], name: 'password', placeholder: 'New password' }),
        react_1.default.createElement("input", { type: 'submit' })));
    return (react_1.default.createElement("div", null, display));
}
exports.default = UpdateProfile;
