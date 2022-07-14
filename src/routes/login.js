import { Router } from "express";
import { usersDao as api } from '../daos/index.js'

const router = Router();

router.get("/", (req, res) => {
    res.render("login");
});

// del formulario te llevas el nombre como body y lo guardas con req.session.nombre
// aca no tenes que importar el modulo session? O ya te corre con todo lo que importaste en server?
router.post("/",async (req, res) => {
    const { nombre } = req.body;
    const nombreEncontrado = await api.getByName(nombre)
    console.log(nombreEncontrado)
    if(nombreEncontrado) {
        console.log(nombre);
        res.render("errorLogin");
    }
    console.log(nombre);
    req.session.nombre = nombre;
    res.redirect("/api/productos");
});


export default router;