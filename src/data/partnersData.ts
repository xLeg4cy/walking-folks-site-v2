
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
    id: "top-bright",
    name: "Top Bright Inc",
    logo: "/lovable-uploads/f82f72d7-5a40-4845-b98b-28d08b62c65e.png",
    description: "A premium strategic partner specializing in innovative business solutions. Top Bright Inc has collaborated with us to develop cutting-edge digital strategies for businesses across various sectors.",
    website: "https://example.com",
    since: "2023",
    featured: true
  },
  {
    id: "xcape-tours",
    name: "Xcape Tours",
    logo: "/lovable-uploads/5bcff372-2c3d-4f90-9c63-4c1207c538a2.png",
    description: "A key strategic partner in the travel industry. Xcape Tours has been working with us to create innovative digital experiences for adventure seekers and travelers in Dominican Republic.",
    website: "https://example.com",
    since: "2024",
    featured: false
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
