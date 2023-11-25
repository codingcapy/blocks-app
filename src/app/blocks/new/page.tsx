import { db } from "@/db";
import Link from "next/link";
import { redirect } from "next/navigation";


export default function CreateBlockPage() {

    async function createBlock(formData: FormData) {
        "use server"
        const title = formData.get("title") as string
        const tag = formData.get("tag") as string
        const code = formData.get("code") as string

        await db.block.create({ data: { title, tag, code } })
        redirect("/")
    }

    return (
        <div>

            <form action={createBlock} className="flex flex-col border rounded border-gray-400 mx-10 my-10 py-10 px-10">
                <h2 className="text-center">Create A Block</h2>
                <label htmlFor="title" className="">Title</label>
                <input type="text" name="title" id="title" placeholder="Title" required className="border rounded border-gray-400 px-10 py-1" />
                <label htmlFor="title">Tag</label>
                <input type="text" name="tag" id="tag" placeholder="Tag" required className="border rounded border-gray-400 px-10 py-1" />
                <label htmlFor="title">Code</label>
                <textarea name="code" id="code" placeholder="//Code" required rows={10} cols={10} className="border rounded border-gray-400 px-10 py-1" />
                <button type="submit" className="border rounded bg-sky-500 text-white mx-10 my-2 px-10 py-1">Submit</button>
                <Link href={'/'} className="border rounded bg-slate-300 text-center mx-10 my-2 px-10 py-1">Cancel</Link>
            </form>

        </div>
    )
}