import PropTypes from "prop-types";
// import api from "../../configs/api";


const Skillblock = ({ children, className = '', skill_id, handleDelete }) => {

  return (
    <div className={`flex items-center w-fit border rounded border-[#FBB017] bg-[#FBB017] bg-opacity-60 text-white text-xs font-semibold pl-6 ${!handleDelete ? "pr-6" : "pr-2"} h-[28px] mb-1 ${className}`}>
      {children} {!handleDelete ? null : <button onClick={() => handleDelete(skill_id)} className="ml-5 text-red-700"> x </button>}
    </div>
  );
};

Skillblock.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  handleDelete: PropTypes.string,
  skill_id: PropTypes.any
};

export default Skillblock;
