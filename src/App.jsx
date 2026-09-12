import {
  useEffect,
  useRef,
  useState,
} from "react";

import {
  AnimatePresence,
  motion,
} from "framer-motion";

import {
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  Camera,
  Check,
  ChevronDown,
  Flower2,
  Heart,
  Instagram,
  MapPin,
  Menu,
  MessageCircle,
  Music2,
  Phone,
  Quote,
  Star,
  Utensils,
  WandSparkles,
  X,
} from "lucide-react";

/* =========================================================
   CONFIG
========================================================= */

const WHATSAPP_NUMBER = "62895336745080";
const WHATSAPP_DISPLAY = "0895 3367 45080";

const INSTAGRAM_URL =
  "https://instagram.com/abemana.weddingorganizer";

const INSTAGRAM_USERNAME =
  "@abemana.weddingorganizer";

const MAPS_URL =
  "https://maps.app.goo.gl/1xTxnfJqb4BFM1oTA";

const MAPS_EMBED_URL =
  "https://www.google.com/maps?q=ABEMANA%20Wedding%20Organizer%20Semarang&output=embed";

const ADDRESS =
  "ABEMANA Wedding Organizer, Ngaliyan, Semarang";

const LOGO_URL = "/logo-abemana.png";

const MUSIC_URL = "/wedding-music.mp3";

/* =========================================================
   NAVIGATION
========================================================= */

const navigation = [
  {
    name: "Beranda",
    href: "#home",
  },
  {
    name: "Tentang",
    href: "#about",
  },
  {
    name: "Layanan",
    href: "#services",
  },
  {
    name: "Paket",
    href: "#packages",
  },
  {
    name: "Galeri",
    href: "#gallery",
  },
  {
    name: "Testimoni",
    href: "#testimonials",
  },
  {
    name: "Lokasi",
    href: "#location",
  },
];

/* =========================================================
   SERVICES
========================================================= */

const services = [
  {
    icon: Heart,
    title: "Wedding Organizer",
    description:
      "Pendampingan dan koordinasi mulai dari persiapan, vendor, meeting hingga pelaksanaan acara di hari-H.",
  },

  {
    icon: Flower2,
    title: "Dekorasi",
    description:
      "Konsep dekorasi pelaminan dan area acara yang disesuaikan dengan tema serta karakter pasangan.",
  },

  {
    icon: WandSparkles,
    title: "Makeup & Attire",
    description:
      "Pilihan makeup pengantin, busana akad, resepsi dan kebutuhan styling keluarga.",
  },

  {
    icon: Camera,
    title: "Foto & Video",
    description:
      "Dokumentasi profesional berupa foto, video dan cinematic wedding untuk mengabadikan setiap momen.",
  },

  {
    icon: Music2,
    title: "Entertainment",
    description:
      "Pilihan singer, keyboard, saxophone dan hiburan lainnya untuk menciptakan suasana yang lebih berkesan.",
  },

  {
    icon: Utensils,
    title: "Catering",
    description:
      "Pilihan catering yang dapat disesuaikan dengan konsep acara dan kebutuhan tamu.",
  },
];

/* =========================================================
   WO PACKAGES
========================================================= */

const woPackages = [
  {
    name: "Silver",
    guest: "100 - 200 Undangan",
    price: "Rp5,9 Juta",
    popular: false,

    description:
      "Pilihan praktis untuk wedding intimate hingga medium dengan kebutuhan koordinasi yang tetap terarah.",

    features: [
      "5 Crew + HT Crew + Kostum WO",
      "Unlimited koordinasi pra acara",
      "8 buku panduan wedding eksklusif",
      "2 kali meeting",
      "First Meeting & Final Meeting",
      "Free confetti 2–3 pcs",
      "Free bunga tabur kirab",
      "Free balon helium 30",
      "Free transport area Semarang",
    ],
  },

  {
    name: "Gold",
    guest: "200 - 350 Undangan",
    price: "Rp6,9 Juta",
    popular: true,

    description:
      "Paket favorit dengan jumlah crew lebih lengkap untuk membantu koordinasi wedding berskala menengah.",

    features: [
      "7 Crew + HT Crew + Kostum WO",
      "Unlimited koordinasi pra acara",
      "12 buku panduan wedding eksklusif",
      "2 kali meeting",
      "First Meeting & Final Meeting",
      "2 buku tamu",
      "Asisten CPW & CPP",
      "Free confetti 2–3 pcs",
      "Free bunga tabur kirab",
      "Free moodboard foto",
      "Free dokumentasi dari WO",
      "Free balon helium 30",
      "Free transport area Semarang",
    ],
  },

  {
    name: "Platinum",
    guest: "350 - 1000 Undangan",
    price: "Rp9 Juta",
    popular: false,

    description:
      "Dirancang untuk wedding dengan jumlah tamu lebih besar serta kebutuhan koordinasi yang lebih kompleks.",

    features: [
      "12 Crew + HT Crew + Kostum WO",
      "Unlimited koordinasi pra acara",
      "16 buku panduan wedding eksklusif",
      "2 kali meeting",
      "First Meeting & Final Meeting",
      "2 buku tamu",
      "Asisten CPW & CPP",
      "Free confetti 4 pcs",
      "Free bunga tabur kirab",
      "Free moodboard foto",
      "Free dokumentasi dari WO",
      "Free balon helium 30",
      "Free undangan digital premium",
      "Free transport area Semarang",
    ],
  },
];

/* =========================================================
   ALL IN PACKAGE
========================================================= */

const allInPackage = {
  name: "Wedding All In Gedung",

  price: "Rp41 Juta",

  title:
    "Satu paket untuk kebutuhan wedding yang lebih lengkap.",

  description:
    "Pilihan untuk pasangan yang ingin persiapan lebih praktis. Wedding Organizer, dekorasi, makeup, dokumentasi, entertainment, venue hingga catering dapat dikoordinasikan bersama ABEMANA.",

  categories: [
    {
      title: "Wedding Organizer",

      items: [
        "Crew profesional",
        "Wedding guide book",
        "Bunga tabur kirab",
        "Confetti",
        "Free transport",
        "Alat komunikasi HT",
        "Koordinasi seluruh vendor",
        "2 kali meeting",
        "Unlimited konsultasi",
        "Dokumentasi BTS by crew",
      ],
    },

    {
      title: "Dekorasi",

      items: [
        "Dekorasi pelaminan",
        "Fresh & artificial flower",
        "Karpet pelaminan",
        "Kursi pengantin & keluarga",
        "Lighting dekorasi",
        "Standing flower",
        "Welcome sign",
        "Hiasan jalan",
        "Welcome gate",
      ],
    },

    {
      title: "Makeup & Attire",

      items: [
        "Makeup pengantin",
        "Busana akad & resepsi",
        "Makeup orang tua",
        "Makeup / busana pagar ayu",
        "Ronce melati fresh",
        "Nailart",
        "Softlens",
        "Free retouchup",
      ],
    },

    {
      title: "Foto & Video",

      items: [
        "2 fotografer",
        "1 videografer",
        "Unlimited foto",
        "Edit foto",
        "Album magnetic eksklusif",
        "File Google Drive",
        "Video cinematic wedding clip",
      ],
    },

    {
      title: "Entertainment",

      items: [
        "Saxophone",
        "Singer",
        "Keyboard",
        "Gitar",
      ],
    },

    {
      title: "Venue / Gedung",

      items: [
        "Pilihan venue rekanan ABEMANA",
        "Menyesuaikan ketersediaan",
        "Konsultasi venue sesuai kebutuhan",
      ],
    },

    {
      title: "MC Akad & Resepsi",

      items: [
        "MC akad",
        "MC resepsi",
        "Panduan ceremonial",
        "Request khusus",
      ],
    },

    {
      title: "Catering",

      items: [
        "Catering hingga 1200 porsi",
        "Buffet utama",
        "Menu pendamping",
        "Dessert",
        "Stall makanan",
        "Minuman",
      ],
    },
  ],
};

/* =========================================================
   GALLERY
========================================================= */

