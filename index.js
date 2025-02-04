import { replaceInFileSync } from "replace-in-file";

// define fixes
function replaceFix() {
  const options = {
    files: [
      "publication/**/*.html",
      "publication/**/*.css"
    ],
    from: [/http:\/\/localhost/g],
    to: [""],
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
