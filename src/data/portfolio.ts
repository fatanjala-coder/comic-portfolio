/**
 * ============================================================
 *  KONTEN PORTOFOLIO — EDIT SEMUA DI FILE INI
 * ============================================================
 *  Tidak perlu menyentuh komponen untuk:
 *  - mengganti nama, role, tagline, avatar
 *  - menambah / menghapus skill dan proyek
 *  - mengubah pengalaman, email, dan sosial media
 *  - menyembunyikan section lewat objek `sections`
 *
 *  Teks bertanda CONTOH / placeholder boleh diganti dengan
 *  data aslimu. Jangan biarkan data contoh tampil sebagai
 *  pencapaian nyata.
 * ============================================================
 */

export type SectionId = "about" | "skills" | "projects" | "experience" | "contact";

export type IconName =
  | "code"
  | "terminal"
  | "palette"
  | "pen-tool"
  | "gamepad"
  | "wrench"
  | "graduation-cap"
  | "map-pin"
  | "target"
  | "sparkles"
  | "book-open"
  | "layers"
  | "atom"
  | "wind"
  | "file-code"
  | "braces"
  | "brain"
  | "hash"
  | "figma"
  | "component"
  | "mouse-pointer-click"
  | "box"
  | "rocket"
  | "swords"
  | "layout-grid"
  | "git-branch"
  | "package"
  | "users"
  | "mail"
  | "github"
  | "linkedin"
  | "instagram"
  | "check"
  | "layout"
  | "monitor"
  | "smartphone"
  | "zap"
  | "star"
  | "coffee";

export type ProjectCategory = "web" | "uiux" | "game" | "experiment";

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  category: ProjectCategory;
  year: string;
  role: string;
  tech: string[];
  image: string;
  imageAlt: string;
  /** Tandai true selama isinya masih contoh. */
  isPlaceholder: boolean;
  featured?: boolean;
  /** Kosongkan ("") jika tautan belum ada — UI akan menampilkannya sebagai belum tersedia. */
  links: {
    repo?: string;
    demo?: string;
  };
  story: string[];
  highlights: string[];
}

export const sectionOrder: SectionId[] = ["about", "skills", "projects", "experience", "contact"];

export const sectionMeta: Record<
  SectionId,
  { nav: string; issue: string; kicker: string; title: string; description: string }
> = {
  about: {
    nav: "Origin",
    issue: "01",
    kicker: "ORIGIN STORY",
    title: "Siapa di balik panel ini?",
    description:
      "Kenalan dulu dengan sang tokoh utama — latar belakang, rasa penasaran, dan misi yang sedang dijalani.",
  },
  skills: {
    nav: "Skills",
    issue: "02",
    kicker: "POWER GRID",
    title: "Skill tree yang sedang aktif.",
    description:
      "Alat dan kemampuan yang kupakai untuk mengubah ide menjadi antarmuka, aplikasi, dan gim kecil. Tanpa level karangan.",
  },
  projects: {
    nav: "Projects",
    issue: "03",
    kicker: "SELECTED STORIES",
    title: "Panel-panel yang sudah dibuat.",
    description:
      "Kumpulan studi kasus dan eksperimen. Slot bertanda CONTOH disiapkan sebagai format — ganti dengan proyekmu sendiri.",
  },
  experience: {
    nav: "Journey",
    issue: "04",
    kicker: "SIDE QUESTS",
    title: "Perjalanan & pencapaian.",
    description:
      "Rekam jejak organisasi, kegiatan sekolah, dan hal-hal yang sedang dipelajari. Timeline ini siap diisi cerita pertamamu.",
  },
  contact: {
    nav: "Contact",
    issue: "05",
    kicker: "FINAL PANEL",
    title: "Ceritanya belum selesai.",
    description:
      "Punya ide kolaborasi, tugas sekolah, atau sekadar ingin menyapa? Kirim pesan lewat kanal di bawah.",
  },
};

