export interface InputBarProps {
  answerTheword: (e: React.FormEvent<HTMLFormElement>) => void;
  checkAnswer: string;
  setCheckAnswer: React.Dispatch<React.SetStateAction<string>>;
}

export default function InputBar(props: InputBarProps) {
  const { answerTheword, checkAnswer, setCheckAnswer } = props;
  return (
    <form onSubmit={answerTheword}>
      <input
        type="text"
        className="placeholder:italic placeholder:text-slate-400 block bg-slate-50 w-full border border-slate-300 py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-lg"
        placeholder="Answer Here"
        name="search"
        value={checkAnswer}
        onChange={(e) => setCheckAnswer(e.target.value)}
      />
      <button className="mt-4 p-2 bg-green-500 text-white rounded">
        Submit
      </button>
    </form>
  );
}