const gallery = [
  {
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1600&q=90",

    title: "Garden Wedding",
    category: "Outdoor",
  },

  {
    image:
      "https://images.unsplash.com/photo-1507504031003-b417219a0fde?auto=format&fit=crop&w=1200&q=90",

    title: "Wedding Ceremony",
    category: "Ceremony",
  },

  {
    image:
      "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1200&q=90",

    title: "Elegant Reception",
    category: "Reception",
  },

  {
    image:
      "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1200&q=90",

    title: "Wedding Decoration",
    category: "Decoration",
  },

  {
    image:
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1200&q=90",

    title: "Beautiful Moment",
    category: "Wedding Story",
  },

  {
    image:
      "https://images.unsplash.com/photo-1544078751-58fee2d8a03b?auto=format&fit=crop&w=1200&q=90",

    title: "Romantic Celebration",
    category: "Wedding Moment",
  },
];

/* =========================================================
   TESTIMONIALS
========================================================= */

const testimonials = [
  {
    name: "Alya & Fikri",
    event: "Wedding • Semarang",

    text:
      "Tim ABEMANA sangat membantu dari awal persiapan sampai acara selesai. Semua terasa lebih terarah dan kami bisa menikmati hari pernikahan dengan tenang.",
  },

  {
    name: "Nadia & Reza",
    event: "Wedding • Semarang",

    text:
      "Koordinasi timnya rapi dan komunikatif. Saat hari-H semua berjalan sesuai rundown dan keluarga juga sangat terbantu.",
  },

  {
    name: "Salsa & Dimas",
    event: "Wedding • Semarang",

    text:
      "Tim sangat sigap ketika ada perubahan di hari acara. Pelayanannya ramah dan koordinasinya benar-benar membantu.",
  },

  {
    name: "Rani & Bagas",
    event: "Wedding • Semarang",

    text:
      "Persiapan jadi lebih tenang karena tim ABEMANA membantu banyak hal dari meeting hingga koordinasi vendor.",
  },

  {
    name: "Dinda & Arga",
    event: "Wedding • Semarang",

    text:
      "Terima kasih ABEMANA sudah membantu wedding kami. Timnya responsif dan sangat membantu keluarga selama acara.",
  },
];

/* =========================================================
   ANIMATION
========================================================= */

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 24,
  },

  show: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.65,
      ease: [
        0.25,
        0.1,
        0.25,
        1,
      ],
    },
  },
};

