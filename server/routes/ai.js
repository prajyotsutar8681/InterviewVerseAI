import express from "express";

import { analyzeResume } from "../controllers/resumeController.js";
import {
  generateInterviewQuestions,
  evaluateInterview,
} from "../controllers/interviewController.js";
import {
  generateCodingQuestion,
  reviewCode,
} from "../controllers/codingController.js";
import {
  generateCareerRoadmap,
} from "../controllers/careerController.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    success: true,
    message: "InterviewVerse Backend Running",
  });
});

router.post("/resume", analyzeResume);
router.post("/interview/questions", generateInterviewQuestions);

router.post("/interview/evaluate", evaluateInterview);
router.post(
  "/coding/question",
  generateCodingQuestion
);

router.post(
  "/coding/review",
  reviewCode
);
router.post(
  "/career/roadmap",
  generateCareerRoadmap
);
export default router;