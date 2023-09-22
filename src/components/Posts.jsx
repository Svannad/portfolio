import parse from "html-react-parser"

export default function Posts({post}) {
    return (
        <article className="article">
            <h2>{parse(post.title.rendered)}</h2>
            <div className="content">{parse(post.content.rendered)}</div>
        </article>
    )
}