import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "My password manager autofilled my bank password into the pizza site, so now my pepperoni has two-factor authentication.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
