import PropTypes from "prop-types";

const Skillblock = ({ children, className = '' }) => {
  return (
    <div className={`flex items-center w-fit border rounded border-[#FBB017] bg-[#FBB017] bg-opacity-60 text-white text-xs font-semibold px-6 h-[28px] mb-1 ${className}`}>
      {children}
    </div>
  );
};

Skillblock.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string 
};

export default Skillblock;
