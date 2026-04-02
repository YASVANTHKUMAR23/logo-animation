'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#0a0a0a] text-white">
      <h2 className="text-2xl font-bold mb-4">Something went wrong!</h2>
      <button
        className="px-4 py-2 bg-[#00e1ab] text-[#004a36] rounded-md font-medium"
        onClick={() => reset()}
      >
        Try again
      </button>
    </div>
  );
}
