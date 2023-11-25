
"use server"

import { db } from "@/db"
import { redirect } from "next/navigation"

export default async function editBlock(formData: FormData, params:any) {
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