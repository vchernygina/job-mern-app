import { Router } from "express";

const router = Router();

import {
  getAllJobs,
  createJobs,
  getSingleJobs,
  updateJob,
  deleteJob,
} from "../controllers/jobController.js";

router.route("/").get(getAllJobs).post(createJobs);
router.route("/:id").get(getSingleJobs).patch(updateJob).delete(deleteJob);

export default router;
