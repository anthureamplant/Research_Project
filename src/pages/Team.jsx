import PersonCard from "../components/PersonCard";

export default function Team() {
  return (
    <section>
      <h3 className="text-2xl font-bold mb-4">Team & Credits</h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <PersonCard name="Researcher A" role="Lead" note="Design & analysis" />
        <PersonCard name="Researcher B" role="Hardware" note="Sensors" />
        <PersonCard name="Researcher C" role="ML" note="Model development" />
      </div>
    </section>
  );
}
