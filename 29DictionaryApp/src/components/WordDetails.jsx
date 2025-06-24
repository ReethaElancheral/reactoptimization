import React from "react";

export default function WordDetails({ wordData }) {
  const { word, phonetics, meanings } = wordData;
  return (
    <div className="word-details">
      <h2>{word}</h2>
      {phonetics[0]?.text && <p className="phonetic">{phonetics[0].text}</p>}
      {phonetics[0]?.audio && (
        <audio controls src={phonetics[0].audio} className="audio-player" />
      )}
      {meanings.map((m, idx) => (
        <div key={idx} className="meaning">
          <h3>{m.partOfSpeech}</h3>
          <ul>
            {m.definitions.map((def, i) => (
              <li key={i}>
                {def.definition}
                {def.example && <blockquote>“{def.example}”</blockquote>}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
