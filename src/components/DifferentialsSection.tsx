import { motion } from "framer-motion";
import { ShieldCheck, Tag, Truck, MessageCircle, BadgeCheck } from "lucide-react";

const diffs = [
  { icon: ShieldCheck, title: "100% Original", desc: "Todos os produtos são originais e certificados" },
  { icon: Tag, title: "Preço Competitivo", desc: "Melhores preços do mercado com qualidade garantida" },
  { icon: Truck, title: "Entrega Rápida", desc: "Enviamos para todo o Brasil com agilidade" },
  { icon: MessageCircle, title: "Suporte WhatsApp", desc: "Atendimento humanizado e rápido pelo WhatsApp" },
  { icon: BadgeCheck, title: "Loja Confiável", desc: "Mais de 5.000 clientes atendidos com excelência" },
];

const DifferentialsSection = () => (
  <section id="diferenciais" className="py-20">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-14 text-center"
      >
        <h2 className="mb-3 font-display text-3xl font-bold uppercase tracking-tight text-foreground sm:text-4xl">
          Nossos <span className="text-primary text-glow">diferenciais</span>
        </h2>
      </motion.div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
        {diffs.map((d, i) => (
          <motion.div
            key={d.title}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="flex flex-col items-center rounded-xl border border-border bg-card p-6 text-center"
          >
            <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
              <d.icon className="h-5 w-5" />
            </div>
            <h3 className="mb-1 font-display text-sm font-bold uppercase text-foreground">{d.title}</h3>
            <p className="text-xs text-muted-foreground">{d.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default DifferentialsSection;
