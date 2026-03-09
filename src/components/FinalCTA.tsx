import { motion } from "framer-motion";
import { ShoppingCart, MessageCircle } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/5511999999999?text=Olá! Quero comprar suplementos!";

const FinalCTA = () => (
  <section className="py-20">
    <div className="container text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="mb-4 font-display text-3xl font-bold uppercase text-foreground sm:text-5xl">
          Pronto para <span className="text-primary text-glow">transformar</span> seus resultados?
        </h2>
        <p className="mx-auto mb-10 max-w-lg text-lg text-muted-foreground">
          Escolha os melhores suplementos e comece a ver a diferença nos seus treinos hoje mesmo.
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#produtos"
            className="gradient-neon box-glow inline-flex items-center gap-2 rounded-lg px-10 py-4 font-display text-lg font-bold uppercase tracking-wide text-primary-foreground transition-all hover:scale-105"
          >
            <ShoppingCart className="h-5 w-5" />
            Comprar Agora
          </a>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-primary/40 bg-primary/10 px-10 py-4 font-display text-lg font-bold uppercase tracking-wide text-primary transition-all hover:scale-105 hover:bg-primary/20"
          >
            <MessageCircle className="h-5 w-5" />
            Falar no WhatsApp
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);

export default FinalCTA;
