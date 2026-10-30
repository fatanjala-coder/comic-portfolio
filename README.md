# Portfolio Comic 🗯️

Website portofolio pribadi bertema **komik interaktif** untuk pelajar SMK jurusan PPLG. Dibuat dengan Next.js App Router, React, TypeScript, Tailwind CSS, Motion, dan Lucide.

Desain memakai panel bergaris tebal, halftone, tekstur kertas, speech bubble, caption box, serta aksen biru di atas off-white. Seluruh konten dipisahkan dari komponen agar mudah diganti.

---

## Menjalankan proyek

```bash
# di folder comic-portfolio
npm install
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000).

Perintah lain:

```bash
npm run lint       # ESLint
npm run typecheck  # TypeScript tanpa emit
npm run build      # production build
npm run start      # jalankan hasil build
```

> `next/font/google` mengunduh font saat build pertama. Pastikan ada koneksi internet.

---

## Yang sudah berfungsi

- Hero cover dengan animasi masuk dan avatar yang bisa diganti.
- Smooth scrolling + scroll-spy navigation (desktop & mobile).
- Menu mobile full-screen dengan fokus terkunci dan tombol Escape.
- Panel About, Skills, Projects, Experience, dan Contact.
- Filter proyek berdasarkan kategori dengan animasi masuk.
- Modal detail proyek: fokus terkunci, ESC untuk menutup, klik backdrop, dan navigasi proyek sebelumnya/berikutnya.
- Tombol salin email dengan feedback dan fallback clipboard.
- Back-to-top, hover panel, sound-effect typography, marquee, dan efek komik lain.
- `prefers-reduced-motion` untuk mematikan animasi dan parallax.
- Halaman 404 bergaya komik, metadata SEO, ikon situs, dan Open Graph image.

---

## Kustomisasi cepat

### 1. Nama, role, tagline, avatar

Edit `src/data/portfolio.ts` bagian `profile`.

```ts
name: "Nama Kamu",
logoText: "NK",                 // 2 huruf untuk logo header & kartu karakter
roles: ["Student Developer", "Frontend Developer", "Game Developer"],
tagline: "Tagline kreatifmu...",
avatar: "/images/avatar.svg",   // ganti file di public/images
```

Nama di hero otomatis dipecah menjadi dua baris: kata terakhir diberi aksen biru. Tidak perlu mengubah layout.

### 2. Warna, font, border, radius, shadow

Semua token ada di `src/config/theme.ts`:

```ts
export const theme = {
  colors: {
    paper: "#F2EBDD",
    ink: "#15130F",
    accent: "#2453F0",
    // ...
  },
  // ...
};
```

Nilai tersebut diinjeksi sebagai CSS variables di `src/app/layout.tsx`, lalu dipakai Tailwind dan komponen. Cukup ubah warna di satu file untuk rebranding.

### 3. Menyembunyikan section

Di `src/data/portfolio.ts`:

```ts
sections: {
  about: true,
  skills: true,
  projects: true,
  experience: false, // section & link navigasinya ikut hilang
  contact: true,
},
```

### 4. Menambah / mengganti proyek

Tambahkan objek baru ke array `projects`:

```ts
{
  id: "nama-unik-proyek",
  title: "Judul Proyek",
  subtitle: "Satu kalimat pendek.",
  description: "Deskripsi singkat...",
  category: "web",              // web | uiux | game | experiment
  year: "2026",
  role: "Frontend Developer",
  tech: ["Next.js", "TypeScript"],
  image: "/images/projects/proyek-baru.svg",
  imageAlt: "Deskripsi gambar untuk pembaca layar.",
  isPlaceholder: false,         // badge CONTOH akan hilang
  featured: false,              // satu proyek bisa jadi kartu besar
  links: {
    repo: "https://github.com/username/repo",
    demo: "https://demo-kamu.vercel.app",
  },
  story: ["Paragraf studi kasus pertama.", "Paragraf kedua."],
  highlights: ["Hal yang dikerjakan.", "Hasil atau fokus proyek."],
}
```

- Kategori filter berasal dari `projectCategories`. Tambahkan kategori baru di sana jika perlu.
- `links.repo` / `links.demo` boleh dikosongkan. UI akan menampilkan status “belum tersedia”, bukan tombol palsu.
- Proyek contoh yang ada **sengaja** ditandai `isPlaceholder: true` dan badge **CONTOH**. Ganti sebelum dipublikasikan.

### 5. Gambar

Semua gambar ada di:

```text
public/images/
├─ avatar.svg
└─ projects/
   ├─ ruang-baca.svg
   ├─ sprout.svg
   ├─ pixel-drift.svg
   ├─ kasirku.svg
   └─ typo-strike.svg
