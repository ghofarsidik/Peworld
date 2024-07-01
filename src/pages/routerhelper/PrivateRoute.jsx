/* eslint-disable react/prop-types */
import { Navigate } from 'react-router-dom';
import { isAuthenticated, getRole } from '../../utils/auth';

const PrivateRoute = ({ component: Component, role, ...rest }) => {
  return isAuthenticated() ? (
    role.includes(getRole()) ? (
      <Component {...rest} />
    ) : (
      <Navigate to="/unauthorized" />
    )
  ) : (
    <Navigate to="/login" />
  );
};

export default PrivateRoute;
