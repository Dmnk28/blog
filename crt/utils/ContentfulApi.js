
export default class ContentfulApi {
    
  // Get all Data fitting the passed query and return it
  static async callContentful(query) {
    const fetchUrl = `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`;
  
    const fetchOptions = {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.CONTENTFUL_DELIVERY_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query }),
    };
  
    try {
      const data = await fetch(fetchUrl, fetchOptions).then((response) =>
        response.json(),
      );
      return data;
    } catch (error) {
      throw new Error("Keine Daten von Contentful erhalten! Versuchs mal anders ;-)");
    }
  }

  // BlogQueries
  static async getTotalPostsNumber() {
    // Query getting total sum out of all Blog Posts returns something like {"data": {"blogPostCollection": {"total": 1}}}
    const query = `
      {
        blogPostCollection {
          total
        }
      }
    `;
        
    // API-Call:
    const response = await this.callContentful(query);
    const totalPosts = response.data.blogPostCollection.total ? response.data.blogPostCollection.total : 0;

    return totalPosts;
  }

  static async getPaginatedPostSummaries(page) {
    const skipMultiplier = page === 1 ? 0 : page - 1;
    const skip = skipMultiplier > 0 ? Config.pagination.pageSize * skipMultiplier : 0;

    // Get all blogPost Data
    const query = `{
        blogPostCollection(limit: ${Config.pagination.pageSize}, skip: ${skip}, order: date_DESC) {
          total
          items {
            sys {
              id
            }
            title
            subtitle
            slug
            excerpt
            tags
            publicationDate
            titleImage {
              title
              description
              contentType
              fileName
              size
              url
              width
              height
            }
          }
        }
      }`;

    // Call out to the API
    const response = await this.callContentful(query);

    const paginatedPostSummaries = response.data.blogPostCollection
      ? response.data.blogPostCollection
      : { total: 0, items: [] };

    return paginatedPostSummaries;
  }  

}