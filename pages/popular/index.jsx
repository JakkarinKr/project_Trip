import Link from "next/link"
import InfoPage from "../../component/AllPage/AllPage"

export async function getStaticProps() {
    const res = await fetch('http://localhost:3000/api/popular')
    const posts = await res.json()
    return {
        props: {posts,},
    }
}
export default function popular({posts}) {
    return(
        <>
            <InfoPage title='Popular' path='popular' data = {posts} />
        </>
    )
}