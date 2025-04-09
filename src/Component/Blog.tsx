import { useState, useEffect } from "react";
import blogPic1 from "../assets/BlogPic1.jpg"
import blogPic2 from "../assets/BlogPic2.jpg"
import blogPic3 from "../assets/BlogPic3.jpg"
import blogPic4 from "../assets/pic5.jpg"
import blogPic5 from "../assets/pic4.jpg"
import blogPic6 from "../assets/pic7.jpg"
import ReactMarkdown from "react-markdown";
import { motion } from "framer-motion";

const blogPosts = [
  {
    id: 1,
    category: "React Virtual Dom",
    date: "August 27, 2024",
    title: "Understanding the Virtual DOM in React",
    image: blogPic1,
    content:
      `
### 🧠 Understanding the Virtual DOM in React

The Virtual DOM is a concept that helps React build fast and efficient interfaces. Rather than updating the real browser DOM directly with every change, React creates a lightweight copy of the DOM in memory — the Virtual DOM.

When your app changes, React compares this new version with the previous one, calculates the difference, and updates **only the parts** of the actual DOM that changed.

This makes React apps feel faster and more efficient, especially when dealing with complex UI updates. It's one of the key reasons developers love using React for dynamic web apps.
    `
  },
  {
    id: 2,
    category: "HTML",
    date: "August 30, 2024",
    title: "About Semantic HTML",
    image: blogPic2,
    content: `
### 🧠 Understanding the Semantic Html

Semantic HTML means using the correct HTML tags based on their meaning — like \`<header>\`, \`<nav>\`, and \`<section>\` instead of just \`<div>\`s.

It makes your code cleaner, more readable, and easier to maintain.

More importantly, it helps users who rely on screen readers or keyboard navigation.

For example, a real \`<button>\` is automatically recognized by assistive tech.

Using semantic tags improves accessibility and user experience.

It also helps with SEO since search engines better understand your content.

In my projects, I structure layouts with tags like \`<main>\` and \`<article>\`.

I use proper \`<label>\`s for forms and avoid using clickable \`<div>\`s.

It’s a small habit that makes a big difference.

Semantic HTML = better code, better UX, and better for everyone
`

  },
  {
    id: 3,
    category: "Async/Await vs Promise",
    date: "September 12, 2024",
    title: "About Async/Await vs Promise",
    image: blogPic3,
    content: `
### 🧠 Understanding the Async/Await vs Promise

When working with asynchronous code in JavaScript, both Promises and async/await help handle tasks like API calls, delays, or loading data — but choosing between them depends on the situation.

Promises offer a cleaner way to avoid callback hell, using \`.then()\` and \`.catch()\` to handle success and errors. They're especially useful when chaining multiple async operations.

However, once your logic becomes more complex or nested, I prefer using async/await because it reads more like synchronous code and is easier to follow.

With async/await, I can write code that looks straightforward while still being non-blocking. I still use \`.catch()\` or try/catch blocks for error handling.

In general, I reach for Promises when writing utility functions or working with libraries that return them, but in my components or logic-heavy code, async/await keeps things clean and readable.

Both have their place — I just pick the one that makes the code easier to understand for that specific task.
`,
  },
  {
    id: 4,
    category: "React Hooks",
    date: "September 10, 2024",
    title: "React Hooks I Use the Most",
    image: blogPic5,
    content: `
  React Hooks like \`useState\`, \`useEffect\`, and \`useRef\` are my go-tos. 
  
  I use \`useState\` for UI state, \`useEffect\` for fetching or syncing data, and \`useRef\` when I need to persist values or reference DOM elements. 
  
  Hooks like \`useContext\`, \`useMemo\`, and \`useCallback\` help manage shared data and optimize performance.
  
  They let me write modular and clean components with less boilerplate.
  `
  },

  {
    id: 5,
    category: "Tailwind CSS",
    date: "September 15, 2024",
    title: "How I Use Tailwind CSS in React Projects",
    image: blogPic4,
    content: `
  Tailwind CSS speeds up my UI workflow. I use utility classes directly in JSX for layout, spacing, and typography.
  
  It reduces context switching and helps me build consistent designs fast.
  
  For big projects, I customize the theme and use \`clsx\` for dynamic styling.
  
  It keeps my styling clean, reusable, and scalable.
  `
  },

  {
    id: 6,
    category: "From Figma to Code",
    date: "September 20, 2024",
    title: "Understanding From Figma to Code: My Workflow",
    image: blogPic6,
    content: `
### 🧠 From Figma to Code: My Workflow

Turning designs into code is one of my favorite parts of frontend dev. Here's how I go from Figma to clean, responsive React code.

#### 👀 Step-by-step:
1. **Review the design** — layout, spacing, typography, etc.
2. **Use Figma Inspect Tool** to grab font sizes, colors, padding.
3. **Break UI into components** — buttons, cards, sections.
4. **Build with Tailwind CSS** in JSX using utility classes.

I also:
- Mirror the design system (colors, spacing) in Tailwind config
- Handle missing states like hover/error with consistent decisions
- Focus on responsiveness and pixel-perfect matching

This workflow keeps my code organized and aligned with design — and makes dev/design handoff a breeze.
`

  },

];

export default function Blog() {
  const [selectedPost, setSelectedPost] = useState<any>(null);

  useEffect(() => {
    if (selectedPost) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [selectedPost]);

  return (
    <div id="blog" className=" min-h-screen p-10 text-white relative">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-10 text-center text-4xl">Blogs</motion.h1>
      <div className="grid md:grid-cols-3 gap-6">
        {blogPosts.map((post) => (
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            key={post.id}
            className="bg-gray-800 rounded-lg overflow-hidden cursor-pointer hover:shadow-lg"
            onClick={() => setSelectedPost(post)}
          >
            <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <p className="text-blue-400 font-semibold">{post.category}</p>
              <p className="text-sm text-gray-400">{post.date}</p>
              <h3 className="text-lg font-bold mt-2">{post.title}</h3>
            </div>
          </motion.div>
        ))}
      </div>

      {selectedPost && (
        <div className="fixed inset-0 bg-[#0b0b24] bg-opacity-95 flex items-center justify-center p-5">
          <div className="bg-gray-900 p-6 rounded-lg max-w-2xl w-full relative shadow-lg max-h-[80vh] overflow-y-auto overflow-x-hidden">
            <button
              className="absolute top-4 right-4 text-gray-400 hover:text-white"
              onClick={() => setSelectedPost(null)}
            >
              ✖
            </button>
            <img
              src={selectedPost.image}
              alt={selectedPost.title}
              className="w-full max-h-80 object-cover rounded-md"
            />

            <p className="text-blue-400 font-semibold mt-4">{selectedPost.category}</p>
            <p className="text-sm text-gray-400">{selectedPost.date}</p>
            <h3 className="text-xl font-bold mt-2">{selectedPost.title}</h3>
            <div className="prose prose-invert mt-4 break-words max-w-full overflow-x-hidden">
              <ReactMarkdown>{selectedPost.content}</ReactMarkdown>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}
