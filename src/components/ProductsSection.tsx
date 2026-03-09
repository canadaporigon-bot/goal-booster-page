import { motion } from "framer-motion";
import { ShoppingCart } from "lucide-react";
import wheyImg from "@/assets/product-whey.jpg";
import creatineImg from "@/assets/product-creatine.jpg";
import preworkoutImg from "@/assets/product-preworkout.jpg";
import thermoImg from "@/assets/product-thermo.jpg";

const WHATSAPP_BASE = "https://wa.me/5511999999999?text=";

const products = [
  { img: wheyImg, name: "Whey Protein", benefit: "30g de proteína por dose para máximo crescimento muscular", price: "R$ 149,90", oldPrice: "R$ 189,90" },
  { img: creatineImg, name: "Creatina Monohidratada", benefit: "Aumento de força e volume muscular comprovado cientificamente", price: "R$ 89,90", oldPrice: "R$ 119,90" },
  { img: preworkoutImg, name: "Pré-Treino Extreme", benefit: "Energia explosiva e foco total para treinos intensos", price: "R$ 79,90", oldPrice: "R$ 99,90" },
  { img: thermoImg, name: "Termogênico Fire", benefit: "Acelera o metabolismo e potencializa a queima de gordura", price: "R$ 69,90", oldPrice: "R$ 89,90" },
];

const ProductsSection = () => (
  <section id="produtos" className="py-20">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-14 text-center"
      >
        <h2 className="mb-3 font-display text-3xl font-bold uppercase tracking-tight text-foreground sm:text-4xl">
          Produtos <span className="text-primary text-glow">mais vendidos</span>
        </h2>
        <p className="mx-auto max-w-md text-muted-foreground">
          Os suplementos favoritos dos nossos clientes com preços imbatíveis.
        </p>
      </motion.div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((p, i) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group overflow-hidden rounded-xl border border-border bg-card transition-all hover:border-primary/40"
          >
            <div className="relative aspect-square overflow-hidden bg-secondary">
              <img src={p.img} alt={p.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute left-3 top-3 rounded-md bg-destructive px-2 py-1 font-display text-xs font-bold uppercase text-destructive-foreground">
                Oferta
              </div>
            </div>
            <div className="p-5">
              <h3 className="mb-1 font-display text-lg font-bold uppercase text-foreground">{p.name}</h3>
              <p className="mb-4 text-xs leading-relaxed text-muted-foreground">{p.benefit}</p>
              <div className="mb-4 flex items-baseline gap-2">
                <span className="font-display text-2xl font-bold text-primary">{p.price}</span>
                <span className="text-sm text-muted-foreground line-through">{p.oldPrice}</span>
              </div>
              <a
                href={`${WHATSAPP_BASE}Olá! Quero comprar ${p.name}`}
                target="_blank"
                rel="noopener noreferrer"
                className="gradient-neon flex w-full items-center justify-center gap-2 rounded-lg py-3 font-display text-sm font-bold uppercase tracking-wide text-primary-foreground transition-all hover:scale-[1.02] box-glow"
              >
                <ShoppingCart className="h-4 w-4" />
                Comprar
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProductsSection;
