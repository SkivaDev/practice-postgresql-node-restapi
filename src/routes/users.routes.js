import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.send("Obeniendo todos los usuarios");
});
router.get("/:id", (req, res) => {
    const { id } = req.params;
    res.send(`Obteniendo usuario con id ${id}`);
});
router.post("/", (req, res) => {
  res.send("Creando un usuario");
});
router.delete("/:id", (req, res) => {
    const { id } = req.params;
    res.send(`Eliminando usuario con id ${id}`);
});
router.put("/:id", (req, res) => {
    const { id } = req.params;
    res.send(`Actualizando usuario con id ${id}`);
});


export default router;