interface Props {
  output: string;
}

const Output = ({
  output,
}: Props) => {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">

      <h2 className="mb-5 text-2xl font-bold text-white">
        Output
      </h2>

      <pre className="min-h-[120px] whitespace-pre-wrap text-green-400">
        {output || "Run your code to see output."}
      </pre>

    </div>
  );
};

export default Output;