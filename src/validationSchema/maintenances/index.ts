import * as yup from 'yup';

export const maintenanceValidationSchema = yup.object().shape({
  maintenance_date: yup.date().required(),
  description: yup.string().required(),
  cost: yup.number().integer().required(),
  maintenance_status: yup.string().required(),
  car_id: yup.string().nullable().required(),
});
