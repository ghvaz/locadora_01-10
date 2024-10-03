import e from "express";
const rt = e.Router();
import movie from "../controllers/movie.js";
rt.post("/", movie.add);
rt.get("/", movie.list);
rt.get("/:nome", movie.show);
rt.delete("/:nome", movie.destroy);
rt.put("/:nome", movie.update);
export default rt;