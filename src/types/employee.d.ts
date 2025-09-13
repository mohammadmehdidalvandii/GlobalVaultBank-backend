export interface IEmployee {
    id: string;
  employee_code: string;
  first_name: string;
  last_name: string;
  national_id: string;
  email: string;
  password:string;
  phone: string;
  position: string;
  department: string;
  hire_data: Date;
  status: 'active' | 'inactive' | 'suspended';
  created_at: Date;
  updated_at: Date;
}

export type employeeCreateProps = Omit<IEmployee, "id"|"created_at" | "updated_at">;