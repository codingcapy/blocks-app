import { db } from "@/db";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function BlockShowPage({ params }: any) {

    const block = await db.block.findUnique({ where: { id: parseInt(params.id) } })

    async function createBlock(formData: FormData) {
        "use server"
        await db.block.delete({ where: { id: parseInt(params.id) } })
        redirect("/")
    }

    return (
        <div>
            <div className="my-2">
                <h1 className='text-4xl my-10'>{block?.title}</h1>
                <h2 className='text-2xl my-2'>Tag</h2>
                <p className="border rounded border-gray-400 px-10 py-1">{block?.tag}</p>
                <h2 className='text-2xl my-2'>Code</h2>
                <p className="border rounded border-gray-400 px-10 py-1">{block?.code}</p>
            </div>
            <Link href={`/blocks/edit/${block?.id}`} className="border rounded bg-slate-300 text-center mx-10 my-2 px-10 py-1">Edit</Link>
            <form action={createBlock}>
            <button type="submit" className="border rounded bg-slate-300 text-center mx-10 my-2 px-10 py-1">Delete</button>
            </form>
            <Link href={"/"} className="border rounded bg-slate-300 text-center mx-10 my-2 px-10 py-1">Return</Link>
        </div>
    )
}