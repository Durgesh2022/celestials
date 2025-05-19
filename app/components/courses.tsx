import CourseSection from "./CourseSection";
import { Product } from "../types/product2";

const sampleProducts: Product[] = [
  {
    id: "1",
    name: "Usui/Tibetan Reiki I & II",
    price: 495.00,
    description: "Learn Reiki hand positions, Japanese techniques, and distant healing in a weekend intensive.",
  },
  {
    id: "2",
    name: "Usui/Tibetan Reiki ART/Master",
    price: 895.00,
    description: "Master level training with attunements, Reiki grid, psychic surgery, and meditations.",
  },
  {
    id: "3",
    name: "Karuna Reiki® Master Class",
    price: 1095.00,
    description: "Advanced spiritual healing using 12 powerful symbols and connection with enlightened beings.",
  },
  {
    id: "4",
    name: "Usui/Fusion® Reiki I & II",
    price: 495.00,
    description: "Integrated Reiki training with Fusion® energy and Japanese healing techniques.",
  },
  {
    id: "5",
    name: "Usui/Fusion® ART/Master",
    price: 1195.00,
    description: "Fusion® master training with Holy Love, healing ignitions, and aura clearing.",
  },
  {
    id: "6",
    name: "Fusion® Karuna Reiki®",
    price: 1295.00,
    description: "Fusion-enhanced Karuna symbols, deep healing, and chanting practices for master practitioners.",
  },
  {
    id: "7",
    name: "Usui/Fusion® II Reiki I & II",
    price: 495.00,
    description: "Second-level Fusion® class focusing on Reiki hand positions, symbols, and distant healing.",
  },
  {
    id: "8",
    name: "Usui/Fusion® II ART/Master",
    price: 1295.00,
    description: "Mastery through guided experiences, advanced ignitions, and Fusion® energy healing.",
  },
  {
    id: "9",
    name: "Usui/Fusion® III Reiki I & II",
    price: 595.00,
    description: "Fusion III system with placements, Japanese techniques, and energy channeling mastery.",
  },
  {
    id: "10",
    name: "Usui/Fusion® III Master Class",
    price: 1395.00,
    description: "Master training with World Peace Reiki energy, 4 ignitions, and advanced meditative healing.",
  },
  {
    id: "11",
    name: "Fusion® III Karuna Reiki® Master Teacher",
    price: 1495.00,
    description: "Teach all levels of Reiki with Fusion® III energy, World Peace Ignition, and Karuna symbols.",
  },
];

export default function Home() {
  return <CourseSection products={sampleProducts} />;
}
