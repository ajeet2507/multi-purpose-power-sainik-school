
export type GalleryCategory =
  | "Classroom"
  | "Sports"
  | "Activities"
  | "Events";

export interface GalleryImage {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  category: GalleryCategory;
  isFeatured: boolean;
}

export const galleryImages: GalleryImage[] = [
  {
    id: 1,
    title: "Learning Together",
    description: "A glimpse of students learning in the classroom.",
    imageUrl:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1400",
    category: "Classroom",
    isFeatured: true,
  },
  {
    id: 2,
    title: "Creative Learning",
    description: "Encouraging curiosity and creative thinking.",
    imageUrl:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1000",
    category: "Classroom",
    isFeatured: false,
  },
  {
    id: 3,
    title: "Sports & Fitness",
    description: "Building teamwork through outdoor activities.",
    imageUrl:
      "https://images.unsplash.com/photo-1526676037777-05a232554f77?w=1000",
    category: "Sports",
    isFeatured: true,
  },
  {
    id: 4,
    title: "Outdoor Activities",
    description: "Learning beyond the classroom environment.",
    imageUrl:
      "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=1000",
    category: "Activities",
    isFeatured: false,
  },
  {
    id: 5,
    title: "School Celebrations",
    description: "Creating memorable moments together.",
    imageUrl:
      "https://images.unsplash.com/photo-1529390079861-591de354faf5?w=1000",
    category: "Events",
    isFeatured: false,
  },
  {
    id: 6,
    title: "Young Achievers",
    description: "Celebrating participation and progress.",
    imageUrl:
      "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=1000",
    category: "Activities",
    isFeatured: false,
  },
  {
    id: 7,
    title: "Team Spirit",
    description: "Developing confidence and sportsmanship.",
    imageUrl:
      "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=1000",
    category: "Sports",
    isFeatured: false,
  },
  {
    id: 8,
    title: "Knowledge & Discovery",
    description: "Making learning an engaging experience.",
    imageUrl:
      "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=1000",
    category: "Classroom",
    isFeatured: false,
  },
  {
    id: 9,
    title: "Group Activities",
    description: "Learning collaboration and communication.",
    imageUrl:
      "https://images.unsplash.com/photo-1529390079861-591de354faf5?w=1000",
    category: "Activities",
    isFeatured: false,
  },
  {
    id: 10,
    title: "Special Moments",
    description: "Capturing memorable school experiences.",
    imageUrl:
      "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=1000",
    category: "Events",
    isFeatured: false,
  },
  {
    id: 11,
    title: "Active Learning",
    description: "Exploring new ideas through participation.",
    imageUrl:
      "https://images.unsplash.com/photo-1544717305-2782549b5136?w=1000",
    category: "Classroom",
    isFeatured: false,
  },
  {
    id: 12,
    title: "Play & Grow",
    description: "Encouraging an active and healthy lifestyle.",
    imageUrl:
      "https://images.unsplash.com/photo-1472162314594-eca3c3d90b8c?w=1000",
    category: "Sports",
    isFeatured: false,
  },
];
