import { defineConfig } from "astro/config";
import cloudflare from "@astrojs/cloudflare";

// base und build.assetsPrefix NICHT setzen – das übernimmt Webflow Cloud
// anhand des Mount-Paths der Umgebung (z. B. /extern-cloud).
export default defineConfig({
  output: "server",
  adapter: cloudflare(),
});
