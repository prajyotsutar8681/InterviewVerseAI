from pathlib import Path

readme = """# InterviewVerse AI 🚀

> AI-powered interview preparation platform for technical interviews, coding practice, resume analysis, and career guidance.

[![Live Demo](https://img.shields.io/badge/Live-Demo-8B5CF6?style=for-the-badge)](https://interview-verse-ai-taupe.vercel.app/)
[![GitHub](https://img.shields.io/badge/GitHub-Repository-181717?style=for-the-badge&logo=github)](https://github.com/prajyotsutar8681/InterviewVerseAI)
[![React](https://img.shields.io/badge/React-TypeScript-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Node.js](https://img.shields.io/badge/Node.js-Express-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Gemini](https://img.shields.io/badge/AI-Google%20Gemini-4285F4?style=for-the-badge&logo=google)](https://ai.google.dev/)
[![Supabase](https://img.shields.io/badge/Auth-Supabase-3FCF8E?style=for-the-badge&logo=supabase&logoColor=white)](https://supabase.com/)

## 🌐 Live Demo

**Live Application:** https://interview-verse-ai-taupe.vercel.app/

**GitHub Repository:** https://github.com/prajyotsutar8681/InterviewVerseAI

---

## 📌 Overview

InterviewVerse AI is a full-stack AI-powered interview preparation platform that brings multiple stages of interview preparation into one application.

Instead of switching between separate platforms for mock interviews, coding practice, resume reviews, and career planning, InterviewVerse AI provides these capabilities through a unified dashboard.

### Core capabilities

- AI-powered HR and technical interview preparation
- Coding challenge generation
- AI-powered code review
- ATS-oriented resume analysis
- Personalized career roadmaps
- Preparation analytics
- Secure user authentication
- Responsive web experience

The project focuses on practical full-stack development, Generative AI integration, authentication, REST APIs, deployment, error handling, and production debugging.

---

# ✨ Features

## 🎤 AI Mock Interviews

Practice HR and technical interview scenarios with AI assistance.

- Interview question generation
- HR interview preparation
- Technical interview preparation
- AI-powered evaluation and feedback
- Structured interview sessions

## 💻 Coding Arena

A coding practice environment designed for technical interview preparation.

- Company-oriented coding practice
- Multiple difficulty levels
- Multiple programming languages
- Round-based practice
- AI-generated coding questions
- Explanations, constraints, and hints
- Expected time and space complexity
- AI code review

### AI Code Review

The code review system evaluates areas such as:

- Correctness
- Logic
- Time complexity
- Space complexity
- Bugs
- Edge cases
- Improvements
- Optimal solution approach
- Overall feedback

## 📄 AI Resume Analyzer

Analyze a resume using AI and receive structured feedback.

- ATS score
- Job-match analysis when a job description is provided
- Strengths
- Weaknesses
- Missing keywords
- Missing skills
- Improvement suggestions
- Interview preparation tips
- Overall summary

The analyzer also supports general resume analysis when no job description is provided.

## 🤖 AI Career Coach

Generate a personalized career preparation roadmap.

- Target role analysis
- Experience-level consideration
- Current skill analysis
- Readiness score
- Missing skills
- Personalized roadmap
- Project recommendations
- Learning resources
- Interview tips
- Career summary

## 📊 Analytics Dashboard

A centralized dashboard for monitoring interview preparation across:

- Interview performance
- Coding practice
- Resume performance
- Career preparation
- Overall progress

## 🔐 Authentication

Authentication is implemented with Supabase.

- Registration
- Login
- Logout
- Protected routes
- Session handling
- Authenticated dashboard access

---

# 🏗️ Architecture

```text
                         ┌──────────────────────┐
                         │      User / Browser  │
                         └──────────┬───────────┘
                                    │
                                    ▼
                         ┌──────────────────────┐
                         │   React + TypeScript │
                         │      Vite Frontend   │
                         └──────────┬───────────┘
                                    │
                     ┌──────────────┴──────────────┐
                     │                             │
                     ▼                             ▼
          ┌────────────────────┐        ┌────────────────────┐
          │      Supabase      │        │   Express Backend  │
          │ Authentication     │        │      REST APIs     │
          └────────────────────┘        └─────────┬──────────┘
                                                  │
                                                  ▼
                                      ┌──────────────────────┐
                                      │    Google Gemini API │
                                      │      AI Processing   │
                                      └──────────────────────┘
