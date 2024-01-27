import words1 from "./lv1.json";

export interface WordsProps {
  wordToGuess: string;
}

export default function GuessWords(props: WordsProps) {
  const { wordToGuess } = props;
  return <div className="text-xl mb-4">{wordToGuess}</div>;
}
