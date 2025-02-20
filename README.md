# Personal Webpage - Schopenhauer Says No

## Overview

This project aims to create a personal website named "Schopenhauer Says No". The website features a specific layout, typography, color scheme, and content structure without interactive elements.

## Project Structure

schopenhauer_says_no/ ├── assets/ │ └── Wolfram - Code 912 - Supernova Black.png ├── css/ │ └── styles.css ├── html/ │ └── index.html ├── initializeProject.sh ├── README.md ├── spec.md └── todo.md


## Requirements

### Layout
- Fixed-width layout with a maximum width of 1263px.
- Main content area centered on the page.
- Left sidebar for navigation links (e.g., "About", "New Essays", "Patreon").

### Header and Footer
- Floating header with navigation links.
- Footer with decorative elements and a logo.

### Typography
- Use "Deutsche Zierschrift" for dropcaps.
- Main body text should use a sans-serif font stack.

### Color Scheme
- Monochrome color scheme with light and dark modes.
- Use CSS variables for color management.

### Content Structure
- Organize content into sections with headings and lists.
- Include links with annotations and popins.

## Implementation Steps

1. Set up the project structure with directories for HTML, CSS, and assets.
2. Develop the HTML structure based on the layout requirements.
3. Style the website using CSS, focusing on typography and color scheme.
4. Implement the header and footer with navigation links.
5. Populate the sidebar with relevant links.
6. Test the website according to the testing plan.
7. Deploy the website to the hosting service using SSH.

## Testing Plan

### Cross-Browser Testing
- Test the website on major browsers (Chrome, Firefox, Safari, Edge) to ensure consistent appearance and functionality.

### Responsive Design Testing
- Verify that the layout adapts well to different screen sizes, especially for mobile devices.

### Accessibility Testing
- Ensure the website meets basic accessibility standards (e.g., alt text for images, semantic HTML).

### Performance Testing
- Use tools like Google PageSpeed Insights to optimize loading times and performance.

### Validation
- Validate HTML and CSS using W3C validation tools to ensure code quality.

## Deployment

### Steps to Deploy via SSH

1. **Prepare Files:**
   - Ensure all files are organized in the `schopenhauer_says_no` folder.

2. **Connect to Remote Server:**
   - Open a terminal and connect to your remote server using SSH:
     ```bash
     ssh username@yourserver.com
     ```

3. **Upload Files:**
   - Use `scp` (secure copy) to upload files to the server:
     ```bash
     scp -r /path/to/schopenhauer_says_no username@yourserver.com:/path/to/remote/directory
     ```

4. **Verify Deployment:**
   - Open a web browser and navigate to your website's URL to ensure everything loads properly.

## Optional Enhancements

- Custom 404 page (e.g., 404.html) with a friendly message.
- Dark mode toggle (using CSS variables).
- Additional pages or sections for blog posts, contact info, etc.

## License

This project is licensed under the MIT License - see the [LICENSE](http://_vscodecontentref_/7) file for details.