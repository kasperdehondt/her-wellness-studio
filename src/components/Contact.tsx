import { useState } from "react";
import { useScrollFadeIn } from "@/hooks/useScrollFadeIn";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";
const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

type Web3FormsResponse = {
  success?: boolean;
  message?: string;
  body?: {
    message?: string;
  };
};

const Contact = () => {
  const ref = useScrollFadeIn();
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [botcheck, setBotcheck] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast({ title: "Please fill in all fields.", variant: "destructive" });
      return;
    }

    if (!WEB3FORMS_ACCESS_KEY) {
      toast({
        title: "Email is not configured yet.",
        description: "Add VITE_WEB3FORMS_ACCESS_KEY to your local environment.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(WEB3FORMS_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: "New website contact form message",
          from_name: "Her Wellness Studio",
          name: form.name.trim(),
          email: form.email.trim(),
          replyto: form.email.trim(),
          message: form.message.trim(),
          botcheck,
        }),
      });

      const result = (await response.json()) as Web3FormsResponse;
      const errorMessage =
        result.body?.message ||
        result.message ||
        `Unable to send message (${response.status}).`;

      if (!response.ok || !result.success) {
        throw new Error(errorMessage);
      }

      toast({ title: "Message sent!", description: "Stephanie will be in touch soon." });
      setForm({ name: "", email: "", message: "" });
      setBotcheck("");
    } catch (error) {
      const description =
        error instanceof Error ? error.message : "Please try again in a moment.";

      toast({
        title: "Unable to send message.",
        description,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
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
              <p>stephaniehallard@gmail.com</p>
            </div>
            <div>
              <p className="font-semibold text-foreground mb-1">Social</p>
              <p>@stephanie.wellness</p>
            </div>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="checkbox"
            name="botcheck"
            tabIndex={-1}
            autoComplete="off"
            checked={botcheck === "true"}
            onChange={(e) => setBotcheck(e.target.checked ? "true" : "")}
            className="hidden"
            aria-hidden="true"
          />
          <div>
            <label className="font-body text-xs tracking-wider uppercase text-muted-foreground mb-1.5 block">Name</label>
            <Input
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              maxLength={100}
              disabled={isSubmitting}
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
              disabled={isSubmitting}
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
              disabled={isSubmitting}
              className="bg-background border-border focus-visible:ring-primary"
            />
          </div>
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full font-body text-sm tracking-widest uppercase bg-primary text-primary-foreground hover:bg-primary/90 rounded-sm py-6"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </Button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
