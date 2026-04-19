import { useScrollFadeIn } from "@/hooks/useScrollFadeIn";
import creatieveWorkshops from "@/assets/gallery-creatieve-workshops.jpeg";
import pilatesYoga from "@/assets/gallery-pilates-yoga.jpeg";
import emoties from "@/assets/gallery-emoties.jpeg";

const galleryItems = [
  { aspect: "aspect-[3/4]", label: "Creatieve workshops", image: creatieveWorkshops },
  { aspect: "aspect-square", label: "Pilates", image: pilatesYoga },
  { aspect: "aspect-[4/3]", label: "Kunstproces", image: emoties },
  { aspect: "aspect-[3/4]", label: "Pilates" },
  { aspect: "aspect-[4/3]", label: "Therapeutic Touch" },
  { aspect: "aspect-square", label: "Exhibition" },
];

const Gallery = () => {
  const ref = useScrollFadeIn();

  return (
    <section id="gallery" className="py-24 md:py-32 max-w-7xl mx-auto px-8 md:px-16 lg:px-24">
      <div ref={ref} className="opacity-0">
        <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-3 text-center">Gallerij</p>
        <h2 className="font-heading text-4xl md:text-5xl font-light text-foreground mb-16 text-center">
          Een blik op het werk
        </h2>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {galleryItems.map((item, i) => (
            <div
              key={i}
              className={`${item.aspect} bg-muted rounded-sm overflow-hidden relative group break-inside-avoid`}
            >
              {item.image && (
                <img
                  src={item.image}
                  alt={item.label}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <span className="font-body text-sm text-primary-foreground tracking-wider uppercase">
                  {item.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
