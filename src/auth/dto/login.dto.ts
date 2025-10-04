import { Role } from "src/users/Roles/enum.roles";

export default class LoginDto {
  email: string;
  password: string;
}
export  class RegisterDto {
    email: string;
    password: string;
    role?: Role; // opcional si quieres permitir setearlo
  }