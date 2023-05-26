import { toast, type ToastOptions } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

type toastType = 'error' | 'success' | 'warning' | 'info' | 'general'

export default function showNotification(type: toastType, message: string): void {
  const options: ToastOptions = {
    position: 'bottom-right',
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    theme: 'dark',
  };
  switch (type) {
    case 'error':
      toast.error(message, { ...options });
      break;
    case 'success':
      toast.success(message, { ...options });
      break;
    case 'warning':
      toast.warning(message, { ...options });
      break;
    case 'info':
      toast.info(message, { ...options });
      break;
    default:
      toast(message, { ...options });
  }
}
