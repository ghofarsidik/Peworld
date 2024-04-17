import PropTypes from 'prop-types'

function Button({ label, className, onClick }) {
    return (
        <button className={`${className} text-white bg-[#FBB017] rounded h-[50px] mt-[24px] `} onClick={onClick} >{label}</button>
    )
}

Button.propTypes = {
    label: PropTypes.string.isRequired, // Label harus bertipe string dan wajib ada
    className: PropTypes.string,
    onClick: PropTypes.func,
};

export default Button