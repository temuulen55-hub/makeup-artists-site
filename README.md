# Сараа Makeup — Next.js Scaffold

Энэ нь техникийн тодорхойлолтод (blueprint) үндэслэсэн Phase 1 scaffold.

## Эхлэх

```bash
npm install
cp .env.local.example .env.local   # утгуудыг бөглөнө
npm run dev
```

## Файлын байгуулалт ба blueprint-ийн уялдаа

| Файл/Хавтас | Blueprint-ийн хэсэг |
|---|---|
| `app/layout.tsx` | §2 Навигацийн логик, Header/Footer global wrap |
| `components/layout/Header.tsx` | §2 "Header (Sticky)", тогтмол "Захиалга өгөх" товч |
| `components/layout/MobileNav.tsx` | §2 "Mobile: Hamburger menu" |
| `components/layout/MobileStickyBar.tsx` | §2 "доод хэсэгт floating Захиалах товч" |
| `components/layout/Footer.tsx` | §3.4 Footer, §7.9 Footer текст |
| `tailwind.config.ts` | §5.1 Өнгөний палет, §5.2 Типографи |
| `lib/googleCalendar.ts` | §3.2 Захиалгын систем — Google Calendar sync, давхар захиалгаас сэргийлэлт |
| `lib/instagram.ts` | §3.1 Instagram Integration (Graph API — Basic Display биш, доор тайлбарласан) |
| `app/api/booking/route.ts` | §3.2 Захиалгын Flow алхам 4 |
| `app/api/instagram/route.ts` | §3.1 server-side fetch + 1 цагийн кэш |
| `app/api/ics/route.ts` | §4.2 "Календарьт нэмэх" товч |
| `app/{route}/page.tsx` | §2 Site Map-ийн бүх хуудас (одоогоор stub) |

## Дараагийн алхам (Phase 2-5)

Хуудас бүрийг §7-д заасан heading/placeholder-уудаар дүүргэх, Sanity/Contentful
CMS холбох, `react-compare-slider`-аар Before/After slider хийх, QPay/SocialPay
төлбөрийн интеграц нэмэх.
