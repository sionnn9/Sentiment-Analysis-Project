"use client";
import { useState, useRef, useEffect } from "react";

export default function Home() {
  const [text, setText] = useState(""); // Store input text
  const [submittedText, setSubmittedText] = useState([]); // Store submitted messages
  const chatContainerRef = useRef(null); // Reference to chat container
  const [inputLoc, setInputLoc] = useState(
    "w-full max-w-2xl min-w-[200px] bg-white rounded-lg"
  );
  const [color, setColor] = useState("bg-black");

  // Handle input text change
  const handleChange = (event) => {
    setText(event.target.value);
  };

  // Handle submitting text as a message
  const handleText = () => {
    if (text.trim()) {
      setSubmittedText([...submittedText, text]); // Add the message to submitted text
      setText(""); // Clear the input field
      // Adjust position when a message is submitted
      setInputLoc(
        "w-full max-w-2xl min-w-[200px] bg-white rounded-lg fixed bottom-4"
      ); // Move input field slightly up
    }
  };

  // Handle pressing enter key to submit the message
  const handleEnter = (event) => {
    if (event.key === "Enter" && text.trim() !== "") {
      handleText();
      setColor("bg-gray-800 shadow-[#4d0000b7] shadow-lg");
    }
  };

  // Scroll to the bottom whenever new messages are submitted
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [submittedText]); // Trigger scrolling when `submittedText` changes

  return (
    <div className="bg-black overflow-x-hidden h-screen w-screen">
      <div className="flex flex-col justify-center text-center items-center w-full h-full space-y-4">
        <span className="text-red-700 text-3xl sm:text-4xl lg:text-5xl mb-5 leading-none">
          Welcome To Nice Chat
          <p className="text-white text-center text-lg">
            Welcome, this is Nice Chat where you be nice to everyone. Being rude
            is bad, therefore <br />
            this chat is here to help you understand what a bad text and what a
            good text is.
          </p>
        </span>

        {/* Chat container that displays messages */}
        <div
          ref={chatContainerRef}
          className={`${color} chat-container   bg-hidden p-4 max-h-[37rem] w-[670px] overflow-y-auto scrollbar-hidden mb-16 rounded-2xl `} // Add margin-bottom to avoid overlap
        >
          {submittedText.map((msg, index) => (
            <div
              key={index}
              className="message flex flex-col justify-end items-end mb-2 "
            >
              <div className="bg-white mt-2 hover:-translate-y-1 duration-200  ease-in-out text-black text-base p-2 px-3 rounded-lg antialiased flex justify-center items-end">
                {msg}
              </div>
            </div>
          ))}
        </div>

        {/* Input container */}
        <div className={`${inputLoc}`}>
          <div className="relative flex items-center">
            <input
              className="w-full bg-transparent placeholder:text-slate-600 text-black text-sm border border-slate-200 rounded-md pl-3 pr-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
              placeholder="Enter a text"
              value={text}
              onChange={handleChange}
              onKeyPress={handleEnter}
            />

            <button
              className="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2"
              type="button"
              onClick={handleText}
            >
              Enter
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
