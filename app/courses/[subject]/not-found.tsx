import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function NotFound() {
  return (
    <div className="max-w-2xl mx-auto text-center py-12">
      <Card className="border-2">
        <CardHeader>
          <CardTitle className="font-nunito text-3xl text-primary">
            Course Not Found
          </CardTitle>
          <CardDescription className="font-sans text-lg">
            Oops! This course doesn't exist yet.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-foreground font-sans">
            Don't worry! We're always adding new courses. Check back soon!
          </p>
          <Link href="/">
            <Button className="font-nunito">
              Back to Home
            </Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}

