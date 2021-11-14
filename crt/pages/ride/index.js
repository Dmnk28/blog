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

export async function getServerSideProps() {
    const postPreviews = await ContentfulApi.getLatestPosts("Ride");

    return {
        props: {
            posts: postPreviews.items,
        }
    }
}