import Image from 'next/image';

export default async function Home() {
  return (
    <main className="flex h-full flex-col items-center justify-center bg-gray-50">
      <div className="flex-column flex">
        <div id="login-container">
          <div
            className="
          relative mb-3 flex w-80 flex-col items-center border border-gray-300 bg-white p-10
          "
          >
            <Image
              width="200"
              height="400"
              alt="Insta Logo"
              src="/images/logo-instagram.svg"
            />
            <form className="mt-6 flex w-64 flex-col">
              <input
                autoFocus
                autoComplete="off"
                className="
                mb-2 w-full rounded border border-gray-300 bg-gray-100 px-2 py-2 text-xs focus:border-gray-400 focus:outline-none active:outline-none"
                placeholder="Username or Email"
                type="text"
              />
              <input
                autoFocus
                autoComplete="off"
                className="
                mb-4 w-full rounded border border-gray-300 bg-gray-100 px-2 py-2 text-xs focus:border-gray-400 focus:outline-none active:outline-none"
                placeholder="Password"
                type="password"
              />
              <button
                type="submit"
                className="
                rounded bg-blue-300 py-1 text-center text-sm font-medium text-white"
              >
                Log In
              </button>
            </form>
          </div>
          <div className="w-80 border border-gray-300 bg-white py-4 text-center">
            <span className="text-sm text-slate-800">No Account?</span>
            <a className="ml-1 cursor-pointer text-sm font-semibold text-blue-500">
              Sign up
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
