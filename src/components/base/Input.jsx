import PropTypes from 'prop-types'

function Input({type, label,divClassName ,inputClassName, labelClassName, ...props}) {
    return (
        <div className={`flex flex-col ${divClassName}`}>
            {label && <label className={`${labelClassName} text-[12px] mt-9 text-[#9EA0A5]`}>{label}</label>}
            <input {...props} type={type} className={`text-[14px] mt-[4px] h-[50px] rounded border border-[#9EA0A5] p-[14px] ${inputClassName}`} />
        </div>
    )
}

Input.propTypes = {
    type: PropTypes.string.isRequired, // Menambahkan validasi untuk properti 'type'
    label: PropTypes.string, // Anda juga dapat menambahkan validasi untuk properti 'label' jika diperlukan
    inputClassName: PropTypes.string,
    labelClassName: PropTypes.string,
    divClassName: PropTypes.string,
  };

export default Input