# Code Ride Repeat - a Little Headless Blog
__... mainly build to learn coding__ 

This is a more or less private blog project started in 2021. By the means it's an blog project to exercise coding and not to exercise writing. I chose the three topics I'm most curious about and mingled them together. Though I started some articles already, I am planning to write articles in my free time after I found a job as a Web Developer and not before. That's due to me having high quality expectations of self-written texts, so writing would cost me time needed for interview preparation, coding practice and research.
_Therefore: Don't be surprised if you find articles with (interesting) headlines and Lorem-Ipsum Content._

## Stack
- Next.js
- Contentful
- Material UI
- Sass

## Where It started
Because it was my first Next.js-project and I never used Contentful before I simply started with a tutorial for a [paginated BlogPostlist by Salma Alma-Naylor](https://www.contentful.com/blog/2021/04/23/paginating-contentful-blogposts-with-nextjs-graphql-api/). This helped me a lot!
From there on it's my own design, thinking and style of implementation. 

## ToDos
* [ ] Get the Raspberry Pi running and serve the next-page from there or 
* [ ] check for possible performance-boosts (images, rendering-optimization, ...)
  * [ ] Change all png-images to webp-images
  * [ ] Check for rendering-optimization (while testing the different possibilities to render with next it got messy 😅)
* [ ] Comment Functions 
* [ ] Share Functions 
* [ ] Think about Content 
  * [ ] Write some actual articles or stay with dummy-content
  * [ ] Build an Recipe App for the Food-Stuff to link to (Make this with Vue and Contentful!)

## What I learned
### in general:
- Using an API and fetching data with GraphQL.
- Not to use an personal API-Key in Frontend.
    - in React `.env-File + REACT_APP_[Your Constants Name]` is a solution, but dangerous (it's a Frontend App)
    - ideally pass the API-Requests with personal Keys to a backend app and run them on the server
- that ServerSideRendering is a cool thing to do, especially for pushing SEO and Performance.
- Using WebP-Images brings better quality by smaller filesizes than JPG and its is smaller. It most times is slightly lesser quality than a PNG.
- Using Font Awesome or Google Fonts is tempting but could result in additional traffic, dependency an cause the client to request resources from the third party server (not the nicest method for privacy reasons). 

### Next.js
- first of all: Using it
- how the built in routing
- using the the Next link component in a Next app instead of simple a-tags (if you don't the App will be loaded freshly on the given href [setting back components state and so on])
- launching an Next.js-App with [vercel](https://vercel.com). It was my favourite (because I don't have any server yet, only a hosting package and a bunch of domains)
- use getStaticProps wherever possible (blog posts, simple static sites, ...). It will load faster than getServerSideProps
- using the Image-Component
- fetching data from Contentful
    - using the Image-Component for Contentful-Images, bound in Markdown-Fields:
        - added additional content field (contentImages), where the data (url, title, description, ...) is stored
        - before rendering the Markdown-Content it's scanned after an Markdown-Image-Annotation, and spliced (with .split()) in an Array. 
        - the Link used in the Markdown is shortened and due to it containing the Contentful-ID of the Image it is unique  
        - that Link is compared to the URLs in Array of contentImages where all the additional data (height, width, description, title...) are found and loaded from
    - this solution might be strange in comparison to simply render the markdown, but it brings the advantage that it loads all the centralized informations belonging to the image. Every time changes are made to the picture-metadata it will be rendered in the app as well. (otherwise, the post-entry would have to be changed with every change on the images)
- using FontAwesome can be tricky due to the different handling of CSS in NEXT. To use it import the css-styles in the _app.js-File like so:
```
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false
```

### Contentful
- Build Content Models (localization, required fields and layout-options)
- Edit Content
- Installing & Using GraphQL-Playground

### MUI
- reading Documentations carefully (MUI Masonry is from the lab-package, not core. So it works only if you install lab too 🤣)
- Creating an responsive menu with burger menu in MUI
- Theming and Dark/Light Toggle with MUI 
- combining MUI with Next (Problems with Link-Modules avoided).
    - utilize dark mode/light mode toggle in MUI
    - more theme-configuration in MUI (Background with CssBaseline, ...) 
    - if dark mode changes coloured component backgrounds to standard paper background, this can be overridden in the theme-creation

### What works but I didn't figure out why
- In the blog/index.js file the getStaticProps function wasn't called. So I found an stack overflow-entry suggesting to use.defaultProps for defining (any) prop first. I tried that, after spending an hour declaring "that can't be the solution". After setting the defaultProps the getStaticProps was executed well. Seem to be the old "isn't initialised before usage"-problem, but I have to read further... 