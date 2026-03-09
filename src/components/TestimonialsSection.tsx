import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  { name: "Lucas M.", text: "A creatina da Top Gold é a melhor que já usei. Ganhei 3kg de massa em 2 meses!", rating: 5 },
  { name: "Amanda S.", text: "O pré-treino mudou meu jogo. Treino com muito mais disposição e foco. Recomendo demais!", rating: 5 },
  { name: "Rafael C.", text: "Entrega rápida e produtos originais. Já compro há mais de um ano e nunca tive problemas.", rating: 5 },
  { name: "Juliana F.", text: "O termogênico realmente funciona! Emagreci 5kg em 1 mês combinando com dieta e treino.", rating: 5 },
  { name: "Pedro H.", text: "Whey com sabor excelente e ótima solubilidade. Melhor custo-benefício que encontrei.", rating: 5 },
  { name: "Camila R.", text: "Atendimento incrível pelo WhatsApp. Tiraram todas as minhas dúvidas e entregaram rápido!", rating: 5 },
];

const TestimonialsSection = () => (
  <section id="depoimentos" className="py-20">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-14 text-center"
      >
        <h2 className="mb-3 font-display text-3xl font-bold uppercase tracking-tight text-foreground sm:text-4xl">
          O que nossos <span className="text-primary text-glow">clientes</span> dizem
        </h2>
        <p className="mx-auto max-w-md text-muted-foreground">
          Resultados reais de pessoas reais que confiam na Top Gold.
        </p>
      </motion.div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="rounded-xl border border-border bg-card p-6"
          >
            <Quote className="mb-3 h-6 w-6 text-primary/40" />
            <p className="mb-4 text-sm leading-relaxed text-muted-foreground">"{t.text}"</p>
            <div className="flex items-center justify-between">
              <span className="font-display text-sm font-bold text-foreground">{t.name}</span>
              <div className="flex">
                {[...Array(t.rating)].map((_, j) => (
                  <Star key={j} className="h-3.5 w-3.5 fill-primary text-primary" />
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
