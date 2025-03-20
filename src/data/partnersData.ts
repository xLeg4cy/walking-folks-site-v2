
export interface Partner {
  id: string;
  name: string;
  logo: string;
  description: string;
  website: string;
  since: string;
  featured: boolean;
}

export const partners: Partner[] = [
  {
    id: "xcape-tours",
    name: "Xcape Tours",
    logo: "/lovable-uploads/db5fc616-d92f-40d8-a9f1-0c815842db57.png",
    description: "A key strategic partner in the travel industry. Xcape Tours has been working with us to create innovative digital experiences for adventure seekers and travelers worldwide.",
    website: "https://example.com",
    since: "2024",
    featured: true
  },
  {
    id: "larasoft",
    name: "Larasoft",
    logo: "/lovable-uploads/46aad1ea-7d79-4b50-9b66-be6cf014bc64.png",
    description: "A software-based company specializing in the lenders and merchants sector. Larasoft has partnered with us to develop innovative financial technology solutions.",
    website: "https://example.com",
    since: "2025",
    featured: false
  }
];
