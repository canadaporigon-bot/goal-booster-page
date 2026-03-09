import logo from "@/assets/logo.jpeg";

const Footer = () => (
  <footer className="border-t border-border py-10">
    <div className="container flex flex-col items-center gap-4 text-center">
      <div className="flex items-center gap-3">
        <img src={logo} alt="Top Gold Suplementos" className="h-8 w-8 rounded-full object-cover" />
        <span className="font-display text-lg font-bold uppercase tracking-wider text-foreground">
          Top<span className="text-primary">Gold</span> Suplementos
        </span>
      </div>
      <p className="text-xs text-muted-foreground">
        © {new Date().getFullYear()} Top Gold Suplementos. Todos os direitos reservados.
      </p>
    </div>
  </footer>
);

export default Footer;
