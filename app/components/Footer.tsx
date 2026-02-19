import { Github, Linkedin, Twitter, Code } from "lucide-react"

export function Footer() {
    return (
        // ใช้ bg-secondary/10 เพื่อให้เข้าธีมสีเขียวอ่อน
        <footer className="bg-secondary/10 border-t border-border py-12">
            <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-primary rounded-md flex items-center justify-center text-white">
                        <Code size={12} />
                    </div>
                    <span className="font-semibold text-foreground">DevPortfolio</span>
                </div>

                <p className="text-sm text-muted-foreground">
                    © {new Date().getFullYear()} All rights reserved. Built with React & Tailwind.
                </p>

                <div className="flex items-center gap-4">
                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                        <Github size={20} />
                    </a>
                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                        <Twitter size={20} />
                    </a>
                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                        <Linkedin size={20} />
                    </a>
                </div>
            </div>
        </footer>
    )
}