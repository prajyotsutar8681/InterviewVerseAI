import Editor from "@monaco-editor/react";

interface Props {
  language: string;
  code: string;
  setCode: (code: string) => void;
}

const starterCode: Record<string, string> = {
  JavaScript: `function solve() {

  // Write your solution here

}

solve();`,

  TypeScript: `function solve(): void {

  // Write your solution here

}

solve();`,

  Python: `def solve():

    # Write your solution here

    pass

solve()`,

  Java: `public class Main {

    public static void main(String[] args) {

        // Write your solution here

    }

}`,

  "C++": `#include <iostream>
using namespace std;

int main() {

    // Write your solution here

    return 0;

}`,

  C: `#include <stdio.h>

int main() {

    // Write your solution here

    return 0;

}`,
};

const languageMap: Record<string, string> = {
  JavaScript: "javascript",
  TypeScript: "typescript",
  Python: "python",
  Java: "java",
  "C++": "cpp",
  C: "c",
};

const CodeEditor = ({
  language,
  code,
  setCode,
}: Props) => {
  return (
    <div className="overflow-hidden rounded-3xl border border-zinc-800">

      <Editor
        height="650px"
        theme="vs-dark"
        language={languageMap[language]}
        value={
          code || starterCode[language]
        }
        onChange={(value) =>
          setCode(value || "")
        }
        options={{
          fontSize: 16,
          minimap: {
            enabled: false,
          },
          automaticLayout: true,
          scrollBeyondLastLine: false,
          wordWrap: "on",
          lineNumbers: "on",
          roundedSelection: true,
          tabSize: 4,
          padding: {
            top: 20,
          },
        }}
      />

    </div>
  );
};

export default CodeEditor;