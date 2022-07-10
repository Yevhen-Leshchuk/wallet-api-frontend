import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import s from './notification.module.scss';

function errorMessage(message) {
  return toast.error(message, {
    position: 'top-right',
    autoClose: 4000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'colored',
    className: `${s.successMessage}`,
  });
}
function successMessage(message) {
  return toast.success(message, {
    position: 'top-right',
    autoClose: 4000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'colored',
    className: `${s.successMessage}`,
  });
}

export { errorMessage, successMessage };