```

Ganti file dengan nama yang sama (SVG) atau ubah path di `portfolio.ts`. Untuk JPG/PNG/WebP, cukup ubah ekstensi path dan hapus prop `unoptimized` pada komponen gambar jika ingin optimasi Next.js.

### 6. Skills

Edit array `skills`. Setiap grup punya `title`, `description`, `icon`, `sfx`, `accent`, dan daftar `items`. Nama ikon harus salah satu dari `IconName` di file data (sudah dipetakan di `src/components/ui/Icon.tsx`). Tidak ada level kemahiran atau sertifikasi karangan.

### 7. Experience & achievements

Edit `experience.items`. Setiap kartu punya `period`, `title`, `org`, `description`, `tags`, `icon`, dan `isPlaceholder`. Hapus badge contoh dengan mengubah `isPlaceholder` ke `false` setelah data asli diisi.

### 8. Kontak & sosial media

Edit bagian `contact`:

```ts
email: "emailkamu@example.com",
emailIsPlaceholder: false,
socials: [
  {
    label: "GitHub",
    handle: "@username",
    url: "https://github.com/username",
    icon: "github",
  },
],
```

Jika `url` kosong, kartu sosial **tidak bisa diklik** dan menampilkan “Belum ditautkan”. Ini mencegah tautan palsu.

### 9. Metadata, ikon, robots & sitemap

- Metadata: `src/app/layout.tsx`
- URL publik situs: `src/config/site.ts` (atau env `NEXT_PUBLIC_SITE_URL`)
- Ikon tab: `src/app/icon.svg`
- Open Graph image: `src/app/opengraph-image.tsx`
- Robots: `src/app/robots.ts`
- Sitemap: `src/app/sitemap.ts`

Sebelum deploy, ganti `siteUrl` di `src/config/site.ts` dengan domain aslimu, atau set environment variable:

```bash
NEXT_PUBLIC_SITE_URL=https://domain-kamu.com
```

Nilai ini dipakai untuk `metadataBase`, Open Graph, `robots.txt`, dan `sitemap.xml`.

---

## Struktur file

```text
src/
├─ app/
│  ├─ layout.tsx          # font, tema, header, footer, metadata
│  ├─ page.tsx            # komposisi seluruh section
│  ├─ globals.css         # Tailwind + tekstur & komponen visual
│  ├─ not-found.tsx       # 404 komik
│  ├─ robots.ts           # robots.txt
│  ├─ sitemap.ts          # sitemap.xml
│  ├─ icon.svg
│  └─ opengraph-image.tsx
├─ components/
│  ├─ layout/             # header, footer, ticker, back-to-top
│  ├─ sections/           # hero, about, skills, projects, experience, contact
│  └─ ui/                 # panel, button, bubble, caption, heading, reveal, icon
├─ config/theme.ts        # palet & token visual
├─ config/site.ts         # URL publik untuk metadata, robots, sitemap
├─ data/portfolio.ts      # SEMUA konten
└─ lib/utils.ts
public/images/            # avatar & thumbnail proyek
```

---

## Catatan desain & aksesibilitas

- Palet: off-white, ink, biru aksen; kuning hanya sebagai spot color.
- Heading memakai Archivo Black, body Space Grotesk, aksen tangan Permanent Marker.
- Semua gambar memiliki alt text; ikon dekoratif diberi `aria-hidden`.
- Tombol filter memakai `aria-pressed`; modal memakai `role="dialog"`, `aria-modal`, focus trap, dan mengembalikan fokus ke pemicu.
- Tidak ada tombol dekoratif tanpa fungsi. Elemen sosial tanpa URL sengaja tidak dapat diklik.
- `prefers-reduced-motion` menonaktifkan marquee, reveal, floating badge, dan transisi.
- Layout diuji untuk desktop, laptop, tablet, dan smartphone (termasuk pencegahan horizontal overflow).

---

## Data placeholder

Data berikut **sengaja berupa contoh** dan harus diganti sebelum dipakai serius:

- Nama `Nama Kamu`, inisial `NK`, lokasi, email, dan handle sosial.
- Lima proyek contoh (`isPlaceholder: true`).
- Tiga pengalaman contoh (`isPlaceholder: true`).
- Teks misi dan pencapaian yang belum diverifikasi.

Tidak ada tautan GitHub/LinkedIn/Instagram palsu yang aktif dan tidak ada klaim sertifikasi/level skill.
