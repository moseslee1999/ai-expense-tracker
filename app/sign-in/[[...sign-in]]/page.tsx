import { SignIn } from "@clerk/nextjs";

export default function Page() {
  console.log("SignIn page rendering...");

  // Test if Clerk is working
  const publishableKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;
  console.log("Clerk publishable key exists:", !!publishableKey);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6">Sign In</h1>
        <p className="text-center mb-4">
          Clerk Key: {publishableKey ? "✓ Present" : "✗ Missing"}
        </p>
        <div className="border border-red-500 p-4">
          <SignIn
            appearance={{
              elements: {
                rootBox: "w-full",
                card: "w-full shadow-lg",
              },
            }}
          />
        </div>
      </div>
    </div>
  );
}
