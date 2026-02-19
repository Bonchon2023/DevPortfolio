import { Github, ExternalLink, Layers, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/app/components/ui/button"
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/app/components/ui/card"

interface ProjectCardProps {
    id: string // รับ id เพื่อใช้ทำลิงก์
    title: string
    description: string
    tags: string[]
    demoUrl?: string
    repoUrl?: string
    image?: string
}

export function ProjectCard({
    id,
    title,
    description,
    tags,
    demoUrl,
    repoUrl,
    image, 
}: ProjectCardProps) {
    return (
        <Card className="flex flex-col h-full hover:shadow-lg transition-all duration-300 overflow-hidden group border-border bg-card">
            {/* ครอบรูปภาพด้วย Link เพื่อให้คลิกที่รูปได้ */}
            <Link href={`/project/${id}`} className="block h-48 bg-secondary/10 relative overflow-hidden">
                {image ? (
                    <Image 
                        src={image.startsWith('/') ? image : `/${image}`} 
                        alt={title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                ) : (
                    <div className="absolute inset-0 flex items-center justify-center text-secondary group-hover:scale-105 transition-transform duration-500">
                        <Layers size={48} />
                    </div>
                )}
            </Link>
            
            <CardHeader>
                <Link href={`/project/${id}`} className="hover:text-primary transition-colors">
                    <CardTitle className="text-xl text-foreground">{title}</CardTitle>
                </Link>
            </CardHeader>
            <CardContent className="grow">
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed line-clamp-3">
                    {description}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                    {tags.map((tag) => (
                        <span key={tag} className="inline-flex items-center rounded-full border border-secondary/30 bg-secondary/10 px-2.5 py-0.5 text-xs font-semibold text-primary">
                            {tag}
                        </span>
                    ))}
                </div>
            </CardContent>
            <CardFooter className="gap-2 pt-0 flex-col sm:flex-row">
                {/* ปุ่ม View Details */}
                <Button className="w-full sm:w-auto flex-1 gap-2 bg-primary text-white hover:bg-primary/90" asChild>
                    <Link href={`/project/${id}`}>
                        Details <ArrowRight size={16} />
                    </Link>
                </Button>
                {demoUrl && (
                    <Button variant="outline" className="w-full sm:w-auto flex-1 gap-2 border-primary text-primary hover:bg-primary/10" asChild>
                        <a href={demoUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink size={16} /> Live
                        </a>
                    </Button>
                )}
            </CardFooter>
        </Card>
    )
}