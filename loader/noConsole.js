const consoleRex = /(console.log\()(.*)(\))/g;

module.exports = function(source) {
  const res = source.replace(consoleRex, "");
  return res;
}