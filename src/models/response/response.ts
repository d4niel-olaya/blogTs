

export class ResponseError extends Error
{
    public nombre:string
    public code:number
    constructor(nombre:string, code:number) {
        super(nombre);
        this.nombre = nombre;
        if(Error.captureStackTrace) {
            Error.captureStackTrace(this,ResponseError);
        }

        this.name = 'ResponseError';
        this.message = this.nombre;
        this.code = code;
    }


}

