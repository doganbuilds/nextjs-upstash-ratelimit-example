import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis"
import { NextRequest, NextResponse } from 'next/server';


const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(3, "10 s"),
  prefix: "nextjs-upstash-rate-limiting-example"
});


export async function GET(req: NextRequest) {
  const clientIP = req.ip;
  const { success, limit, remaining, reset } = await ratelimit.limit(clientIP!);
  const reset_datetime = new Date(reset);

  if (!success) {
    return NextResponse.json({ error: "Rate limit exceeded", reset_timestamp: reset, reset_datetime }, { status: 429 });
  }

  return NextResponse.json({ message: "Hello, World!", limit, remaining, reset_timestamp: reset, reset_datetime }, { status: 200 });
}