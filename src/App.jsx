import { useState } from 'react';

function App() {
  const [movieSize, setMovieSize] = useState(null);
  const [movieLength, setMovieLength] = useState(null);
  const [showBitrate, setShowBitrate] = useState(false);

  return (
    <main
      className={`flex items-center gap-10 flex-col mx-auto h-[100dvh] w-[100vw] mt-60`}
    >
      <h1>getStreamUploadSpeed</h1>
      <div className={`flex flex-col items-center gap-1`}>
        <label className={`w-full`}>Movie size in MB</label>
        <input
          type="text"
          className={`p-1`}
          onChange={(e) => {
            setShowBitrate(false);
            setMovieSize(e.target.value);
          }}
        />
      </div>
      <div className={`flex flex-col items-center gap-1`}>
        <label className={`w-full`}>Movie length in Minutes</label>
        <input
          type="text"
          className={`p-1`}
          onChange={(e) => {
            setShowBitrate(false);
            setMovieLength(e.target.value);
          }}
        />
      </div>
      {showBitrate && (
        <span className={`text-2xl`}>
          {((movieSize * 8) / (movieLength * 60)).toFixed(2)}Mbps
        </span>
      )}
      <button
        onClick={() => {
          setShowBitrate(true);
        }}
      >
        CONFIRM
      </button>
    </main>
  );
}

export default App;
