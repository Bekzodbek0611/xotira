/**
 * ╔══════════════════════════════════════════╗
 * ║  BEKZOD'S ARCHIVE — Memory Data          ║
 * ║  Edit this file to manage your memories  ║
 * ╚══════════════════════════════════════════╝
 *
 * HOW TO ADD A MEMORY:
 * 1. Drop your photo into the /memories/ folder
 * 2. Copy one of the objects below and update its fields
 * 3. Save the file and refresh the browser
 *
 * FIELDS:
 *   id         — unique identifier (any string, no spaces)
 *   collection — must match one of the collection IDs below
 *   image      — path to photo (e.g. "memories/myPhoto.jpg")
 *   title      — short poetic title
 *   date       — how you want it displayed (e.g. "12 August 2026")
 *   location   — optional place name
 *   description— diary-style sentence or two
 *   note       — optional personal handwritten note shown on the card
 *   highlight  — set true to pin this in Random Memory pool
 *   palette    — "warm" | "dark" | "blue" — tints the Polaroid border
 */

window.ARCHIVE_DATA = {

  // ─── COLLECTIONS ───────────────────────────────────────────────
  collections: [
    {
      id: "yoshligim beg'uborligim",
      number: "01",
      title: "Ajib hotiralar",
      subtitle: "Unitilmas xotiralar",
      coverImage: "img1.jpg",
      accentColor: "#C4A862"
    },
    {
      id: "Do'stlar",
      number: "02",
      title: "Mening do'stlarim",
      subtitle: "Ular bilan o'tgan kunlar",
      coverImage: "img2.jpg",
      accentColor: "#8FA8B8"
    },
    {
      id: "men yoqtirgan joylar",
      number: "03",
      title: "Joylar",
      subtitle: "Hayotimni go'zal joylari",
      coverImage: "img3.jpg",
      accentColor: "#A89B7A"
    },
    {
      id: "Univer",
      number: "04",
      title: "1 kusrdan esdalik",
      subtitle: "bu insonlar ajib o'zgacha 🎬",
      coverImage: "img6.jpg",
      accentColor: "#9B7A6A"
    },
    {
      id: "tassodiflar",
      number: "05",
      title: "HECH QACHON TASSODIFLAR TASSODIFAN BO'LMAYDI",
      subtitle: "Tassodif tufayli o'zgargan hayoting 🎯 ",
      coverImage: "img5.jpg",
      accentColor: "#B8967A"
    },
    {
      id: "eslatma",
      number: "06",
      title: "Unutishni hohlamaydigan kunlarim ",
      subtitle: "Bu kunlar unitilmas ✨.",
      coverImage: "img4.jpg",
      accentColor: "#7A8B6E"
    }
  ],

  // ─── MEMORIES ──────────────────────────────────────────────────
  memories: [
    {
      id: "m01",
      collection: "yoshlik",
      image: "img1.jpg",
      title: "BU MEN :) ",
      date: "2008 yil ",
      location: "Termiz",
      description: "Men 1 yoshdaman  tassavur qiling a  1 yosh. sab-sariq bolakay .😎",
      note: "Dunyo go'zal :).",
      highlight: true,
      palette: "warm"
    },
    {
      id: "m02",
      collection: "little-moments",
      image: "img4.jpg",
      title: "The Pressed Flowers",
      date: "02 May 2025",
      location: "Home",
      description: "I found them between the pages of an old book. I don't remember putting them there.",
      note: "Take your time.",
      highlight: false,
      palette: "warm"
    },
    {
      id: "m03",
      collection: "little-moments",
      image: "img5.jpg",
      title: "That Evening",
      date: "17 October 2025",
      location: "Lake Shore",
      description: "That evening felt strangely peaceful. The kind of quiet you don't want to break.",
      note: "Be kind to your mind.",
      highlight: true,
      palette: "blue"
    },
    {
      id: "m04",
      collection: "people",
      image: "img2.jpg",
      title: "A Quiet Corner",
      date: "08 January 2025",
      location: "The Old Café",
      description: "We sat there for three hours talking about nothing important. I remember everything we said.",
      note: "Focus on the good.",
      highlight: false,
      palette: "dark"
    },
    {
      id: "m05",
      collection: "people",
      image: "img3.jpg",
      title: "Walking Together",
      date: "21 June 2024",
      location: "Old City",
      description: "No destination. Just moving through those narrow streets, talking. Some walks don't need a purpose.",
      note: "Some days are worth remembering.",
      highlight: true,
      palette: "warm"
    },
    {
      id: "m06",
      collection: "places",
      image: "img3.jpg",
      title: "The Cobblestones",
      date: "30 July 2024",
      location: "Old Quarter",
      description: "I came back to this street three times on that trip. Something about the light in the afternoon was impossible to leave.",
      note: "Return to the places that held you.",
      highlight: false,
      palette: "warm"
    },
    {
      id: "m07",
      collection: "places",
      image: "img5.jpg",
      title: "The Water at Dusk",
      date: "11 September 2025",
      location: "Somewhere south",
      description: "I watched the sun go down from a borrowed chair. The water turned every color I know.",
      note: "The sky owes you nothing and gives you everything.",
      highlight: true,
      palette: "blue"
    },
    {
      id: "m08",
      collection: "university",
      image: "img6.jpg",
      title: "The Lecture Hall",
      date: "03 September 2022",
      location: "First Year",
      description: "First day. I chose a seat near the window. I kept that seat for three years.",
      note: "Everything is beginning.",
      highlight: false,
      palette: "dark"
    },
    {
      id: "m09",
      collection: "university",
      image: "img2.jpg",
      title: "Late Night Sessions",
      date: "15 December 2023",
      location: "Library",
      description: "The library at 2am had a particular kind of silence. Heavy with effort and coffee and ambition.",
      note: "This is how it happens.",
      highlight: true,
      palette: "dark"
    },
    {
      id: "m10",
      collection: "random-happiness",
      image: "img4.jpg",
      title: "Found Beauty",
      date: "22 April 2025",
      location: "Everywhere",
      description: "I started keeping a photo of everything beautiful I found by accident. This was one of the best days.",
      note: "Notice more.",
      highlight: true,
      palette: "warm"
    },
    {
      id: "m11",
      collection: "random-happiness",
      image: "img1.jpg",
      title: "Golden Hour Again",
      date: "07 August 2025",
      location: "Balcony",
      description: "It kept happening. The light. The warmth. A feeling I cannot fully describe.",
      note: "Some moments repeat themselves like they want you to pay attention.",
      highlight: false,
      palette: "warm"
    },
    {
      id: "m12",
      collection: "dont-forget",
      image: "img4.jpg",
      title: "This Exact Feeling",
      date: "31 December 2024",
      location: "Home",
      description: "That particular feeling of being exactly where you need to be. The year was ending and I felt, for once, ready.",
      note: "Hold on to this.",
      highlight: true,
      palette: "warm"
    },
    {
      id: "m13",
      collection: "dont-forget",
      image: "img5.jpg",
      title: "The Last Light",
      date: "20 November 2025",
      location: "Hillside",
      description: "I almost didn't go. I almost stayed home. I'm so glad I didn't.",
      note: "Go. Always go.",
      highlight: true,
      palette: "blue"
    }
  ]
};
