import { BookingInterface } from 'interfaces/booking';
import { MaintenanceInterface } from 'interfaces/maintenance';
import { ReviewInterface } from 'interfaces/review';
import { CompanyInterface } from 'interfaces/company';
import { GetQueryInterface } from 'interfaces';

export interface CarInterface {
  id?: string;
  model: string;
  manufacturer: string;
  year_of_manufacture: number;
  color: string;
  registration_number: string;
  company_id: string;
  availability_status: boolean;
  created_at?: any;
  updated_at?: any;
  booking?: BookingInterface[];
  maintenance?: MaintenanceInterface[];
  review?: ReviewInterface[];
  company?: CompanyInterface;
  _count?: {
    booking?: number;
    maintenance?: number;
    review?: number;
  };
}

export interface CarGetQueryInterface extends GetQueryInterface {
  id?: string;
  model?: string;
  manufacturer?: string;
  color?: string;
  registration_number?: string;
  company_id?: string;
}
