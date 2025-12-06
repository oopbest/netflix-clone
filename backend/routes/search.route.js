import express from "express";
import {
  searchPerson,
  searchMovie,
  searchTv,
  getSearchHistory,
  removeFromSearchHistory,
} from "../controllers/search.controller.js";

const router = express.Router();

router.get("/person/:query", searchPerson);
router.get("/movie/:query", searchMovie);
router.get("/tv/:query", searchTv);

// searchHistory
router.get("/history", getSearchHistory);
router.delete("/history/:id", removeFromSearchHistory);

export default router;
