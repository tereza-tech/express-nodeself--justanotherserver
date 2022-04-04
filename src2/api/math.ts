//export count()const random = Math.random();
import express, { Express} from "express";


export type RESTResponse<T> = {
    ok: true,
    data: T
} | {
    ok: false,
    error: string
}


type callbackRequest<K,T> = 
    (body:K, headers:{[key:string]:string|string[]}, url:string)=>
         Promise<T>;

export const RESTPost = <K,T>(
    path:string|string[], server:Express,  callback:callbackRequest<K,T>) => {
    server.post(path, async (req,resp)=> {

        let resultStatus = 200;
        let RESTResponse : RESTResponse<T> = {ok:false,error:"Init"};
        try {
            const result = await callback(req.body, req.headers, req.url);
            RESTResponse = {ok: true, data: result};
        } catch (error) {
            RESTResponse = {ok: false, error: `${error}`};
        }
        resp.status(resultStatus).send(RESTResponse);
    })
}
/*
export default Result = <K,T>count(
    path:string|string[], server:Express,  callback:callbackRequest<K,T>) => {
    server.post(path, async (req,resp)=> {

       
        resp.status(resultStatus).send(RESTResponse);
    })
}


export default byline(readStream, options?: any) => {
    return module.exports.createStream(readStream, options)
  }


export count: <T>(collection: T[], iteratee: (value: T) => string) => Dictionary<T> = (collection, iteratee) => {
    return collection.reduce<any>((acc, curr) => {
      acc[iteratee(curr)] = curr
      return acc
    }, {})
  }*/