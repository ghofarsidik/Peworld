import noPortofolio from "../images/logo/noPortofolio.svg";

// eslint-disable-next-line react/prop-types
const PortofolioCard = ({ image, name }) => {
  return (
    <div className="flex flex-col space-y-2 items-center text-[14px] mb-5">
      <img className="w-[219px] h-[148px] shadow-md object-cover object-center" src={image || noPortofolio} alt={name} />
      <p>{name}</p>
    </div>
  );
};

export default PortofolioCard;
