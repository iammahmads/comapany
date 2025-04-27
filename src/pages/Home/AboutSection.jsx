import CustomLink from "../../components/CustomLink"

const AboutSection = () => {
  return (
    <section className="bg-white py-14 px-4 sm:px-8 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">
          About Us
        </h2>
        <p className="text-base sm:text-lg  mb-10 leading-relaxed">
          At <span className="font-semibold text-blue-600">ZERO BUG</span>, we
          design and develop innovative web solutions to help businesses grow
          and succeed in the digital world. From idea to launch, our team
          delivers seamless, scalable, and beautiful digital products.
        </p>
        <div className="grid gap-8 md:grid-cols-2 text-left">
          <div>
            <h3 className="text-xl font-semibold mb-3">
              What We Do
            </h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Custom Website Development</li>
              <li>Figma to Website</li>
              <li>Business websites</li>
              <li>Responsive Design</li>
              <li>SEO & Speed Optimization</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-3">
              Our Mission
            </h3>
            <p className="leading-relaxed">
              We aim to transform ideas into meaningful digital experiences. By
              blending creativity with cutting-edge tech, we help brands stand
              out and succeed in the competitive online space. Quality,
              transparency, and client success are at the heart of everything we
              do.
            </p>
            <CustomLink to={"/about"}>Learn more</CustomLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
