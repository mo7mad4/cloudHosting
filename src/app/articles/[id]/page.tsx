import { Article } from "@/utils/types";

interface SingleArticlePageProps {
    params: { id : string }

}
const SingleArticlePage = async ({params}: SingleArticlePageProps) => {
//   console.log(props)
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
    const artical:Article = await response.json();
    if (!response.ok) {
        throw new Error("Failed to fetch articles")
    }
    return (
    <section className="fix-height container m-auto w-full px-5 pt-8 md:w-3/4">
        <div className="bg-white p-7 rounded-lg">
            <h1 className="text-3xl font-bold text-gray-700 md-2">{artical.title}</h1>
            <div className="text-gray-400">1/1/2024</div>
            <p className="text-gray-800 text-xl mt-5 ">{artical.body}</p>
        </div>
    </section>
  )
}

export default SingleArticlePage