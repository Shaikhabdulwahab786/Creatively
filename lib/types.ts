// src/lib/types.ts

export interface User {
    clerkId: string;
    email: string;
    username: string;
    firstName: string;
    lastName: string;
    photo: string;
  }
  
  export interface UpdatedUser {
    firstName?: string;
    lastName?: string;
    username?: string;
    photo?: string;
  }
  export interface UpdateUserParams {
    firstName: string;
    lastName: string;
    username: string;
    photo: string;
  }
  