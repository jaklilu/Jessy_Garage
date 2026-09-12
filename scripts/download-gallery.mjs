import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const manifest = JSON.parse(fs.readFileSync(path.join(__dirname, "gallery-manifest.json"), "utf8"));

async function download(url, dest) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`${res.status} ${url}`);
  const buf = Buffer.from(await res.arrayBuffer());
  fs.writeFileSync(dest, buf);
  return buf.length;
}

const localManifest = {};

for (const [category, urls] of Object.entries(manifest)) {
  const dir = path.join(root, "public", "gallery", category);
  fs.mkdirSync(dir, { recursive: true });
  localManifest[category] = [];
  let n = 1;
  for (const url of urls) {
    const ext = path.extname(new URL(url).pathname) || ".jpg";
    const name = `${String(n).padStart(2, "0")}${ext.toLowerCase()}`;
    const dest = path.join(dir, name);
    process.stdout.write(`Downloading ${category}/${name}... `);
    try {
      const size = await download(url, dest);
      console.log(`${size} bytes`);
      localManifest[category].push(`/gallery/${category}/${name}`);
      n++;
    } catch (e) {
      console.log("FAIL", e.message);
    }
  }
}

fs.writeFileSync(
  path.join(root, "src", "assets", "gallery.ts"),
  `/** Images imported from jessygaragedoors.com gallery. */\nexport const galleryAlbums = ${JSON.stringify(localManifest, null, 2)} as const;\n`,
);
console.log("wrote src/assets/gallery.ts");
