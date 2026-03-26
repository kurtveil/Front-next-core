export interface LoginDto {
    email: string;
    password: string;
}

export interface RegisterDto {
    name: string;
    email: string;
    password: string;
    message?: string;
    error?: string;
    statusCode?: number;

}

export interface AuthResponse {
    access_token: string;
    status: number;
    message: string;
    options: any;
    name: string;
}