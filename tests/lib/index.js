import { fail } from "node:assert";
import cp from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";

const STYLELINT = `.${path.sep}node_modules${path.sep}.bin${path.sep}stylelint`;

describe("Integration with stylelint", () => {
  let originalCwd;

  before(() => {
    originalCwd = process.cwd();
    process.chdir(
      fileURLToPath(
        new URL("../fixtures/integrations/stylelint", import.meta.url),
      ),
    );
    cp.execSync("npm i", { stdio: "inherit" });
  });
  after(() => {
    process.chdir(originalCwd);
  });

  it("should lint without errors", () => {
    cp.execSync(`${STYLELINT} src/valid.vue`, { stdio: "inherit" });
  });
  it("should lint with errors", () => {
    try {
      cp.execSync(`${STYLELINT} src/invalid.vue`, { stdio: "inherit" });
      fail("Expect an error, but without errors");
    } catch {
      // Expected!s
    }
  });
});

describe("Integration with stylelint-config-standard-scss", () => {
  let originalCwd;

  before(() => {
    originalCwd = process.cwd();
    process.chdir(
      fileURLToPath(
        new URL(
          "../fixtures/integrations/stylelint-config-standard-scss",
          import.meta.url,
        ),
      ),
    );
    cp.execSync("npm i", { stdio: "inherit" });
  });
  after(() => {
    process.chdir(originalCwd);
  });

  it("should lint without errors", () => {
    cp.execSync(`${STYLELINT} src/valid.vue --fix`, {
      stdio: "inherit",
    });
  });
  it("should lint with errors", () => {
    try {
      cp.execSync(`${STYLELINT} src/invalid.vue`, {
        stdio: "inherit",
      });
      fail("Expect an error, but without errors");
    } catch {
      // Expected!s
    }
  });
});
