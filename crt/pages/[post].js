import ContentfulApi from "@utils/ContentfulApi";
import Post from "@components/Post";

export default function PostPage(props) {
    const { post } = props;

    return (
        <Post post={post} />
    );
}

export async function getStaticPaths() {
    
    const allPosts  =   await ContentfulApi.getAllSlugs();
    const paths     =   [];

    for (let i = 0; i < allPosts.length; i++) {
        paths.push( {params: { post: allPosts[i].slug.toString(), }} );
    }
    
    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({params}) {
    
    const post = await ContentfulApi.getSinglePost(params.post);
    
    return {
        props: {
            post: post,
        },
    };
}