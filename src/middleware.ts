import { NextRequest, NextResponse } from 'next/server';
import { Ratelimit } from '@upstash/ratelimit';
import { kv } from '@vercel/kv';


const ratelimit = new Ratelimit({


  redis: kv,
  // 3 requests from the same IP in 1 h
  limiter: Ratelimit.slidingWindow(3,'1 h'),
});



// Define which routes you want to rate limit
export const config = {
  // matcher: '/api/history/:user*',
  matcher: ['/api/history/:user*', '/generate'],

};

export default async function middleware(request: NextRequest) {
  if (request.headers.get('x-middleware-executed')) {
    return NextResponse.next();
  }

    console.log('inside src middleware')
  // You could alternatively limit based on user ID or similar
  const ip = request.ip ? request.ip :   '127.0.0.1';
  // console.log(" ip is", ip);
  const { success, pending, limit, reset, remaining } = await ratelimit.limit(
    ip
  );
  return success
    ? NextResponse.next()
    : NextResponse.redirect(new URL('/blocked',request.url ));
     
}