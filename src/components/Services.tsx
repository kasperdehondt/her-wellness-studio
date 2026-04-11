import { useScrollFadeIn } from "@/hooks/useScrollFadeIn";

const services = [
  {
    title: "Yoga",
    description: "Flowing vinyasa and restorative practices that cultivate strength, flexibility, and deep presence.",
    icon: "◯",
  },
  {
    title: "Pilates",
    description: "Precision-based movement to build core stability, improve posture, and restore functional alignment.",
    icon: "△",
  },
  {
    title: "Therapy",
    description: "Somatic bodywork and therapeutic sessions addressing tension, trauma, and nervous system regulation.",
    icon: "◇",
  },
  {
    title: "Art",
    description: "Guided creative workshops exploring self-expression through painting, drawing, and mixed media.",
    icon: "□",
  },
];

const Services = () => {
  const ref = useScrollFadeIn();

  return (
    <section id="services" className="py-24 md:py-32 bg-card">
      <div ref={ref} className="opacity-0 max-w-7xl mx-auto px-8 md:px-16 lg:px-24">
        <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-3 text-center">Services</p>
        <h2 className="font-heading text-4xl md:text-5xl font-light text-foreground mb-16 text-center">
          What I Offer
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="group p-8 bg-background rounded-sm border border-border hover:border-primary/40 hover:shadow-lg transition-all duration-500 cursor-default"
            >
              <span className="block text-3xl text-primary/60 group-hover:text-primary transition-colors duration-500 mb-6">
                {service.icon}
              </span>
              <h3 className="font-heading text-2xl font-medium text-foreground mb-3">
                {service.title}
              </h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
