import e from "express";
import locacao from "../controllers/locacao.js";
import check_idade from "../middleware/check_Idade.js";
const rt = e.Router();
rt.post("/",check_idade , locacao.add);
rt.get("/" , locacao.list);
rt.get("/:filme", locacao.show);
rt.delete("/:filme", locacao.destroy);
rt.put("/:filme", locacao.update);
rt.put("/devolve", locacao.devolucao)
export default rt;