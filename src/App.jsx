import { useEffect, useRef, useState } from "react";

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
   NAV
========================================================= */

const navigation = [
  { name: "Beranda", href: "#home" },
  { name: "Tentang", href: "#about" },
  { name: "Layanan", href: "#services" },
  { name: "Paket", href: "#packages" },
  { name: "Galeri", href: "#gallery" },
  { name: "Testimoni", href: "#testimonials" },
  { name: "Lokasi", href: "#location" },
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
   PACKAGES
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
   ALL IN
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
      duration: 0.55,
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
      staggerChildren: 0.09,
      delayChildren: 0.03,
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
    isMobile,
    setIsMobile,
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
      packageName: "Gold",
      concept: "",
    });

  /* ========================================================
     MOBILE CHECK
  ======================================================== */

  useEffect(() => {
    const checkMobile =
      () => {
        setIsMobile(
          window.innerWidth <
            768
        );
      };

    checkMobile();

    window.addEventListener(
      "resize",
      checkMobile
    );

    return () =>
      window.removeEventListener(
        "resize",
        checkMobile
      );
  }, []);

  /* ========================================================
     NAVBAR
  ======================================================== */

  useEffect(() => {
    const handleScroll =
      () => {
        setScrolled(
          window.scrollY >
            15
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
          // autoplay bisa diblokir browser
        }
      };

    const handleInteraction =
      () => {
        playMusic();
      };

    const cleanup =
      () => {
        document.removeEventListener(
          "pointerdown",
          handleInteraction
        );

        document.removeEventListener(
          "touchstart",
          handleInteraction
        );

        document.removeEventListener(
          "keydown",
          handleInteraction
        );
      };

    playMusic();

    document.addEventListener(
      "pointerdown",
      handleInteraction
    );

    document.addEventListener(
      "touchstart",
      handleInteraction,
      {
        passive: true,
      }
    );

    document.addEventListener(
      "keydown",
      handleInteraction
    );

    return cleanup;
  }, []);

  /* ========================================================
     FORM
  ======================================================== */

  const handleChange =
    (
      event
    ) => {
      setForm({
        ...form,

        [event.target.name]:
          event.target.value,
      });
    };

  const choosePackage =
    (
      packageName
    ) => {
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
    (
      event
    ) => {
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

      window.open(
        `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
          message
        )}`,
        "_blank"
      );
    };

  return (
    <div
      className="
        min-h-screen
        w-full
        max-w-full
        overflow-x-hidden
        bg-[#fffdfa]
        text-[#29231f]
      "
    >
      <audio
        ref={
          audioRef
        }
        src={
          MUSIC_URL
        }
        autoPlay
        loop
        preload="auto"
        playsInline
      />

      {/* ====================================================
          NAVBAR
      ==================================================== */}

      <motion.header
        initial={{
          y: -50,
          opacity: 0,
        }}

        animate={{
          y: 0,
          opacity: 1,
        }}

        transition={{
          duration: 0.55,
        }}

        className={`
          fixed
          inset-x-0
          top-0
          z-50
          w-full
          max-w-full

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
            min-w-0
            items-center
            justify-between

            sm:h-20
          "
        >
          <a
            href="#home"

            className="
              flex
              min-w-0
              items-center
              gap-2.5
            "
          >
            <div
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

                alt="ABEMANA"

                className="
                  h-full
                  w-full
                  object-cover
                "
              />
            </div>

            <div
              className="
                min-w-0
              "
            >
              <h1
                className="
                  font-display
                  truncate
                  text-[16px]
                  font-semibold
                  leading-none

                  sm:text-[20px]
                "
              >
                ABEMANA
              </h1>

              <p
                className="
                  mt-1
                  truncate
                  text-[5.5px]
                  font-semibold
                  uppercase
                  tracking-[0.17em]
                  text-[#987361]

                  sm:text-[7px]
                "
              >
                Wedding Organizer Semarang
              </p>
            </div>
          </a>

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
                    text-sm
                    font-medium
                    text-[#554b45]

                    hover:text-[#8d6655]
                  "
                >
                  {
                    item.name
                  }
                </a>
              )
            )}
          </nav>

          <a
            href="#consultation"

            className="
              hidden
              rounded-full
              bg-[#29231f]
              px-5
              py-3
              text-sm
              font-semibold
              !text-white

              lg:block
            "
          >
            Konsultasi
          </a>

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
              shrink-0
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
                y: -10,
              }}

              animate={{
                opacity: 1,
                y: 0,
              }}

              exit={{
                opacity: 0,
                y: -10,
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
                  grid
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

                        hover:bg-[#f4ebe5]
                      "
                    >
                      {
                        item.name
                      }
                    </a>
                  )
                )}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* ====================================================
          HERO
      ==================================================== */}

      <section
        id="home"

        className="
          relative
          w-full
          max-w-full
          overflow-hidden
          pt-[64px]

          sm:pt-20
        "
      >
        {!isMobile && (
          <>
            <motion.div
              animate={{
                x: [
                  -20,
                  30,
                  -20,
                ],

                y: [
                  0,
                  -30,
                  0,
                ],
              }}

              transition={{
                duration:
                  12,

                repeat:
                  Infinity,
              }}

              className="
                absolute
                -left-24
                top-20
                h-[320px]
                w-[320px]
                rounded-full
                bg-[#dcbfb0]/25
                blur-[90px]
              "
            />

            <motion.div
              animate={{
                x: [
                  20,
                  -30,
                  20,
                ],
              }}

              transition={{
                duration:
                  14,

                repeat:
                  Infinity,
              }}

              className="
                absolute
                -right-32
                bottom-10
                h-[330px]
                w-[330px]
                rounded-full
                bg-[#eadbd2]/50
                blur-[90px]
              "
            />
          </>
        )}

        <div
          className="
            container-main
            relative
            z-10
            grid
            min-w-0
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
            variants={
              stagger
            }

            initial="hidden"

            animate="show"

            className="
              min-w-0
            "
          >
            <motion.div
              variants={
                fadeUp
              }

              className="
                mb-5
                inline-flex
                max-w-full
                rounded-full
                border
                border-[#dbc9bf]
                bg-white
                px-3.5
                py-2
              "
            >
              <span
                className="
                  truncate
                  text-[8px]
                  font-semibold
                  uppercase
                  tracking-[0.15em]
                  text-[#8f6856]
                "
              >
                Wedding Organizer Semarang
              </span>
            </motion.div>

            <motion.h2
              variants={
                fadeUp
              }

              className="
                font-display
                max-w-full
                break-words
                text-[38px]
                font-semibold
                leading-[0.98]

                sm:text-[62px]

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
            </motion.h2>

            <motion.p
              variants={
                fadeUp
              }

              className="
                mt-5
                max-w-xl
                text-[13px]
                leading-7
                text-[#746861]

                sm:text-[15px]
              "
            >
              ABEMANA membantu
              merencanakan dan
              mengkoordinasikan
              wedding agar setiap
              detail terasa lebih
              terarah, nyaman dan
              sesuai rencana.
            </motion.p>

            <motion.div
              variants={
                fadeUp
              }

              className="
                mt-6
                grid
                w-full
                gap-3

                sm:flex
              "
            >
              <motion.a
                href="#packages"

                whileTap={{
                  scale:
                    0.97,
                }}

                className="
                  flex
                  min-h-[50px]
                  w-full
                  items-center
                  justify-center
                  gap-2
                  rounded-full
                  bg-[#29231f]
                  px-6
                  text-sm
                  font-semibold
                  !text-white

                  sm:w-auto
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

                whileTap={{
                  scale:
                    0.97,
                }}

                className="
                  flex
                  min-h-[50px]
                  w-full
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

                  sm:w-auto
                "
              >
                <CalendarDays
                  size={
                    15
                  }
                />

                Konsultasi Gratis
              </motion.a>
            </motion.div>

            <motion.div
              variants={
                fadeUp
              }

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
            </motion.div>
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
                0.7,
            }}

            className="
              relative
              min-w-0
              overflow-hidden
              rounded-[26px]

              sm:rounded-[30px]
            "
          >
            <motion.img
              src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1600&q=90"

              alt="Wedding"

              animate={
                isMobile
                  ? {
                      scale:
                        1,
                    }
                  : {
                      scale:
                        [
                          1,
                          1.035,
                          1,
                        ],
                    }
              }

              transition={
                isMobile
                  ? {}
                  : {
                      duration:
                        12,

                      repeat:
                        Infinity,
                    }
              }

              className="
                h-[390px]
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
                from-black/55
                via-transparent
              "
            />

            <div
              className="
                absolute
                bottom-5
                left-5
                right-5
                min-w-0
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
                  break-words
                  text-[26px]
                  font-semibold

                  sm:text-3xl
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
            min-w-0
            gap-12

            lg:grid-cols-2
            lg:items-center
          "
        >
          <motion.div
            initial="hidden"

            whileInView="show"

            viewport={{
              once:
                true,
            }}

            variants={
              stagger
            }

            className="
              grid
              min-w-0
              grid-cols-2
              gap-3
            "
          >
            <motion.img
              variants={
                fadeUp
              }

              src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1000&q=90"

              className="
                h-[330px]
                min-w-0
                w-full
                rounded-[24px]
                object-cover

                sm:h-[460px]
              "
            />

            <motion.img
              variants={
                fadeUp
              }

              src="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1000&q=90"

              className="
                mt-8
                h-[330px]
                min-w-0
                w-full
                rounded-[24px]
                object-cover

                sm:h-[460px]
              "
            />
          </motion.div>

          <motion.div
            initial="hidden"

            whileInView="show"

            viewport={{
              once:
                true,
            }}

            variants={
              stagger
            }

            className="
              min-w-0
            "
          >
            <SectionTag>
              Tentang ABEMANA
            </SectionTag>

            <motion.h2
              variants={
                fadeUp
              }

              className="
                font-display
                mt-4
                break-words
                text-[38px]
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
            </motion.h2>

            <motion.p
              variants={
                fadeUp
              }

              className="
                mt-6
                text-sm
                leading-7
                text-[#776a63]
              "
            >
              ABEMANA Wedding
              Organizer Semarang
              membantu pasangan
              mulai dari tahap
              persiapan,
              koordinasi vendor
              hingga pelaksanaan
              acara.
            </motion.p>

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
              once:
                true,
            }}

            variants={
              stagger
            }

            className="
              mt-12
              grid
              min-w-0
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
            min-w-0
          "
        >
          <SectionHeader
            tag="Paket Wedding"
            title="Temukan paket yang sesuai dengan kebutuhan wedding Anda."
            description="Pilih layanan Wedding Organizer atau paket All In sesuai skala, konsep dan kebutuhan acara."
          />

          <motion.div
            initial={{
              opacity: 0,
              y: 24,
            }}

            whileInView={{
              opacity: 1,
              y: 0,
            }}

            viewport={{
              once:
                true,
            }}

            className="
              mt-14
              min-w-0
              rounded-[26px]
              border
              border-[#eadfd8]
              bg-[#faf6f3]
              p-5

              sm:p-8

              lg:grid
              lg:grid-cols-[1fr_.9fr]
              lg:items-center
              lg:gap-16
            "
          >
            <div
              className="
                min-w-0
              "
            >
              <SectionTag>
                Wedding Organizer
              </SectionTag>

              <h3
                className="
                  font-display
                  mt-3
                  break-words
                  text-[32px]
                  font-semibold
                  leading-[1.05]

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
                min-w-0

                lg:mt-0
              "
            >
              <p
                className="
                  break-words
                  text-[13px]
                  leading-7
                  text-[#786b64]

                  sm:text-sm
                "
              >
                Untuk pasangan
                yang telah
                menyiapkan konsep
                dan vendor pilihan,
                ABEMANA membantu
                memastikan seluruh
                persiapan hingga
                hari-H berjalan
                lebih terarah dan
                terkoordinasi.
              </p>

              <div
                className="
                  mt-5
                  flex
                  max-w-full
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
                        max-w-full
                        break-words
                        rounded-full
                        border
                        border-[#e4d7cf]
                        bg-white
                        px-3
                        py-2
                        text-[9px]
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

          <motion.div
            initial="hidden"

            whileInView="show"

            viewport={{
              once:
                true,
            }}

            variants={
              stagger
            }

            className="
              mt-7
              grid
              min-w-0
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

          <div
            className="
              mt-16
              min-w-0
              overflow-hidden
              rounded-[28px]
              bg-[#29231f]
              text-white

              sm:rounded-[34px]
            "
          >
            <div
              className="
                grid
                min-w-0
                gap-8
                p-5

                sm:p-10

                lg:grid-cols-[1.2fr_.8fr]
                lg:p-14
              "
            >
              <div
                className="
                  min-w-0
                "
              >
                <SectionTag light>
                  Wedding All In
                </SectionTag>

                <h3
                  className="
                    font-display
                    mt-4
                    break-words
                    text-[34px]
                    font-semibold
                    leading-[1.05]

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
                    break-words
                    text-sm
                    leading-7
                    text-white/60
                  "
                >
                  {
                    allInPackage.description
                  }
                </p>
              </div>

              <div
                className="
                  min-w-0
                  rounded-[22px]
                  border
                  border-white/10
                  bg-white/[0.06]
                  p-5

                  sm:p-6
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
                    break-words
                    text-[40px]
                    font-semibold
                    text-[#e1c3b2]

                    sm:text-[45px]
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

                <button
                  onClick={() =>
                    choosePackage(
                      allInPackage.name
                    )
                  }

                  className="
                    mt-5
                    min-h-[50px]
                    w-full
                    rounded-full
                    bg-white
                    px-4
                    text-sm
                    font-semibold
                    text-[#29231f]
                  "
                >
                  Konsultasi Paket All In
                </button>
              </div>
            </div>

            <div
              className="
                border-t
                border-white/10
                px-5
                py-8

                sm:px-10

                lg:px-14
              "
            >
              <SectionTag light>
                Fasilitas Paket
              </SectionTag>

              <h4
                className="
                  font-display
                  mt-3
                  break-words
                  text-[27px]
                  font-semibold

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
                  text-xs
                  leading-6
                  text-white/45
                "
              >
                Pilih kategori
                untuk melihat
                fasilitas yang
                tersedia.
              </p>

              <AllInAccordion
                categories={
                  allInPackage.categories
                }
              />
            </div>
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
            min-w-0
          "
        >
          <SectionTag light>
            Galeri Wedding
          </SectionTag>

          <h2
            className="
              font-display
              mt-4
              break-words
              text-[36px]
              font-semibold
              leading-[1.05]

              sm:text-5xl
            "
          >
            Momen indah yang
            layak untuk dikenang.
          </h2>

          <p
            className="
              mt-5
              text-sm
              leading-7
              text-white/50
            "
          >
            Inspirasi suasana,
            dekorasi dan momen
            wedding bersama
            ABEMANA.
          </p>

          <div
            className="
              mt-10
              grid
              min-w-0
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
                  large={
                    index ===
                    0
                  }
                />
              )
            )}
          </div>

          <div
            className="
              mt-12
              hidden
              grid-cols-3
              grid-rows-[220px_220px_230px]
              gap-3

              md:grid
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

            {gallery
              .slice(
                1
              )
              .map(
                (
                  item
                ) => (
                  <GalleryDesktopCard
                    key={
                      item.title
                    }
                    item={
                      item
                    }
                  />
                )
              )}
          </div>
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
            min-w-0
          "
        >
          <SectionHeader
            tag="Cerita Pasangan"
            title="Pengalaman mereka bersama ABEMANA."
            description="Setiap pasangan memiliki cerita yang berbeda."
          />

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

          <div
            className="
              mt-14
              hidden
              min-w-0
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
          </div>
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
            min-w-0
            gap-10

            lg:grid-cols-2
            lg:items-center
          "
        >
          <div
            className="
              min-w-0
            "
          >
            <SectionTag>
              Lokasi
            </SectionTag>

            <h2
              className="
                font-display
                mt-4
                break-words
                text-[38px]
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
                text-sm
                leading-7
                text-[#776a63]
              "
            >
              Jadwalkan konsultasi
              untuk membahas paket,
              konsep dan kebutuhan
              wedding Anda.
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
          </div>

          <div
            className="
              min-w-0
              overflow-hidden
              rounded-[26px]
              border
              border-[#e3d7cf]
              bg-white
            "
          >
            <iframe
              title="Lokasi ABEMANA"

              src={
                MAPS_EMBED_URL
              }

              className="
                block
                h-[360px]
                w-full

                sm:h-[430px]
              "

              style={{
                border:
                  0,
              }}

              loading="lazy"
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
          w-full
          max-w-full
          overflow-hidden
          py-14

          sm:py-24
        "
      >
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
            once:
              true,
          }}

          className="
            container-main
            grid
            min-w-0
            max-w-full
            overflow-hidden
            rounded-[24px]
            border
            border-[#e7dbd4]
            bg-white

            sm:rounded-[30px]

            lg:grid-cols-[.85fr_1.15fr]
          "
        >
          {/* LEFT */}

          <div
            className="
              min-w-0
              overflow-hidden
              bg-[#29231f]
              p-5
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
                max-w-full
                break-words
                text-[35px]
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
                mt-5
                max-w-full
                break-words
                text-[13px]
                leading-7
                text-white/60

                sm:text-sm
              "
            >
              Isi informasi
              singkat berikut dan
              Anda akan langsung
              diarahkan ke
              WhatsApp ABEMANA.
            </p>

            <div
              className="
                mt-7
                grid
                min-w-0
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

          {/* RIGHT FORM */}

          <div
            className="
              min-w-0
              overflow-hidden
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
                mt-3
                max-w-full
                break-words
                text-[34px]
                font-semibold
                leading-[1.05]

                sm:text-[40px]
              "
            >
              Mulai konsultasi
              bersama ABEMANA.
            </h3>

            <p
              className="
                mt-4
                max-w-full
                break-words
                text-[13px]
                leading-6
                text-[#8a7d75]

                sm:text-sm
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
                mt-7
                grid
                min-w-0
                w-full
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
                  min-w-0
                  w-full
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
                    min-w-0
                    w-full
                    max-w-full
                    rounded-2xl
                    border
                    border-[#e2d6ce]
                    bg-[#fffdfa]
                    px-4
                    text-sm
                    outline-none
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
                  min-w-0
                  w-full
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
                  Konsep / Catatan
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

                  placeholder="Ceritakan konsep wedding Anda..."

                  className="
                    min-w-0
                    w-full
                    max-w-full
                    resize-none
                    rounded-2xl
                    border
                    border-[#e2d6ce]
                    bg-[#fffdfa]
                    px-4
                    py-3.5
                    text-sm
                    outline-none
                  "
                />
              </label>

              <button
                type="submit"

                className="
                  flex
                  min-h-[52px]
                  min-w-0
                  w-full
                  items-center
                  justify-center
                  gap-2
                  rounded-full
                  bg-[#29231f]
                  px-4
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

                <span
                  className="
                    truncate
                  "
                >
                  Konsultasi via WhatsApp
                </span>
              </button>
            </form>
          </div>
        </motion.div>
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
            min-w-0
            gap-10
            py-12

            sm:grid-cols-2

            lg:grid-cols-[1.3fr_.7fr_.8fr_.7fr]
          "
        >
          <div
            className="
              min-w-0
            "
          >
            <div
              className="
                flex
                min-w-0
                items-center
                gap-4
              "
            >
              <div
                className="
                  h-14
                  w-14
                  shrink-0
                  overflow-hidden
                  rounded-full
                  bg-white

                  sm:h-16
                  sm:w-16
                "
              >
                <img
                  src={
                    LOGO_URL
                  }

                  className="
                    h-full
                    w-full
                    object-cover
                  "
                />
              </div>

              <div
                className="
                  min-w-0
                "
              >
                <h3
                  className="
                    font-display
                    truncate
                    text-3xl
                    font-semibold
                  "
                >
                  ABEMANA
                </h3>

                <p
                  className="
                    mt-1
                    break-words
                    text-[7px]
                    uppercase
                    tracking-[0.16em]
                    text-[#956d5b]
                  "
                >
                  Wedding Organizer
                  Semarang
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
              <a href="#about">
                Tentang
              </a>

              <a href="#services">
                Layanan
              </a>

              <a href="#packages">
                Paket
              </a>

              <a href="#gallery">
                Galeri
              </a>
            </div>
          </div>

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
                min-w-0
                gap-4
                text-sm
                text-[#766a63]
              "
            >
              <p
                className="
                  flex
                  min-w-0
                  gap-2
                "
              >
                <Phone
                  size={
                    16
                  }
                  className="
                    shrink-0
                  "
                />

                <span
                  className="
                    break-words
                  "
                >
                  {
                    WHATSAPP_DISPLAY
                  }
                </span>
              </p>

              <p
                className="
                  flex
                  min-w-0
                  gap-2
                "
              >
                <MapPin
                  size={
                    16
                  }
                  className="
                    shrink-0
                  "
                />

                <span
                  className="
                    break-words
                  "
                >
                  Ngaliyan,
                  Semarang
                </span>
              </p>
            </div>
          </div>

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
                flex-wrap
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
      </footer>

      {/* ====================================================
          WHATSAPP FLOATING
      ==================================================== */}

      <motion.a
        href={`https://wa.me/${WHATSAPP_NUMBER}`}

        target="_blank"

        rel="noreferrer"

        whileTap={{
          scale:
            0.92,
        }}

        animate={
          isMobile
            ? {}
            : {
                y: [
                  0,
                  -4,
                  0,
                ],
              }
        }

        transition={{
          duration:
            3,

          repeat:
            Infinity,
        }}

        className="
          fixed
          bottom-4
          right-4
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
        break-words
        text-[8px]
        font-semibold
        uppercase
        tracking-[0.2em]

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
        once:
          true,
      }}

      variants={
        stagger
      }

      className="
        mx-auto
        min-w-0
        max-w-2xl
        text-center
      "
    >
      <SectionTag>
        {tag}
      </SectionTag>

      <motion.h2
        variants={
          fadeUp
        }

        className="
          font-display
          mt-4
          break-words
          text-[34px]
          font-semibold
          leading-[1.06]

          sm:text-5xl
        "
      >
        {title}
      </motion.h2>

      <motion.p
        variants={
          fadeUp
        }

        className="
          mt-5
          break-words
          text-sm
          leading-7
          text-[#776a63]
        "
      >
        {description}
      </motion.p>
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
        min-w-0
        px-1
        text-center
      "
    >
      <p
        className="
          font-display
          text-[25px]
          font-semibold

          sm:text-[27px]
        "
      >
        {value}
      </p>

      <p
        className="
          mt-1
          break-words
          text-[8px]
          text-[#8c7d74]

          sm:text-[9px]
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
    <motion.div
      variants={
        fadeUp
      }

      className="
        flex
        min-w-0
        gap-4
        border-b
        border-[#e7dcd5]
        pb-5
      "
    >
      <span
        className="
          shrink-0
          text-xs
          text-[#9d735f]
        "
      >
        {number}
      </span>

      <div
        className="
          min-w-0
        "
      >
        <h4
          className="
            break-words
            font-semibold
          "
        >
          {title}
        </h4>

        <p
          className="
            mt-2
            break-words
            text-sm
            leading-6
            text-[#786b64]
          "
        >
          {description}
        </p>
      </div>
    </motion.div>
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

      className="
        min-w-0
        overflow-hidden
        rounded-[24px]
        border
        border-[#e6dad3]
        bg-white
        p-5

        sm:p-7
      "
    >
      <div
        className="
          grid
          h-11
          w-11
          place-items-center
          rounded-2xl
          bg-[#f0e3dc]
          text-[#916957]
        "
      >
        <Icon
          size={
            20
          }
        />
      </div>

      <h3
        className="
          font-display
          mt-5
          break-words
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
          break-words
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

      className={`
        relative
        min-w-0
        overflow-hidden
        rounded-[26px]
        border
        p-5

        sm:p-7

        ${
          item.popular
            ? `
              border-[#29231f]
              bg-[#29231f]
              text-white
            `
            : `
              border-[#e9ded7]
              bg-white
            `
        }
      `}
    >
      {item.popular && (
        <span
          className="
            absolute
            right-3
            top-3
            rounded-full
            bg-[#d9bbaa]
            px-2.5
            py-1.5
            text-[7px]
            font-bold
            uppercase
            text-[#29231f]
          "
        >
          Best Seller
        </span>
      )}

      <p
        className="
          max-w-[65%]
          break-words
          text-[9px]
          uppercase
          tracking-[0.14em]
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
          break-words
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
          break-words
          text-[32px]
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
          break-words
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
          min-w-0
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
                min-w-0
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

              <span
                className="
                  min-w-0
                  break-words
                "
              >
                {
                  feature
                }
              </span>
            </li>
          )
        )}
      </ul>

      <button
        onClick={() =>
          onChoose(
            item.name
          )
        }

        className={`
          mt-7
          min-h-[50px]
          w-full
          rounded-full
          px-4
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
        Cek Paket
      </button>
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
        min-w-0
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
            <div
              key={
                category.title
              }

              className="
                min-w-0
                overflow-hidden
                rounded-[18px]
                border
                border-white/10
                bg-white/[0.04]
              "
            >
              <button
                onClick={() =>
                  setOpenIndex(
                    isOpen
                      ? null
                      : index
                  )
                }

                className="
                  flex
                  min-w-0
                  w-full
                  items-center
                  justify-between
                  gap-3
                  px-4
                  py-4
                  text-left

                  sm:px-6
                "
              >
                <div
                  className="
                    min-w-0
                  "
                >
                  <p
                    className="
                      font-display
                      break-words
                      text-[18px]
                      font-semibold
                      text-[#e3c5b5]
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
                      category
                        .items
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
                    shrink-0
                  "
                >
                  <ChevronDown
                    size={
                      17
                    }
                  />
                </motion.div>
              </button>

              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{
                      height:
                        0,

                      opacity:
                        0,
                    }}

                    animate={{
                      height:
                        "auto",

                      opacity:
                        1,
                    }}

                    exit={{
                      height:
                        0,

                      opacity:
                        0,
                    }}

                    className="
                      overflow-hidden
                    "
                  >
                    <div
                      className="
                        grid
                        min-w-0
                        gap-2
                        border-t
                        border-white/10
                        p-4

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
                              min-w-0
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
                              "
                            />

                            <span
                              className="
                                min-w-0
                                break-words
                              "
                            >
                              {
                                item
                              }
                            </span>
                          </div>
                        )
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        }
      )}
    </div>
  );
}

function GalleryCard({
  item,
  large = false,
}) {
  return (
    <motion.div
      variants={
        fadeUp
      }

      className={`
        relative
        min-w-0
        overflow-hidden
        rounded-[22px]

        ${
          large
            ? "h-[340px]"
            : "h-[220px]"
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
        loading="lazy"
        className="
          h-full
          w-full
          object-cover
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
    <div
      className={`
        group
        relative
        min-w-0
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
        className="
          h-full
          w-full
          object-cover
          transition
          duration-700

          group-hover:scale-105
        "
      />

      <GalleryOverlay
        item={
          item
        }
      />
    </div>
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
          via-transparent
        "
      />

      <div
        className="
          absolute
          bottom-4
          left-4
          right-4
          min-w-0
        "
      >
        <p
          className="
            text-[8px]
            uppercase
            tracking-[0.16em]
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
            break-words
            text-[22px]
            font-semibold
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
    active,
    setActive,
  ] =
    useState(0);

  useEffect(() => {
    const timer =
      setInterval(
        () =>
          setActive(
            (
              current
            ) =>
              (
                current +
                1
              ) %
              testimonials.length
          ),
        4000
      );

    return () =>
      clearInterval(
        timer
      );
  }, [
    testimonials.length,
  ]);

  return (
    <div
      className="
        min-w-0
        overflow-hidden
      "
    >
      <AnimatePresence
        mode="wait"
      >
        <motion.div
          key={
            active
          }

          initial={{
            opacity:
              0,

            x:
              20,
          }}

          animate={{
            opacity:
              1,

            x:
              0,
          }}

          exit={{
            opacity:
              0,

            x:
              -20,
          }}
        >
          <TestimonialCard
            testimonial={
              testimonials[
                active
              ]
            }
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

function TestimonialCard({
  testimonial,
}) {
  return (
    <article
      className="
        min-w-0
        overflow-hidden
        rounded-[24px]
        border
        border-[#e9ddd6]
        bg-white
        p-5

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
          break-words
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
            break-words
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
    </article>
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
        min-w-0
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

      <div
        className="
          min-w-0
        "
      >
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
            max-w-full
            break-words
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
        min-w-0
        w-full
        max-w-full
        items-center
        gap-3
        overflow-hidden
        rounded-[18px]
        border
        border-white/10
        bg-white/[0.05]
        p-3.5

        sm:gap-4
        sm:p-4
      "
    >
      <div
        className="
          grid
          h-10
          w-10
          shrink-0
          place-items-center
          rounded-full
          bg-white/10
          text-[#d8b8a8]

          sm:h-11
          sm:w-11
        "
      >
        <Icon
          size={
            17
          }
        />
      </div>

      <div
        className="
          min-w-0
          flex-1
          overflow-hidden
        "
      >
        <p
          className="
            text-[10px]
            text-white/45
          "
        >
          {label}
        </p>

        <p
          className="
            mt-1
            max-w-full
            break-words
            text-[11px]
            leading-5
            text-white

            sm:text-sm
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
        min-w-0
        w-full
        max-w-full
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
          min-w-0
          w-full
          max-w-full
          rounded-2xl
          border
          border-[#e2d6ce]
          bg-[#fffdfa]
          px-4
          text-sm
          outline-none
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
    <a
      href={
        href
      }

      target="_blank"

      rel="noreferrer"

      className="
        grid
        h-11
        w-11
        shrink-0
        place-items-center
        rounded-full
        border
        border-[#daccc4]
        bg-white

        hover:bg-[#29231f]
        hover:text-white
      "
    >
      <Icon
        size={
          18
        }
      />
    </a>
  );
}