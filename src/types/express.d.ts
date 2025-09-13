import {Request , Response  , NextFunction} from 'express';
import { JwtPayload } from 'jsonwebtoken';

export interface Req extends Request{
    user?:string | JwtPayload,
}

// export type Req = Request ;
export type Res = Response;
export type Next = NextFunction;


