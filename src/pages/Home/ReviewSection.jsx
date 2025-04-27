export default function ReviewsSection() {
  return (
    <section className="bg-gray-100 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold mb-12 text-center">
          What Our Clients Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Review 1 */}
          <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
            <img
              src="/images/maria.webp"
              alt="maria"
              className="w-20 h-20 mx-auto rounded-full mb-4 object-cover"
            />
            <p className="text-gray-700 italic mb-2">
              <q>ZEROBUG delivered an amazing website that exceeded our
              expectations. Highly recommended!</q>
            </p>
            <div className="text-yellow-400 mb-1">★★★★★</div>
            <p className="font-semibold">Maria Gomez</p>
          </div>

          {/* Review 2 */}
          <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
            <img
              src="/images/james.jpg"
              alt="Client"
              className="w-20 h-20 mx-auto rounded-full mb-4 object-cover"
            />
            <p className="text-gray-700 italic mb-2">
              <q>Professional, responsive, and creative – working with ZEROBUG was
              a fantastic experience.</q>
            </p>
            <div className="text-yellow-400 mb-1">★★★★★</div>
            <p className="font-semibold">James Walker</p>
          </div>

          {/* Review 3 */}
          <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
            <img
              src="/images/ayesha.jpg"
              alt="Client"
              className="w-20 h-20 mx-auto rounded-full mb-4 object-cover"
            />
            <p className="text-gray-700 italic mb-2">
            <q>They transformed our vision into a beautiful and functional
              website. Five stars all the way.</q>
            </p>
            <div className="text-yellow-400 mb-1">★★★★★</div>
            <p className="font-semibold">Ayesha Khan</p>
          </div>
        </div>
      </div>
    </section>
  );
}
