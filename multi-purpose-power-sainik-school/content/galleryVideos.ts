
export type GalleryVideoType = "youtube" | "mp4";

export type GalleryVideo = {
  id: string;
  title: string;
  description: string;
  category: "School Events" | "Activities" | "Classroom" | "Sports";
  type: GalleryVideoType;
  videoUrl: string;
  thumbnail: string;
  duration?: string;
  isFeatured?: boolean;
};

export const galleryVideos: GalleryVideo[] = [
  {
    id: "video-1",
    title: "School Activities",
    description:
      "A glimpse of students participating in different school activities.",
    category: "Activities",
    type: "mp4",
    videoUrl:
      "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
    thumbnail:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7",
    duration: "Demo Video",
    isFeatured: true,
  },
  {
    id: "video-2",
    title: "School Events",
    description:
      "Highlights from school events and celebrations.",
    category: "School Events",
    type: "youtube",
    videoUrl: "",
    thumbnail:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1",
    duration: "Coming Soon",
  },
  {
    id: "video-3",
    title: "Classroom Learning",
    description:
      "A preview of classroom learning and student engagement.",
    category: "Classroom",
    type: "mp4",
    videoUrl: "",
    thumbnail:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b",
    duration: "Coming Soon",
  },
  {
    id: "video-4",
    title: "Sports Activities",
    description:
      "Moments from sports and physical activities.",
    category: "Sports",
    type: "youtube",
    videoUrl: "",
    thumbnail:
      "https://images.unsplash.com/photo-1574629810360-7efbbe195018",
    duration: "Coming Soon",
  },
];
