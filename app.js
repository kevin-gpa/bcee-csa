import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 3000;

/**Middleware */
app.use(express.static(path.join(__dirname, "public")));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");


/**Routes */

app.get("/", (req, res) => {
    res.render("pages/index", {
        path: __dirname,
    });
});

app.get("/parcours", (req, res) => {
    res.render("pages/parcours");
});

app.get("/quotidien", (req, res) => {
    res.render("pages/quotidien");
});

app.get("/conclusion", (req, res) => {
    res.render("pages/conclusion");
});

/**Server */

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});