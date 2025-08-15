import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vignam - Landing",
  description: "Cinematic 3D experience with immersive animations",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen antialiased bg-gradient-to-br from-gray-50/90 via-gray-100/80 to-gray-200/70 dark:from-gray-900 dark:via-gray-800/95 dark:to-gray-700/90 text-gray-900 dark:text-gray-100 transition-all duration-1000 ease-[cubic-bezier(0.83,0,0.17,1)] overflow-x-hidden">
        {/* Animated background elements */}
        <div className="fixed inset-0 -z-50 opacity-20 dark:opacity-30">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--primary)_0%,transparent_70%)] animate-gradient-pan"></div>
        </div>
        
        {/* Floating particles */}
        <div className="fixed inset-0 -z-40 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div 
              key={i}
              className="absolute rounded-full bg-primary/10 dark:bg-primary/20"
              style={{
                width: `${Math.random() * 10 + 5}px`,
                height: `${Math.random() * 10 + 5}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `float ${Math.random() * 20 + 10}s linear infinite`,
                animationDelay: `${Math.random() * 5}s`
              }}
            />
          ))}
        </div>

        {/* Main content with cinematic entrance */}
        <div className="animate-cinematic-fade-in">
          {children}
        </div>

        {/* Ambient light effect */}
        <div className="fixed top-1/4 -right-1/4 w-full aspect-square rounded-full bg-primary/10 dark:bg-primary/20 blur-[100px] -z-30 animate-pulse-slow"></div>
      </body>
    </html>
  );
}