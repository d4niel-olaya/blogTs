

export interface IRepository
{
    ValidateUpdate():Error

    ValidateOne(data:any):Error

    ValidateAll():Error

    ValidateDeleted():Error
}