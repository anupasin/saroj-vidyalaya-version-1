import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-card/95 backdrop-blur supports-backdrop-filter:bg-card/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <h1 className="text-xl sm:text-2xl font-bold font-nunito text-primary">
              Saroj Vidyalaya
            </h1>
          </Link>
          <div className="flex items-center space-x-2 sm:space-x-4">
            <Link href="/">
              <Button variant="ghost" size="sm" className="font-nunito text-sm sm:text-base">
                Home
              </Button>
            </Link>
            <Link href="/courses">
              <Button variant="ghost" size="sm" className="font-nunito text-sm sm:text-base">
                Courses
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}