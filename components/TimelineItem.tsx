import { format } from "date-fns";
import { Memory } from "../types/memory";
import { motion } from "framer-motion";

interface Props {
  memory: Memory;
}

export default function TimelineItem({ memory }: Props) {
  const formattedDate = format(new Date(memory.date), "dd/MM/yyyy");

  return (
    <motion.div
      className="timeline-item"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.03, boxShadow: "0 12px 30px rgba(0,0,0,0.2)" }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="timeline-marker" />
      <div className="timeline-content-wrapper">
        <div className="timeline-date">{formattedDate}</div>
        <motion.img
          src={memory.imageUrl}
          alt={memory.title}
          className="timeline-image"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          loading="lazy"
        />
        <h3>{memory.title}</h3>
        <p>{memory.description}</p>
      </div>
    </motion.div>
  );
}