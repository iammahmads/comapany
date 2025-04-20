import { RiLinkedinFill } from "react-icons/ri";

// 0 for image on left
// 1 for image on right

const TeamCard = ({
  image,
  name,
  role,
  description,
  socials,
  cardType = 0,
}) => {
  return (
    <div className="w-full sm:w-11/12 md:w-3/4 mx-auto bg-white rounded-2xl shadow-lg flex flex-col md:flex-row overflow-hidden">
      {cardType == 0 && (
        <div className="md:w-1/2 w-full">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover object-center"
          />
        </div>
      )}

      {/* Right - Content */}
      <div
        className={`md:w-1/2 w-full p-6 flex flex-col justify-start bg-yellow-400`}
      >
        <h2 className="text-2xl font-bold text-black mb-2">{name}</h2>
        <h4 className="text-blue-600 font-medium text-sm mb-4 uppercase tracking-wide">
          {role}
        </h4>
        <p className="text-gray-600 text-sm mb-4 leading-relaxed">
          {description}
        </p>
        <div className="flex flex-col mt-1">
          <h4>Socials</h4>
          <div className="flex gap-4 mt-1">
            {socials.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 transition-colors"
              >
                <social.icon className="text-2xl hover:scale-110 transition-all ease-linear" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {cardType != 0 && (
        <div className="md:w-1/2 w-full">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover object-center"
          />
        </div>
      )}
    </div>
  );
};

export default TeamCard;
