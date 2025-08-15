import Hero3D from "@/components/Hero3D";
import YouTubeSection from "@/components/YouTubeSection";
import { Features, Footer } from "@/components/Sections";

export default function Page() {
  return (
    <main className="overflow-hidden relative">
      {/* Cinematic background elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--primary)/10_70%,transparent] animate-gradient-pulse" />
      </div>

      {/* Animated hero section with parallax effect */}
      <Hero3D 
        className="animate-cinematic-enter opacity-0 [animation-delay:200ms] [animation-fill-mode:forwards] 
                  transform-gpu transition-transform duration-1000 hover:scale-[1.005]" 
      />

      {/* YouTube section with subtle glow */}
      <YouTubeSection 
        className="animate-cinematic-enter opacity-0 [animation-delay:400ms] [animation-fill-mode:forwards] py-20
                  relative before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_center,_var(--primary)/10_0%,transparent_70%)] 
                  before:opacity-0 before:transition-opacity before:duration-1000 hover:before:opacity-20" 
      />

      {/* Features with 3D card effect */}
      <Features 
        className="animate-cinematic-enter opacity-0 [animation-delay:600ms] [animation-fill-mode:forwards] py-24 
                  bg-white/10 dark:bg-black/10 backdrop-blur-lg perspective-1000"
      />

      {/* Footer with light trail effect */}
     <Footer
  className="
    animate-cinematic-enter opacity-0
    [animation-delay:800ms] [animation-fill-mode:forwards]
    border-t border-white/10 relative overflow-hidden
    backdrop-blur-md bg-black/30
    shadow-[0_-4px_30px_rgba(0,0,0,0.3)]
    
    after:absolute after:top-0 after:left-0 after:w-full after:h-[2px]
    after:bg-gradient-to-r after:from-transparent after:via-primary after:to-transparent
    after:animate-light-trail
  "
/>

    </main>
  );
}