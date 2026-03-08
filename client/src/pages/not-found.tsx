import { AlertCircle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center">
      <div className="glass-panel w-full max-w-md mx-4 p-6">
        <div className="flex mb-4 gap-2 items-center">
          <AlertCircle className="h-8 w-8 text-[#A378FF]" />
          <h1 className="text-2xl font-light text-[#F0ECFF]">404 Page Not Found</h1>
        </div>

        <p className="mt-4 text-sm text-[#8B85A0] font-light">
          Did you forget to add the page to the router?
        </p>
      </div>
    </div>
  );
}