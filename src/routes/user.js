import e from "express";
const rt = e.Router();
import user from "../controllers/user.js";
import idade from "../middleware/idade.js";
import cep from "../middleware/viacep.js";
rt.post("/",idade, cep, user.add);
rt.get("/", user.list);
rt.get("/:email", user.show);
rt.delete("/:email", user.destroy);
rt.put("/:email",idade, cep, user.update);
export default rt;