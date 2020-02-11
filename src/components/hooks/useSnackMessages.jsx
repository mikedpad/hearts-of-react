import { useSnackbar } from 'notistack';

const useSnackMessages = () => {
  const { enqueueSnackbar } = useSnackbar();

  const snackbarMessage = (message, variant) => enqueueSnackbar(message, { variant });

  const msgSuccess = message => snackbarMessage(message, `success`);
  const msgWarning = message => snackbarMessage(message, `warning`);
  const msgError = message => snackbarMessage(message, `error`);

  return {
    msgSuccess,
    msgWarning,
    msgError,
  };
};

export default useSnackMessages;
