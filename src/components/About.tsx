import { useScrollFadeIn } from "@/hooks/useScrollFadeIn";

const About = () => {
  const ref = useScrollFadeIn();

  return (
    <section id="about" className="py-24 md:py-32 px-8 md:px-16 lg:px-24 max-w-7xl mx-auto">
      <div ref={ref} className="opacity-0 grid md:grid-cols-2 gap-16 items-center">
        {/* Image placeholder */}
        <div className="aspect-[3/4] bg-muted rounded-sm overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent" />
        </div>

        {/* Text */}
        <div>
          <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-3">About</p>
          <h2 className="font-heading text-4xl md:text-5xl font-light text-foreground mb-6 leading-tight">
            Holistische coaching
          </h2>
          <div className="space-y-4 font-body text-muted-foreground leading-relaxed">
            <p>
              Fysieke, mentale, emotionele, sociale en zingevingsvragen komen aan bod en dat voor mensen die meer vitaliteit en energie in hun leven willen om te doen wat ze graag doen.
              Dat kan in gesprekstherapie en screening, maar ook op andere creatieve manieren of via sportlessen. Hoe dan ook, steeds op jouw maat en met je behoeftes voorop.
            </p>
            <p>
              Her work is grounded in the belief that the body holds wisdom — that movement, breath, and creative expression are pathways to healing. Each session is thoughtfully tailored, meeting you exactly where you are.
            </p>
            <p>
              Whether on the mat, in the studio, or through therapeutic touch, Stephanie creates a space where transformation feels natural and unhurried.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
