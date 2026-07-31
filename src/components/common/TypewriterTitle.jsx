export default function TypewriterTitle({ text }) {
  const words = String(text || "").split(" ");
  let charIndex = 0;

  return (
    <span className="home-typewriter-title" aria-label={text}>
      {words.map((word, wordIndex) => (
        <span className="home-typewriter-title__word" aria-hidden="true" key={`${word}-${wordIndex}`}>
          {Array.from(word).map((char) => {
            const currentIndex = charIndex;
            charIndex += 1;
            return (
              <span
                className="home-typewriter-title__char"
                style={{ "--char-index": currentIndex }}
                key={`${char}-${currentIndex}`}
              >
                {char}
              </span>
            );
          })}
        </span>
      ))}
    </span>
  );
}
