import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

import type { ResumeAnalysis } from "./gemini";
import type { InterviewEvaluation } from "./gemini";

/* ==========================================================
   Resume PDF
========================================================== */

export const downloadResumeReport = (
  result: ResumeAnalysis
) => {
  const doc = new jsPDF();

  doc.setFontSize(22);
  doc.text("InterviewVerse AI", 14, 20);

  doc.setFontSize(16);
  doc.text("Resume Analysis Report", 14, 32);

  doc.setFontSize(12);

  doc.text(
    `Generated: ${new Date().toLocaleString()}`,
    14,
    42
  );

  doc.text(
    `ATS Score: ${result.atsScore}%`,
    14,
    52
  );

  if (result.jobMatch !== null) {
    doc.text(
      `Job Match: ${result.jobMatch}%`,
      14,
      60
    );
  }

  autoTable(doc, {
    startY: 72,
    head: [["Strengths"]],
    body: result.strengths.map((item) => [item]),
  });

  autoTable(doc, {
    startY: (doc as any).lastAutoTable.finalY + 10,
    head: [["Weaknesses"]],
    body: result.weaknesses.map((item) => [item]),
  });

  autoTable(doc, {
    startY: (doc as any).lastAutoTable.finalY + 10,
    head: [["Suggestions"]],
    body: result.suggestions.map((item) => [item]),
  });

  doc.text(
    "AI Summary",
    14,
    (doc as any).lastAutoTable.finalY + 18
  );

  doc.setFontSize(11);

  doc.text(
    result.summary,
    14,
    (doc as any).lastAutoTable.finalY + 28,
    {
      maxWidth: 180,
    }
  );

  doc.save("Resume-Report.pdf");
};

/* ==========================================================
   Interview PDF
========================================================== */

export const downloadInterviewReport = (
  result: InterviewEvaluation
) => {
  const doc = new jsPDF();

  doc.setFontSize(22);
  doc.text("InterviewVerse AI", 14, 20);

  doc.setFontSize(16);
  doc.text("Interview Evaluation Report", 14, 32);

  doc.setFontSize(12);

  doc.text(
    `Generated: ${new Date().toLocaleString()}`,
    14,
    42
  );

  doc.text(
    `Overall Score: ${result.overallScore}%`,
    14,
    54
  );

  doc.text(
    `Communication: ${result.communication}%`,
    14,
    64
  );

  doc.text(
    `Technical Knowledge: ${result.technicalKnowledge}%`,
    14,
    74
  );

  doc.text(
    `Confidence: ${result.confidence}%`,
    14,
    84
  );

  autoTable(doc, {
    startY: 94,
    head: [["Strengths"]],
    body: result.strengths.map((item) => [item]),
  });

  autoTable(doc, {
    startY: (doc as any).lastAutoTable.finalY + 10,
    head: [["Areas to Improve"]],
    body: result.improvements.map((item) => [item]),
  });

  doc.text(
    "AI Summary",
    14,
    (doc as any).lastAutoTable.finalY + 18
  );

  doc.setFontSize(11);

  doc.text(
    result.summary,
    14,
    (doc as any).lastAutoTable.finalY + 28,
    {
      maxWidth: 180,
    }
  );

  doc.save("Interview-Report.pdf");
};