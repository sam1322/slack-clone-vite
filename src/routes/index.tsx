import { createFileRoute, redirect } from "@tanstack/react-router";
import { useState } from "react";
// import reactLogo from "/assets/react.svg";
import "@/App.css";

// Create a middleware function for auth protection
const authMiddleware = {
  beforeLoad: ({ context, location }) => {
    // Get auth state - in real app, you'd use your auth hook/context
    // const isAuthenticated = useAuth().isAuthenticated
    const isAuthenticated = false;

    if (!isAuthenticated) {
      // Redirect to login page with return URL
      throw redirect({
        to: "/signin",
        search: {
          returnTo: location.href,
        },
      });
    }
  },
};

export const Route = createFileRoute("/")({
  component: RouteComponent,
  beforeLoad: authMiddleware.beforeLoad,
});

function RouteComponent() {
  const [count, setCount] = useState(0);

  return (
    <div className="w-full px-8 py-8 text-center min-h-screen flex flex-col justify-center items-center bg-black ">
      <div className="flex gap-8 mb-8">
        <a
          href="https://vite.dev"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-80 transition-opacity"
        >
          <img
            src="https://vitejs.dev/logo.svg"
            className="h-24 p-6 hover:drop-shadow-[0_0_2em_#61dafbaa] transition-all bg-black"
            // className="h-24 p-6 hover:drop-shadow-[0_0_2em_#646cffaa] transition-all"
            alt="Vite logo"
          />
        </a>
        <a
          href="https://react.dev"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-80 transition-opacity"
        >
          <img
            src="https://reactjs.org/logo-og.png"
            className="h-24 p-6 hover:drop-shadow-[0_0_2em_#61dafbaa] transition-all"
            alt="React logo"
          />
        </a>
      </div>
      <h1 className="text-5xl font-bold mb-8 text-white">Vite + React</h1>
      <div className="bg-gray-800 p-8 rounded-lg shadow-md mb-8">
        <button
          onClick={() => setCount((count) => count + 1)}
          className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors mb-4"
        >
          count is {count}
        </button>
        <p className="text-gray-300">
          Edit <code className="bg-gray-700 px-1 rounded">src/App.tsx</code> and
          save to test HMR
        </p>
      </div>
      <p className="text-gray-500">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}
