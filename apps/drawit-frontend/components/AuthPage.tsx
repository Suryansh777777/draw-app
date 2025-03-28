"use client";

export default function AuthPage({ isSignin }: { isSignin: boolean }) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6 py-12 text-center">
      <div className="p-2 m-2 bg-white rounded flex flex-col items-center justify-center">
        <input type="text" placeholder="Email" />
        <input type="password" placeholder="password" />
        <button onClick={() => {}}>{isSignin ? "Sign In" : "Sign Up"}</button>
      </div>
    </div>
  );
}
