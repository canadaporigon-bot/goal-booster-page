import { motion } from "framer-motion";
import { Clock, Flame, AlertTriangle } from "lucide-react";

const UrgencySection = () => (
  <section className="py-16">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="rounded-2xl border border-primary/30 bg-primary/5 p-8 text-center sm:p-12"
      >
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full gradient-neon box-glow animate-pulse-neon">
          <Flame className="h-8 w-8 text-primary-foreground" />
        </div>
        <h2 className="mb-4 font-display text-3xl font-bold uppercase text-foreground sm:text-4xl">
          🔥 Promoção <span className="text-primary text-glow">por tempo limitado</span>
        </h2>
        <p className="mx-auto mb-8 max-w-lg text-muted-foreground">
          Aproveite descontos de até <strong className="text-primary">30% OFF</strong> em toda a linha de suplementos. 
          Estoque limitado — quando acabar, acabou!
        </p>
        <div className="mb-8 flex flex-wrap items-center justify-center gap-6">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Clock className="h-4 w-4 text-primary" />
            <span>Oferta válida por tempo limitado</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <AlertTriangle className="h-4 w-4 text-destructive" />
            <span>Estoque limitado</span>
          </div>
        </div>
        <a
          href="#produtos"
          className="gradient-neon box-glow-strong inline-flex items-center justify-center rounded-lg px-10 py-4 font-display text-lg font-bold uppercase tracking-wide text-primary-foreground transition-all hover:scale-105"
        >
          Garantir Minha Oferta
        </a>
      </motion.div>
    </div>
  </section>
);

export default UrgencySection;
