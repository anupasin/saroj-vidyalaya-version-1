import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface CourseCardProps {
  title: string;
  description: string;
  href: string;
  color: string;
  icon?: string;
}

export function CourseCard({ title, description, href, color, icon }: CourseCardProps) {
  return (
    <Link href={href} className="block h-full">
      <Card className="h-full transition-all duration-300 hover:shadow-lg hover:scale-105 border-2 hover:border-primary/50">
        <CardHeader>
          <div className={`w-12 h-12 rounded-full ${color} flex items-center justify-center mb-2`}>
            {icon && <span className="text-2xl">{icon}</span>}
          </div>
          <CardTitle className="font-nunito text-xl">{title}</CardTitle>
          <CardDescription className="font-sans">{description}</CardDescription>
        </CardHeader>
        <CardContent>
          <Button variant="outline" className="w-full font-nunito">
            Start Learning
          </Button>
        </CardContent>
      </Card>
    </Link>
  );
}

