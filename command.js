function processInput(args) {
  // Validate input: it should never contain a "/"
  if (args.some(arg => /\//.test(arg))) {
    throw new Error("Slash sucks");
  }
  return args.map(s => s.toUpperCase());
}

function main() {
  args = processInput(process.argv.slice(2));
  console.log(args);
}

// https://nodejs.org/api/modules.html#accessing-the-main-module
if (require.main === module) {
  main();
}

module.exports = {
  processInput
}
