import { useScrollFadeIn } from "@/hooks/useScrollFadeIn";

const testimonials = [
  {
    quote: "Stephanie's sessions feel like coming home to yourself. Her blend of movement and healing is truly transformative.",
    author: "Laura M.",
    role: "Yoga & Therapy Client",
  },
  {
    quote: "I came for pilates and discovered a whole new relationship with my body. Stephanie holds such a warm, intuitive space.",
    author: "Diana K.",
    role: "Pilates Client",
  },
  {
    quote: "The art workshops unlocked something in me I didn't know was there. Creative, gentle, and deeply restorative.",
    author: "Carla S.",
    role: "Art Workshop Participant",
  },
];

const Testimonials = () => {
  const ref = useScrollFadeIn();

  return (
    <section className="py-24 md:py-32 bg-card">
      <div ref={ref} className="opacity-0 max-w-5xl mx-auto px-8 md:px-16">
        <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-3 text-center">Concreet</p>
        <h2 className="font-heading text-4xl md:text-5xl font-light text-foreground mb-16 text-center">
          Kind Words
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="flex flex-col">
              <blockquote className="font-heading text-lg italic text-foreground/80 leading-relaxed mb-6 flex-1">
                "{t.quote}"
              </blockquote>
              <div>
                <p className="font-body text-sm font-semibold text-foreground">{t.author}</p>
                <p className="font-body text-xs text-muted-foreground">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
