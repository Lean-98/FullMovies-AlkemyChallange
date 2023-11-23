import * as yup from 'yup'

export const LoginValidationShemas = yup.object().shape({
  email: yup.string().email().required('E-mail is required!'),
  password: yup
    .string()
    .min(5, 'Must be at least 6 characters long!')
    .max(32, 'Cannot contain more than 16 characters!')
    .required('Password is required!'),
})
