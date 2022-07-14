import { Router } from "express";
import { usersDao as api } from '../daos/index.js'

const router = Router();

router.get("/", (req, res) => {
    res.render("registro");
});

// del formulario te llevas el nombre como body y lo guardas con req.session.nombre
// aca no tenes que importar el modulo session? O ya te corre con todo lo que importaste en server?
router.post("/", async (req, res) => {
    const { nombre, email, password } = req.body;
    const nombreEncontrado = await api.getByName(nombre)
    console.log(nombreEncontrado)
    if(nombreEncontrado) {
        console.log(nombre);
        res.render("errorRegistro");
    }
    console.log(nombre);
    const obj = {"email": email,"nombre": nombre,"password": password}
    api.saveNew(obj)
    req.session.nombre = nombre;
    res.redirect("/api/productos");
});


export default router;