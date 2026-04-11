import { useState } from "react";
import { useScrollFadeIn } from "@/hooks/useScrollFadeIn";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const ref = useScrollFadeIn();
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast({ title: "Please fill in all fields.", variant: "destructive" });
      return;
    }
    toast({ title: "Message sent!", description: "Stephanie will be in touch soon." });
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 md:py-32 max-w-7xl mx-auto px-8 md:px-16 lg:px-24">
      <div ref={ref} className="opacity-0 grid md:grid-cols-2 gap-16">
        {/* Info */}
        <div>
          <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-3">Contact</p>
          <h2 className="font-heading text-4xl md:text-5xl font-light text-foreground mb-6 leading-tight">
            Let's Connect
          </h2>
          <p className="font-body text-muted-foreground leading-relaxed mb-8">
            Whether you're looking to begin a practice, explore therapy, or join an art workshop — I'd love to hear from you.
          </p>

          <div className="space-y-4 font-body text-sm text-muted-foreground">
            <div>
              <p className="font-semibold text-foreground mb-1">Location</p>
              <p>Available for in-person and online sessions</p>
            </div>
            <div>
              <p className="font-semibold text-foreground mb-1">Email</p>
              <p>hello@stephanie.com</p>
            </div>
            <div>
              <p className="font-semibold text-foreground mb-1">Social</p>
              <p>@stephanie.wellness</p>
            </div>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="font-body text-xs tracking-wider uppercase text-muted-foreground mb-1.5 block">Name</label>
            <Input
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              maxLength={100}
              className="bg-background border-border focus-visible:ring-primary"
            />
          </div>
          <div>
            <label className="font-body text-xs tracking-wider uppercase text-muted-foreground mb-1.5 block">Email</label>
            <Input
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              maxLength={255}
              className="bg-background border-border focus-visible:ring-primary"
            />
          </div>
          <div>
            <label className="font-body text-xs tracking-wider uppercase text-muted-foreground mb-1.5 block">Message</label>
            <Textarea
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              maxLength={1000}
              rows={5}
              className="bg-background border-border focus-visible:ring-primary"
            />
          </div>
          <Button
            type="submit"
            className="w-full font-body text-sm tracking-widest uppercase bg-primary text-primary-foreground hover:bg-primary/90 rounded-sm py-6"
          >
            Send Message
          </Button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
