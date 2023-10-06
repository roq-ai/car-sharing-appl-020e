import queryString from 'query-string';
import { MaintenanceInterface, MaintenanceGetQueryInterface } from 'interfaces/maintenance';
import { fetcher } from 'lib/api-fetcher';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getMaintenances = async (
  query?: MaintenanceGetQueryInterface,
): Promise<PaginatedInterface<MaintenanceInterface>> => {
  return fetcher('/api/maintenances', {}, query);
};

export const createMaintenance = async (maintenance: MaintenanceInterface) => {
  return fetcher('/api/maintenances', { method: 'POST', body: JSON.stringify(maintenance) });
};

export const updateMaintenanceById = async (id: string, maintenance: MaintenanceInterface) => {
  return fetcher(`/api/maintenances/${id}`, { method: 'PUT', body: JSON.stringify(maintenance) });
};

export const getMaintenanceById = async (id: string, query?: GetQueryInterface) => {
  return fetcher(`/api/maintenances/${id}${query ? `?${queryString.stringify(query)}` : ''}`, {});
};

export const deleteMaintenanceById = async (id: string) => {
  return fetcher(`/api/maintenances/${id}`, { method: 'DELETE' });
};
