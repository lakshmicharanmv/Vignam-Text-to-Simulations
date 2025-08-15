export default function YouTubeSection() {
  return (
    <section
      id="video"
      className="relative w-full h-screen bg-black overflow-hidden"
    >
      {/* YouTube Video Fullscreen */}
      <iframe
        className="absolute inset-0 w-full h-full"
        src="https://www.youtube.com/embed/E1czmX6bjFA?start=10&autoplay=1&mute=1&loop=1&playlist=E1czmX6bjFA"
        title="Vignam Text to Simulations"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />

      {/* Optional overlay for cinematic effect */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Centered text overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6">
        <h2 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in">
          Product Video
        </h2>
        <p className="text-lg md:text-xl max-w-2xl animate-fade-in [animation-delay:200ms]">
          Experience the future of simulation technology in action.
        </p>
      </div>
    </section>
  );
}
