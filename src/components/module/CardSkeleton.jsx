import Skeleton from 'react-loading-skeleton';

const CardSkeleton = () => (
  <div className="bg-white h-auto md:h-56 flex flex-col md:flex-row items-center border p-4 md:p-0">
    <div className="flex-shrink-0">
      <Skeleton circle={true} height={100} width={100} className="h-[100px] w-[100px] md:mx-5 object-cover" />
    </div>
    <div className="leading-8 flex-grow text-center md:text-left mt-4 md:mt-0">
      <Skeleton width={`60%`} height={22} className="mb-2" />
      <Skeleton width={`40%`} height={14} className="mb-2" />
      <div className="text-[14px] text-abu-pj flex items-center justify-center md:justify-start mb-2">
        <Skeleton width={20} height={20} className="mr-2" />
        <Skeleton width={`50%`} height={14} />
      </div>
      <div className="flex space-x-3 flex-wrap justify-center md:justify-start">
        <Skeleton width={80} height={30} />
        <Skeleton width={80} height={30} />
        <Skeleton width={80} height={30} />
      </div>
    </div>
    <div className="border rounded bg-gray-300 text-white p-5 w-full md:w-[148px] h-14 mt-4 md:mt-0 md:mr-20 flex items-center justify-center">
      <Skeleton width={100} height={20} />
    </div>
  </div>
);

export default CardSkeleton;
