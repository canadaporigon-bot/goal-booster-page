import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const WHATSAPP_LINK = "https://wa.me/5511999999999?text=Olá! Gostaria de saber mais sobre os suplementos.";

const WhatsAppFloat = () => (
  <motion.a
    href={WHATSAPP_LINK}
    target="_blank"
    rel="noopener noreferrer"
    initial={{ scale: 0 }}
    animate={{ scale: 1 }}
    transition={{ delay: 1, type: "spring" }}
    className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full gradient-neon box-glow-strong transition-transform hover:scale-110"
    aria-label="Falar no WhatsApp"
  >
    <MessageCircle className="h-6 w-6 text-primary-foreground" />
  </motion.a>
);

export default WhatsAppFloat;