export const portfolio = {
  /** Identitas utama — tampil di hero, header, dan footer. */
  profile: {
    name: "Rakean Fatanjala Drajat",
    logoText: "Ken",
    roles: ["Student Developer", "Frontend Developer", "Game Developer"],
    tagline:
      "Merangkai kode, warna, dan cerita menjadi pengalaman digital yang bisa dimainkan.",
    school: "SMK · PPLG",
    location: "Indonesia",
    availability: "OPEN TO COLLAB & DISCUSSING",
    avatar: "/images/avatar.svg",
    avatarAlt:
      "Ilustrasi komik seorang pelajar dengan kacamata, hoodie biru, dan laptop di depannya.",
    avatarCaption: "THE PROTAGONIST, CAUGHT MID-DEBUG.",
    heroKicker: "A COMIC ABOUT CODE, CURIOSITY & CRAFT",
    coverNote: "ISSUE 001 // ORIGIN",
    startLabel: "START READING",
    projectsLabel: "VIEW MY PROJECTS",
    marquee: [
      "HTML",
      "CSS",
      "JAVASCRIPT",
      "TYPESCRIPT",
      "REACT",
      "NEXT.JS",
      "TAILWIND",
      "FIGMA",
      "GAME DEV",
      "GIT",
      "LARAVEL",
    ],
  },

  /**
   * Tampilkan / sembunyikan section tanpa menghapus kodenya.
   * Navigasi otomatis mengikuti nilai ini.
   */
  sections: {
    about: true,
    skills: true,
    projects: true,
    experience: true,
    contact: true,
  } satisfies Record<SectionId, boolean>,

  about: {
    caption: "PANEL 01 · INT. KAMAR · 21:47",
    lead: "Halo! Aku pelajar SMKN 1 Katapang jurusan PPLG yang percaya bahwa baris kode bisa menjadi cerita.",
    paragraphs: [
      "Aku menikmati proses mengubah ide sederhana menjadi antarmuka yang rapi, lalu menghidupkannya dengan interaksi kecil yang membuat orang ingin mencoba.",
      "Saat ini aku sedang memperdalam frontend development, desain UI/UX, dan game development — sambil membangun proyek kecil untuk belajar hal baru.",
    ],
    quote: "Kalau ada bug, itu bukan kesalahan. Itu plot twist.",
    facts: [
      { icon: "graduation-cap" as IconName, label: "Sekolah", value: "SMKN 1 Katapang jurusan PPLG" },
      { icon: "map-pin" as IconName, label: "Basis", value: "Indonesia" },
      { icon: "target" as IconName, label: "Fokus", value: "Web · UI/UX · Game" },
      { icon: "sparkles" as IconName, label: "Status", value: "Terus belajar" },
    ],
    panels: [
      {
        number: "A",
        icon: "graduation-cap" as IconName,
        title: "Latar Belakang",
        body: "Mulai dari rasa penasaran pada cara sebuah halaman web bekerja. Sekarang belajar lewat kelas, dokumentasi, dan proyek kecil di SMK jurusan PPLG.",
      },
      {
        number: "B",
        icon: "palette" as IconName,
        title: "Yang Bikin Penasaran",
        body: "Tiga hal yang paling sering bikin lupa waktu: menyusun layout, merancang alur antarmuka, dan mencoba mekanik gim kecil.",
      },
      {
        number: "C",
        icon: "target" as IconName,
        title: "Misi Berikutnya",
        body: "Membangun portofolio yang jujur, kolaborasi dengan tim nyata, lalu membuat satu proyek yang benar-benar selesai dari riset sampai rilis.",
      },
    ],
  },

  skills: [
    {
      id: "frontend",
      title: "Frontend Development",
      icon: "layout" as IconName,
      sfx: "ZAP!",
      accent: "blue" as const,
      description: "Menghidupkan desain menjadi antarmuka responsif yang rapi dan nyaman dipakai.",
      items: [
        { name: "HTML & CSS", icon: "file-code" as IconName, note: "Struktur semantik, layout, dan styling." },
        { name: "JavaScript", icon: "braces" as IconName, note: "Logika interaksi dan manipulasi DOM." },
        { name: "React", icon: "atom" as IconName, note: "Komponen UI berbasis state." },
        { name: "Next.js", icon: "layers" as IconName, note: "Routing, rendering, dan struktur aplikasi." },
        { name: "Tailwind CSS", icon: "wind" as IconName, note: "Styling cepat dengan token konsisten." },
      ],
    },
    {
      id: "programming",
      title: "Programming",
      icon: "terminal" as IconName,
      sfx: "BEEP!",
      accent: "paper" as const,
      description: "Dasar pemrograman dan logika yang dipakai untuk memecahkan masalah sehari-hari.",
      items: [
        { name: "TypeScript", icon: "code" as IconName, note: "Tipe data untuk kode yang lebih aman." },
        { name: "Python", icon: "brain" as IconName, note: "Latihan algoritma dan skrip sederhana." },
        { name: "C#", icon: "hash" as IconName, note: "Dasar pemrograman berorientasi objek." },
        { name: "GDScript", icon: "gamepad" as IconName, note: "Skrip untuk prototipe di Godot." },
      ],
    },
    {
      id: "uiux",
      title: "UI/UX Design",
      icon: "palette" as IconName,
      sfx: "INK!",
      accent: "highlight" as const,
      description: "Menyusun alur dan tampilan yang jelas sebelum masuk ke tahap kode.",
      items: [
        { name: "Figma", icon: "figma" as IconName, note: "Wireframe, komponen, dan prototipe." },
        { name: "Wireframing", icon: "pen-tool" as IconName, note: "Menyusun kerangka halaman." },
        { name: "Design System", icon: "component" as IconName, note: "Token warna, tipe, dan komponen." },
        { name: "Prototyping", icon: "mouse-pointer-click" as IconName, note: "Uji alur sebelum implementasi." },
      ],
    },
    {
      id: "game",
      title: "Game Development",
      icon: "gamepad" as IconName,
      sfx: "POW!",
      accent: "blue" as const,
      description: "Eksperimen membuat gim kecil untuk memahami gameplay, feedback, dan ritme.",
      items: [
        { name: "Unity", icon: "box" as IconName, note: "Prototipe 2D dan eksplorasi mekanik." },
        { name: "Godot", icon: "rocket" as IconName, note: "Scene, node, dan skrip gim." },
        { name: "Game Design", icon: "swords" as IconName, note: "Loop permainan dan pengalaman pemain." },
        { name: "Pixel Art", icon: "layout-grid" as IconName, note: "Aset sederhana untuk prototipe." },
      ],
    },
    {
      id: "tools",
      title: "Tools & Technologies",
      icon: "wrench" as IconName,
      sfx: "TAP!",
      accent: "paper" as const,
      description: "Perangkat pendukung untuk menulis, mengelola, dan merilis pekerjaan.",
      items: [
        { name: "Git & GitHub", icon: "git-branch" as IconName, note: "Version control dan kolaborasi." },
        { name: "VS Code", icon: "terminal" as IconName, note: "Editor utama untuk menulis kode." },
        { name: "npm", icon: "package" as IconName, note: "Manajemen dependensi proyek." },
        { name: "Vercel", icon: "rocket" as IconName, note: "Deploy dan preview aplikasi web." },
      ],
    },
  ],

  projectCategories: [
    { id: "all", label: "Semua" },
    { id: "web", label: "Web App" },
    { id: "uiux", label: "UI/UX" },
    { id: "game", label: "Game" },
    { id: "experiment", label: "Eksperimen" },
  ] as const,

  /**
   * PROYEK CONTOH — semua isPlaceholder: true.
   * Ganti judul, deskripsi, gambar, dan tautan dengan proyek aslimu.
   * Kosongkan links.repo / links.demo jika belum ada.
   */
  projects: [
    {
      id: "ruang-baca",
      title: "Ruang Baca",
      subtitle: "Katalog buku yang terasa seperti rak fisik.",
      description:
        "Konsep aplikasi katalog buku dengan pencarian, filter genre, dan halaman detail yang bersih. Dibuat untuk melatih struktur data, komponen reusable, dan layout responsif.",
      category: "web",
      year: "2026",
      role: "Konsep · UI · Frontend",
      tech: ["Next.js", "TypeScript", "Tailwind CSS"],
      image: "/images/projects/ruang-baca.svg",
      imageAlt: "Ilustrasi jendela browser dengan rak buku dan kartu katalog berwarna biru.",
      isPlaceholder: true,
      featured: true,
      links: { repo: "", demo: "" },
      story: [
        "Ruang Baca adalah slot proyek contoh untuk menunjukkan bagaimana sebuah katalog bisa terasa hangat, bukan seperti tabel data. Fokus utamanya ada pada hierarki informasi dan ritme visual.",
        "Di versi nyata, proyek ini bisa dikembangkan dengan data buku dari API, fitur pencarian, serta halaman detail yang menyimpan status baca pengguna.",
      ],
      highlights: [
        "Konsep katalog dengan pencarian dan filter genre.",
        "Komponen kartu buku yang reusable.",
        "Layout responsif dari mobile sampai desktop.",
      ],
    },
    {
      id: "sprout",
      title: "Sprout",
      subtitle: "Habit tracker yang tumbuh bersama kebiasaanmu.",
      description:
        "Eksplorasi desain aplikasi mobile untuk melacak kebiasaan harian. Memakai metafora tanaman untuk memberi umpan balik yang lembut, bukan menekan.",
      category: "uiux",
      year: "2026",
      role: "Riset · UI/UX · Prototipe",
      tech: ["Figma", "Design System", "Prototyping"],
      image: "/images/projects/sprout.svg",
      imageAlt: "Ilustrasi ponsel dengan aplikasi habit tracker dan tanaman di dalam pot.",
      isPlaceholder: true,
      links: { repo: "", demo: "" },
      story: [
        "Sprout berangkat dari pertanyaan sederhana: bagaimana membuat aplikasi kebiasaan yang tidak membuat pengguna merasa bersalah saat melewatkan satu hari?",
        "Solusinya adalah bahasa visual yang lembut, progres yang terlihat, dan ruang untuk memulai lagi. Proyek contoh ini berfokus pada alur onboarding, halaman hari ini, dan statistik mingguan.",
      ],
      highlights: [
        "Alur onboarding dan empty state yang jelas.",
        "Sistem warna, tipe, dan komponen di Figma.",
        "Prototipe interaktif untuk uji alur dasar.",
      ],
    },
    {
      id: "pixel-drift",
      title: "Pixel Drift",
      subtitle: "Endless runner kecil dengan nuansa arcade.",
      description:
        "Prototipe gim 2D bertema balap malam. Fokus pada kontrol sederhana, kecepatan yang meningkat, dan umpan balik visual yang langsung terasa.",
      category: "game",
      year: "2025",
      role: "Game Design · Programming · Art",
      tech: ["Godot", "GDScript", "Pixel Art"],
      image: "/images/projects/pixel-drift.svg",
      imageAlt: "Ilustrasi gim arcade dengan mobil piksel, jalan, dan matahari kuning.",
      isPlaceholder: true,
      links: { repo: "", demo: "" },
      story: [
        "Pixel Drift adalah ruang latihan untuk mekanik inti gim: input, kecepatan, tabrakan, dan loop ulang yang cepat. Semua aset dibuat sederhana agar fokus tetap pada rasa permainan.",
        "Versi berikutnya bisa menambahkan sistem skor, variasi rintangan, dan penyimpanan rekor lokal.",
      ],
      highlights: [
        "Kontrol satu tombol yang mudah dipahami.",
        "Kurva kecepatan dan rintangan bertahap.",
        "HUD skor bergaya arcade.",
      ],
    },
    {
      id: "kasirku",
      title: "Kasirku",
      subtitle: "Dashboard kasir sederhana untuk latihan CRUD.",
      description:
        "Konsep antarmuka point-of-sale untuk usaha kecil: daftar produk, keranjang, ringkasan pembayaran, dan riwayat transaksi dalam satu layar.",
      category: "web",
      year: "2025",
      role: "UI · Frontend",
      tech: ["React", "Vite", "CSS Modules"],
      image: "/images/projects/kasirku.svg",
      imageAlt: "Ilustrasi dashboard kasir dengan struk, grafik batang, dan kartu ringkasan.",
      isPlaceholder: true,
      links: { repo: "", demo: "" },
      story: [
        "Kasirku dibuat sebagai latihan memahami kebutuhan pengguna nyata: kecepatan input, kejelasan total belanja, dan struk yang mudah dibaca.",
        "Proyek contoh ini menampilkan struktur dashboard dan komponen transaksi. Implementasi penuh membutuhkan penyimpanan data, autentikasi, dan penanganan error.",
      ],
      highlights: [
        "Struktur layar kasir yang fokus pada kecepatan.",
        "Komponen ringkasan dan riwayat transaksi.",
        "Eksplorasi tipografi angka yang mudah dipindai.",
      ],
    },
    {
      id: "typo-strike",
      title: "Typo Strike",
      subtitle: "Mini game mengetik melawan waktu.",
      description:
        "Eksperimen gim browser untuk melatih kecepatan mengetik. Setiap kata yang benar memberi combo, setiap kesalahan mengurangi waktu.",
      category: "experiment",
      year: "2025",
      role: "Konsep · Programming",
      tech: ["HTML", "CSS", "JavaScript"],
      image: "/images/projects/typo-strike.svg",
      imageAlt: "Ilustrasi tuts keyboard besar dengan petir biru dan elemen komik.",
      isPlaceholder: true,
      links: { repo: "", demo: "" },
      story: [
        "Typo Strike adalah eksperimen kecil untuk menguji timing, feedback, dan microcopy. Tidak ada library gim — hanya DOM, event keyboard, dan animasi CSS.",
        "Rencana pengembangan mencakup mode kesulitan, kamus kata, dan leaderboard lokal.",
      ],
      highlights: [
        "Mekanik combo dan timer yang langsung terasa.",
        "Animasi feedback untuk jawaban benar dan salah.",
        "Dibuat tanpa library gim tambahan.",
      ],
    },
  ] satisfies Project[],

  experience: {
    intro:
      "Skill yang aku kuasai.",
    items: [
      {
        period: "2024 — SEKARANG",
        title: "Belajar Frontend dari Nol",
        org: "Jalur Mandiri",
        description:
          "Mulai dari HTML & CSS, lanjut ke JavaScript, lalu React dan Next.js. Belajar lewat dokumentasi, latihan kecil, dan memperbaiki error satu per satu.",
        tags: ["HTML", "CSS", "JavaScript", "React"],
        icon: "code" as IconName,
        isPlaceholder: true,
      },
      {
        period: "2025",
        title: "Proyek Kolaborasi Sekolah",
        org: "Tugas Tim · PPLG",
        description:
          "Contoh slot untuk pengalaman bekerja dalam tim: membagi peran, menyatukan komponen, dan belajar memberi serta menerima feedback.",
        tags: ["Kolaborasi", "Git", "Presentasi"],
        icon: "users" as IconName,
        isPlaceholder: true,
      },
      {
        period: "2025 — 2026",
        title: "Eksperimen Gim Mini",
        org: "Proyek Pribadi",
        description:
          "Membuat prototipe gim kecil untuk memahami loop permainan, kontrol, dan umpan balik visual. Setiap prototipe selesai dalam satu akhir pekan.",
        tags: ["Godot", "Game Design", "Pixel Art"],
        icon: "gamepad" as IconName,
        isPlaceholder: true,
      },
    ],
  },

  contact: {
    /** Ganti dengan email aktifmu. */
    email: "fatanjala@gmail.com",
    emailIsPlaceholder: false,
    pitch: "Punya ide proyek, tugas kolaborasi, atau sekadar ingin berkenalan? Kirim pesan — aku senang mendengar cerita baru.",
    responseNote: "Biasanya dibalas dalam 1–2 hari.",
    copyrightNote: "Ditulis, digambar, dan di-debug sendiri.",
    /**
     * Isi `url` dengan tautan profil aslimu.
     * Jika url kosong, kartu tampil sebagai "belum ditautkan"
     * dan tidak bisa diklik (tidak ada tautan palsu).
     */
    socials: [
      {
        label: "GitHub",
        handle: "@fatanjala-coder",
        url: "https://github.com/fatanjala-coder",
        icon: "github" as IconName,
      },
      {
        label: "Instagram",
        handle: "@keanor._",
        url: "https://www.instagram.com/keanor._/",
        icon: "instagram" as IconName,
      },
    ],
  },
};

export type Portfolio = typeof portfolio;
export type SkillGroup = (typeof portfolio.skills)[number];
export type ExperienceItem = (typeof portfolio.experience.items)[number];
export type Social = (typeof portfolio.contact.socials)[number];
