export type BlogPost = {
  id: number
  slug: string
  title: string
  excerpt: string
  content: string
  date: string
  category: string
  image: string
  readTime: string
}

export const posts: BlogPost[] = [
  {
    id: 1,
    slug: 'specialty-qehve-nedir',
    title: 'Specialty Qəhvə Nədir?',
    excerpt: 'Specialty qəhvə anlayışı, qiymətləndirmə sistemi, mənşə ölkələri və adi qəhvədən fərqi haqqında.',
    date: '12 İyul 2025',
    category: 'Qəhvə mədəniyyəti',
    image: '/images/fc-beans-tray.jpg',
    readTime: '5 dəq',
    content: `Specialty qəhvə — sadəcə premium bir brendin adı deyil. Bu, SCA (Specialty Coffee Association) tərəfindən 80 bal və ya daha yüksək qiymət almış qəhvəyə verilən rəsmi termindir.

## Qiymətləndirmə Sistemi

SCA-nın Q-Grader sertifikatlı ekspertləri hər partiyanı 100 ballıq sistemlə qiymətləndirir:

- **Aromatika** — qurudulmuş və dəmlənmiş qəhvənin qoxusu
- **Tat** — damaqda hiss olunan ilk impresiya
- **Son tat** — içkinin damaqda qalan izləri
- **Turşuluq** — canlılıq, parlaq, ya da kəskin
- **Bədən** — içkinin ağırlığı və fakturası
- **Balans** — bütün elementlərin harmoniyası
- **Uniformluq** — fincanlararası ardıcıllıq
- **Şirinlik** — təbii şəkər notu

## Adi Qəhvədən Fərqi

Kommersiya qəhvəsi çox vaxt intensiv qovrulma ilə qüsurları gizlətmək üçün hazırlanır. Specialty isə mənşəyə hörmətlə yanaşır — hər dənənin öz hekayəsi var.

Fine Cup olaraq biz yalnız specialty dərəcəli arabika partiyaları seçirik. Hər lot, Efiopiya dağlarından Bakı anbarımıza qədər izlənilir.`,
  },
  {
    id: 2,
    slug: 'evde-pour-over',
    title: 'Evdə Pour Over Dəmləmə',
    excerpt: 'V60 ilə əla qəhvə dəmləmək üçün addım-addım təlimat. Su temperaturu, öğütmə dərəcəsi, zaman.',
    date: '5 İyul 2025',
    category: 'Dəmləmə üsulları',
    image: '/images/fc-pour.jpg',
    readTime: '7 dəq',
    content: `Pour over — filtr qəhvəsinin ən dəqiq, ən zövqlü formasıdır. V60 ilə hazırlanan bir fincan, bütün tat notlarını tamamilə açır.

## Lazımlı avadanlıq

- Hario V60 dəmləyici (size 02 tövsiyə olunur)
- Kağız filtr (Filtropa və ya Hario)
- Tərəzi (0.1q dəqiqliyindəklə)
- Uzun burunlu qaynadıcı (Gooseneck kettle)
- Taymer

## Resept (1 fincan)

**Qəhvə:** 15q
**Su:** 250ml (93-95°C)
**Öğütmə:** Orta-xırda (tuz dənəsi boyda)
**Vaxt:** 2:30 - 3:00 dəq

## Addım-addım

1. Filteri isti su ilə yaxalayın (kağız dadını aradan qaldırır)
2. 15q qəhvəni tökün, tərəzini sıfırlayın
3. **Bloom:** 30ml su, 30 saniyə gözləyin
4. Dairəvi hərəkətlə 130ml əlavə edin
5. 60 saniyədə 250ml-ə çatdırın
6. Damcılar bitəndə serviz edin

## Məsləhətlər

- Su çox isti olsa (98°C+) acılaşır
- Öğütmə qaba olsa — çox tez ötər, zəif olar
- Bloom zamanı köpüklənmə — qəhvənin təzəliyini göstərir`,
  },
  {
    id: 3,
    slug: 'cold-brew-hazirlamaq',
    title: 'Soyuq Dəmləmə (Cold Brew) Hazırlamaq',
    excerpt: 'Evdə cold brew qəhvə hazırlamağın ən yaxşı üsulu. 12-24 saatlıq dəmləmə prosesi.',
    date: '28 İyun 2025',
    category: 'Dəmləmə üsulları',
    image: '/images/fc-latte-dark.jpg',
    readTime: '4 dəq',
    content: `Cold brew — soyuq su ilə uzun müddətli infuziya. Turşuluq minimaldır, şirinlik maksimaldır. Yay aylarının ən gözəl içkisi.

## Niyə Cold Brew?

İsti su qəhvənin turş birləşmələrini də ekstrakt edir. Soyuq su yalnız şirin, karamel notlarını çıxarır. Nəticə: hamar, az turş, uzun müddətli saxlanıla bilən konsentrat.

## Resept (1 litr konsentrat)

**Qəhvə:** 100q (qaba öğütmə)
**Su:** 800ml (otaq temperaturu və ya soyuq)
**Vaxt:** 12-18 saat (soyuducuda)

## Hazırlanması

1. Qaba öğüdülmüş qəhvəni geniş qaba tökün
2. Soyuq su əlavə edin, qarışdırın
3. Kağız filtr və ya çay süzgəci ilə örtün
4. Soyuducuda 12-18 saat saxlayın
5. Süzün (iki dəfə süzmək tövsiyə olunur)

## Serviz

Konsentratı 1:1 oranında su ilə duruldun. Üzərinə buz əlavə edin. İstəsəniz süd və ya bitki südü əlavə edə bilərsiniz.

Soyuducuda 2 həftəyə qədər saxlanılır.`,
  },
  {
    id: 4,
    slug: 'qehve-menshei-etiopia',
    title: 'Qəhvənin Vətəni: Efiopiya',
    excerpt: 'Efiopiya - qəhvənin mənşə yeri. Yergacheffe, Sidama, Guji bölgələrinin unikal tatları.',
    date: '20 İyun 2025',
    category: 'Mənşə ölkələri',
    image: '/images/fc-sacks.jpg',
    readTime: '6 dəq',
    content: `Efiopiya — qəhvənin doğulduğu yer. Legenda belədir: Kaldi adlı çoban öz keçilərinin qırmızı giləmeyvəni yedikdən sonra gecə yatmadığını görür. Bu kəşf — dünya mədəniyyətini dəyişdi.

## Əsas Bölgələr

### Yergacheffe
Efiopiyanın ən məşhur bölgəsi. Çiçəkli, çay kimi yüngül, jasmin və bergamot notları. Fine Cup kolleksiyamızda Ethiopia Yergacheffe G1 var.

### Sidama
Daha meyvəli, giləmeyvə notları. Orta bədən, canlı turşuluq. Washed (yuyulmuş) proses üçün klassik bölgə.

### Guji
Natural proses üçün idealdır. Çiyələk, qara moruq, şokolad. Intensiv, şirin aromalar.

### Jimma
Kommersiya qəhvəsinin mərkəzi. Daha ağır, torpaq notları. Blend üçün istifadə olunur.

## Proses Növləri

**Washed (yuyulmuş):** Meyvə qabığı dərhal çıxarılır. Daha təmiz, çiçəkli tat.

**Natural (natural):** Meyvə qurudulur. Daha şirin, intensiv, fermentasiya notları.

**Honey:** Aralıq proses. Balans.

Fine Cup-da Efiopiya qəhvəsi həmişə stokdadır.`,
  },
  {
    id: 5,
    slug: 'espresso-masin-baximi',
    title: 'Espresso Maşınınızın Baxımı',
    excerpt: 'Espresso maşınını necə düzgün təmizləmək, descaler istifadəsi, filter baxımı.',
    date: '15 İyun 2025',
    category: 'Texniki baxım',
    image: '/images/fc-roaster-panel.jpg',
    readTime: '8 dəq',
    content: `Espresso maşını düzgün baxılmasa, qəhvənin dadı zərər görür. Təmizlik — keyfiyyətin şərtidir.

## Gündəlik Baxım

- Hər istifadədən sonra portafiltr silkin
- Buxar çubuğunu dərhal silin
- Damcı tepsisini boşaldın
- Qrup başlığını isti su ilə yuyun

## Həftəlik Baxım

**Backflush (əks yuma):**
1. Kor filtr taxın portafiltrinə
2. 1 çay qaşığı Group Head Cleaner əlavə edin
3. 10 saniyə pompa işlət, 10 saniyə dayan
4. 5-7 dəfə təkrar edin
5. Kor filtrsiz isti su ilə yuyun

## Aylıq Baxım

**Descaling (əhəng təmizlənməsi):**
1 litr suya 30ml Descaler əlavə edin
Maşının descale proqramını işə salın (manual üçün bax: maşın kitabçası)

**Filtr dəyişimi:**
Su filtri aylıq və ya hər 200L-dən bir dəyişilməlidir.

## Əlamətlər: Nə vaxt baxım lazımdır?

- Espresso çox tez axırsa → portafiltr kirlidir
- Maşın gurultu çıxarırsa → su filtri tıxanıb
- Krem yoxdursa → qrup başlığı kirlidir

Fine Cup-da bütün kimyəvi maddələr mövcuddur.`,
  },
  {
    id: 6,
    slug: 'sirop-kokteyller',
    title: 'Barista Siropları ilə Kokteyllər',
    excerpt: 'Pure meyvə siropları ilə ev şəraitində barista səviyyəli içkilər hazırlamaq üçün reseptlər.',
    date: '8 İyun 2025',
    category: 'Reseptlər',
    image: '/images/fc-hazelnut-syrup.jpg',
    readTime: '5 dəq',
    content: `Fine Cup siropları — 100% təbii meyvə konsentratları. Süni rəng yoxdur, süni ətir yoxdur. Bu siroplarla evdə peşəkar içkilər hazırlamaq asandır.

## Yay Limonadı (2 porsiya)

**Lazımlı:**
- 60ml Pure Lemon sirop
- 40ml Pure Passion Fruit sirop
- 400ml soda su
- Buz

**Hazırlanması:** Siropları stəkana tökün, üzərinə buz əlavə edin, soda su ilə tamamlayın. Limon dilimi ilə bəzəyin.

## İstiqal Iced Latte

**Lazımlı:**
- 30ml Syrup Vanilla
- 60ml double espresso (soyudulmuş)
- 150ml süd
- Buz

**Hazırlanması:** Buz üzərinə vanilya siropunu tökün, espressonu əlavə edin, südü yavaş-yavaş tökün.

## Strawberry Matcha

**Lazımlı:**
- 2 çay qaşığı Matcha Premium
- 30ml Pure Mix Berries sirop
- 200ml soyuq süd

**Hazırlanması:** Matçanı az isti su ilə çalkalayın, sirop əlavə edin, soyuq südü üzərinə tökün.

## Karamel Kold Bru

**Lazımlı:**
- 150ml cold brew konsentrat (1:1 sulandırılmış)
- 20ml Syrup Caramel
- Buz, süd

**Hazırlanması:** Hamısını qarışdırın, buz üzərinə servis edin.`,
  },
]

export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug)
}
