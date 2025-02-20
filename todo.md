# TODO Checklist

A comprehensive checklist for building a Schopenhauer Says No personal website.  
Complete each item before moving on to the next.

---

## 1. Project Initialization

- [ ] Create a folder named “schopenhauer_says_no”.
- [ ] Inside it, create subfolders named “html”, “css”, and “assets”.
- [ ] In the “html” folder, create a file named “index.html” with minimal HTML5 boilerplate:
    - [ ] <title>Schopenhauer Says No</title>
    - [ ] <meta charset="UTF-8">
- [ ] In the “css” folder, create a file named “styles.css” with a placeholder comment (e.g., “/* Base Styles */”).
- [ ] In index.html, link to ../css/styles.css using a <link> tag in the <head>.

---

## 2. Base Layout Implementation

- [ ] Add a <div class="container"> inside the body of index.html.
- [ ] In styles.css, set .container to:
  - [ ] max-width: 1263px
  - [ ] margin: 0 auto
- [ ] Within the .container, create the following elements:
  - [ ] <header>
  - [ ] <nav>
  - [ ] <main>
  - [ ] <footer>
- [ ] Create <aside class="sidebar"> for the left sidebar.

---

## 3. Typography & Color Scheme

- [ ] In styles.css, define root-level CSS variables (inside :root), for example:
  - [ ] --text-color: #333;
  - [ ] --bg-color: #fff;
- [ ] Set body’s font-family to a sans-serif stack (e.g., "Helvetica Neue", Arial, sans-serif).
- [ ] Embed or import an old style decorative font (e.g., “Deutsche Zierschrift”) for dropcaps:
  - [ ] Either via @import, <link> in <head>, or local font file in assets.
- [ ] Create a .dropcap class to style the first letter of a paragraph:
  - [ ] Increase font size (e.g., 3rem).
  - [ ] Apply the decorative font.

---

## 4. Content & Structure

- [ ] Under <main>, create at least two sections with IDs:
  - [ ] <section id="about"> with <h2>About</h2>
  - [ ] <section id="new-essays"> with <h2>New Essays</h2>
- [ ] In each section, add a paragraph of placeholder text:
  - [ ] Apply .dropcap to the first letter of the first paragraph.
- [ ] Add a placeholder popin or annotation element:
  - [ ] <span class="popin">Some annotation</span>
  - [ ] Plan to style .popin in CSS.
- [ ] Ensure text color and background color are using root variables:
  - [ ] color: var(--text-color);
  - [ ] background-color: var(--bg-color);

---

## 5. Navigation & Sidebar

- [ ] In the <header>, add a <nav> containing a <ul><li> list of links:
  - [ ] "Home" (href="#")
  - [ ] "About" (href="#about")
  - [ ] "New Essays" (href="#new-essays")
  - [ ] "Patreon" (placeholder # link)
- [ ] Decide if the header is fixed or sticky:
  - [ ] position: fixed or position: sticky in CSS
- [ ] Add placeholder links or headings in <aside class="sidebar">:
  - [ ] Title it “Sidebar Links” or similar
- [ ] Style the sidebar with a distinct background or border to separate it from main content.

---

## 6. Footer & Decorative Elements

- [ ] In the <footer>, add a placeholder for a site logo or decorative SVG:
  - [ ] <img src="../assets/logo-placeholder.svg" alt="Site Logo" />
- [ ] Add decorative borders or background using existing or new CSS variables.
- [ ] Maintain consistent typography settings and color schemes in the footer.

---

## 7. Testing & Deployment

- [ ] Cross-Browser Testing:
  - [ ] Chrome
  - [ ] Firefox
  - [ ] Safari
  - [ ] Edge
- [ ] Responsive Design:
  - [ ] Check layout in mobile, tablet, and desktop viewports.
- [ ] Accessibility:
  - [ ] Ensure alt text for images, semantic HTML, appropriate heading structure.
- [ ] Validation:
  - [ ] W3C HTML validator
  - [ ] W3C CSS validator
- [ ] Performance:
  - [ ] Check load times and any obvious optimizations (e.g., image compression).
- [ ] Deployment via SSH:
  - [ ] Create an account on hosting (if not already).
  - [ ] Upload all files in the “schopenhauer_says_no” folder to the server.
  - [ ] Test the site URL to confirm everything loads properly.

---

## Optional Enhancements

- [ ] Custom 404 page (e.g., 404.html) with a friendly message.
- [ ] Dark mode toggle (using CSS variables).
- [ ] Additional pages or sections for blog posts, contact info, etc.

---

Use this checklist as you progress. Once all items are checked off, your static Schopenhauer Says No site should be fully operational!
