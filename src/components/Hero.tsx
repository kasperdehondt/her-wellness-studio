import stephaniePortrait from "@/assets/stephanie-portrait.jpeg";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col md:flex-row">
      {/* Left — Text */}
      <div className="flex-1 flex flex-col justify-center px-8 md:px-16 lg:px-24 py-20 md:py-0">
        <p className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
          Evenwicht - levenslust - kracht
        </p>
        <h1 className="font-heading text-6xl md:text-7xl lg:text-8xl font-light text-foreground leading-[0.95] mb-6">
          Stephanie
        </h1>
        <p className="font-body text-muted-foreground max-w-md leading-relaxed mb-8">
          Voel je je futloos of loop je ergens vast in je leven? Ben je klaar om je leven onder handen te nemen?
          <br /><br />
          Mijn naam is Stephanie en als holistisch gezondheidscoach werk ik in een tiental krachtige sessies samen met je aan alle aspecten van je gezondheid.
        </p>
        <a
          href="#contact"
          className="inline-block w-fit font-body text-sm tracking-widest uppercase border border-primary text-primary px-8 py-3 hover:bg-primary hover:text-primary-foreground transition-all duration-500"
        >
          Contacteer me
        </a>
      </div>

      {/* Right — Image */}
      <div className="flex-1 bg-muted relative overflow-hidden min-h-[50vh] md:min-h-0">
        <img
          src={stephaniePortrait}
          alt="Stephanie, holistisch gezondheidscoach"
          className="absolute inset-0 w-3/4 h-3/4 m-auto object-cover"
        />
      </div>
    </section>
  );
};

export default Hero;
