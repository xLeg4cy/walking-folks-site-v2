
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
    logo: "/lovable-uploads/5bcff372-2c3d-4f90-9c63-4c1207c538a2.png",
    description: "A key strategic partner in the travel industry. Xcape Tours has been working with us to create innovative digital experiences for adventure seekers and travelers in Dominican Republic.",
    website: "https://example.com",
    since: "2024",
    featured: true
  },
  {
    id: "larasofts",
    name: "Larasofts",
    logo: "/lovable-uploads/46aad1ea-7d79-4b50-9b66-be6cf014bc64.png",
    description: "A software-based company specializing in the lenders and merchants sector based in Dominican Republic. Larasofts has partnered with us to develop innovative financial technology solutions.",
    website: "https://example.com",
    since: "2025",
    featured: false
  }
];
