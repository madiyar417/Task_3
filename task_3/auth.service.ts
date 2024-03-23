import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './create-user.dto';
import { LoginUserDto } from './login-user.dto';
import { User } from './user.interface';
import { AuthService } from './auth.service'; 

@Injectable()
export class AuthService {
  private users: User[] = []; 

  async register(createUserDto: CreateUserDto): Promise<User> {
  }

  async login(loginUserDto: LoginUserDto): Promise<{ access_token: string }> {
  }

  async getProfile(userId: string): Promise<User> {
  }

  async updateProfile(userId: string, updateUserDto: CreateUserDto): Promise<User> {
  }

  async deleteProfile(userId: string): Promise<{ message: string }> {
  }
}
