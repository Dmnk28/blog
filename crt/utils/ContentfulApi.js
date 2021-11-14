import { Config } from "@utils/Config";

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
        blogPostCollection(limit: ${Config.pagination.pageSize}, skip: ${skip}, order: publicationDate_DESC) {
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

    const paginatedPostSummaries = response.data.blogPostCollection ? response.data.blogPostCollection : { total: 0, items: [] };

    return paginatedPostSummaries;
  }
  
  static async getLatestPosts(tagToFetch) {
    
    const query = `{
      blogPostCollection(where: {tags_contains_some: "${tagToFetch}"}, limit: 12, order: publicationDate_DESC) {
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

    const response    = await this.callContentful(query);
    const latestPosts = response.data.blogPostCollection ? response.data.blogPostCollection : { total: 0, items: [] };
    
    return latestPosts;
  }

  static async getAllSlugs() {
    
    const query = ` {
      blogPostCollection {
        items {
          slug
        }
      }
    }`;

    const response = await this.callContentful(query);
    const posts = response.data.blogPostCollection.items ? response.data.blogPostCollection.items : {total: 0, items: []};

    return posts;
  }

  static async getSinglePost(slug) {
    const query = `{
      blogPostCollection(where: { slug: "${slug}" }) {
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
          content
          contentImagesCollection{
            total,
            items {
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
          sources
          downloadablePdf {
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

    const response = await this.callContentful(query);

    const post = response.data.blogPostCollection.items[0] ? response.data.blogPostCollection.items[0] : {};

    return post;
  }
}