const stagger = {
  hidden: {},

  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

/* =========================================================
   APP
========================================================= */

export default function App() {
  const audioRef =
    useRef(null);

  const [
    mobileMenu,
    setMobileMenu,
  ] =
    useState(false);

  const [
    scrolled,
    setScrolled,
  ] =
    useState(false);

  const [
    form,
    setForm,
  ] =
    useState({
      name: "",
      phone: "",
      date: "",
      location: "",
      packageName:
        "Gold",
      concept: "",
    });

  /* ========================================================
     NAVBAR
  ======================================================== */

  useEffect(() => {
    const handleScroll =
      () => {
        setScrolled(
          window.scrollY > 15
        );
      };

    handleScroll();

    window.addEventListener(
      "scroll",
      handleScroll
    );

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );
  }, []);

  /* ========================================================
     MUSIC
  ======================================================== */

  useEffect(() => {
    const audio =
      audioRef.current;

    if (!audio) return;

    audio.volume = 0.12;
    audio.loop = true;

    let started =
      false;

    const playMusic =
      async () => {
        if (
          started ||
          !audio.paused
        ) {
          started = true;
          return;
        }

        try {
          await audio.play();

          started = true;

          cleanup();
        } catch {
          /*
            Browser dapat memblokir autoplay bersuara.
            Jika diblokir, musik akan dicoba lagi
            saat interaksi pertama.
          */
        }
      };

    const handleInteraction =
      () => {
        playMusic();
      };

    const cleanup =
      () => {
        window.removeEventListener(
          "pointerdown",
          handleInteraction
        );

        window.removeEventListener(
          "touchstart",
          handleInteraction
        );

        window.removeEventListener(
          "keydown",
          handleInteraction
        );

        window.removeEventListener(
          "scroll",
          handleInteraction
        );
      };

    /*
      LANGSUNG COBA PLAY
    */

    playMusic();

    /*
      FALLBACK
    */

    window.addEventListener(
      "pointerdown",
      handleInteraction
    );

    window.addEventListener(
      "touchstart",
      handleInteraction,
      {
        passive: true,
      }
    );

    window.addEventListener(
      "keydown",
      handleInteraction
    );

    window.addEventListener(
      "scroll",
      handleInteraction,
      {
        passive: true,
        once: true,
      }
    );

    return cleanup;
  }, []);

  /* ========================================================
     FORM
  ======================================================== */

  const handleChange =
    (event) => {
      setForm({
        ...form,

        [event.target.name]:
          event.target.value,
      });
    };

  const choosePackage =
    (packageName) => {
      setForm(
        (
          current
        ) => ({
          ...current,
          packageName,
        })
      );

      setTimeout(() => {
        document
          .getElementById(
            "consultation"
          )
          ?.scrollIntoView({
            behavior:
              "smooth",
          });
      }, 100);
    };

  const sendWhatsApp =
    (event) => {
      event.preventDefault();

      const message = `
Halo ABEMANA Wedding Organizer Semarang,

Saya ingin konsultasi mengenai rencana wedding.

Nama:
${form.name}

Nomor WhatsApp:
${form.phone}

Tanggal Wedding:
${form.date || "-"}

Lokasi Wedding:
${form.location || "-"}

Paket yang diminati:
${form.packageName}

Konsep / Catatan:
${form.concept || "-"}

Mohon informasi mengenai harga terbaru dan ketersediaan tanggal.

Terima kasih.
`;

      const url =
        `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
          message
        )}`;

      window.open(
        url,
        "_blank"
      );
    };

  return (
    <div
      className="
        overflow-hidden
        bg-[#fffdfa]
        text-[#29231f]
      "
    >

      {/* ====================================================
          AUDIO
      ==================================================== */}

      <audio
        ref={audioRef}
        src={MUSIC_URL}
        autoPlay
        loop
        preload="auto"
        playsInline
      />

      {/* ====================================================
          NAVBAR
      ==================================================== */}

      <header
        className={`
          fixed
          inset-x-0
          top-0
          z-50
          transition-all
          duration-500

          ${
            scrolled
              ? `
                glass
                border-b
                border-[#e9ddd6]
                shadow-sm
              `
              : `
                bg-[#fffdfa]/95
              `
          }
        `}
      >
        <div
          className="
            container-main
            flex
            h-[64px]
            items-center
            justify-between

            sm:h-20
          "
        >

          {/* LOGO */}

          <a
            href="#home"

            className="
              flex
              items-center
              gap-2.5
            "
          >
            <motion.div
              whileHover={{
                scale:
                  1.05,
              }}

              className="
                h-10
                w-10
                shrink-0
                overflow-hidden
                rounded-full
                bg-white
                shadow-sm

                sm:h-12
                sm:w-12
              "
            >
              <img
                src={
                  LOGO_URL
                }

                alt="Logo ABEMANA Wedding Organizer"

                className="
                  h-full
                  w-full
                  object-cover
                "
              />
            </motion.div>

            <div>
              <h1
                className="
                  font-display
                  text-[16px]
                  font-semibold
                  leading-none
                  tracking-[0.03em]

                  sm:text-[20px]
                "
              >
                ABEMANA
              </h1>

              <p
                className="
                  mt-1.5
                  text-[5.5px]
                  font-semibold
                  uppercase
                  tracking-[0.2em]
                  text-[#987361]

                  sm:text-[7px]
                "
              >
                Wedding Organizer Semarang
              </p>
            </div>
          </a>

          {/* DESKTOP */}

          <nav
            className="
              hidden
              items-center
              gap-7

              lg:flex
            "
          >
            {navigation.map(
              (
                item
              ) => (
                <a
                  key={
                    item.name
                  }

                  href={
                    item.href
                  }

                  className="
                    relative
                    text-sm
                    font-medium
                    text-[#554b45]
                    transition

                    after:absolute
                    after:-bottom-2
                    after:left-0
                    after:h-px
                    after:w-0
                    after:bg-[#9f7562]
                    after:transition-all

                    hover:text-[#8d6655]
                    hover:after:w-full
                  "
                >
                  {
                    item.name
                  }
                </a>
              )
            )}
          </nav>

          <motion.a
            href="#consultation"

            whileHover={{
              y: -2,
            }}

            whileTap={{
              scale:
                0.98,
            }}

            className="
              hidden
              items-center
              gap-2
              rounded-full
              bg-[#29231f]
              px-5
              py-3
              text-sm
              font-semibold
              !text-white

              lg:flex
            "
          >
            Konsultasi

            <ArrowUpRight
              size={
                16
              }
            />
          </motion.a>

          {/* MOBILE MENU */}

          <button
            type="button"

            onClick={() =>
              setMobileMenu(
                !mobileMenu
              )
            }

            className="
              grid
              h-10
              w-10
              place-items-center
              rounded-full
              border
              border-[#ddd0c8]
              bg-white

              lg:hidden
            "
          >
            {mobileMenu ? (
              <X
                size={
                  18
                }
              />
            ) : (
              <Menu
                size={
                  18
                }
              />
            )}
          </button>
        </div>

        <AnimatePresence>
          {mobileMenu && (
            <motion.div
              initial={{
                opacity: 0,
                y: -8,
              }}

              animate={{
                opacity: 1,
                y: 0,
              }}

              exit={{
                opacity: 0,
                y: -8,
              }}

              className="
                glass
                border-t
                border-[#e8ddd5]

                lg:hidden
              "
            >
              <nav
                className="
                  container-main
                  flex
                  flex-col
                  gap-1
                  py-4
                "
              >
                {navigation.map(
                  (
                    item
                  ) => (
                    <a
                      key={
                        item.name
                      }

                      href={
                        item.href
                      }

                      onClick={() =>
                        setMobileMenu(
                          false
                        )
                      }

                      className="
                        rounded-xl
                        px-4
                        py-3
                        text-sm
                        font-medium

                        hover:bg-[#f4ebe5]
                      "
                    >
                      {
                        item.name
                      }
                    </a>
                  )
                )}

                <a
                  href="#consultation"

                  onClick={() =>
                    setMobileMenu(
                      false
                    )
                  }

                  className="
                    mt-2
                    rounded-full
                    bg-[#29231f]
                    px-5
                    py-3
                    text-center
                    text-sm
                    font-semibold
                    !text-white
                  "
                >
                  Konsultasi Sekarang
                </a>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* ====================================================
          HERO
      ==================================================== */}

      <section
        id="home"

        className="
          relative
          overflow-hidden
          pt-[64px]

          sm:pt-20
        "
      >
        <motion.div
          animate={{
            x: [
              0,
              20,
              0,
            ],

            y: [
              0,
              -10,
              0,
            ],
          }}

          transition={{
            duration:
              10,

            repeat:
              Infinity,

            ease:
              "easeInOut",
          }}

          className="
            absolute
            -left-28
            top-20
            h-[280px]
            w-[280px]
            rounded-full
            bg-[#dec8bb]/30
            blur-3xl
          "
        />

        <div
          className="
            container-main
            grid
            gap-9
            pb-14
            pt-8

            sm:pt-14

            lg:min-h-[820px]
            lg:grid-cols-[1.02fr_.98fr]
            lg:items-center
            lg:gap-14
            lg:py-16
          "
        >
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}

            animate={{
              opacity: 1,
              y: 0,
            }}

            transition={{
              duration:
                0.7,
            }}
          >
            <div
              className="
                mb-5
                inline-flex
                rounded-full
                border
                border-[#dbc9bf]
                bg-white/75
                px-3.5
                py-2
              "
            >
              <span
                className="
                  text-[8px]
                  font-semibold
                  uppercase
                  tracking-[0.17em]
                  text-[#8f6856]

                  sm:text-[9px]
                "
              >
                Wedding Organizer Semarang
              </span>
            </div>

            <h2
              className="
                font-display
                max-w-[350px]
                text-[38px]
                font-semibold
                leading-[0.98]
                tracking-[-0.025em]

                sm:max-w-xl
                sm:text-[62px]

                lg:max-w-3xl
                lg:text-[76px]
              "
            >
              Wujudkan hari
              pernikahan yang

              <span
                className="
                  italic
                  text-[#a87f6c]
                "
              >
                {" "}
                indah dan berkesan.
              </span>
            </h2>

            <p
              className="
                mt-5
                max-w-xl
                text-[13px]
                leading-7
                text-[#746861]

                sm:text-[15px]
                sm:leading-8
              "
            >
              ABEMANA membantu
              merencanakan dan
              mengkoordinasikan
              wedding agar setiap
              detail terasa lebih
              terarah, nyaman dan
              sesuai rencana.
            </p>

            <div
              className="
                mt-6
                grid
                gap-3

                sm:flex
              "
            >
              <motion.a
                href="#packages"

                whileHover={{
                  y: -2,
                }}

                whileTap={{
                  scale:
                    0.98,
                }}

                className="
                  flex
                  min-h-[50px]
                  items-center
                  justify-center
                  gap-2
                  rounded-full
                  bg-[#29231f]
                  px-6
                  text-sm
                  font-semibold
                  !text-white
                "
              >
                Lihat Paket

                <ArrowRight
                  size={
                    15
                  }
                />
              </motion.a>

              <motion.a
                href="#consultation"

                whileHover={{
                  y: -2,
                }}

                whileTap={{
                  scale:
                    0.98,
                }}

                className="
                  flex
                  min-h-[50px]
                  items-center
                  justify-center
                  gap-2
                  rounded-full
                  border
                  border-[#d9cbc2]
                  bg-white
                  px-6
                  text-sm
                  font-semibold
                "
              >
                <CalendarDays
                  size={
                    15
                  }
                />

                Konsultasi Gratis
              </motion.a>
            </div>

            <div
              className="
                mt-8
                grid
                grid-cols-3
                divide-x
                divide-[#ddd0c8]
              "
            >
              <Statistic
                value="150+"
                label="Wedding"
              />

              <Statistic
                value="98%"
                label="Happy Couple"
              />

              <Statistic
                value="30+"
                label="Vendor Partner"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              y: 25,
            }}

            animate={{
              opacity: 1,
              y: 0,
            }}

            transition={{
              duration:
                0.8,

              delay:
                0.15,
            }}

            className="
              relative
              overflow-hidden
              rounded-[30px]
              shadow-[0_24px_60px_rgba(60,40,30,0.14)]
            "
          >
            <img
              src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1600&q=90"

              alt="ABEMANA Wedding"

              className="
                h-[400px]
                w-full
                object-cover

                sm:h-[600px]

                lg:h-[680px]
              "
            />

            <div
              className="
                absolute
                inset-0
                bg-gradient-to-t
                from-black/50
                via-transparent
                to-transparent
              "
            />

            <div
              className="
                absolute
                bottom-6
                left-6
                text-white
              "
            >
              <p
                className="
                  text-[8px]
                  uppercase
                  tracking-[0.2em]
                  text-white/60
                "
              >
                ABEMANA
              </p>

              <h3
                className="
                  font-display
                  mt-1
                  text-3xl
                  font-semibold
                "
              >
                Your Moment,
                Our Care
              </h3>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ====================================================
          ABOUT
      ==================================================== */}

      <section
        id="about"

        className="
          py-20

          sm:py-28
        "
      >
        <div
          className="
            container-main
            grid
            gap-12

            lg:grid-cols-2
            lg:items-center
          "
        >
          <motion.div
            initial="hidden"

            whileInView="show"

            viewport={{
              once: true,
            }}

            variants={
              stagger
            }

            className="
              grid
              grid-cols-2
              gap-3

              sm:gap-4
            "
          >
            <motion.img
              variants={
                fadeUp
              }

              src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1000&q=90"

              alt="Wedding Decoration"

              className="
                h-[340px]
                w-full
                rounded-[26px]
                object-cover

                sm:h-[460px]
              "
            />

            <motion.img
              variants={
                fadeUp
              }

              src="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1000&q=90"

              alt="Wedding Venue"

              className="
                mt-8
                h-[340px]
                w-full
                rounded-[26px]
                object-cover

                sm:mt-12
                sm:h-[460px]
              "
            />
          </motion.div>

          <motion.div
            initial="hidden"

            whileInView="show"

            viewport={{
              once: true,
            }}

            variants={
              fadeUp
            }
          >
            <SectionTag>
              Tentang ABEMANA
            </SectionTag>

            <h2
              className="
                font-display
                mt-4
                text-[40px]
                font-semibold
                leading-[1.05]

                sm:text-5xl
              "
            >
              Persiapan wedding
              terasa lebih tenang
              bersama

              <span
                className="
                  italic
                  text-[#9a705e]
                "
              >
                {" "}
                ABEMANA.
              </span>
            </h2>

            <p
              className="
                mt-6
                text-sm
                leading-7
                text-[#776a63]

                sm:text-base
                sm:leading-8
              "
            >
              ABEMANA Wedding
              Organizer Semarang
              membantu pasangan
              mulai dari tahap
              persiapan, koordinasi
              vendor hingga
              pelaksanaan acara.
            </p>

            <div
              className="
                mt-8
                space-y-5
              "
            >
              <AboutPoint
                number="01"

                title="Sesuai Kebutuhan"

                description="Konsep dan layanan dapat disesuaikan dengan kebutuhan pasangan."
              />

              <AboutPoint
                number="02"

                title="Persiapan Lebih Terarah"

                description="Setiap tahapan dipersiapkan melalui timeline dan koordinasi yang jelas."
              />

              <AboutPoint
                number="03"

                title="Pendampingan Hari-H"

                description="Tim ABEMANA membantu memastikan acara berjalan sesuai rundown."
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ====================================================
          SERVICES
      ==================================================== */}

      <section
        id="services"

        className="
          bg-[#f7f1ed]
          py-20

          sm:py-28
        "
      >
        <div
          className="
            container-main
          "
        >
          <SectionHeader
            tag="Layanan Kami"

            title="Dukungan lengkap untuk hari spesial Anda."

            description="ABEMANA membantu berbagai kebutuhan wedding agar setiap bagian acara dapat dipersiapkan dengan lebih terarah."
          />

          <motion.div
            initial="hidden"

            whileInView="show"

            viewport={{
              once: true,
            }}

            variants={
              stagger
            }

            className="
              mt-12
              grid
              gap-4

              sm:grid-cols-2

              lg:grid-cols-3
            "
          >
            {services.map(
              (
                service
              ) => (
                <ServiceCard
                  key={
                    service.title
                  }

                  service={
                    service
                  }
                />
              )
            )}
          </motion.div>
        </div>
      </section>

      {/* ====================================================
          PACKAGES
      ==================================================== */}

      <section
        id="packages"

        className="
          py-20

          sm:py-28
        "
      >
        <div
          className="
            container-main
          "
        >
          <SectionHeader
            tag="Paket Wedding"

            title="Temukan paket yang sesuai dengan kebutuhan wedding Anda."

            description="Pilih layanan Wedding Organizer atau paket All In sesuai skala, konsep dan kebutuhan acara."
          />

          {/* =================================================
              WO INTRO — SUDAH DIRAPIKAN
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}

            whileInView={{
              opacity: 1,
              y: 0,
            }}

            viewport={{
              once: true,
            }}

            className="
              mt-14
              rounded-[28px]
              border
              border-[#eadfd8]
              bg-[#faf6f3]
              p-6

              sm:p-8

              lg:grid
              lg:grid-cols-[1fr_.9fr]
              lg:items-center
              lg:gap-16
              lg:px-10
              lg:py-9
            "
          >
            <div>
              <SectionTag>
                Wedding Organizer
              </SectionTag>

              <h3
                className="
                  font-display
                  mt-3
                  max-w-[520px]
                  text-[34px]
                  font-semibold
                  leading-[1.04]
                  tracking-[-0.015em]

                  sm:text-[42px]
                "
              >
                Nikmati setiap
                momen,

                <span
                  className="
                    italic
                    text-[#9f7562]
                  "
                >
                  {" "}
                  kami bantu
                  mengaturnya.
                </span>
              </h3>
            </div>

            <div
              className="
                mt-5

                lg:mt-0
              "
            >
              <p
                className="
                  max-w-[520px]
                  text-[13px]
                  leading-7
                  text-[#786b64]

                  sm:text-sm
                "
              >
                Untuk pasangan yang
                telah menyiapkan
                konsep dan vendor
                pilihan, ABEMANA
                membantu memastikan
                seluruh persiapan
                hingga hari-H
                berjalan lebih
                terarah dan
                terkoordinasi.
              </p>

              <div
                className="
                  mt-5
                  flex
                  flex-wrap
                  gap-2
                "
              >
                {[
                  "Koordinasi Vendor",
                  "Rundown Acara",
                  "Pendampingan Hari-H",
                  "Crew Profesional",
                ].map(
                  (
                    item
                  ) => (
                    <span
                      key={
                        item
                      }

                      className="
                        rounded-full
                        border
                        border-[#e4d7cf]
                        bg-white
                        px-3.5
                        py-2
                        text-[9px]
                        font-medium
                        text-[#75675f]
                      "
                    >
                      {
                        item
                      }
                    </span>
                  )
                )}
              </div>
            </div>
          </motion.div>

          {/* WO CARDS */}

          <motion.div
            initial="hidden"

            whileInView="show"

            viewport={{
              once: true,
            }}

            variants={
              stagger
            }

            className="
              mt-7
              grid
              gap-5

              lg:grid-cols-3
            "
          >
            {woPackages.map(
              (
                item
              ) => (
                <WOPackageCard
                  key={
                    item.name
                  }

                  item={
                    item
                  }

                  onChoose={
                    choosePackage
                  }
                />
              )
            )}
          </motion.div>

          {/* =================================================
              ALL IN
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              y: 25,
            }}

            whileInView={{
              opacity: 1,
              y: 0,
            }}

            viewport={{
              once: true,
            }}

            className="
              mt-20
              overflow-hidden
              rounded-[34px]
              bg-[#29231f]
              text-white
              shadow-[0_30px_90px_rgba(40,30,25,0.15)]
            "
          >
            <div
              className="
                grid
                gap-8
                p-6

                sm:p-10

                lg:grid-cols-[1.2fr_.8fr]
                lg:items-center
                lg:p-14
              "
            >
              <div>
                <SectionTag light>
                  Wedding All In
                </SectionTag>

                <h3
                  className="
                    font-display
                    mt-4
                    max-w-2xl
                    text-[37px]
                    font-semibold
                    leading-[1.04]

                    sm:text-5xl
                  "
                >
                  {
                    allInPackage.title
                  }
                </h3>

                <p
                  className="
                    mt-5
                    max-w-xl
                    text-sm
                    leading-7
                    text-white/60
                  "
                >
                  {
                    allInPackage.description
                  }
                </p>

                <div
                  className="
                    mt-6
                    flex
                    flex-wrap
                    gap-2
                  "
                >
                  {[
                    "WO",
                    "Dekorasi",
                    "Makeup",
                    "Foto & Video",
                    "Entertainment",
                    "Venue",
                    "MC",
                    "Catering",
                  ].map(
                    (
                      item
                    ) => (
                      <span
                        key={
                          item
                        }

                        className="
                          rounded-full
                          border
                          border-white/10
                          bg-white/[0.05]
                          px-3
                          py-2
                          text-[9px]
                          text-white/70
                        "
                      >
                        {
                          item
                        }
                      </span>
                    )
                  )}
                </div>
              </div>

              <div
                className="
                  rounded-[26px]
                  border
                  border-white/10
                  bg-white/[0.06]
                  p-6
                "
              >
                <p
                  className="
                    text-[9px]
                    uppercase
                    tracking-[0.18em]
                    text-white/45
                  "
                >
                  Paket mulai dari
                </p>

                <p
                  className="
                    font-display
                    mt-2
                    text-[45px]
                    font-semibold
                    text-[#e1c3b2]
                  "
                >
                  {
                    allInPackage.price
                  }
                </p>

                <p
                  className="
                    mt-3
                    text-xs
                    leading-6
                    text-white/50
                  "
                >
                  Harga dapat
                  menyesuaikan
                  tanggal, venue,
                  vendor dan
                  kebutuhan acara.
                </p>

                <motion.button
                  type="button"

                  onClick={() =>
                    choosePackage(
                      allInPackage.name
                    )
                  }

                  whileHover={{
                    y: -2,
                  }}

                  whileTap={{
                    scale:
                      0.98,
                  }}

                  className="
                    mt-5
                    min-h-[50px]
                    w-full
                    rounded-full
                    bg-white
                    px-5
                    text-sm
                    font-semibold
                    text-[#29231f]
                  "
                >
                  Konsultasi Paket All In
                </motion.button>
              </div>
            </div>

            {/* FACILITIES */}

            <div
              className="
                border-t
                border-white/10
                px-6
                py-9

                sm:px-10

                lg:px-14
                lg:py-12
              "
            >
              <SectionTag light>
                Fasilitas Paket
              </SectionTag>

              <h4
                className="
                  font-display
                  mt-3
                  text-[27px]
                  font-semibold
                  leading-[1.08]

                  sm:text-[34px]
                "
              >
                Detail fasilitas
                paket

                <span
                  className="
                    italic
                    text-[#debbaa]
                  "
                >
                  {" "}
                  All In.
                </span>
              </h4>

              <p
                className="
                  mb-7
                  mt-3
                  max-w-xl
                  text-xs
                  leading-6
                  text-white/45
                "
              >
                Pilih kategori
                untuk melihat
                fasilitas yang
                tersedia di dalam
                paket.
              </p>

              <AllInAccordion
                categories={
                  allInPackage.categories
                }
              />
            </div>
          </motion.div>

          <div
            className="
              mx-auto
              mt-7
              max-w-3xl
              rounded-[20px]
              border
              border-[#eadfd8]
              bg-[#f8f2ee]
              px-5
              py-4
              text-center
            "
          >
            <p
              className="
                text-[10px]
                leading-6
                text-[#85776f]

                sm:text-xs
              "
            >
              Harga paket dapat
              berubah mengikuti
              tanggal acara,
              pilihan vendor,
              venue dan kebutuhan
              wedding. Hubungi
              ABEMANA untuk
              informasi harga,
              promo dan
              ketersediaan terbaru.
            </p>
          </div>
        </div>
      </section>

      {/* ====================================================
          GALLERY
      ==================================================== */}

      <section
        id="gallery"

        className="
          bg-[#29231f]
          py-20
          text-white

          sm:py-28
        "
      >
        <div
          className="
            container-main
          "
        >
          <SectionTag light>
            Galeri Wedding
          </SectionTag>

          <h2
            className="
              font-display
              mt-4
              max-w-3xl
              text-[38px]
              font-semibold
              leading-[1.05]

              sm:text-5xl

              lg:text-[54px]
            "
          >
            Momen indah yang
            layak untuk dikenang.
          </h2>

          <p
            className="
              mt-5
              max-w-xl
              text-sm
              leading-7
              text-white/50
            "
          >
            Inspirasi suasana,
            dekorasi dan momen
            wedding untuk
            menggambarkan hari
            spesial Anda bersama
            ABEMANA.
          </p>

          {/* MOBILE */}

          <div
            className="
              mt-10
              grid
              gap-3

              md:hidden
            "
          >
            {gallery.map(
              (
                item,
                index
              ) => (
                <GalleryCard
                  key={
                    item.title
                  }

                  item={
                    item
                  }

                  mobileLarge={
                    index ===
                    0
                  }
                />
              )
            )}
          </div>

          {/* DESKTOP */}

          <motion.div
            initial="hidden"

            whileInView="show"

            viewport={{
              once: true,
            }}

            variants={
              stagger
            }

            className="
              mt-12
              hidden
              grid-cols-3
              grid-rows-[220px_220px_230px]
              gap-3

              md:grid

              lg:grid-rows-[230px_230px_240px]
              lg:gap-4
            "
          >
            <GalleryDesktopCard
              item={
                gallery[0]
              }

              className="
                col-span-2
                row-span-2
              "
            />

            <GalleryDesktopCard
              item={
                gallery[1]
              }
            />

            <GalleryDesktopCard
              item={
                gallery[2]
              }
            />

            <GalleryDesktopCard
              item={
                gallery[3]
              }
            />

            <GalleryDesktopCard
              item={
                gallery[4]
              }
            />

            <GalleryDesktopCard
              item={
                gallery[5]
              }
            />
          </motion.div>
        </div>
      </section>

      {/* ====================================================
          TESTIMONIAL
      ==================================================== */}

      <section
        id="testimonials"

        className="
          py-20

          sm:py-28
        "
      >
        <div
          className="
            container-main
          "
        >
          <SectionHeader
            tag="Cerita Pasangan"

            title="Pengalaman mereka bersama ABEMANA."

            description="Setiap pasangan memiliki cerita yang berbeda. Kami senang dapat menjadi bagian dari hari spesial mereka."
          />

          {/* MOBILE */}

          <div
            className="
              mt-10

              sm:hidden
            "
          >
            <MobileTestimonialSlider
              testimonials={
                testimonials
              }
            />
          </div>

          {/* DESKTOP */}

          <motion.div
            initial="hidden"

            whileInView="show"

            viewport={{
              once: true,
            }}

            variants={
              stagger
            }

            className="
              mt-14
              hidden
              gap-5

              sm:grid
              sm:grid-cols-2

              lg:grid-cols-3
            "
          >
            {testimonials.map(
              (
                testimonial,
                index
              ) => (
                <TestimonialCard
                  key={
                    index
                  }

                  testimonial={
                    testimonial
                  }
                />
              )
            )}
          </motion.div>
        </div>
      </section>

      {/* ====================================================
          LOCATION
      ==================================================== */}

      <section
        id="location"

        className="
          bg-[#f7f1ed]
          py-20

          sm:py-28
        "
      >
        <div
          className="
            container-main
            grid
            gap-10

            lg:grid-cols-2
            lg:items-center
          "
        >
          <div>
            <SectionTag>
              Lokasi
            </SectionTag>

            <h2
              className="
                font-display
                mt-4
                text-[40px]
                font-semibold
                leading-[1.05]

                sm:text-5xl
              "
            >
              Konsultasikan
              rencana wedding Anda
              bersama ABEMANA.
            </h2>

            <p
              className="
                mt-5
                max-w-lg
                text-sm
                leading-7
                text-[#776a63]
              "
            >
              Jadwalkan konsultasi
              untuk membahas paket,
              konsep dan kebutuhan
              wedding Anda bersama
              tim ABEMANA.
            </p>

            <div
              className="
                mt-8
                space-y-5
              "
            >
              <LocationItem
                icon={
                  MapPin
                }

                title="Lokasi"

                text={
                  ADDRESS
                }
              />

              <LocationItem
                icon={
                  MessageCircle
                }

                title="WhatsApp"

                text={
                  WHATSAPP_DISPLAY
                }
              />

              <LocationItem
                icon={
                  Instagram
                }

                title="Instagram"

                text={
                  INSTAGRAM_USERNAME
                }
              />
            </div>

            <div
              className="
                mt-8
                grid
                gap-3

                sm:flex
              "
            >
              <motion.a
                href={
                  MAPS_URL
                }

                target="_blank"

                rel="noreferrer"

                whileHover={{
                  y: -2,
                }}

                className="
                  flex
                  min-h-[50px]
                  items-center
                  justify-center
                  gap-2
                  rounded-full
                  bg-[#29231f]
                  px-6
                  text-sm
                  font-semibold
                  !text-white
                "
              >
                <MapPin
                  size={
                    17
                  }
                />

                Buka Google Maps
              </motion.a>

              <motion.a
                href={
                  INSTAGRAM_URL
                }

                target="_blank"

                rel="noreferrer"

                whileHover={{
                  y: -2,
                }}

                className="
                  flex
                  min-h-[50px]
                  items-center
                  justify-center
                  gap-2
                  rounded-full
                  border
                  border-[#daccc4]
                  bg-white
                  px-6
                  text-sm
                  font-semibold
                "
              >
                <Instagram
                  size={
                    17
                  }
                />

                Instagram
              </motion.a>
            </div>
          </div>

          <div
            className="
              overflow-hidden
              rounded-[28px]
              border
              border-[#e3d7cf]
              bg-white
              shadow-xl
            "
          >
            <iframe
              title="Lokasi ABEMANA Wedding Organizer"

              src={
                MAPS_EMBED_URL
              }

              width="100%"

              height="430"

              style={{
                border:
                  0,
              }}

              allowFullScreen=""

              loading="lazy"

              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* ====================================================
          CONSULTATION
      ==================================================== */}

      <section
        id="consultation"

        className="
          py-16

          sm:py-24
        "
      >
        <div
          className="
            container-main
            overflow-hidden
            rounded-[30px]
            border
            border-[#e7dbd4]
            bg-white
            shadow-[0_18px_60px_rgba(52,41,35,0.08)]

            lg:grid
            lg:grid-cols-[.85fr_1.15fr]
          "
        >
          {/* INFO */}

          <div
            className="
              bg-[#29231f]
              p-6
              text-white

              sm:p-8

              lg:p-12
            "
          >
            <SectionTag light>
              Konsultasi Wedding
            </SectionTag>

            <h2
              className="
                font-display
                mt-3
                text-[34px]
                font-semibold
                leading-[1.04]

                sm:text-[42px]
              "
            >
              Ceritakan rencana

              <span
                className="
                  italic
                  text-[#d6b5a4]
                "
              >
                {" "}
                wedding Anda.
              </span>
            </h2>

            <p
              className="
                mt-4
                text-sm
                leading-7
                text-white/60
              "
            >
              Isi informasi
              singkat berikut dan
              Anda akan langsung
              diarahkan ke WhatsApp
              ABEMANA.
            </p>

            <div
              className="
                mt-6
                grid
                gap-3
              "
            >
              <CompactContactItem
                icon={
                  MessageCircle
                }

                label="WhatsApp"

                value={
                  WHATSAPP_DISPLAY
                }
              />

              <CompactContactItem
                icon={
                  MapPin
                }

                label="Lokasi"

                value={
                  ADDRESS
                }
              />

              <CompactContactItem
                icon={
                  Instagram
                }

                label="Instagram"

                value={
                  INSTAGRAM_USERNAME
                }
              />
            </div>
          </div>

          {/* FORM */}

          <div
            className="
              p-5

              sm:p-8

              lg:p-10
            "
          >
            <SectionTag>
              Form Konsultasi
            </SectionTag>

            <h3
              className="
                font-display
                mt-2
                text-3xl
                font-semibold
              "
            >
              Mulai konsultasi
              bersama ABEMANA.
            </h3>

            <p
              className="
                mt-2
                text-xs
                leading-6
                text-[#8a7d75]
              "
            >
              Isi data singkat agar
              kami dapat memahami
              kebutuhan acara Anda.
            </p>

            <form
              onSubmit={
                sendWhatsApp
              }

              className="
                mt-6
                grid
                gap-4

                sm:grid-cols-2
              "
            >
              <InputField
                label="Nama Lengkap"

                name="name"

                value={
                  form.name
                }

                onChange={
                  handleChange
                }

                placeholder="Nama Anda"

                required
              />

              <InputField
                label="Nomor WhatsApp"

                name="phone"

                value={
                  form.phone
                }

                onChange={
                  handleChange
                }

                placeholder="08xxxxxxxxxx"

                required
              />

              <InputField
                label="Tanggal Wedding"

                name="date"

                type="date"

                value={
                  form.date
                }

                onChange={
                  handleChange
                }
              />

              <InputField
                label="Lokasi Wedding"

                name="location"

                value={
                  form.location
                }

                onChange={
                  handleChange
                }

                placeholder="Semarang"
              />

              <label
                className="
                  grid
                  gap-2

                  sm:col-span-2
                "
              >
                <span
                  className="
                    text-xs
                    font-semibold
                  "
                >
                  Paket yang diminati
                </span>

                <select
                  name="packageName"

                  value={
                    form.packageName
                  }

                  onChange={
                    handleChange
                  }

                  className="
                    min-h-[50px]
                    rounded-2xl
                    border
                    border-[#e2d6ce]
                    bg-[#fffdfa]
                    px-4
                    text-sm
                    outline-none

                    focus:border-[#9d7562]
                  "
                >
                  <option>
                    Silver
                  </option>

                  <option>
                    Gold
                  </option>

                  <option>
                    Platinum
                  </option>

                  <option>
                    Wedding All In Gedung
                  </option>
                </select>
              </label>

              <label
                className="
                  grid
                  gap-2

                  sm:col-span-2
                "
              >
                <span
                  className="
                    text-xs
                    font-semibold
                  "
                >
                  Konsep / Catatan Wedding
                </span>

                <textarea
                  name="concept"

                  rows="4"

                  value={
                    form.concept
                  }

                  onChange={
                    handleChange
                  }

                  placeholder="Contoh: akad dan resepsi di gedung, konsep modern elegant..."

                  className="
                    resize-none
                    rounded-2xl
                    border
                    border-[#e2d6ce]
                    bg-[#fffdfa]
                    px-4
                    py-3.5
                    text-sm
                    outline-none

                    focus:border-[#9d7562]
                  "
                />
              </label>

              <motion.button
                type="submit"

                whileHover={{
                  y: -2,
                }}

                whileTap={{
                  scale:
                    0.98,
                }}

                className="
                  flex
                  min-h-[52px]
                  items-center
                  justify-center
                  gap-2
                  rounded-full
                  bg-[#29231f]
                  text-sm
                  font-semibold
                  text-white

                  sm:col-span-2
                "
              >
                <MessageCircle
                  size={
                    17
                  }
                />

                Konsultasi via WhatsApp

                <ArrowUpRight
                  size={
                    15
                  }
                />
              </motion.button>
            </form>
          </div>
        </div>
      </section>

      {/* ====================================================
          FOOTER
      ==================================================== */}

      <footer
        className="
          border-t
          border-[#e6d9d1]
          bg-[#f7f1ed]
        "
      >
        <div
          className="
            container-main
            grid
            gap-10
            py-12

            sm:grid-cols-2

            lg:grid-cols-[1.3fr_.7fr_.8fr_.7fr]
          "
        >
          {/* BRAND */}

          <div>
            <div
              className="
                flex
                items-center
                gap-4
              "
            >
              <div
                className="
                  h-16
                  w-16
                  shrink-0
                  overflow-hidden
                  rounded-full
                  bg-white
                  shadow-sm
                "
              >
                <img
                  src={
                    LOGO_URL
                  }

                  alt="Logo ABEMANA Wedding Organizer"

                  className="
                    h-full
                    w-full
                    object-cover
                  "
                />
              </div>

              <div>
                <h3
                  className="
                    font-display
                    text-3xl
                    font-semibold
                  "
                >
                  ABEMANA
                </h3>

                <p
                  className="
                    mt-1
                    text-[7px]
                    font-semibold
                    uppercase
                    tracking-[0.2em]
                    text-[#956d5b]
                  "
                >
                  Wedding Organizer Semarang
                </p>
              </div>
            </div>

            <p
              className="
                mt-5
                max-w-xs
                text-sm
                leading-7
                text-[#766a63]
              "
            >
              Membantu mewujudkan
              wedding yang lebih
              terarah, nyaman dan
              berkesan.
            </p>
          </div>

          {/* NAV */}

          <div>
            <p
              className="
                text-sm
                font-semibold
              "
            >
              Navigasi
            </p>

            <div
              className="
                mt-5
                grid
                gap-3
                text-sm
                text-[#766a63]
              "
            >
              <a
                href="#about"
              >
                Tentang
              </a>

              <a
                href="#services"
              >
                Layanan
              </a>

              <a
                href="#packages"
              >
                Paket
              </a>

              <a
                href="#gallery"
              >
                Galeri
              </a>
            </div>
          </div>

          {/* CONTACT */}

          <div>
            <p
              className="
                text-sm
                font-semibold
              "
            >
              Kontak
            </p>

            <div
              className="
                mt-5
                grid
                gap-4
                text-sm
                text-[#766a63]
              "
            >
              <p
                className="
                  flex
                  gap-2
                "
              >
                <Phone
                  size={
                    16
                  }
                />

                {
                  WHATSAPP_DISPLAY
                }
              </p>

              <p
                className="
                  flex
                  gap-2
                "
              >
                <MapPin
                  size={
                    16
                  }
                />

                Ngaliyan,
                Semarang
              </p>
            </div>
          </div>

          {/* SOCIAL */}

          <div>
            <p
              className="
                text-sm
                font-semibold
              "
            >
              Sosial Media
            </p>

            <div
              className="
                mt-5
                flex
                gap-3
              "
            >
              <SocialButton
                href={
                  INSTAGRAM_URL
                }

                icon={
                  Instagram
                }
              />

              <SocialButton
                href={`https://wa.me/${WHATSAPP_NUMBER}`}

                icon={
                  MessageCircle
                }
              />

              <SocialButton
                href={
                  MAPS_URL
                }

                icon={
                  MapPin
                }
              />
            </div>
          </div>
        </div>

        <div
          className="
            border-t
            border-[#e2d5cc]
          "
        >
          <div
            className="
              container-main
              flex
              flex-col
              gap-2
              py-5
              text-[10px]
              text-[#8b7e76]

              sm:flex-row
              sm:items-center
              sm:justify-between
            "
          >
            <p>
              © 2026 ABEMANA Wedding Organizer Semarang.
            </p>

            <p>
              Your Moment, Our Care.
            </p>
          </div>
        </div>
      </footer>

      {/* ====================================================
          FLOATING WHATSAPP
      ==================================================== */}

      <motion.a
        href={`https://wa.me/${WHATSAPP_NUMBER}`}

        target="_blank"

        rel="noreferrer"

        whileHover={{
          scale:
            1.06,

          y:
            -2,
        }}

        whileTap={{
          scale:
            0.92,
        }}

        className="
          fixed
          bottom-3
          right-3
          z-40
          grid
          h-12
          w-12
          place-items-center
          rounded-full
          bg-[#25D366]
          text-white
          shadow-xl

          sm:bottom-5
          sm:right-5
          sm:h-14
          sm:w-14
        "
      >
        <MessageCircle
          size={
            21
          }
        />
      </motion.a>
    </div>
  );
}

/* =========================================================
   COMPONENTS
========================================================= */

function SectionTag({
  children,
  light = false,
}) {
  return (
    <p
      className={`
        text-[8px]
        font-semibold
        uppercase
        tracking-[0.23em]

        sm:text-[9px]

        ${
          light
            ? "text-[#d6b7a7]"
            : "text-[#9b715e]"
        }
      `}
    >
      {children}
    </p>
  );
}

function SectionHeader({
  tag,
  title,
  description,
}) {
  return (
    <motion.div
      initial="hidden"

      whileInView="show"

      viewport={{
        once: true,
      }}

      variants={
        fadeUp
      }

      className="
        mx-auto
        max-w-2xl
        text-center
      "
    >
      <SectionTag>
        {tag}
      </SectionTag>

      <h2
        className="
          font-display
          mt-4
          text-[36px]
          font-semibold
          leading-[1.06]

          sm:text-5xl
        "
      >
        {title}
      </h2>

      <p
        className="
          mt-5
          text-sm
          leading-7
          text-[#776a63]
        "
      >
        {description}
      </p>
    </motion.div>
  );
}

function Statistic({
  value,
  label,
}) {
  return (
    <div
      className="
        px-2
        text-center
      "
    >
      <p
        className="
          font-display
          text-[27px]
          font-semibold
        "
      >
        {value}
      </p>

      <p
        className="
          mt-1
          text-[9px]
          text-[#8c7d74]
        "
      >
        {label}
      </p>
    </div>
  );
}

function AboutPoint({
  number,
  title,
  description,
}) {
  return (
    <div
      className="
        flex
        gap-4
        border-b
        border-[#e7dcd5]
        pb-5
      "
    >
      <span
        className="
          text-xs
          font-semibold
          text-[#9d735f]
        "
      >
        {number}
      </span>

      <div>
        <h4
          className="
            font-semibold
          "
        >
          {title}
        </h4>

        <p
          className="
            mt-2
            text-sm
            leading-6
            text-[#786b64]
          "
        >
          {description}
        </p>
      </div>
    </div>
  );
}

function ServiceCard({
  service,
}) {
  const Icon =
    service.icon;

  return (
    <motion.article
      variants={
        fadeUp
      }

      whileHover={{
        y:
          -5,
      }}

      className="
        rounded-[26px]
        border
        border-[#e6dad3]
        bg-white
        p-6
        transition

        hover:shadow-xl

        sm:p-7
      "
    >
      <div
        className="
          grid
          h-12
          w-12
          place-items-center
          rounded-2xl
          bg-[#f0e3dc]
          text-[#916957]
        "
      >
        <Icon
          size={
            21
          }
        />
      </div>

      <h3
        className="
          font-display
          mt-5
          text-2xl
          font-semibold
        "
      >
        {
          service.title
        }
      </h3>

      <p
        className="
          mt-3
          text-sm
          leading-7
          text-[#776b64]
        "
      >
        {
          service.description
        }
      </p>
    </motion.article>
  );
}

function WOPackageCard({
  item,
  onChoose,
}) {
  return (
    <motion.article
      variants={
        fadeUp
      }

      whileHover={{
        y:
          -5,
      }}

      className={`
        relative
        overflow-hidden
        rounded-[30px]
        border
        p-6
        transition

        sm:p-7

        ${
          item.popular
            ? `
              border-[#29231f]
              bg-[#29231f]
              text-white
              shadow-xl
            `
            : `
              border-[#e9ded7]
              bg-white
              hover:shadow-lg
            `
        }
      `}
    >
      {item.popular && (
        <span
          className="
            absolute
            right-4
            top-4
            rounded-full
            bg-[#d9bbaa]
            px-3
            py-1.5
            text-[8px]
            font-bold
            uppercase
            tracking-[0.15em]
            text-[#29231f]
          "
        >
          Best Seller
        </span>
      )}

      <p
        className="
          text-[9px]
          font-semibold
          uppercase
          tracking-[0.17em]
          text-[#b68a75]
        "
      >
        {
          item.guest
        }
      </p>

      <h4
        className="
          font-display
          mt-2
          text-4xl
          font-semibold
        "
      >
        {
          item.name
        }
      </h4>

      <p
        className="
          mt-6
          text-[9px]
          opacity-50
        "
      >
        Mulai dari
      </p>

      <p
        className="
          font-display
          mt-1
          text-[34px]
          font-semibold
        "
      >
        {
          item.price
        }
      </p>

      <p
        className="
          mt-5
          text-sm
          leading-7
          opacity-70
        "
      >
        {
          item.description
        }
      </p>

      <div
        className="
          my-6
          h-px
          bg-current
          opacity-10
        "
      />

      <ul
        className="
          space-y-3
        "
      >
        {item.features.map(
          (
            feature
          ) => (
            <li
              key={
                feature
              }

              className="
                flex
                items-start
                gap-3
                text-xs
                leading-6
              "
            >
              <Check
                size={
                  13
                }

                className="
                  mt-1
                  shrink-0
                  text-[#b98e79]
                "
              />

              {feature}
            </li>
          )
        )}
      </ul>

      <motion.button
        type="button"

        onClick={() =>
          onChoose(
            item.name
          )
        }

        whileTap={{
          scale:
            0.98,
        }}

        className={`
          mt-7
          flex
          min-h-[50px]
          w-full
          items-center
          justify-center
          gap-2
          rounded-full
          px-5
          text-sm
          font-semibold

          ${
            item.popular
              ? `
                bg-white
                text-[#29231f]
              `
              : `
                bg-[#29231f]
                text-white
              `
          }
        `}
      >
        <MessageCircle
          size={
            16
          }
        />

        Cek Paket
      </motion.button>
    </motion.article>
  );
}

function AllInAccordion({
  categories,
}) {
  const [
    openIndex,
    setOpenIndex,
  ] =
    useState(null);

  return (
    <div
      className="
        space-y-3
      "
    >
      {categories.map(
        (
          category,
          index
        ) => {
          const isOpen =
            openIndex ===
            index;

          return (
            <motion.div
              key={
                category.title
              }

              layout

              className="
                overflow-hidden
                rounded-[20px]
                border
                border-white/10
                bg-white/[0.04]
              "
            >
              <button
                type="button"

                onClick={() =>
                  setOpenIndex(
                    isOpen
                      ? null
                      : index
                  )
                }

                className="
                  flex
                  w-full
                  items-center
                  justify-between
                  gap-4
                  px-5
                  py-4
                  text-left

                  sm:px-6
                  sm:py-5
                "
              >
                <div>
                  <p
                    className="
                      font-display
                      text-[18px]
                      font-semibold
                      text-[#e3c5b5]

                      sm:text-[21px]
                    "
                  >
                    {
                      category.title
                    }
                  </p>

                  <p
                    className="
                      mt-1
                      text-[9px]
                      text-white/40
                    "
                  >
                    {
                      category.items
                        .length
                    }{" "}
                    fasilitas
                  </p>
                </div>

                <motion.div
                  animate={{
                    rotate:
                      isOpen
                        ? 180
                        : 0,
                  }}

                  className="
                    grid
                    h-9
                    w-9
                    shrink-0
                    place-items-center
                    rounded-full
                    border
                    border-white/10
                    bg-white/5
                  "
                >
                  <ChevronDown
                    size={
                      15
                    }
                  />
                </motion.div>
              </button>

              <AnimatePresence
                initial={
                  false
                }
              >
                {isOpen && (
                  <motion.div
                    initial={{
                      height: 0,
                      opacity: 0,
                    }}

                    animate={{
                      height:
                        "auto",
                      opacity: 1,
                    }}

                    exit={{
                      height: 0,
                      opacity: 0,
                    }}

                    transition={{
                      duration:
                        0.3,
                    }}

                    className="
                      overflow-hidden
                    "
                  >
                    <div
                      className="
                        grid
                        gap-2
                        border-t
                        border-white/10
                        p-5

                        sm:grid-cols-2

                        lg:grid-cols-3
                      "
                    >
                      {category.items.map(
                        (
                          item
                        ) => (
                          <div
                            key={
                              item
                            }

                            className="
                              flex
                              gap-2
                              rounded-xl
                              bg-white/[0.025]
                              p-3
                              text-[11px]
                              leading-5
                              text-white/65
                            "
                          >
                            <Check
                              size={
                                11
                              }

                              className="
                                mt-1
                                shrink-0
                                text-[#d5b2a0]
                              "
                            />

                            {
                              item
                            }
                          </div>
                        )
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        }
      )}
    </div>
  );
}

function GalleryCard({
  item,
  mobileLarge = false,
}) {
  return (
    <motion.div
      variants={
        fadeUp
      }

      className={`
        group
        relative
        overflow-hidden
        rounded-[24px]

        ${
          mobileLarge
            ? "h-[360px]"
            : "h-[230px]"
        }
      `}
    >
      <img
        src={
          item.image
        }

        alt={
          item.title
        }

        className="
          h-full
          w-full
          object-cover
          transition-transform
          duration-700

          group-hover:scale-105
        "
      />

      <GalleryOverlay
        item={
          item
        }
      />
    </motion.div>
  );
}

function GalleryDesktopCard({
  item,
  className = "",
}) {
  return (
    <motion.div
      variants={
        fadeUp
      }

      whileHover={{
        y:
          -3,
      }}

      className={`
        group
        relative
        min-h-0
        overflow-hidden
        rounded-[24px]

        ${className}
      `}
    >
      <img
        src={
          item.image
        }

        alt={
          item.title
        }

        loading="lazy"

        className="
          h-full
          w-full
          object-cover
          transition-transform
          duration-[900ms]

          group-hover:scale-[1.045]
        "
      />

      <GalleryOverlay
        item={
          item
        }
      />
    </motion.div>
  );
}

function GalleryOverlay({
  item,
}) {
  return (
    <>
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-t
          from-black/70
          via-black/5
          to-transparent
        "
      />

      <div
        className="
          absolute
          bottom-5
          left-5
          right-5
        "
      >
        <p
          className="
            text-[8px]
            font-semibold
            uppercase
            tracking-[0.18em]
            text-white/60
          "
        >
          {
            item.category
          }
        </p>

        <h3
          className="
            font-display
            mt-1
            text-[22px]
            font-semibold
            leading-tight
            text-white

            lg:text-[25px]
          "
        >
          {
            item.title
          }
        </h3>
      </div>
    </>
  );
}

function MobileTestimonialSlider({
  testimonials,
}) {
  const [
    activeIndex,
    setActiveIndex,
  ] =
    useState(0);

  const [
    paused,
    setPaused,
  ] =
    useState(false);

  useEffect(() => {
    if (paused) return;

    const timer =
      setInterval(() => {
        setActiveIndex(
          (
            current
          ) =>
            (
              current +
              1
            ) %
            testimonials.length
        );
      }, 4000);

    return () =>
      clearInterval(
        timer
      );
  }, [
    paused,
    testimonials.length,
  ]);

  return (
    <div
      onTouchStart={() =>
        setPaused(
          true
        )
      }

      onTouchEnd={() => {
        setTimeout(
          () =>
            setPaused(
              false
            ),
          2000
        );
      }}
    >
      <AnimatePresence
        mode="wait"
      >
        <motion.div
          key={
            activeIndex
          }

          initial={{
            opacity: 0,
            x: 25,
          }}

          animate={{
            opacity: 1,
            x: 0,
          }}

          exit={{
            opacity: 0,
            x: -25,
          }}

          transition={{
            duration:
              0.4,
          }}
        >
          <TestimonialCard
            testimonial={
              testimonials[
                activeIndex
              ]
            }
          />
        </motion.div>
      </AnimatePresence>

      <div
        className="
          mt-5
          flex
          justify-center
          gap-2
        "
      >
        {testimonials.map(
          (
            _,
            index
          ) => (
            <button
              key={
                index
              }

              type="button"

              aria-label={`Testimoni ${
                index + 1
              }`}

              onClick={() =>
                setActiveIndex(
                  index
                )
              }

              className={`
                h-2
                rounded-full
                transition-all

                ${
                  activeIndex ===
                  index
                    ? `
                      w-7
                      bg-[#9d735f]
                    `
                    : `
                      w-2
                      bg-[#ddd0c8]
                    `
                }
              `}
            />
          )
        )}
      </div>
    </div>
  );
}

function TestimonialCard({
  testimonial,
}) {
  return (
    <motion.article
      variants={
        fadeUp
      }

      className="
        h-full
        rounded-[28px]
        border
        border-[#e9ddd6]
        bg-white
        p-6
        shadow-[0_12px_35px_rgba(70,50,40,0.04)]

        sm:p-8
      "
    >
      <Quote
        size={
          24
        }

        className="
          text-[#ac826f]
        "
      />

      <div
        className="
          mt-5
          flex
          gap-1
        "
      >
        {[1, 2, 3, 4, 5].map(
          (
            star
          ) => (
            <Star
              key={
                star
              }

              size={
                13
              }

              fill="currentColor"

              className="
                text-[#b28b78]
              "
            />
          )
        )}
      </div>

      <p
        className="
          mt-5
          text-sm
          leading-7
          text-[#665d57]
        "
      >
        “
        {
          testimonial.text
        }
        ”
      </p>

      <div
        className="
          mt-7
          border-t
          border-[#eee5df]
          pt-5
        "
      >
        <p
          className="
            font-semibold
          "
        >
          {
            testimonial.name
          }
        </p>

        <p
          className="
            mt-1
            text-xs
            text-[#998a82]
          "
        >
          {
            testimonial.event
          }
        </p>
      </div>
    </motion.article>
  );
}

function LocationItem({
  icon: Icon,
  title,
  text,
}) {
  return (
    <div
      className="
        flex
        items-start
        gap-4
      "
    >
      <div
        className="
          grid
          h-11
          w-11
          shrink-0
          place-items-center
          rounded-full
          bg-[#eee1da]
          text-[#946c59]
        "
      >
        <Icon
          size={
            18
          }
        />
      </div>

      <div>
        <p
          className="
            text-xs
            text-[#94867e]
          "
        >
          {title}
        </p>

        <p
          className="
            mt-1
            text-sm
            font-semibold
            leading-6
          "
        >
          {text}
        </p>
      </div>
    </div>
  );
}

function CompactContactItem({
  icon: Icon,
  label,
  value,
}) {
  return (
    <div
      className="
        flex
        items-center
        gap-3
        rounded-2xl
        border
        border-white/10
        bg-white/[0.05]
        p-3.5
      "
    >
      <div
        className="
          grid
          h-9
          w-9
          shrink-0
          place-items-center
          rounded-full
          bg-white/10
          text-[#d8b8a8]
        "
      >
        <Icon
          size={
            16
          }
        />
      </div>

      <div
        className="
          min-w-0
        "
      >
        <p
          className="
            text-[9px]
            text-white/45
          "
        >
          {label}
        </p>

        <p
          className="
            mt-0.5
            truncate
            text-[11px]
            text-white
          "
        >
          {value}
        </p>
      </div>
    </div>
  );
}

function InputField({
  label,
  ...props
}) {
  return (
    <label
      className="
        grid
        gap-2
      "
    >
      <span
        className="
          text-xs
          font-semibold
        "
      >
        {label}
      </span>

      <input
        {...props}

        className="
          min-h-[50px]
          rounded-2xl
          border
          border-[#e2d6ce]
          bg-[#fffdfa]
          px-4
          text-sm
          outline-none

          placeholder:text-[#b2a69f]

          focus:border-[#9d7562]
        "
      />
    </label>
  );
}

function SocialButton({
  href,
  icon: Icon,
}) {
  return (
    <motion.a
      href={
        href
      }

      target="_blank"

      rel="noreferrer"

      whileHover={{
        y:
          -3,
      }}

      className="
        grid
        h-11
        w-11
        place-items-center
        rounded-full
        border
        border-[#daccc4]
        bg-white
        transition

        hover:bg-[#29231f]
        hover:text-white
      "
    >
      <Icon
        size={
          18
        }
      />
    </motion.a>
  );
}