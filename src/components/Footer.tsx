const Footer = () => (
  <footer className="py-8 border-t border-border">
    <div className="max-w-7xl mx-auto px-8 md:px-16 flex flex-col sm:flex-row items-center justify-between gap-4">
      <span className="font-heading text-lg text-foreground">Stephanie</span>
      <p className="font-body text-xs text-muted-foreground">
        © {new Date().getFullYear()} Stephanie. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
