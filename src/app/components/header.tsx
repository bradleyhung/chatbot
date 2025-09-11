export default function Header() {
  return (
    <header className="sticky top-0 flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-0 ml-2 mr-2 py-2 bg-white z-10">
      {/*Logo*/}
      <div className="flex gap-1 items-center">
        <img src="study.svg" className="w-8 h-8" alt="Study Logo" />
        <div className="font-bold text-sm">StudyHub</div>
      </div>

      {/*Search Filter*/}
      <input
        type="search"
        autoComplete="on"
        placeholder="Search topics, questions, or concepts..."
        className="w-full sm:flex-1 mx-0 sm:mx-4 min-w-0 max-w-full sm:max-w-96 px-2 py-1 border rounded text-sm text-center"
      />

      {/*Temporary Button for authorization - allow users to save personal things to study*/}
      <button className="w-full sm:w-auto px-4 py-1 mt-1 sm:mt-0 rounded bg-blue-500 text-white text-sm hover:bg-blue-600 transition">
        Sign in
      </button>
    </header>
  );
}