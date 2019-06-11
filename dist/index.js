"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const PORT = process.env.PORT || 8080;
const app = express_1.default();
app.get("/", (req, res) => {
    res.send("Hello world");
});
app.listen(PORT, () => {
    // tslint:disable-next-line:no-console
    console.log(`server started at http://localhost:${PORT}`);
});
//# sourceMappingURL=index.js.map