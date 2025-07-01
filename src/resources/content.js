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
        Mahasiswa Teknik Informatika yang termotivasi dengan keahlian dalam pengembangan perangkat lunak. 
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
  organizationalExperience: {
    display: true, // set to false to hide this section
    title: "Pengalaman Organisasi",
    experiences: [
      {
        organization: "Majelis Perwakilan Mahasiswa (MPM) Politeknik Negeri Bandung",
        timeframe: "2022 - 2023",
        role: "Staf Muda Komisi 3 Pengawasan",
        achievements: [
          <>
            Melakukan pengawasan terhadap kinerja dari Badan Eksekutif Mahasiswa Politeknik Negeri Bandung agar sesuai dengan
            peraturan yang berlaku. 
          </>,
        ],
        images: [
          {
            src: "/images/organization/staffmuda-mpm.png",
            alt: "Sertifikat Staff Muda MPM",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        organization: "Majelis Perwakilan Anggota (MPA) Himpunan Mahasiswa Komputer Politeknik Negeri Bandung",
        timeframe: "2022 - 2023",
        role: "Staf Muda Komisi Pengawasan",
        achievements: [
          <>
            Melakukan pengawasan terhadap kinerja dari Badan Eksekutif Himpunan Mahasiswa Komputer Politeknik Negeri Bandung agar sesuai dengan
            peraturan yang berlaku.
          </>,

        ],
        images: [],
      },
      {
        organization: "Majelis Perwakilan Mahasiswa (MPM) Politeknik Negeri Bandung",
        timeframe: "2022 - 2023",
        role: "Wakil Ketua Komisi 3 Pengawasan",
        achievements: [
          <>
            Melakukan koordinasi kepada anggota Komisi 3 Pengawasan MPM Politeknik Negeri Bandung dalam 
            melakukan pengawasan terhadap kinerja dari Badan Eksekutif Mahasiswa Politeknik Negeri Bandung agar sesuai dengan
            peraturan yang berlaku. 
          </>,
        ],
        images: [
          {
            src: "/images/organization/staffahli-mpm.jpg",
            alt: "Sertifikat Staff Muda MPM",
            width: 16,
            height: 9,
          },
          {
            src: "/images/organization/foto-studio.jpg",
            alt: "Sertifikat Staff Muda MPM",
            width: 16,
            height: 9,
          },
        ],
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

const portofolio = {
  path: "/portofolio",
  label: "Portofolio",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /portofolio routes
};



export { person, social, home, about, portofolio };
