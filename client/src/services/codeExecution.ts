export interface CodeExecutionResult {
  output: string;
}

const languageMap: Record<string, string> = {
  JavaScript: "javascript",
  TypeScript: "typescript",
  Python: "python",
  Java: "java",
  "C++": "cpp",
  C: "c",
};

const versionMap: Record<string, string> = {
  javascript: "18.15.0",
  typescript: "5.0.3",
  python: "3.10.0",
  java: "15.0.2",
  cpp: "10.2.0",
  c: "10.2.0",
};

export const runCode = async (
  language: string,
  code: string
): Promise<CodeExecutionResult> => {
  const lang = languageMap[language];

  try {
    const response = await fetch(
      "https://emkc.org/api/v2/piston/execute",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          language: lang,
          version: versionMap[lang],
          files: [
            {
              content: code,
            },
          ],
        }),
      }
    );

    const data = await response.json();

    // 👇 Print complete response in browser console
    console.log("Piston Response:", data);

    const output =
      data?.run?.stdout ??
      data?.run?.output ??
      data?.run?.stderr ??
      data?.compile?.stderr ??
      data?.message ??
      "No Output";

    return {
      output,
    };
  } catch (error) {
    console.error("Execution Error:", error);

    return {
      output: "Failed to execute code.",
    };
  }
};