import Todo from "@/_model/Todo";
import connectToDB from "@/_lib/mongodb";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
    try {
        const { id } = params
        await connectToDB()
        const data = await Todo.findById(id)
        return NextResponse.json({data}, {status: 200})
    } catch (err) {
        console.log(err)
        return NextResponse.json({message: 'error getting todo by id'}, {status: 500})
    }
}

export async function PUT(req, { params }) {
    try {
        const {title, todo} = await req.json()
        const doc = {title, todo}
        const { id } = params
        await connectToDB()
        await Todo.findByIdAndUpdate(id, doc)
        return NextResponse.json({doc}, {status: 200})
    } catch(err) {
        console.log(err)
        return NextResponse.json({message: 'error updating todo'}, {status: 500})
    }
}

export async function DELETE(req, {params}) {
    try {
        const { id } = params
        await connectToDB()
        await Todo.findByIdAndDelete(id)
        return NextResponse.json({message: 'deleted todo'}, {status: 200})
    } catch(err) {
        console.log(err)
        throw new Er({message: 'error deleting todo by id'}, {status: 500})
    }
}