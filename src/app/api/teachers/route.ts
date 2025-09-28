import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
    const teachers = await prisma.teacher.findMany({
        include: {
            subject: true,
            Class: true,
        },
    });
    return NextResponse.json(teachers);
}