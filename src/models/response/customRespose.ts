

interface IBodyResponse
{
    msg:string;
    code:number;
    data:any;
};


interface IGetBody
{
    Body(msg:string, code: number, data: any):object;
}

export class CustomResponse implements IGetBody
{
    // Body(msg: string, code: number, data: any): IBodyResponse {
    //     throw new Error("Method not implemented.");
    // }
    Body(msg: string, code: number, data: any): IBodyResponse {
        return {"msg": msg, "code":code, "data":data}
    }
    
}