const KEYS = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

type KeyboardProps = {
  disabled?: boolean;
  activeLetters: string[];
  inactiveLetters: string[];
  addGuessedLetter: (letter: string) => void;
};

export function Keyboard({ disabled = false, activeLetters, inactiveLetters, addGuessedLetter }: KeyboardProps) {
  return (
    <div className="grid keyboard gap-2">
      {KEYS.map((key) => {
        const isActive = activeLetters.includes(key);
        const isInactive = inactiveLetters.includes(key);
        return (
          <button
            onClick={() => addGuessedLetter(key)}
            className={`keyboard-key ${isActive ? "active" : ""} ${
              isInactive ? "inactive" : ""
            } w-full border-solid border-black border-2 aspect-square text-xl uppercase p-2 bold pointer text-black bg-transparent`}
            key={key}
            disabled={isInactive || isActive || disabled}
          >
            {key}
          </button>
        );
      })}
    </div>
  );
}
