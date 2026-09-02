import { beforeEach, describe, expect, it, vi } from "vitest";

const load = async (siteURL?: string) => {
  vi.resetModules();
  vi.stubEnv("SITE_URL", siteURL as string);

  return import("@/site");
};

describe("siteURL", () => {
  beforeEach(() => {
    vi.unstubAllEnvs();
  });

  it("drops the trailing slash the environment is configured with", async () => {
    const { siteURL } = await load("https://perf.reviews/");

    expect(siteURL).toBe("https://perf.reviews");
  });

  it("leaves an origin without a trailing slash alone", async () => {
    const { siteURL } = await load("https://perf.reviews");

    expect(siteURL).toBe("https://perf.reviews");
  });

  it("falls back to localhost when the variable is missing", async () => {
    const { siteURL } = await load(undefined);

    expect(siteURL).toBe("http://localhost:3000");
  });
});

describe("localePrefix", () => {
  it("gives the default locale no prefix, since it is served without one", async () => {
    const { localePrefix } = await load("https://perf.reviews/");

    expect(localePrefix("es")).toBe("");
  });

  it("prefixes every other locale", async () => {
    const { localePrefix } = await load("https://perf.reviews/");

    expect(localePrefix("en")).toBe("/en");
  });
});

describe("absoluteURL and localeURL", () => {
  it("joins a path onto the origin without doubling the slash", async () => {
    const { absoluteURL } = await load("https://perf.reviews/");

    expect(absoluteURL("/images/thumb.png")).toBe(
      "https://perf.reviews/images/thumb.png"
    );
  });

  it("builds the canonical URL of each locale", async () => {
    const { localeURL } = await load("https://perf.reviews/");

    expect(localeURL("es", "/reviews/zara")).toBe("https://perf.reviews/reviews/zara");
    expect(localeURL("en", "/reviews/zara")).toBe(
      "https://perf.reviews/en/reviews/zara"
    );
  });
});
