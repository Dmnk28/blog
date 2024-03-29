import ContentfulApi from "@utils/ContentfulApi";
import { Config } from "@utils/Config";
import PostList from "@components/PostList";

export default function BlogIndex(props) {
  const { postSummaries, currentPage, totalPages } = props;
  return (
        <PostList 
            posts={postSummaries} 
            totalPages={totalPages}
            currentPage={currentPage}
        />
    );
}

BlogIndex.defaultProps = {
  postSummaries: [],
  totalPages: 0,
  currentPage: 1,
}

export async function getServerSideProps() {  
  const postSummaries = await ContentfulApi.getPaginatedPostSummaries(1);
  const totalPages = Math.ceil(postSummaries.total / Config.pagination.pageSize);

  return {
    props: {
      postSummaries: postSummaries.items,
      totalPages,
      currentPage: "1",
    },
  };
}