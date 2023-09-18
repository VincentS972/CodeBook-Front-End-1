"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const code_png_1 = __importDefault(require("./code.png"));
const Footer = () => {
    return (react_1.default.createElement("div", { style: {
            marginTop: "20px",
            marginBottom: "5px",
            backgroundColor: " #F8F9FA",
            color: "white",
        } },
        react_1.default.createElement("h4", { style: { color: "#564256", textAlign: "center", marginBottom: "10px" } }, "Follow us on Github!"),
        react_1.default.createElement("div", { className: "footer__redes" },
            react_1.default.createElement("ul", { className: "footer__redes-wrapper" },
                react_1.default.createElement("li", { style: { textAlign: "center", display: "grid" } },
                    react_1.default.createElement("p", null,
                        react_1.default.createElement("img", { alt: "Code", src: code_png_1.default, width: "30px", height: "30px" }),
                        react_1.default.createElement("a", { href: "https://github.com/GR33NAP3" }, "Eric Bunn")),
                    react_1.default.createElement("p", null,
                        react_1.default.createElement("img", { alt: "Code", src: code_png_1.default, width: "30px", height: "30px" }),
                        react_1.default.createElement("a", { href: "https://github.com/LuisPimentel93" }, "Luis Pimentel")),
                    react_1.default.createElement("p", null,
                        react_1.default.createElement("img", { alt: "Code", src: code_png_1.default, width: "30px", height: "30px" }),
                        react_1.default.createElement("a", { href: "https://github.com/FernandaRKennedy" }, "Fernanda Kennedy")),
                    react_1.default.createElement("p", null,
                        react_1.default.createElement("img", { alt: "Code", src: code_png_1.default, width: "30px", height: "30px" }),
                        react_1.default.createElement("a", { href: "https://github.com/VincentS972" }, "Vincent Sechi"))))),
        react_1.default.createElement("footer", { style: {
                marginTop: "20px",
                marginBottom: "5px",
                backgroundColor: " #F8F9FA",
                color: "#564256",
            } },
            react_1.default.createElement("p", null, " Copyright \u00A9 2023 | CodeBook"))));
};
exports.default = Footer;
