import { NextResponse } from 'next/server';
import db from '@/db';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';

export async function POST(request: Request) {
  try {
    const { username, email, password } = await request.json();

    // TODO: Hash password
    await db.user.create({
      data: {
        email,
        username,
        passwordHash: password,
      },
    });
    return NextResponse.json({ message: 'Account created sucessfully' }, {status: 201});
  } catch (e) {
    if (e instanceof PrismaClientKnownRequestError) {
      return NextResponse.json(
        { error: 'Email already taken.' },
        { status: 400 },
      );
    }
    return NextResponse.json(
      { error: 'Failed to parse JSON input' },
      { status: 400 },
    );
  }
}
