
export default function IndvidualAndCredits() {
  return (
    <section className="bg-white py-16 px-6 md:px-12">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Indvidual 
        </h2>
        <p className="text-gray-600 text-lg mb-12">
          This project was independently designed, developed, and researched.
        </p>

        <div className="flex justify-center">
          <div className="bg-gray-50 rounded-2xl shadow-md p-8 max-w-md w-full">
            <div className="w-24 h-24 mx-auto rounded-full bg-green-100 flex items-center justify-center text-3xl font-bold text-green-700 mb-4">
              B
            </div>

            <h3 className="text-2xl font-semibold text-gray-900">
              Bingun Alahakoon
            </h3>

            <p className="text-gray-600 mt-4 text-sm leading-relaxed">
              Responsible for system design, sensor research, machine learning
              model selection, data analysis, UI/UX design, and full website
              development for the Anthurium monitoring project.
            </p>
          </div>
        </div>

        
      </div>
    </section>
  );
}
