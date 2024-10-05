import e from "express";
import locacao from "../controllers/locacao.js";

const rt = e.Router();
rt.post("/", locacao.add);
rt.get("/", locacao.list);
rt.get("/:filme", locacao.show);
rt.delete("/:filme", locacao.destroy);
rt.put("/:filme", locacao.update);
export default rt;