"use client"

import { useRef } from "react";

export default function Home() {
  const preEl = useRef<HTMLPreElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  return (
    <main className="min-h-screen flex flex-col justify-center p-24 mx-auto">
      <div className="flex gap-20">
        <div className="flex flex-col w-1/2">
          <h1 className="font-bold text-4xl">Next.js Upstash Rate Limiting Example</h1>
          <p className="mt-6 text-2xl">
            This is an example of how to use Upstash to rate limit requests in a Next.js app.
          </p>

          <h2 className="font-bold text-3xl mt-24">How it works</h2>
          <p className="mt-6 text-2xl">
            The rate limit is set to 3 requests per 10 seconds. If you exceed the limit, you will receive a 429 status code and a message saying "Rate limit exceeded". The response will also include the timestamp of when the rate limit will reset.
          </p>
        </div>
        <div className="w-1/2 flex flex-col">
          <button className="bg-orange-600 w-60 text-white font-bold px-4 py-2 rounded-lg hover:bg-orange-700" onClick={async () => {
            preEl.current!.innerText = "Loading..."

            buttonRef.current!.disabled = true;
            buttonRef.current!.innerText = "Fetching `/api/hello`"

            const data = await fetch("/api/hello")

            if (!data.ok) {
              preEl.current!.classList.remove("text-green-100");
              preEl.current!.classList.remove("bg-green-500")

              preEl.current!.classList.add("text-white");
              preEl.current!.classList.add("bg-red-500")
            }
            else {
              preEl.current!.classList.remove("text-white");
              preEl.current!.classList.remove("bg-red-500")

              preEl.current!.classList.add("text-green-100");
              preEl.current!.classList.add("bg-green-500")
            }

            preEl.current!.innerText = JSON.stringify(await data.json(), null, 2)

            buttonRef.current!.disabled = false;
            buttonRef.current!.innerText = "Fetch API"
          }} ref={buttonRef}>Fetch API</button>
          <div className="mt-10 relative">
            <code className="bg-black absolute left-4 -top-2.5 w-56 text-white rounded-lg text-xs font-bold p-1 px-4">API Route: <span>/api/hello</span></code>
            <pre className="bg-gray-100 p-10 min-h-80 text-xl font-mono font-bold border border-black rounded-lg flex items-center" ref={preEl}>
            </pre>
          </div>
          <div className="hidden bg-red-500 text-white"></div>
          <div className="hidden bg-green-500 text-green-100"></div>
        </div>
      </div>
      <div className="mt-24 font-bold text-xl">You can find the source code for this project in <a className="underline underline-offset-2" href="https://github.com/doganbuilds">Github</a></div>
    </main>
  );
}
