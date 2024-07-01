import Skeleton from 'react-loading-skeleton';

const CardSkeleton = () => (
    <div className="bg-white h-56 flex items-center border  p-4">
        <div className="h-[100px] w-[100px] mx-5">
            <Skeleton circle={true} height={100} width={100} />
        </div>
        <div className="leading-8 flex-grow">
            <Skeleton width={`60%`} height={22} />
            <Skeleton width={`40%`} height={14} style={{ marginTop: 8 }} />
            <Skeleton width={`50%`} height={14} style={{ marginTop: 8 }} />
            <div className="flex space-x-3 flex-wrap mt-2">
                <Skeleton width={80} height={30} />
                <Skeleton width={80} height={30} />
                <Skeleton width={80} height={30} />
            </div>
        </div>
        <div className="border rounded bg-gray-300 text-white p-5 w-[148px] h-14 mr-20 flex items-center justify-center">
            <Skeleton width={100} height={20} />
        </div>
    </div>
);

export default CardSkeleton