import * as yup from 'yup';

export const LoginSchema = yup.object().shape({
    IdInstance: yup.string().required('IdInstance is required'),
    ApiTokenInstance: yup.string().required('ApiTokenInstance is required'),
});
