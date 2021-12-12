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
* Long Cards for BlogList (Horizontal Carrousel ??!)
* Some Kind of Carrousel/Slider for featured Blogposts
* As soon as it's out of Next.js-Alpha and React v18Beta: using the SSR streaming from React 18
* Make an Recipe App for the Food-Stuff to link to
    * Make it in Vue!

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
- using the Image-Component
- fetching data from Contentful
    - using the Image-Component for Contentful-Images, bound in Markdown-Fields:
        - added aditional contentfield (contentImages), where the data (url, title, description, ...) is stored
        - before rendering the Markdown-Content it's scanned after an Markdown-Image-Annotation, and splitted in an Array. 
        - the Link used in the Markdown is shortened and due to it containing the Contentful-ID of the Image it is unique  
        - that Link is compared to the URLs in Array of contentImages where all the additional data (height, width, description, title...) are found and loaded from
    - this solution might be strange in comparison to simply render the markdown, but it brings the advantage that it loads all the centralized informations belonging to the image. Every time changes are made to the picture-metadata it will be rendered in the app as well. (In the other way, the markdown would have to be changed)
- using FontAwesome can be tricky due to the different handling of CSS in NEXT. To use it import the css-styles in the _app.js-File like so:
```
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false
```


### Contentful
- Build Content Models (localization, requiered fields and layout-options)
- Edit Content
- Installing & Using GraphQL-Playground


### MUI
- reading Documentations carefully (MUI Masonry is from the lab-package, not core. So it works only if you install lab too 🤣)
- Masonry is King
- Creating an responsive menu with burger menu
- Theming and Dark/Light Toggle with MUI 
- combining MUI with Next (Problems with Link-Modules avoided).
    - utilize dark mode/light mode toggle in MUI
    - more theme-configuration in MUI (Background with CssBaseline, ...) 
    - if dark mode changes coloured component backgrounds to standard paper background, this can be overriden in the theme-creation


### What works but I didn't figure out why
- In the blog/index.js file the getStaticProps function wasn't called. So I found an stackoverflow-entry suggesting to use .defaultProps for defining (any) prop first. I tryed that, after spending an hour declaring "that can't be the solution". Then the getStaticProps was executed. I need to know what the problem was and other whether solutions exist.

