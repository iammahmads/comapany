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
    <div className=" w-full sm:w-11/12 md:w-3/4 mx-auto flex flex-col md:flex-row overflow-hidden py-4 border-t-2 border-yellow-600 ">
      {cardType == 0 && (
        <div className="md:w-1/3 w-full h-min flex justify-center">
          <img
            src={image}
            alt={name}
            className="w-[240px] h-[300px] object-cover object-center rounded-full border-2 border-yellow-500"
          />
        </div>
      )}

      {cardType != 0 && (
        <div className="md:w-1/3 w-full md:hidden flex justify-cente">
          <img
            src={image}
            alt={name}
            className="w-[240px] h-[300px] object-cover object-center rounded-full border border-yellow-500"
          />
        </div>
      )}
      {/* Right - Content */}
      <div
        className={`md:w-2/3 w-full p-6 flex flex-col justify-start relative`}
      >
        <h2 className="text-2xl font-bold mb-2">{name}</h2>
        <h4 className="font-medium text-sm mb-4 uppercase tracking-wide">
          {role}
        </h4>
        <p className="text-yellow-500 text-sm mb-4 leading-relaxed">
          {description}
        </p>
        <div className="flex flex-col mt-1 ">
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
        <div className="md:w-1/3 w-full hidden md:flex md:justify-cente">
          <img
            src={image}
            alt={name}
            className="w-[240px] h-[300px] object-cover object-center rounded-full border-2 border-yellow-500"
          />
        </div>
      )}
    </div>
  );
};

export default TeamCard;
