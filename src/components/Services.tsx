import { useScrollFadeIn } from "@/hooks/useScrollFadeIn";

const services = [
  {
    title: "Gesprekstherapie",
    description: "Door samen de door jouw aangebrachte thema's aan te kaarten gaan we op zoek naar nieuwe perspectieven en oplossingen. We gaan aan de slag met de grote levensdomeinen.",
    icon: "◯",
  },
  {
    title: "Creatieve therapie",
    description: "Niet iedereen komt even makkelijk tot gesprek. Soms zoek je een andere manier om je uit te drukken. Anderen hebben gewoon graag wat om handen tijdens een gesprek. Met mijn achtergrond in beeldende kunsten loods ik je graag door het consult.",
    icon: "△",
  },
  {
    title: "Beweging",
    description: "Vraag ook naar de groeps- en privélessen pilates en/of ashtanga yoga.",
    icon: "◇",
  },
  {
    title: "Gezondheid",
    description: "We overlopen de grote levensstijlkeuzes die je maakt, op domeinen als zelfzorg en persoonlijke groei, hydratatie en voeding, intimiteit, zingeving, beweging en veel meer.",
    icon: "□",
  },
];

const Services = () => {
  const ref = useScrollFadeIn();

  return (
    <section id="services" className="py-24 md:py-32 bg-card">
      <div ref={ref} className="opacity-0 max-w-7xl mx-auto px-8 md:px-16 lg:px-24">
        <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-3 text-center">Diensten</p>
        <h2 className="font-heading text-4xl md:text-5xl font-light text-foreground mb-16 text-center">
          Wat ik aanbied
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
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
