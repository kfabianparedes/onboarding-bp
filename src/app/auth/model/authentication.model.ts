export interface UserCredentials {
  userId: string;
  username: string;
}

export interface AuthResponse {
  user: UserCredentials;
  access_token: string;
  tokenType: string;
}