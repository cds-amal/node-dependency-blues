function processInput(args) {
  // Validate input: it should never contain a "/"
  if (args.some(arg => /\//.test(arg))) {
    throw new Error("Slash sucks");
  }
  return args.map(s => s.toUpperCase());
}

args = processInput(process.argv.slice(2));
console.log(args);

module.exports = {
  processInput
}
