import { Router } from "express"
const route = Router()
import homeRoute from "./homeRoute"
import userRoute from "./userRoute"

// route.get("/", (req, res) => {
//     res.send("test rayy")
// })

route.use("/", homeRoute)
route.use("/user", userRoute)

export default route