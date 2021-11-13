import ContentfulApi from "@utils/ContentfulApi";
import PostOverview from "@components/PostOverview";

export default function TagOverview(props) {
    const {posts} = props;
    return (
        <PostOverview 
            posts={posts}    
        />
    )
}
 
TagOverview.defaultProps = {
    posts: [],
}

export async function getStaticProps() {
    const tag = "Code"
    const postPreviews = await ContentfulApi.getLatestPosts(tag);

    return {
        props: {
            posts: postPreviews.items,
        }
    }
}