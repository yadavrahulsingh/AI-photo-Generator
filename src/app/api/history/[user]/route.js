import { kv } from '@vercel/kv';
import { NextResponse , NextRequest } from 'next/server';
import { nanoid } from 'nanoid';
 
export async function GET( NextRequest , context) {
  try {
    const emailId = context.params.user; 
   // const user = await kv.hgetall(emailId); 
    const history = await kv.lrange(emailId, 0, -1);
    //console.log(history) ; 
    return NextResponse.json({status:"ok" ,  history});``
  } catch (error) {
    console.log("errror in get history" , error) ; 
    return NextResponse.json({status :"error", data:error.message}) ; 
  }
}

export async function POST( NextRequest , context) {
    try {
      const {prompt} = await NextRequest.json();
      const emailId = context.params.user ;
      let history =  await kv.lpush(
        emailId,
        prompt
      );
      history = await kv.lrange(emailId, 0, -1);
        return NextResponse.json({status :"ok", message:"prompt has been saved"
            , history
        }) ; 
      } catch (error) {
        // Handle errors
        console.log("errror in post " , error) ; 
        return NextResponse.json({status :"error", data:error.message}) ; 
      }
  }