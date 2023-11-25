
import { db } from "@/db"
import Link from "next/link"
import { redirect } from "next/navigation"
import editBlock from "@/components/editBlock"

export default async function EditBlock({ params }: any) {

    const block = await db.block.findUnique({ where: { id: parseInt(params.id) } })

    async function editBlock(formData: FormData) {
        "use server"
        const title = formData.get("title") as string
        const tag = formData.get("tag") as string
        const code = formData.get("code") as string
        await db.block.update({
            where: { id: parseInt(params.id) },
            data: {
                title: title,
                tag: tag,
                code: code,
            }
        })
        redirect("/")
    }

    return (
        <div>
            <form action={editBlock} className="flex flex-col border rounded border-gray-400 mx-10 my-10 py-10 px-10">
                <h2 className="text-center">Edit Block</h2>
                <label htmlFor="title" className="text-center">Title</label>
                <input type="text" name="title" id="title" placeholder={block?.title} required className="border rounded border-gray-400 px-10 py-1" />
                <label htmlFor="title">Tag</label>
                <input type="text" name="tag" id="tag" placeholder={block?.tag} required className="border rounded border-gray-400 px-10 py-1" />
                <label htmlFor="title">Code</label>
                <textarea name="code" id="code" placeholder={block?.code} required rows={10} cols={10} className="border rounded border-gray-400 px-10 py-1" />
                <button type="submit" className="border rounded bg-sky-500 text-white mx-10 my-2 px-10 py-1">Edit</button>
                <Link href={'/'} className="border rounded bg-slate-300 text-center mx-10 my-2 px-10 py-1">Cancel</Link>
            </form>
        </div>
    )
}