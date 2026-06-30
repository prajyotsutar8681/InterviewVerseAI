interface Props {
  language: string;
  setLanguage: (language: string) => void;
}

const languages = [
  "JavaScript",
  "TypeScript",
  "Python",
  "Java",
  "C++",
  "C",
];

const LanguageSelector = ({
  language,
  setLanguage,
}: Props) => {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-5">

      <label className="mb-2 block font-semibold text-white">
        Programming Language
      </label>

      <select
        value={language}
        onChange={(e) =>
          setLanguage(e.target.value)
        }
        className="w-full rounded-xl border border-zinc-700 bg-zinc-800 p-3 text-white outline-none"
      >
        {languages.map((lang) => (
          <option
            key={lang}
            value={lang}
          >
            {lang}
          </option>
        ))}
      </select>

    </div>
  );
};

export default LanguageSelector;