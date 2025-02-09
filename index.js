import express from "express";
import cors from "cors";
import pool from "./config/db_config.js";

import router from "./routes/routes.js";
import errorHandling from "./middlewares/errorHandler.js";
import createOrderTable from "./data/createOrdersTable.js";

const port = 1337;

const app = express();

app.use(express.json());
app.use(cors());

// Routes
app.use("/api", router);

// Error handling middleware
app.use(errorHandling);

// Testing POSTGRES Connection
app.get("/", async (req, res) => {
    console.log("Start");
    const result = await pool.query("SELECT current_database()");
    console.log("result", result.rows);
    res.send(`The database name is : ${result.rows[0].current_database}`);
});

createOrderTable();

app.listen(port, () => console.log(`Server has started on port ${port}`));