import * as yup from 'yup';

export const carValidationSchema = yup.object().shape({
  model: yup.string().required(),
  manufacturer: yup.string().required(),
  year_of_manufacture: yup.number().integer().required(),
  color: yup.string().required(),
  registration_number: yup.string().required(),
  availability_status: yup.boolean().required(),
  company_id: yup.string().nullable().required(),
});
