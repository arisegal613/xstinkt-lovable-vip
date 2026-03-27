import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const faqs = [
  {
    question: "Why do traditional garbage cans smell so bad, even with a lid?",
    answer:
      "Traditional cans act like incubators. By sealing off the trash with a tight lid, you trap moisture and create a dark, stagnant environment—the exact conditions anaerobic bacteria need to thrive and produce foul-smelling gases. The lid doesn't stop the smell; it accelerates its creation.",
  },
  {
    question: "If lids are the problem, why not just leave the can open?",
    answer:
      "An open can exposes unsightly trash and attracts pests. Xstinkt solves this with a patent-pending dual-shell design. Intentionally misaligned inner and outer slots create a continuous convection current. Air circulates freely through the can without exposing the contents to the room, eliminating the environment bacteria need to produce odors.",
  },
  {
    question: "How is Xstinkt different from cans with carbon filters or deodorizers?",
    answer:
      "Filters and deodorizers treat the symptom, not the disease. They attempt to mask or absorb odors after they've already formed. Xstinkt prevents the odors from forming in the first place by fundamentally changing the airflow dynamics inside the receptacle. Odors are extinct, forever.",
  },
  {
    question: "What happens if a bag leaks? Will it ruin the airflow system?",
    answer:
      "No. Xstinkt features a gasket-sealed drip basin at the bottom of the unit. Any liquid from a ruptured bag is caught and isolated from the main airflow channels, preventing the spread of bacteria and making cleanup simple.",
  },
  {
    question: "Is it difficult to clean with the dual-shell design?",
    answer:
      "We engineered Xstinkt for a 30-second teardown. The inner and outer shells separate instantly, and the drip basin unclips with one hand. All structural components can be wiped down or rinsed out in a standard sink or bathtub in under a minute.",
  },
  {
    question: "What materials is Xstinkt made from? Is it durable?",
    answer:
      "Xstinkt is constructed from high-impact, commercial-grade polymers designed to withstand daily abuse in a busy kitchen. It resists denting, won't rust, and the structural integrity is guaranteed for life. It's built to be the last trash can you ever buy.",
  },
  {
    question: "You mention the design is patent-pending. What exactly is patented?",
    answer:
      "Our utility patent covers the specific architecture of the dual-shell airflow system—specifically the offset alignment of the ventilation slots that allows for continuous air circulation while maintaining a visual and physical barrier to the trash inside.",
  },
];

const FAQ = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="max-w-3xl mx-auto px-6 py-24">
        <h1 className="text-4xl font-bold tracking-tight mb-4">
          Frequently Asked Questions
        </h1>
        <p className="text-muted-foreground text-lg mb-16">
          The science behind why Xstinkt works—and why everything else doesn't.
        </p>
        <div className="space-y-12">
          {faqs.map((faq, i) => (
            <div key={i} className="border-t border-border pt-8">
              <h2 className="text-xl font-semibold mb-3">{faq.question}</h2>
              <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FAQ;
