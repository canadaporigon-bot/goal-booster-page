import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import logo from "@/assets/logo.jpeg";

const WHATSAPP_LINK = "https://wa.me/5511999999999?text=Olá! Gostaria de saber mais sobre os suplementos.";

const Header = () => (
  <motion.header
    initial={{ y: -80 }}
    animate={{ y: 0 }}
    transition={{ duration: 0.5 }}
    className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-lg"
  >
    <div className="container flex items-center justify-between py-3">
      <div className="flex items-center gap-3">
        <img src={logo} alt="Top Gold Suplementos" className="h-10 w-10 rounded-full object-cover" />
        <span className="font-display text-xl font-bold uppercase tracking-wider text-foreground">
          Top<span className="text-primary">Gold</span>
        </span>
      </div>
      <nav className="hidden items-center gap-6 md:flex">
        <a href="#beneficios" className="text-sm text-muted-foreground transition-colors hover:text-primary">Benefícios</a>
        <a href="#produtos" className="text-sm text-muted-foreground transition-colors hover:text-primary">Produtos</a>
        <a href="#depoimentos" className="text-sm text-muted-foreground transition-colors hover:text-primary">Depoimentos</a>
        <a href="#diferenciais" className="text-sm text-muted-foreground transition-colors hover:text-primary">Diferenciais</a>
      </nav>
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="gradient-neon flex items-center gap-2 rounded-lg px-4 py-2 font-display text-sm font-semibold uppercase tracking-wide text-primary-foreground transition-all hover:scale-105 box-glow"
      >
        <MessageCircle className="h-4 w-4" />
        WhatsApp
      </a>
    </div>
  </motion.header>
);

export default Header;
