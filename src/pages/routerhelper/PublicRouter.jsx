/* eslint-disable react/prop-types */

import { Navigate } from 'react-router-dom';
import { isAuthenticated } from '../../utils/auth';

const PublicRoute = ({ component: Component, restricted, ...rest }) => {
  return isAuthenticated() && restricted ? (
    <Navigate to="/" />
  ) : (
    <Component {...rest} />
  );
};

export default PublicRoute;
