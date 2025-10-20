import React, { useState } from "react";
import { ListeningData } from "../types/listening";

export default function ListeningView({ data }: { data: ListeningData }) {
  const [showTranscript, setShowTranscript] = useState(false);
  const [answers, setAnswers] = useState<{ [key: string]: string }>({});
  const [showResults, setShowResults] = useState(false);

  const handleSelect = (qid: string, choiceId: string) => {
    setAnswers({ ...answers, [qid]: choiceId });
  };

  const checkAnswers = () => {
    setShowResults(true);
  };

  const resetQuiz = () => {
    setAnswers({});
    setShowResults(false);
  };

  return (
    <div className="p-4 max-w-3xl mx-auto space-y-6">
      <h2 className="text-2xl font-bold text-center">{data.title}</h2>

      <audio controls src={data.audioSrc} className="w-full mt-4" />

      <div className="text-center">
        <button
          className="bg-blue-500 text-white rounded px-4 py-2 mt-4"
          onClick={() => setShowTranscript(!showTranscript)}
        >
          {showTranscript ? "Ocultar transcripción" : "Mostrar transcripción"}
        </button>
      </div>

      {showTranscript && (
        <p className="bg-gray-100 p-4 rounded text-justify whitespace-pre-line">
          {data.transcript}
        </p>
      )}

      <div>
        <h3 className="text-xl font-semibold mt-6">Vocabulario emergente</h3>
        <ul className="space-y-2 mt-2">
          {data.vocab.map((item) => (
            <li
              key={item.term}
              className="border p-3 rounded shadow-sm bg-white"
            >
              <strong>{item.term}</strong>: {item.meaning}
              {item.example && (
                <p className="text-gray-600 italic">Ejemplo: {item.example}</p>
              )}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="text-xl font-semibold mt-6">Quiz</h3>
        {data.quiz.map((q) => (
          <div key={q.id} className="border rounded p-4 mt-4 bg-white">
            <p className="font-medium">{q.prompt}</p>
            <div className="mt-2 space-y-1">
              {q.choices.map((c) => (
                <label
                  key={c.id}
                  className="block cursor-pointer hover:bg-gray-100 p-1 rounded"
                >
                  <input
                    type="radio"
                    name={q.id}
                    checked={answers[q.id] === c.id}
                    onChange={() => handleSelect(q.id, c.id)}
                    className="mr-2"
                  />
                  {c.text}
                </label>
              ))}
            </div>
            {showResults && (
              <p
                className={`mt-2 ${
                  answers[q.id] === q.correctId
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                {answers[q.id] === q.correctId
                  ? "✅ Correcto"
                  : `❌ Incorrecto. ${q.explanation || ""}`}
              </p>
            )}
          </div>
        ))}

        <div className="text-center mt-6 space-x-2">
          <button
            onClick={checkAnswers}
            className="bg-green-500 text-white px-4 py-2 rounded"
          >
            Revisar
          </button>
          <button
            onClick={resetQuiz}
            className="bg-gray-400 text-white px-4 py-2 rounded"
          >
            Reiniciar
          </button>
        </div>
      </div>
    </div>
  );
}
