// src/index.ts

/** Flag to check if the app is initialized or not */
let isInitialized = false;

document.addEventListener('DOMContentLoaded', async () => {
  // DOM is fully loaded -> Start DOM-specific manipulation
  // --------------------------------------------------------------------------------------------
  // --- DO NOT USE WEBFLOW INTERACTIONS HERE ---------------------------------------------------
  // --------------------------------------------------------------------------------------------
  // - DOM is fully loaded
  // - CSS is loaded
  // - Webflow has NOT fully initialized its interactions and scripts
  // - All resources (images, stylesheets, etc.) have NOT loaded
  // --------------------------------------------------------------------------------------------
  // What to do here > Show/hide elements, set styles, etc.
  // Note: This event fires when the initial HTML document has been completely loaded and parsed

  // Set the initialized flag
  isInitialized = true;
});

if (window.Webflow) {
  window.Webflow ||= [];
  window.Webflow.push(() => {
    // Webflow has fully initialized its interactions and scripts -> Start Webflow-specific manipulation
    // --------------------------------------------------------------------------------------------
    // --- USE WEBFLOW INTERACTIONS HERE -----------------------------------------------------------
    // --------------------------------------------------------------------------------------------
    // - DOM is fully loaded
    // - CSS is loaded
    // - Webflow has fully initialized its interactions and scripts
    // - All resources (images, stylesheets, etc.) have loaded
    // --------------------------------------------------------------------------------------------
    // What to do here> Show/hide elements, start animations, etc.

    if (!isInitialized) return; // Exit the script

    console.log('Webflow initialized.');
  });
}

window.addEventListener('resize', () => {
  // Window has been resized -> Start resize-specific manipulation
  // --------------------------------------------------------------------------------------------
  // --- USEFUL FOR ADJUSTING LAYOUTS, ETC. -----------------------------------------------------
  // --------------------------------------------------------------------------------------------
  // - DOM is fully loaded
  // - CSS is loaded
  // - Webflow has fully initialized its interactions and scripts
  // - All resources (images, stylesheets, etc.) have loaded
  // --------------------------------------------------------------------------------------------
  // What to do here > Adjust layout, update styles, etc.
  // Note: This event can fire many times during a single resize operation (e.g., dragging the window edge)

  if (!isInitialized) return; // Exit the script

  // console.log('Window resized.');
});

window.addEventListener('scroll', () => {
  // Window has been scrolled -> Start scroll-specific manipulation
  // --------------------------------------------------------------------------------------------
  // --- USEFUL FOR LAZY LOADING IMAGES, ETC. ---------------------------------------------------
  // --------------------------------------------------------------------------------------------
  // - DOM is fully loaded
  // - CSS is loaded
  // - Webflow has fully initialized its interactions and scripts
  // - All resources (images, stylesheets, etc.) have loaded
  // --------------------------------------------------------------------------------------------
  // What to do here > Show/hide elements, lazy load images, etc.
  // Note: This event can fire many times during a single scroll operation (e.g., scrolling with a mouse wheel)

  if (!isInitialized) return; // Exit the script

  // console.log('Window scrolled.');
});

window.addEventListener('beforeunload', () => {
  // Page is being unloaded -> Start unload-specific manipulation (page is still visible, but about to be unloaded)
  // --------------------------------------------------------------------------------------------
  // --- USEFUL FOR SAVING FORM DATA, ETC. ------------------------------------------------------
  // --------------------------------------------------------------------------------------------
  // - DOM is fully loaded
  // - CSS is loaded
  // - Webflow has fully initialized its interactions and scripts
  // - All resources (images, stylesheets, etc.) have loaded
  // --------------------------------------------------------------------------------------------
  // What to do here > Save form data, show a warning message, etc.
  // Note: This event fires when the page is about to be unloaded (e.g., when navigating away from the page)

  if (!isInitialized) return; // Exit the script

  // console.log('Page is being unloaded.');
});
