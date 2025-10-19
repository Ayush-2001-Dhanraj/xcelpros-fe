import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const protectedRoutes = ["/home"];
const authPages = ["/login", "/register"];

export function middleware(req: NextRequest) {
    const url = req.nextUrl.clone();
    const token = req.cookies.get("accessToken");

    const isProtected = protectedRoutes.some((path) => url.pathname.startsWith(path));
    const isAuthPage = authPages.some((path) => url.pathname.startsWith(path));

    if (isProtected && !token) {
        url.pathname = "/login";
        return NextResponse.redirect(url);
    }
    if (isAuthPage && token) {
        url.pathname = "/home";
        return NextResponse.redirect(url);
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/login", "/register", "/home"],
};
