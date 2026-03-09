import { motion } from "framer-motion";
import { ShoppingCart, MessageCircle, Star } from "lucide-react";
import heroImg from "@/assets/hero-supplements.jpg";

const WHATSAPP_LINK = "https://wa.me/5511999999999?text=Olá! Quero comprar suplementos!";

const HeroSection = () => (
  <section className="relative min-h-screen overflow-hidden pt-20">
    {/* Background image */}
    <div className="absolute inset-0">
      <img src={heroImg} alt="Suplementos premium" className="h-full w-full object-cover opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/60" />
    </div>

    <div className="container relative z-10 flex min-h-[calc(100vh-5rem)] flex-col justify-center py-16">
      <div className="max-w-2xl">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5"
        >
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-3.5 w-3.5 fill-primary text-primary" />
            ))}
          </div>
          <span className="text-xs font-medium text-primary">+5.000 clientes satisfeitos</span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-6 font-display text-4xl font-bold uppercase leading-tight tracking-tight text-foreground sm:text-5xl lg:text-7xl"
        >
          Transforme seu <br />
          <span className="text-primary text-glow">corpo</span> e sua{" "}
          <span className="text-primary text-glow">performance</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-8 max-w-lg text-lg text-muted-foreground"
        >
          Suplementos premium com qualidade garantida para você alcançar resultados reais. 
          Whey, creatina, pré-treino e muito mais com os melhores preços.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col gap-4 sm:flex-row"
        >
          <a
            href="#produtos"
            className="gradient-neon box-glow inline-flex items-center justify-center gap-2 rounded-lg px-8 py-4 font-display text-lg font-bold uppercase tracking-wide text-primary-foreground transition-all hover:scale-105"
          >
            <ShoppingCart className="h-5 w-5" />
            Comprar Agora
          </a>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-primary/40 bg-primary/10 px-8 py-4 font-display text-lg font-bold uppercase tracking-wide text-primary transition-all hover:scale-105 hover:bg-primary/20"
          >
            <MessageCircle className="h-5 w-5" />
            Falar no WhatsApp
          </a>
        </motion.div>

        {/* Social proof */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="mt-12 flex items-center gap-8"
        >
          <div>
            <p className="font-display text-3xl font-bold text-primary">5K+</p>
            <p className="text-xs text-muted-foreground">Clientes atendidos</p>
          </div>
          <div className="h-10 w-px bg-border" />
          <div>
            <p className="font-display text-3xl font-bold text-primary">100%</p>
            <p className="text-xs text-muted-foreground">Produtos originais</p>
          </div>
          <div className="h-10 w-px bg-border" />
          <div>
            <p className="font-display text-3xl font-bold text-primary">4.9</p>
            <p className="text-xs text-muted-foreground">Avaliação média</p>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default HeroSection;
