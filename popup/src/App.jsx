import { CheckCircle } from "react-feather";
import Modal from "./components/Modal";
import { useState, useCallback, useEffect, useRef } from "react";
function App() {
  const [open, setOpen] = useState(false);
  const [copyWord, setCopyWord] = useState("");
  const copyWordRef = useRef(null);

  const copyWordToClipboard = () => {
    const text = copyWordRef.current.value;
    navigator.clipboard.writeText(text).then(
      () => {
        console.log("Copied to clipboard successfully!");
        alert("Copied to clipboard!");
      },
      (err) => {
        console.error("Failed to copy text: ", err);
      }
    );
  };

  return (
    <>
      <main className="App">
        <button
          className="btn bg-green-500 text-white p-2 rounded m-2"
          onClick={() => setOpen(true)}
        >
          Button 1
        </button>

        <Modal open={open} onClose={() => setOpen(false)}>
          <div className="text-center w-56">
            <div className="mx-auto my-4 w-48">
              <div className="flex shadow rounded-lg overflow-hidden mb-4">
                <input
                  type="text"
                  value={copyWord}
                  onChange={(e) => setCopyWord(e.target.value)}
                  className="outline-none w-full py-1 px-3"
                  placeholder="Word"
                  ref={copyWordRef}
                />
                <button
                  onClick={copyWordToClipboard}
                  className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
                >
                  Copy
                </button>
              </div>
            </div>
            <div className="flex gap-4">
              <button
                onClick={() => setOpen(false)}
                className="btn btn-light w-full hover:bg-gray-50 hover:text-black-600"
              >
                Cancel
              </button>
            </div>
          </div>
        </Modal>
      </main>
    </>
  );
}

export default App;
