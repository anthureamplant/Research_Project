export default function Contact() {
  return (
    <section>
      <h3 className="text-2xl font-bold mb-4">Contact</h3>

      <form className="space-y-3 max-w-md">
        <input type="email" placeholder="Email" className="w-full p-2 border rounded" />
        <textarea placeholder="Message" className="w-full p-2 border rounded h-24" />
        <button className="px-4 py-2 bg-emerald-600 text-white rounded-md">Submit</button>
      </form>
    </section>
  );
}
