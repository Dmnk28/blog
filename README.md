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
- Better coloring in Theme and Palette! 

## What I learned
### in general:
- Using an API and fetching data with GraphQL.
- Not to use an personal API-Key in Frontend.
    - in react `.env-File + REACT_APP_[Your Const Name]` is a solution, but dangerous (it's a Frontend App)
    - idealy pas the API-Requests with personal Keys to a backendapp and run them on the server
- that ServerSideRendering is a cool thing to do, especially for pushing SEO and Performance.

### Next.js
- first of all: Using it
- how the built in routing works
- using the the Next link component in a Next app might seem logical, AND if you don't the App will be loaded freshly on the given href [setting back components state and so on]
- launching an Next.js-App with [vercel](https://vercel.com). It was my favorite (because I dont't have any server, only a hosting package and a bunch of domains)
- use getStaticProps wherever possible (Blogposts, simple static sites, ...). It will load faster than getServerSideProps


### Contentful
- Build Content Models (localization, requiered fields and layout-options)
- Edit Content
- Installing & Using GraphQL-Playground

### MUI
- reading Documentations carefully (MUI Masonry is from the lab-package, not core. So it works only if you install lab too 🤣)
- Masonry is King 
- combining MUI with Next (Problems with Link-Modules avoided).
    - utilize dark mode/light mode toggle in MUI
    - more theme-configuration in MUI (Background with CssBaseline, ...) 
    - if dark mode changes coloured component backgrounds to standard paper background, this can be overriden in the theme-creation


### What works but I didn't figure out why
- In the blog/index.js file the getStaticProps function wasn't called. So I found an stackoverflow-entry suggesting to use .defaultProps for defining (any) prop first. I tryed that, after spending an hour declaring "that can't be the solution". Then the getStaticProps was executed. I need to know what the problem was and other whether solutions exist.

