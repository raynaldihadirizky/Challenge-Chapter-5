import { Router } from "express"
const route = Router()
import { mainPage, games } from "../controllers/homeController"

route.get("/", mainPage)
route.get("/games", games)

export default route