import Detail from "../../component/Detail/Detial"

export async function getStaticPaths() {
    const res = await fetch('http://localhost:3000/api/popular')
    const posts = await res.json()
    const paths = posts.map((post) => ({
        params: { id: post.id.toString()},
    }))
    return { paths, fallback: false }
}
export async function getStaticProps({ params }) {
    const res = await fetch(`http://localhost:3000/api/popular/${params.id}`)
    const populars = await res.json()
    return { 
        props: { populars } 
    }
}
export default function Post({ populars }) {
    return(
        <>
            <Detail data = {populars[0]}/>
        </>
    )
}