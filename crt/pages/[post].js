import ContentfulApi from "@utils/ContentfulApi";
import Post from "@components/Post";

export default function PostPage(props) {
    const { postContent } = props;

    return (
        <Post post={postContent} />
    );
}

export async function getServerSideProps({params}) {
    const postContent = await ContentfulApi.getSinglePost(params.post);
    return {
        props: {
            postContent: postContent,
        },
    };
}

// export async function getStaticPaths() {
//     const allPosts  =   await ContentfulApi.getAllSlugs();
//     const paths     =   [];
//     for (let i = 0; i < allPosts.length; i++) {
//         paths.push( {params: { post: allPosts[i].slug, }} );
//     }
//     return {
//         paths,
//         fallback: false,
//     };
// }

// export async function getStaticProps({params}) {
//     const postContent = await ContentfulApi.getSinglePost(params.post);
//     return {
//         props: {
//             postContent: postContent,
//         },
//     };
// }