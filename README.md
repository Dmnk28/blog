# Code Ride Repeat - A small little Blog
### ... mainly build to learn coding ;) 

## Stack
- Contentful
- Next.js
- Material UI
- Sass

## Where It started
Because it was my first Next.js-project and I never used Contentful before I simply started with a tutorial for a [paginated BlogPostlist by Salma Alma-Naylor](https://www.contentful.com/blog/2021/04/23/paginating-contentful-blogposts-with-nextjs-graphql-api/). This helped me a lot!
From there on it's my own design, thinking and style of implementation. 

## ToDos
- Long Cards for BlogList (Horizontal Carrousel??!)
- normal Cards for normal Blogpost-Overviews mybe combining it with masonry
- Blogpost-Page 
- Some Kind of Carrousel/Slider for recent Blogposts
- Images
- Responsive Menu
- Theme and Palette! 

## What I learned
- Using an (Contentful) API.
- Not to use an personal API-Key in Frontend.
    - in react `.env-File + REACT_APP_[Your Const Name]` is a solution, but dangerous (it's a Frontend App)
    - idealy pas the API-Requests with personal Keys to a backendapp and run them on the server
- that ServerSideRendering is a cool thing to do, especially for pushing SEO and Performance.
- how the built in next-routing works.
- to host a Next-App on vercel.com
- Comining MUI with Next (Problems with Link-Modules avoided)
- Launching an Next.js-App with [vercel](https://vercel.com) is my option (because I dont't have any server, only a hosting package and a bunch of domains)

### What works but I didn't figure out why
- In the blog/index.js file the getStaticProps function wasn't called. So I found an stackoverflow-entry suggesting to use .defaultProps for defining (any) prop first. I tryed that, after spending an hour declaring "that can't be the solution". Then the getStaticProps was executed. I need to know what the problem was and other whether solutions exist.

