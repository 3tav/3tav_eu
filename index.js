import { replaceInFileSync } from "replace-in-file";

// define fixes
function replaceFix() {
  const options = {
    files: [
      "publication/**/*.html",
      "publication/**/*.css"
    ],
    from: [/http:\/\/localhost/g, /href="[^"]*\?action=kirki-styles&amp;ver=3.1.9"/g],
    to: ['', 'href="/wp-content/css/kirki-styles.css"'],
  };

  try {
    const results = replaceInFileSync(options);
    console.log("Results:", results.filter((e) => e.hasChanged).length);
    return;
  } catch (error) {
    return;
  }
}

// Run fixes
replaceFix();
