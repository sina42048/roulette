export interface User {
    id: number;
    email: string;
    username: string;
    token?: string;
    fund: number;
    updatedAt: string;
    createdAt: string;
}

export interface RegisterResponse {
    token: string;
    user: User;
}