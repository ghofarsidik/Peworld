import icompany from "../images/logo/company.svg"

const experienceCard = ({image, position, company, work_month, work_year, description }) => {
  return (
    <div className="flex space-x-6 py-[30px]">
        <img className="w-[74px] h-[74px]" src={image || icompany} alt="" />
        <div>
          <p className="text-xl font-semibold">{position}</p>
          <p className="text-lg">{company}</p>
          <div className="flex space-x-4 text-base text-abu-pj mb-4">
            <p>{work_month} {work_year}</p>
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