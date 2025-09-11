export default function Header() {
  return (
    <header className="sticky top-0 flex justify-between ml-2 mr-2">
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
        className="flex-1 mx-4 min-w-0 px-2 py-1 border rounded text-sm"
      ></input>

      {/*Temporary Button for authorization - allow users to save personal things to study*/}
      <button className="">Sign in</button>
    </header>
  );
}
