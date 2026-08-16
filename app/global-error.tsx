"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body className="bg-[#050507] text-[#ededed] min-h-screen flex items-center justify-center">
        <div className="text-center p-8">
          <h2 className="text-2xl font-bold mb-4">Something went wrong</h2>
          <button
            onClick={() => reset()}
            className="px-4 py-2 bg-amber-500 hover:bg-amber-400 text-black rounded-full font-medium transition-colors"
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  );
}
