import icompany from "../images/logo/company.svg"

const experienceCard = ({image, position, company, work_month, work_year, description }) => {
  const monthNames = [
    "Januari", "Februari", "Maret", "April", "Mei", "Juni",
    "Juli", "Agustus", "September", "Oktober", "November", "Desember"
  ];

  const monthName = monthNames[work_month - 1]; // Convert month number to month name

  return (
    <div className="flex space-x-6 py-[30px]">
        <img className="w-[74px] h-[74px]" src={image || icompany} alt="" />
        <div>
          <p className="text-xl font-semibold">{position}</p>
          <p className="text-lg">{company}</p>
          <div className="flex space-x-4 text-base text-abu-pj mb-4">
            <p>{monthName} {work_year}</p>
            <div>6 months dummy</div>
          </div>
          <p>
            {description}
          </p>
        </div>
      </div>
  )
}

export default experienceCard