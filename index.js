import { replaceInFileSync } from "replace-in-file";

// define fixes
function replaceFix() {
  const options = {
    files: ["publication/**/*.html", "publication/**/*.css"],
    from: [/'Quicksand'/g, /\"Quicksand\"/g],
    to: ["Quicksand", "Quicksand"],
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
