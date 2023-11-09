export interface IAuth{
    success: string,
    token_type: string,
    userId: number,
}
export interface IAuthLogin{
    email: string,
    password: string,
}

export interface IAuthRegister{
    email: string,
    
}