
export interface User {
    userId: String;
    username: string;     // The user's username (required)
    email: string;        // The user's email (required)
    password: string;     // The user's password (required)
    age?: number;         // The user's age (optional)
    createdAt?: Date;     // Timestamp of when the user was created (optional)
    updatedAt?: Date;     // Timestamp of when the user was last updated (optional)
  }
  