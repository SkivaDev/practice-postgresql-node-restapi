import { Router } from "express";
import { pool } from "../db.js";

const router = Router();

router.get("/", async (req, res) => {

  const { rows } = await pool.query("SELECT * FROM users;");
  res.json(rows);
});
router.get("/:id", async (req, res) => {
    const { id } = req.params;
    
    const { rows } = await pool.query("SELECT * FROM users WHERE id = $1;", [id]);

    if (rows.length === 0) {
        return res.status(404).json({ message: "User not found" });
    }

    res.json(rows);
});
router.post("/", async (req, res) => {

    const { name, email } = req.body;
    const { rows } = await pool.query("INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *;", [name, email]);
    res.json(rows);
});
router.delete("/:id", async (req, res) => {
    const { id } = req.params;
    const { rows, rowCount } = await pool.query("DELETE FROM users WHERE id = $1 RETURNING *;", [id]);

    if (rowCount === 0) {
        return res.status(404).json({ message: "User not found" });
    }

    res.json(rows);
});
router.put("/:id", async (req, res) => {
    const { id } = req.params;
    const { name, email } = req.body;
    const { rows, rowCount } = await pool.query("UPDATE users SET name = $1, email = $2 WHERE id = $3 RETURNING *;", [name, email, id]);

    if (rowCount === 0) {
        return res.status(404).json({ message: "User not found" });
    }

    res.json(rows);
});


export default router;