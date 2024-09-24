import mongoose from 'mongoose';
import connectToDB from '@/_lib/mongodb'
import Todo from '@/_model/Todo'
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        await connectToDB()
        const {title, todo} = await req.json()
        await Todo.create({title, todo})
        return NextResponse.json({message: 'todo created'}, {status: 200})
    } catch(err) {
        console.log(err)
        return NextResponse.json({message: "error creating todo"}, {status: 500})
    }
}

export async function GET() {
    try {
        await connectToDB()
        const todos = await Todo.find({})
        return NextResponse.json({todos}, {status: 200})
    } catch(err) {
        return NextResponse.json({message: 'error getting todos'}, {status: 500})
    }
}

export async function DELETE(req) {
    try{
        const id = req.nextUrl.searchParams.get('id')
        await connectToDB()
        await Todo.findByIdAndDelete(id)
        return NextResponse.json({message: "todo deleted"}, {status: 200})
    } catch(err) {
        return NextResponse.json({message: 'error deleting todo'}, {status: 500})
    }
}