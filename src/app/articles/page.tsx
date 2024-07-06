import Link from 'next/link';
import React from 'react'

type Article = {
  id: number;
  userId: number;
  title: string;
  body: string;

}
const ArticlesPage = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts")
  const data: Article[] = await response.json()
  return (
    <section className='container m-auto px-5 '>
      {/* 14:26 / 24:17 */}
      {data.map(item =>
        <div 
        className="p-5 rounded-lg my-1 shadow-lg border-2 border-gray-400 hover:bg-slate-200 w-full md:w-2/5 lg:w-1/4" 
        key={item.id}>
        
          <h3 className="tex">{item.title}</h3>
          <p>{item.body}</p>
          <Link href={`/articles/${item.id}`}>
            Read More
          </Link>
        </div>
      )}
    </section>
  )
}

export default ArticlesPage
