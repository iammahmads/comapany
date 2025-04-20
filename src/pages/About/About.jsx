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
          ZEROBUG is a modern web development agency specializing in
          building high-performance websites using React, Next.js, and
          WordPress. We craft seamless digital experiences tailored to your
          business needs, blending creativity with cutting-edge technology.
          Whether it’s a lightning-fast static site or a dynamic WordPress CMS,
          ZEROBUG delivers scalable and maintainable solutions. Our team is
          passionate about clean code, responsive design, and intuitive user
          interfaces. Partner with ZEROBUG to bring your online vision to life..
        </p>
      </section>

      {/* Team Members */}
      <section className="bg-white py-16 px-4 w-full">
        <div className="max-w-6xl mx-auto flex flex-col items-center w-full">
          <h2 className="text-2xl sm:text-3xl font-bold mb-12 text-center">
            Core Team
          </h2>
          <div className="flex flex-col gap-4 w-[75%] md:w-[80%]">
            {teamMembers.map((member, index) => {
              return (
                <TeamCard
                  name={member.name}
                  image={member.image}
                  role={member.role}
                  description={member.description}
                  socials={member.socials}
                  cardType={index % 2 == 0 ? 0 : 1}
                  key={member.name + member.role}
                />
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
