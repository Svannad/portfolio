import { useEffect, useState } from "react"
import Posts from "../components/Posts";
import '../css/projekter.css'

export default function Projekter() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        async function getPosts() {
            const url = "https://svannad.dk/wp-json/wp/v2/posts?_embed&categories=5";
            const response = await fetch(url);
            const data = await response.json();
            setPosts(data);
        }
        getPosts()
    }, [])

    return (
        <div className="projekt">
            <h1>Projekter</h1>
            <p>Nedenfor præsenteres eksempler på projekter, <br></br>
                som jeg har realiseret i løbet af min uddannelse.</p>
            <section>
                {posts.map(post => (
                    <Posts key={post.id} post={post}/>
                ))}
            </section>
        </div>
    )
}