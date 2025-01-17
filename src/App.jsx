import { useState } from "react";

function App() {
  const [randomNumber, setRandomNumber] = useState(null);

  const generateRandomNumber = () => {
    const newRandomNumber = Math.floor(Math.random() * 100) + 1; // Generates a number between 1 and 100
    setRandomNumber(newRandomNumber);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-app-blue-bg bg-cover bg-center px-4">
      <div className="bg-white bg-opacity-30 backdrop-blur-lg shadow-lg rounded-xl p-8 w-full max-w-3xl flex flex-col items-center">
        <h2 className="text-xl md:text-6xl font-extrabold mb-8 text-center">Random Number Generator</h2>
        <button
          onClick={generateRandomNumber}
          className="px-6 py-3 bg-blue-600 text-white rounded-xl text-xl hover:bg-blue-600 transition duration-300"
        >
          Generate Random Number
        </button>
        <h3 className="text-center mt-4 text-lg md:text-xl font-semibold text-black">Generated Number:</h3>

        <p className="text-blue-600 text-4xl font-bold bg-white bg-opacity-75 px-4 py-2 m-2 rounded-lg shadow-md">
          {randomNumber == null ? "-" : randomNumber}
        </p>

      </div>
    </div>
  );
}

export default App;
