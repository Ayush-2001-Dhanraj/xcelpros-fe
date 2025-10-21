import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "https://xcelpros-be.onrender.com";


const protectedRoutes = ["/home"];
const authPages = ["/login", "/register"];

export async function middleware(req: NextRequest) {
    const url = req.nextUrl.clone();

    const isProtected = protectedRoutes.some((path) => url.pathname.startsWith(path));
    const isAuthPage = authPages.some((path) => url.pathname.startsWith(path));

    const verifyRes = await fetch(`${API_URL}/auth/verify`, {
        headers: { cookie: req.headers.get("cookie") || "" },
        credentials: "include",
    });

    const isAuthenticated = verifyRes.ok;

    if (isProtected && !isAuthenticated) {
        url.pathname = "/login";
        return NextResponse.redirect(url);
    }
    if (isAuthPage && isAuthenticated) {
        url.pathname = "/home";
        return NextResponse.redirect(url);
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/login", "/register", "/home"],
};
