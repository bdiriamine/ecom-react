export const SHOW_SUCCESS_TOAST = 'SHOW_SUCCESS_TOAST';
export const SHOW_ERROR_TOAST = 'SHOW_ERROR_TOAST';

export const showSuccessToast = (message) => ({
  type: SHOW_SUCCESS_TOAST,
  payload: message,
});

export const showErrorToast = (message) => ({
  type: SHOW_ERROR_TOAST,
  payload: message,
});