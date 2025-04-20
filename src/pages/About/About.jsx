import AnimateOnView from "../../components/AnimateOnView";
import TeamCard from "./teamCard";
import teamMembers from "./teamMembers";

const About = () => {
  return (
    <div className="bg-gray-50 text-black w-full">
      {/* Banner */}
      <section className="bg-black bg-opacity-95 text-white py-20 px-4 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold">
          About Zero<span className="text-yellow-500">Bug</span>
        </h1>
        <p className="mt-4 text-base sm:text-lg md:text-xl">
          Driven by innovation, powered by passion.
        </p>
      </section>

      {/* Company Details */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center">
          What We Do?
        </h2>
        <p className="text-base sm:text-lg text-gray-800 leading-relaxed text-center">
          ZEROBUG is a modern web development agency specializing in building
          high-performance websites using React, Next.js, and WordPress. We
          craft seamless digital experiences tailored to your business needs,
          blending creativity with cutting-edge technology. Whether it’s a
          lightning-fast static site or a dynamic WordPress CMS, ZEROBUG
          delivers scalable and maintainable solutions. Our team is passionate
          about clean code, responsive design, and intuitive user interfaces.
          Partner with ZEROBUG to bring your online vision to life..
        </p>
      </section>
      <section className="bg-white pb-6 px-4 sm:px-8 md:px-12 lg:px-24 text-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <div className="grid gap-8 md:grid-cols-2 text-left">
            <div>
              <h3 className="text-xl font-semibold mb-3">What We Do</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Custom Website Development</li>
                <li>Figma to Website</li>
                <li>Business websites</li>
                <li>Responsive Design</li>
                <li>SEO & Speed Optimization</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Our Mission</h3>
              <p className="leading-relaxed">
                We aim to transform ideas into meaningful digital experiences.
                By blending creativity with cutting-edge tech, we help brands
                stand out and succeed in the competitive online space. Quality,
                transparency, and client success are at the heart of everything
                we do.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="bg-black py-16 md:px-4 w-full text-yellow-400">
        <div className="max-w-6xl mx-auto flex flex-col items-center w-full">
          <h2 className="text-2xl sm:text-3xl font-bold mb-12 text-center">
            Our Core
          </h2>
          <div className="flex flex-col w-[85%] md:w-[75%]">
            {teamMembers.map((member, index) => {
              return (
                <AnimateOnView animation="animate-slide-in-left" key={index}>
                  <TeamCard
                    name={member.name}
                    image={member.image}
                    role={member.role}
                    description={member.description}
                    socials={member.socials}
                    cardType={index % 2 == 0 ? 0 : 1}
                  />
                </AnimateOnView>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
