import {
  SignInButton,
  SignUpButton,
  UserButton,
  SignedIn,
  SignedOut,
} from "@clerk/nextjs";

export default function Header() {
  return (
    <header className="sticky top-0 flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-0 ml-4 mr-4 py-2 bg-white z-10">
      <div className="flex gap-2 items-center">
        <img
          src="study.svg"
          className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 transition-all"
          alt="Study Logo"
        />
        <div className="font-bold text-base sm:text-lg md:text-xl transition-all">
          StudyHub
        </div>
      </div>

      <input
        type="search"
        autoComplete="on"
        placeholder="Search topics, questions, or concepts..."
        className="w-full sm:flex-1 mx-0 sm:mx-4 min-w-0 max-w-full sm:max-w-96 px-2 py-1 border rounded text-sm text-center"
      />

      <div className="flex gap-2 items-center">
        <SignedOut>
          <SignUpButton mode="modal">
            <button className="w-full sm:w-auto px-4 py-1 mt-1 sm:mt-0 rounded bg-blue-500 text-white text-sm sm:text-base md:text-lg font-medium hover:bg-blue-600 transition-all">
              Sign Up
            </button>
          </SignUpButton>
          <SignInButton mode="modal">
            <button className="w-full sm:w-auto px-4 py-1 mt-1 sm:mt-0 rounded bg-gray-200 text-gray-800 text-sm sm:text-base md:text-lg font-medium hover:bg-gray-300 transition-all">
              Sign In
            </button>
          </SignInButton>
        </SignedOut>
        <SignedIn>
          <UserButton afterSignOutUrl="/" />
        </SignedIn>
      </div>
    </header>
  );
}
