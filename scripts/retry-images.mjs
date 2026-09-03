import { writeFileSync, mkdirSync, existsSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const OUT = join(__dirname, '..', 'public', 'images')

if (!existsSync(OUT)) mkdirSync(OUT, { recursive: true })

const images = [
  { file: 'syrup-berries.jpg', prompt: 'Mixed berries syrup bottle, red purple deep colors, fresh berries scattered around bottle, white background, commercial product photography', w: 600, h: 750 },
  { file: 'tea-english-breakfast.jpg', prompt: 'English Breakfast black tea in kraft box, brewed dark tea in cup, white minimal background, clean product photography', w: 600, h: 750 },
  { file: 'tea-earl-grey.jpg', prompt: 'Earl Grey bergamot tea, dried bergamot beside tea box, soft light, white background, minimal tea product photography', w: 600, h: 750 },
  { file: 'tea-green-sencha.jpg', prompt: 'Japanese Sencha green tea leaves in white ceramic bowl, fresh green color, clean minimal white background, studio product photography', w: 600, h: 750 },
  { file: 'tea-matcha.jpg', prompt: 'Premium matcha green tea powder, bright vibrant green, small wooden scoop, white background, minimal Japanese aesthetic product photography', w: 600, h: 750 },
  { file: 'tea-peppermint.jpg', prompt: 'Fresh peppermint herbal tea, green mint leaves, clear white background, refreshing clean minimal product photo', w: 600, h: 750 },
  { file: 'tea-chamomile.jpg', prompt: 'Chamomile flower herbal tea, dried chamomile flowers, warm white minimal background, soft lighting, product photography', w: 600, h: 750 },
  { file: 'equipment-bianca-s22.jpg', prompt: 'Lelit Bianca espresso machine, silver black professional home espresso machine, white background, clean product photography, side view', w: 600, h: 750 },
  { file: 'equipment-brikka.jpg', prompt: 'Bialetti Brikka moka pot 4 cup, shiny aluminum italian coffee maker, white background, clean minimal product photography', w: 600, h: 750 },
  { file: 'equipment-grinder-c2.jpg', prompt: 'Timemore C2 manual coffee grinder white, slim portable hand grinder, white background, clean minimal product shot', w: 600, h: 750 },
  { file: 'equipment-grinder-go.jpg', prompt: 'Premium portable manual coffee grinder titanium, compact cylindrical design, white background, clean product photography', w: 600, h: 750 },
  { file: 'equipment-hand-grinder.jpg', prompt: 'Classic manual coffee hand grinder, adjustable burr grinder, white background, clean simple product photography', w: 600, h: 750 },
  { file: 'equipment-cold-brewer.jpg', prompt: 'Glass cold brew tower drip coffee maker, elegant glass construction, white background, clean minimal product photography', w: 600, h: 750 },
  { file: 'equipment-coffee-pot.jpg', prompt: 'Gooseneck pour over coffee kettle, matte black slim design, white background, minimal product photography', w: 600, h: 750 },
  { file: 'equipment-filter-paper.jpg', prompt: 'Coffee filter papers in box, white natural paper filters, clean white background, simple product photography', w: 600, h: 750 },
  { file: 'equipment-iris-s27.jpg', prompt: 'Red espresso machine home, compact super automatic espresso machine red color, white background, clean product photography', w: 600, h: 750 },
  { file: 'chem-descaler.jpg', prompt: 'Espresso machine descaler cleaning solution bottle, professional coffee equipment cleaner, white minimal background, product photography', w: 600, h: 750 },
  { file: 'chem-milk-cleaner.jpg', prompt: 'Milk system cleaner bottle for espresso machines, professional cleaning product, white background, clean product shot', w: 600, h: 750 },
  { file: 'chem-group-cleaner.jpg', prompt: 'Coffee group head cleaning powder container, professional barista cleaning product, white background, minimal product photography', w: 600, h: 750 },
  { file: 'chem-tablets.jpg', prompt: 'Espresso machine cleaning tablets in package, white tablets, professional cleaning product for coffee machines, white background', w: 600, h: 750 },
  { file: 'chem-blind-filter.jpg', prompt: 'Coffee machine blind filter kit, metal disk backflush filter, professional barista tool, white background clean product photo', w: 600, h: 750 },
  { file: 'blog-specialty.jpg', prompt: 'Specialty coffee cupping session, professional tasting, coffee cups with beans beside, warm editorial photography', w: 700, h: 450 },
  { file: 'blog-pourover.jpg', prompt: 'Pour over coffee brewing V60, barista pouring hot water slowly, steam, editorial photography warm tones', w: 700, h: 450 },
  { file: 'blog-coldbrew.jpg', prompt: 'Cold brew coffee drip tower, iced coffee in glass, summer editorial photography, cool tones', w: 700, h: 450 },
  { file: 'blog-ethiopia.jpg', prompt: 'Ethiopian coffee origin, coffee cherries on tree, lush green landscape, editorial travel photography', w: 700, h: 450 },
  { file: 'blog-machine.jpg', prompt: 'Espresso machine maintenance cleaning, barista cleaning portafilter, professional cafe setting, editorial photography', w: 700, h: 450 },
  { file: 'blog-syrups.jpg', prompt: 'Colorful syrup cocktails drinks with fresh fruits, summer drinks, editorial photography vibrant colors', w: 700, h: 450 },
]

const DELAY = 4000

async function downloadImage(url, filepath) {
  const res = await fetch(url, { signal: AbortSignal.timeout(30000) })
  if (!res.ok) throw new Error(`HTTP ${res.status}`)
  const buf = await res.arrayBuffer()
  writeFileSync(filepath, Buffer.from(buf))
}

async function generate(item, idx, total) {
  const filepath = join(OUT, item.file)
  if (existsSync(filepath)) {
    console.log(`[${idx + 1}/${total}] ${item.file} ... artıq var, keçildi`)
    return
  }

  const encoded = encodeURIComponent(item.prompt)
  const url = `https://image.pollinations.ai/prompt/${encoded}?width=${item.w}&height=${item.h}&nologo=true&seed=${idx * 17 + 99}&model=flux`

  process.stdout.write(`[${idx + 1}/${total}] ${item.file} ... `)
  try {
    await downloadImage(url, filepath)
    console.log('✓')
  } catch (e) {
    console.log(`✗ ${e.message}`)
  }
  await new Promise(r => setTimeout(r, DELAY))
}

async function main() {
  const missing = images.filter(img => !existsSync(join(OUT, img.file)))
  console.log(`\n🔄  Retry — ${missing.length} çatışmayan şəkil (${DELAY/1000}s fasilə)\n`)

  for (let i = 0; i < images.length; i++) {
    await generate(images[i], i, images.length)
  }

  const total = images.filter(img => existsSync(join(OUT, img.file))).length
  console.log(`\n✅ Tamamlandı! ${total}/${images.length} şəkil hazır.`)
}

main().catch(console.error)
