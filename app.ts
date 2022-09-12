import { serve } from "https://deno.land/std/http/server.ts";

const app = await Deno.readFile("./pages/index.html");

function handler(req: Request) {
  if (req.url.includes("/user")) {
    const data = {
      name: "Deno",
      version: "1.25.1",
      star: 85172,
      github: "https://github.com/denoland/deno",
    };
    const body = JSON.stringify(data, null, 2);
    return new Response(body, {
      headers: { "content-type": "application/json,charset=utf-8" },
    });
  }
  return new Response(app, {
    headers: { "content-type": "text/html" },
  });
}

serve(handler);
