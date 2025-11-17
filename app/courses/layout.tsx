import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function CoursesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Link href="/">
            <Button variant="ghost" className="font-nunito">
              ← Back to Home
            </Button>
          </Link>
        </div>
        {children}
      </div>
    </div>
  );
}

