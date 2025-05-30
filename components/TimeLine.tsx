import { memories } from "../data/memories";
import TimelineItem from "./TimelineItem";

export default function Timeline() {
  const sortedMemories = [...memories].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  return (
    <div className="timeline">
      {sortedMemories.map((memory) => (
        <TimelineItem key={memory.id} memory={memory} />
      ))}
    </div>
  );
}