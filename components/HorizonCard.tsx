import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

interface HorizonCardProps {
    title: string
    summary: string
    slug: string
    branch: string
    icon?: string
    publishedAt: string
    featured?: boolean
}

const branchColors: Record<string, string> = {
    science: "bg-emerald-100 text-emerald-800",
    mathematics: "bg-blue-100 text-blue-800",
    technology: "bg-violet-100 text-violet-800",
    geography: "bg-amber-100 text-amber-800",
    language: "bg-pink-100 text-pink-800",
    philosophy: "bg-slate-100 text-slate-800",
    history: "bg-orange-100 text-orange-800",
    "general-knowledge": "bg-teal-100 text-teal-800",
}

function formatDate(datetime: string) {
    return new Date(datetime).toLocaleDateString("en-IN", {
        year: "numeric",
        month: "short",
        day: "numeric",
    })
}

export function HorizonCard({
    title,
    summary,
    slug,
    branch,
    icon,
    publishedAt,
    featured,
}: HorizonCardProps) {
    const badgeClass = branchColors[branch] || "bg-gray-100 text-gray-800"

    return (
        <Link href={`/horizons/${slug}`} className="block">
            <Card className="flex flex-col transition-all duration-300 hover:shadow-lg hover:scale-[1.02] border-2 hover:border-brand-gold/50">
                <CardHeader>
                    <div className="flex items-start justify-between gap-2 mb-2">
                        <span className={`text-xs font-semibold px-2 py-1 rounded-full font-nunito capitalize ${badgeClass}`}>
                            {branch.replace("-", " ")}
                        </span>
                        {featured && (
                            <span className="text-xs font-semibold px-2 py-1 rounded-full bg-brand-gold/20 text-brand-gold font-nunito">
                                ✦ Featured
                            </span>
                        )}
                    </div>
                    <div className="flex items-center gap-2">
                        {icon && <span className="text-2xl">{icon}</span>}
                        <CardTitle className="font-nunito text-lg leading-snug">{title}</CardTitle>
                    </div>
                </CardHeader>
                <CardContent className="flex flex-col flex-1 justify-between gap-4">
                    <CardDescription className="font-sans text-sm leading-relaxed text-foreground/70">
                        {summary}
                    </CardDescription>
                    <p className="text-xs text-muted-foreground font-sans">{formatDate(publishedAt)}</p>
                </CardContent>
            </Card>
        </Link>
    )
}