/* eslint-disable react/prop-types */
import { ClipLoader } from 'react-spinners'

const Loading = ({loading}) => {
  return (
    <>
    <div className="flex justify-center items-center h-screen">
        <ClipLoader size={50} color={"#123abc"} loading={loading} />
      </div>
    </>
  )
}

export default Loading