import { mkdir, copyFile } from "node:fs/promises";

await mkdir("www", { recursive: true });
await copyFile("index.html", "www/index.html");
try {
  await copyFile("manifest.webmanifest", "www/manifest.webmanifest");
} catch {
  // The manifest is optional for the Android WebView build.
}
console.log("Interface copiada para www/.");
