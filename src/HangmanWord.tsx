type HangmanWordProps = {
  guessedLetters: string[];
  wordToGuess: string;
  reveal?: boolean;
};

export function HangmanWord({ reveal = false, guessedLetters, wordToGuess }: HangmanWordProps) {
  return (
    <div className="flex gap-1 text-3xl bold uppercase">
      {wordToGuess.split("").map((letter, index) => (
        <span className="border-b-2 border-black" key={index}>
          <span
            style={{
              visibility: guessedLetters.includes(letter) || reveal ? "visible" : "hidden",
              color: !guessedLetters.includes(letter) && reveal ? "red" : "black",
            }}
          >
            {letter}
          </span>
        </span>
      ))}
    </div>
  );
}
