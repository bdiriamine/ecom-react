import { toast } from 'react-toastify';
import { SHOW_SUCCESS_TOAST, SHOW_ERROR_TOAST  } from '../action/toastActions';


const toastMiddleware = store => next => action => {
  switch (action.type) {
    case SHOW_SUCCESS_TOAST:
      toast.success(action.payload);
      break;
    case SHOW_ERROR_TOAST:
      toast.error(action.payload);
      break;
    default:
      break;
  }

  return next(action);
};

export default toastMiddleware;