document.addEventListener('DOMContentLoaded', function () {
  const goodreadsWrapper = document.getElementById('goodreads-embed-wrapper');
  if (goodreadsWrapper) {
    // Insert the exact HTML for the Goodreads widget
    goodreadsWrapper.innerHTML = `
      <!-- Show static HTML/CSS as a placeholder in case js is not enabled - javascript include will override this if things work -->
      <style type="text/css" media="screen">
  .gr_custom_container_1740633727 {
    /* customize your Goodreads widget container here*/
    border: 2px solid var(--footer-border-color);
    border-radius:10px;
    padding: 10px 5px 10px 5px;
    background-color: transparent;
    color: var(--text-color);
    width: 100%; /* Ensure it takes full width */
    margin: 0 auto;
  }
  .gr_custom_header_1740633727 {
    /* customize your Goodreads header here*/
    border-bottom: 1px solid var(--footer-border-color);
    width: 100%;
    margin-bottom: 5px;
    text-align: center;
    font-size: 120%
  }
  .gr_custom_each_container_1740633727 {
    /* customize each individual book container here */
    width: 100%;
    clear: both;
    margin-bottom: 10px;
    overflow: auto;
    padding-bottom: 4px;
    border-bottom: 1px solid var(--footer-border-color);
  }
  .gr_custom_book_container_1740633727 {
    /* customize your book covers here */
    overflow: hidden;
    height: 160px;
      float: left;
      margin-right: 4px;
      width: 98px;
  }
  .gr_custom_author_1740633727 {
    /* customize your author names here */
    font-size: 10px;
  }
  .gr_custom_tags_1740633727 {
    /* customize your tags here */
    font-size: 10px;
    color: var(--text-color);
  }
  .gr_custom_rating_1740633727 {
    /* customize your rating stars here */
    float: right;
  }
</style>

     <div id="gr_custom_widget_1740633727">
        <div class="gr_custom_container_1740633727">
          <h2 class="gr_custom_header_1740633727">
            <a style="text-decoration: none; color: var(--link-color);" rel="nofollow" 
               href="https://www.goodreads.com/review/list/168711438-m-schulte-althoff?shelf=read&amp;utm_medium=api&amp;utm_source=custom_widget">
               M.&#39;s bookshelf: read
            </a>
          </h2>
          <!-- Loading indicator that will be replaced by the actual content -->
          <div class="loading-indicator" style="text-align: center; padding: 20px;">
            Loading latest books from Goodreads...
          </div>
        </div>
      </div>
      <div class="goodreads-more-link" style="text-align: left; margin-top: 10px;">
        <a href="https://www.goodreads.com/user/show/168711438-m-schulte-althoff" style="color: var(--link-color);" target="_blank">...more on Goodreads</a>
      </div>
    `;

    // Add the script tag for the Goodreads widget with width=full parameter
    const script = document.createElement('script');
    script.src = "https://www.goodreads.com/review/custom_widget/168711438.M.'s%20bookshelf:%20read?cover_position=left&cover_size=medium&num_books=5&order=d&shelf=read&show_author=1&show_cover=1&show_rating=1&show_review=1&show_tags=1&show_title=1&sort=date_added&widget_bg_color=FFFFFF&widget_bg_transparent=true&widget_border_width=2&widget_id=1740633727&widget_text_color=000000&widget_title_size=medium&widget_width=full";
    script.type = "text/javascript";
    script.charset = "utf-8";
    document.body.appendChild(script);
  }
});