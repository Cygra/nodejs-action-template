const core = require("@actions/core");

try {
  const yourFirstInput = core.getInput("your-first-input");
  console.log(yourFirstInput);
} catch (error) {
  core.setFailed(error.message);
}
