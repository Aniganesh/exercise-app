export interface LoginValues {
  email: string;
  password: string;
}

export interface SignupValues {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
}
