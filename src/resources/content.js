import { Logo } from "@once-ui-system/core";

const person = {
  firstName: "Muhammad Azharuddin",
  lastName: "Hamid",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Informatics Engineer",
  avatar: "/images/avatar.png",
  email: "muhammadazharuddinhamid@gmail.com",
  location: "Asia/Jakarta", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Bahasa"], // optional: Leave the array empty if you don't want to display languages
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/MuhammadAzhar9",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/muhammad-azharuddin-hamid/",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Bukan tentang seberapa cepat kamu sampai, tapi seberapa jauh kamu mau melangkah.</>,
  subline: (
    <>
      Saya Azhar mahasiswa Teknik Informatika di Politeknik Negeri Bandung yang tertarik dengan
      <strong> pengembangan perangkat lunak</strong>.
    </>
  ),
};

const about = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Perkenalan",
    description: (
      <>
        Mahasiswa Teknik Informatika yang termotivasi dengan keahlian kuat dalam pengembangan perangkat lunak. 
        Berpengalaman sebagai anggota tim inti dalam proyek pengembangan sistem informasi kampus yang berhasil diimplementasikan. 
        Siap berkontribusi secara signifikan sebagai Junior Developer dan memperdalam keahlian di lingkungan profesional yang dinamis.
      </>
    ),
  },
  personaldata: {
    display: true, // set to false to hide this section
    title: "Biodata Pribadi",
    institutions: [
      {
        name: "Nama Lengkap",
        description: <>Muhammad Azharuddin Hamid</>,
      },
      {
        name: "Nama Panggilan",
        description: <>Azhar</>,
      },
      {
        name: "Alamat",
        description: <>Jln. Barokah II No.24 RT 01/RW 016 Kel. Perwira, Kec. Bekasi Utara, Kota Bekasi</>,
      },
      {
        name: "Nomer Telepon/HP",
        description: <>085882565983</>,
      },
      {
        name: "Email",
        description: <>muhammad.azharuddin.tif422@polban.ac.id</>,
      },
      {
        name: "Jenis Kelamin",
        description: <>Laki-laki</>,
      },
      {
        name: "Tempat, Tanggal Lahir",
        description: <>Bekasi, 27 September 2003</>,
      },
      {
        name: "Agama",
        description: <>Islam</>,
      },
      {
        name: "Status",
        description: <>Mahasiswa / Belum Kawin</>,
      },
      {
        name: "Kewarganegaraan",
        description: <>Warga Negara Indonesia (WNI)</>,
      },
    ],
  },
  education: {
    display: true, // set to false to hide this section
    title: "Jenjang Pendidikan",
    experiences: [
      {
        institution: "Politeknik Negeri Bandung",
        timeframe: "2022 - Sekarang ",
        role: "Jurusan Teknik Informatika",
        achievements: [],
        images: [],
      },
      {
        institution: "SMK Negeri 1 Kota Bekasi",
        timeframe: "2019 - 2022 ",
        role: "Jurusan Teknik Komputer dan Jaringan",
        achievements: [],
        images: [],
      },
      {
        institution: "SMP Negeri 5 Kota Bekasi",
        timeframe: "2016 - 2019 ",
        achievements: [],
        images: [],
      },
      {
        institution: "SD Negeri Perwira III ",
        timeframe: "2010 - 2016",
        achievements: [],
        images: [],
      },
    ],
  },
  organization: {
    display: true, // set to false to hide this section
    title: "Pengalaman Organisasi",
    experiences: [
      {
        company: "SD Negeri Perwira III ",
        timeframe: "2010 - 2016",
        role: "Senior Design Engineer",
        achievements: [
          <>
            Redesigned the UI/UX for the FLY platform, resulting in a 20% increase in user
            engagement and 30% faster load times.
          </>,
          <>
            Spearheaded the integration of AI tools into design workflows, enabling designers to
            iterate 50% faster.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Creativ3",
        timeframe: "2018 - 2022",
        role: "Lead Designer",
        achievements: [
          <>
            Developed a design system that unified the brand across multiple platforms, improving
            design consistency by 40%.
          </>,
          <>
            Led a cross-functional team to launch a new product line, contributing to a 15% increase
            in overall company revenue.
          </>,
        ],
        images: [],
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Figma",
        description: <>Able to prototype in Figma with Once UI with unnatural speed.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-03.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Next.js",
        description: <>Building next gen apps with Next.js + Once UI + Supabase.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

const work = {
  path: "/portofolio",
  label: "Portofolio",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /portofolio routes
};



export { person, social, home, about, work };
