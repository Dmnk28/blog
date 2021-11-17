import { Config } from "@utils/Config";

export default class ContentfulApi {
    
  // Standard API Call for Contentfull: Get all Data fitting the passed querys (given in the functions below) and return it
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

  /* Getting Total Number of Posts, Needed to Calculate Number of Pages in PostList */
  
  static async getTotalPostsNumber() {
    const query = `
      {
        blogPostCollection {
          total
        }
      }
    `;
        
    const response = await this.callContentful(query);
    const totalPosts = response.data.blogPostCollection.total ? response.data.blogPostCollection.total : 0;

    return totalPosts;
  }

  /* Getting the PostSummaries for the current Page (Number of Items ruled by pagenumber (--> skip) and Posts per Page (--> limit)  */

  static async getPaginatedPostSummaries(page) {
    const skipMultiplier = page === 1 ? 0 : page - 1;
    const skip = skipMultiplier > 0 ? Config.pagination.pageSize * skipMultiplier : 0;

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

    
    const response = await this.callContentful(query);
    const paginatedPostSummaries = response.data.blogPostCollection ? response.data.blogPostCollection : { total: 0, items: [] };

    return paginatedPostSummaries;
  }


  /* Getting the Latest Posts Belonging to a Specific Tag */
  
  static async getLatestPostsFilteredByTag(tagToFetch) {
    
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


  /* Generating Blogpost-Routes and -Pages */

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