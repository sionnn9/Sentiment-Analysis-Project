import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-slate-500 overflow-hidden h-screen w-screen ">
      <div className="flex flex-col justify-center text-center items-center w-full h-full space-y-4">
        <span className="text-red-700 text-3xl sm:text-4xl lg:text-5xl mb-5 leading-none">
          Welcome To Nice Chat
          <p className="text-white text-center text-lg">
            Welcome this is Nice Chat where you be nice to everyone being rude
            is bad therfore <br />
            this chat is here to help you understand what a bad text and what a
            good text is.
          </p>
        </span>

        <div className="w-full max-w-2xl min-w-[200px] bg-white rounded-lg relative">
          <div className="relative flex items-center">
            <input
              className="  w-full bg-transparent placeholder:text-slate-600 text-slate-700 text-sm border border-slate-200 rounded-md pl-3 pr-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
              placeholder="Enter a text"
            />

            <button
              className="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2"
              type="button"
            >
              Enter
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
