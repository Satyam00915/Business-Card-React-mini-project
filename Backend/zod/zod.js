const zod = require("zod");

const userSchema = zod.object({
  title: zod.string(),
  description: zod.string(),
  Interests: zod.array(zod.string()),
});

module.exports = {
  userSchema,
};
