import { db } from '@/db'
import Image from 'next/image'
import Link from 'next/link'

export default async function Home() {

  const blocks = await db.block.findMany()

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className='flex flex-col text-center'>
        <h1 className='text-4xl my-10'>Home Page</h1>
        <Link href={'/blocks/new'} className='border rounded bg-sky-500 text-white mx-10 my-2 px-10 py-3'>Create New</Link>
        {blocks.map((block) => <Link key={block.id} href={`/blocks/${block.id}`} className="border rounded border-gray-400 text-left my-2 px-10 py-3">{block.title}</Link>)}
      </div>
    </main>
  )
}
