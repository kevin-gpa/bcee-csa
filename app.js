import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 3000;

/**Middleware */
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");


/**Routes */

app.get("/", (req, res) => {
    res.render("/pages/index.ejs");
});


/**Server */

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});