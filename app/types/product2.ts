export type Product = {
  _id: string;
  title: string;
  description: string;
  imageUrls: string[]; // Cloudinary image URLs
  bulletPoints?: string[];
  originalPrice?: number;
  discountedPrice?: number;
};
