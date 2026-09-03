import { writeFileSync, mkdirSync, existsSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const OUT = join(__dirname, '..', 'public', 'images')

if (!existsSync(OUT)) mkdirSync(OUT, { recursive: true })

const images = [
  // ── HERO ─────────────────────────────────────────────────────────────
  {
    file: 'hero-main.jpg',
    prompt: 'Premium specialty coffee roastery interior, large industrial coffee roasting machine, warm golden lighting, bags of green coffee beans on wooden shelves, modern minimalist design, professional commercial photography, cinematic wide angle',
    w: 1400, h: 900,
  },
  {
    file: 'hero-about.jpg',
    prompt: 'Close up of barista hands pouring freshly roasted coffee beans into roasting drum, steam rising, warm dramatic lighting, professional coffee roasting facility, editorial photography',
    w: 1400, h: 700,
  },
  {
    file: 'hero-b2b.jpg',
    prompt: 'Modern specialty coffee shop interior, professional espresso bar setup, barista preparing drinks, clean minimalist Scandinavian cafe design, commercial photography',
    w: 1400, h: 600,
  },

  // ── QƏHVƏ / COFFEE ───────────────────────────────────────────────────
  {
    file: 'coffee-berry-blend.jpg',
    prompt: 'Berry Blend specialty coffee beans in kraft paper bag, scattered red and purple coffee cherries around, clean white marble surface, soft studio lighting, minimal product photography',
    w: 600, h: 750,
  },
  {
    file: 'coffee-brazil-santos.jpg',
    prompt: 'Brazil Santos coffee beans, dark roasted arabica beans in open kraft bag, Brazilian coffee farm background blur, clean product photography white background',
    w: 600, h: 750,
  },
  {
    file: 'coffee-colombia-decaf.jpg',
    prompt: 'Colombia Decaf coffee bag, green and beige minimalist packaging, coffee beans scattered on white surface, clean studio product shot',
    w: 600, h: 750,
  },
  {
    file: 'coffee-colombia-supremo.jpg',
    prompt: 'Colombia Supremo single origin coffee beans in kraft bag, caramel colored medium roast beans, white marble background, professional product photography',
    w: 600, h: 750,
  },
  {
    file: 'coffee-costa-rica.jpg',
    prompt: 'Costa Rica La Pastore specialty coffee, bright citrus notes visual, coffee beans with tropical fruit accents on white background, clean minimalist product photo',
    w: 600, h: 750,
  },
  {
    file: 'coffee-ethiopia.jpg',
    prompt: 'Ethiopia Yergacheffe light roast coffee beans, floral jasmine and lemon visual, coffee flowers scattered around beans on white background, minimal elegant product photography',
    w: 600, h: 750,
  },
  {
    file: 'coffee-guatemala.jpg',
    prompt: 'Guatemala El Jaguar dark roast coffee beans in kraft paper bag, rich dark chocolate colored beans, minimal white background, professional product photo',
    w: 600, h: 750,
  },
  {
    file: 'coffee-italian-blend.jpg',
    prompt: 'Italian Blend espresso coffee beans, classic dark roast, white espresso cup with crema alongside kraft bag, clean studio lighting white background',
    w: 600, h: 750,
  },
  {
    file: 'coffee-kenya.jpg',
    prompt: 'Kenya AB coffee beans product photo, bright blackcurrant berry notes, kraft bag with Kenyan flag colors, white background, clean minimal commercial photography',
    w: 600, h: 750,
  },
  {
    file: 'coffee-latina-blend.jpg',
    prompt: 'Latina Blend coffee beans mixed Latin American origins, warm caramel tones, kraft bag on white marble, soft natural lighting, product photography',
    w: 600, h: 750,
  },
  {
    file: 'coffee-peru.jpg',
    prompt: 'Peru MCM G1 specialty coffee, nutty sweet profile, medium light roast beans, Peruvian Andes mountain visual, white background clean product shot',
    w: 600, h: 750,
  },

  // ── SİROP / SYRUP ────────────────────────────────────────────────────
  {
    file: 'syrup-pure-line.jpg',
    prompt: 'Pure fruit syrup glass bottles row, tropical colors red orange yellow green, clean white studio background, professional beverage product photography',
    w: 600, h: 750,
  },
  {
    file: 'syrup-banana.jpg',
    prompt: 'Banana flavor syrup bottle with fresh bananas, yellow tropical, white background clean product photography, professional commercial shot',
    w: 600, h: 750,
  },
  {
    file: 'syrup-berries.jpg',
    prompt: 'Mixed berries syrup bottle, red purple deep colors, fresh berries scattered around bottle, white background, commercial product photography',
    w: 600, h: 750,
  },
  {
    file: 'syrup-almond.jpg',
    prompt: 'Almond flavored coffee syrup bottle, professional barista syrup, clean glass bottle, almonds beside it, white background minimal product shot',
    w: 600, h: 750,
  },
  {
    file: 'syrup-caramel.jpg',
    prompt: 'Caramel coffee syrup bottle, golden amber color, caramel drizzle, white background, professional barista product photography',
    w: 600, h: 750,
  },
  {
    file: 'syrup-vanilla.jpg',
    prompt: 'Vanilla coffee syrup bottle, vanilla bean pod beside it, clean white background, soft light, minimal product photography',
    w: 600, h: 750,
  },

  // ── ÇAY / TEA ────────────────────────────────────────────────────────
  {
    file: 'tea-english-breakfast.jpg',
    prompt: 'English Breakfast black tea in kraft box, brewed dark tea in cup, white minimal background, clean product photography',
    w: 600, h: 750,
  },
  {
    file: 'tea-earl-grey.jpg',
    prompt: 'Earl Grey bergamot tea, dried bergamot beside tea box, soft light, white background, minimal tea product photography',
    w: 600, h: 750,
  },
  {
    file: 'tea-green-sencha.jpg',
    prompt: 'Japanese Sencha green tea leaves in white ceramic bowl, fresh green color, clean minimal white background, studio product photography',
    w: 600, h: 750,
  },
  {
    file: 'tea-matcha.jpg',
    prompt: 'Premium matcha green tea powder, bright vibrant green, small wooden scoop, white background, minimal Japanese aesthetic product photography',
    w: 600, h: 750,
  },
  {
    file: 'tea-peppermint.jpg',
    prompt: 'Fresh peppermint herbal tea, green mint leaves, clear white background, refreshing clean minimal product photo',
    w: 600, h: 750,
  },
  {
    file: 'tea-chamomile.jpg',
    prompt: 'Chamomile flower herbal tea, dried chamomile flowers, warm white minimal background, soft lighting, product photography',
    w: 600, h: 750,
  },

  // ── AVADANLIQ / EQUIPMENT ────────────────────────────────────────────
  {
    file: 'equipment-bianca-s22.jpg',
    prompt: 'Lelit Bianca espresso machine, silver black professional home espresso machine, white background, clean product photography, side view',
    w: 600, h: 750,
  },
  {
    file: 'equipment-brikka.jpg',
    prompt: 'Bialetti Brikka moka pot 4 cup, shiny aluminum italian coffee maker, white background, clean minimal product photography',
    w: 600, h: 750,
  },
  {
    file: 'equipment-grinder-c2.jpg',
    prompt: 'Timemore C2 manual coffee grinder white, slim portable hand grinder, white background, clean minimal product shot',
    w: 600, h: 750,
  },
  {
    file: 'equipment-grinder-go.jpg',
    prompt: 'Premium portable manual coffee grinder titanium, compact cylindrical design, white background, clean product photography',
    w: 600, h: 750,
  },
  {
    file: 'equipment-hand-grinder.jpg',
    prompt: 'Classic manual coffee hand grinder, adjustable burr grinder, white background, clean simple product photography',
    w: 600, h: 750,
  },
  {
    file: 'equipment-cold-brewer.jpg',
    prompt: 'Glass cold brew tower drip coffee maker, elegant glass construction, white background, clean minimal product photography',
    w: 600, h: 750,
  },
  {
    file: 'equipment-coffee-pot.jpg',
    prompt: 'Gooseneck pour over coffee kettle, matte black slim design, white background, minimal product photography',
    w: 600, h: 750,
  },
  {
    file: 'equipment-filter-paper.jpg',
    prompt: 'Coffee filter papers in box, white natural paper filters, clean white background, simple product photography',
    w: 600, h: 750,
  },
  {
    file: 'equipment-iris-s27.jpg',
    prompt: 'Red espresso machine home, compact super automatic espresso machine red color, white background, clean product photography',
    w: 600, h: 750,
  },

  // ── KİMYƏVİ / CHEMICALS ──────────────────────────────────────────────
  {
    file: 'chem-descaler.jpg',
    prompt: 'Espresso machine descaler cleaning solution bottle, professional coffee equipment cleaner, white minimal background, product photography',
    w: 600, h: 750,
  },
  {
    file: 'chem-milk-cleaner.jpg',
    prompt: 'Milk system cleaner bottle for espresso machines, professional cleaning product, white background, clean product shot',
    w: 600, h: 750,
  },
  {
    file: 'chem-group-cleaner.jpg',
    prompt: 'Coffee group head cleaning powder container, professional barista cleaning product, white background, minimal product photography',
    w: 600, h: 750,
  },
  {
    file: 'chem-tablets.jpg',
    prompt: 'Espresso machine cleaning tablets in package, white tablets, professional cleaning product for coffee machines, white background',
    w: 600, h: 750,
  },
  {
    file: 'chem-blind-filter.jpg',
    prompt: 'Coffee machine blind filter kit, metal disk backflush filter, professional barista tool, white background clean product photo',
    w: 600, h: 750,
  },

  // ── BLOG ────────────────────────────────────────────────────────────
  {
    file: 'blog-specialty.jpg',
    prompt: 'Specialty coffee cupping session, professional tasting, coffee cups with beans beside, warm editorial photography',
    w: 700, h: 450,
  },
  {
    file: 'blog-pourover.jpg',
    prompt: 'Pour over coffee brewing V60, barista pouring hot water slowly, steam, editorial photography warm tones',
    w: 700, h: 450,
  },
  {
    file: 'blog-coldbrew.jpg',
    prompt: 'Cold brew coffee drip tower, iced coffee in glass, summer editorial photography, cool tones',
    w: 700, h: 450,
  },
  {
    file: 'blog-ethiopia.jpg',
    prompt: 'Ethiopian coffee origin, coffee cherries on tree, lush green landscape, editorial travel photography',
    w: 700, h: 450,
  },
  {
    file: 'blog-machine.jpg',
    prompt: 'Espresso machine maintenance cleaning, barista cleaning portafilter, professional cafe setting, editorial photography',
    w: 700, h: 450,
  },
  {
    file: 'blog-syrups.jpg',
    prompt: 'Colorful syrup cocktails drinks with fresh fruits, summer drinks, editorial photography vibrant colors',
    w: 700, h: 450,
  },
]

async function downloadImage(url, filepath) {
  const res = await fetch(url)
  if (!res.ok) throw new Error(`HTTP ${res.status}`)
  const buf = await res.arrayBuffer()
  writeFileSync(filepath, Buffer.from(buf))
}

async function generate(item, idx, total) {
  const encoded = encodeURIComponent(item.prompt)
  const url = `https://image.pollinations.ai/prompt/${encoded}?width=${item.w}&height=${item.h}&nologo=true&seed=${idx * 13 + 42}&model=flux`
  const filepath = join(OUT, item.file)

  process.stdout.write(`[${idx + 1}/${total}] ${item.file} ... `)
  try {
    await downloadImage(url, filepath)
    console.log('✓')
  } catch (e) {
    console.log(`✗ ${e.message}`)
  }
  // Pollinations-da rate limit yoxdur amma kiçik fasilə qoyuruq
  await new Promise(r => setTimeout(r, 800))
}

async function main() {
  console.log(`\n🖼  FineCup Image Generator — ${images.length} şəkil\n`)
  console.log(`Çıxış qovluğu: ${OUT}\n`)

  for (let i = 0; i < images.length; i++) {
    await generate(images[i], i, images.length)
  }

  console.log('\n✅ Tamamlandı!')
  console.log(`Bütün şəkillər: ${OUT}`)
}

main().catch(console.error)
