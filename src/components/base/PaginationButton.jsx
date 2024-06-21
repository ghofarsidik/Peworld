// eslint-disable-next-line react/prop-types
const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    const pageNumbers = [];

    if (totalPages <= 7) {
        // Jika total halaman kurang atau sama dengan 5, tampilkan semua halaman
        for (let i = 1; i <= totalPages; i++) {
            pageNumbers.push(i);
        }
    } else {
        // Jika halaman saat ini di posisi awal
        if (currentPage <= 5) {
            pageNumbers.push(1, 2, 3, 4, 5, 6, 7, '...', totalPages);
        }
        // Jika halaman saat ini di posisi akhir
        else if (currentPage >= totalPages - 2) {
            pageNumbers.push(1, '...', totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
        }
        // Jika halaman saat ini di posisi tengah
        else {
            pageNumbers.push(1, '...',currentPage - 2 , currentPage - 1, currentPage, currentPage + 1, currentPage + 2,  '...', totalPages);
        }
    }

    return (
        <div className="mt-12 max-w-[1140px] mx-auto flex space-x-[14px] items-center justify-center">
            <button 
                onClick={() => onPageChange(currentPage - 1)} 
                className="w-[58px] h-[58px] text-abu-pj bg-white border border-abu-pj border-opacity-30 rounded flex items-center justify-center text-lg font-bold"
                disabled={currentPage === 1}
            >
                &lt;
            </button>
            {pageNumbers.map((number, index) => (
                <button
                    key={index}
                    onClick={() => number !== '...' && onPageChange(number)}
                    className={`w-[58px] h-[58px] ${currentPage === number ? 'text-white bg-ungu-pj' : 'text-abu-pj bg-white'} border border-abu-pj rounded flex items-center justify-center text-lg font-bold`}
                    disabled={number === '...'}
                >
                    {number}
                </button>
            ))}
            <button 
                onClick={() => onPageChange(currentPage + 1)} 
                className="w-[58px] h-[58px] text-abu-pj bg-white border border-abu-pj border-opacity-30 rounded flex items-center justify-center text-lg font-bold"
                disabled={currentPage === totalPages}
            >
                &gt;
            </button>
        </div>
    );
};

export default Pagination