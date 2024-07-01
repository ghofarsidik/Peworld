import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Unauthorized = () => {
  const navigate = useNavigate();

  useEffect(() => {
    toast.error('Unauthorized Access', {
      onClose: () => navigate('/'),
    });
  }, [navigate]);

  return (
    <div>
      <ToastContainer />
      {/* <div>Unauthorized Access</div> */}
    </div>
  );
};

export default Unauthorized;
