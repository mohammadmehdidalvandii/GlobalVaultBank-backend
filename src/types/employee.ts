export interface IEmployee {
    id: string;
  employee_code: string;
  first_name: string;
  last_name: string;
  national_id: string;
  email: string;
  phone: string;
  position: string;
  department: string;
  hire_date: Date;
  status: 'active' | 'inactive' | 'suspended';
  created_at: Date;
  updated_at: Date;
}

export type employeeCreateProps = Omit<IEmployee, "id"|"createdAt" | "updatedAt">;