import { Router } from "express"
const route = Router()
import { login, handleLoginSubmit } from "../controllers/userController"

route.get("/login", login)
route.post("/login", handleLoginSubmit)

export default route