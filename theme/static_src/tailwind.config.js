module.exports = {
    content: [
      /**
       * HTML. Paths to Django template files that will contain Tailwind CSS classes.
       */
  
      /*  Templates within theme app (<tailwind_app_name>/templates), e.g. base.html. */
      "../templates/**/*.html",
  
      /*
       * Main templates directory of the project (BASE_DIR/templates).
       * Adjust the following line to match your project structure.
       */
      "../../templates/**/*.html",
  
      /*
       * Templates in other django apps (BASE_DIR/<any_app_name>/templates).
       * Adjust the following line to match your project structure.
       */
      "../../**/templates/**/*.html",
  
      /**
       * JS: If you use Tailwind CSS in JavaScript, uncomment the following lines and make sure
       * patterns match your project structure.
       */
      /* JS 1: Ignore any JavaScript in node_modules folder. */
      // '!../../**/node_modules',
      /* JS 2: Process all JavaScript files in the project. */
      // '../../**/*.js',
  
      /**
       * Python: If you use Tailwind CSS classes in Python, uncomment the following line
       * and make sure the pattern below matches your project structure.
       */
      // '../../**/*.py'
    ],
    theme: {
      extend: {
        colors: {
          // Here you can add your custom color palette for dark mode
          dark: {
            100: "#2B2D42",
            200: "#1D1F2F",
            300: "#16181F",
            400: "#0E1016",
            500: "#07080D",
          },
        },
        // Here you define the dark mode variant for each utility
        // By default, the 'dark' class will be added to the <html> element
        // when the user's system color scheme is set to dark
        // For example, to apply a different background color in dark mode, add the 'dark:bg-dark-500' class
        backgroundColor: {
          "dark": "#0E1016",
        },
        textColor: {
          "dark": "#fff",
        },
        borderColor: {
          "dark": "#2B2D42",
        },
      },
    },
    variants: {
      extend: {
        backgroundColor: ["dark"],
        textColor: ["dark"],
        borderColor: ["dark"],
      },
    },
    plugins: [
      require("@tailwindcss/forms"),
      require("@tailwindcss/typography"),
      require("@tailwindcss/line-clamp"),
      require("@tailwindcss/aspect-ratio"),
    ],
  };
  