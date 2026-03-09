import { motion } from "framer-motion";
import { Dumbbell, Zap, HeartPulse, ShieldCheck, Truck } from "lucide-react";

const benefits = [
  { icon: Dumbbell, title: "Ganho de Massa Muscular", desc: "Suplementos formulados para maximizar a síntese proteica e o crescimento muscular." },
  { icon: Zap, title: "Mais Energia no Treino", desc: "Pré-treinos potentes para você treinar com máxima intensidade e foco." },
  { icon: HeartPulse, title: "Recuperação Rápida", desc: "Nutrientes essenciais para reduzir o tempo de recuperação entre treinos." },
  { icon: ShieldCheck, title: "Produtos Originais", desc: "Trabalhamos apenas com marcas certificadas e de confiança no mercado." },
  { icon: Truck, title: "Entrega Rápida", desc: "Receba seus suplementos em casa com agilidade e segurança." },
];

const BenefitsSection = () => (
  <section id="beneficios" className="py-20">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-14 text-center"
      >
        <h2 className="mb-3 font-display text-3xl font-bold uppercase tracking-tight text-foreground sm:text-4xl">
          Por que escolher a <span className="text-primary text-glow">Top Gold</span>?
        </h2>
        <p className="mx-auto max-w-md text-muted-foreground">
          Tudo o que você precisa para alcançar seus objetivos fitness, em um só lugar.
        </p>
      </motion.div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
        {benefits.map((b, i) => (
          <motion.div
            key={b.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group rounded-xl border border-border bg-card p-6 text-center transition-all hover:border-primary/40 hover:box-glow"
          >
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:gradient-neon group-hover:text-primary-foreground">
              <b.icon className="h-6 w-6" />
            </div>
            <h3 className="mb-2 font-display text-sm font-bold uppercase tracking-wide text-foreground">{b.title}</h3>
            <p className="text-xs leading-relaxed text-muted-foreground">{b.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default BenefitsSection;
