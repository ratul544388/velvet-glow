import {
  Home,
  ShoppingBag,
  Package,
  PenSquare,
  Mail,
} from "lucide-react";

export const navLinks = [
  {
    label: "Home",
    icon: Home,
    href: "/",
  },
  {
    label: "Shop",
    icon: ShoppingBag,
    href: "#shop",
  },
  {
    label: "Product",
    icon: Package,
    href: "#product",
  },
  {
    label: "Blog",
    icon: PenSquare,
    href: "#blog",
    children: [],
  },
  {
    label: "Contact",
    icon: Mail,
    href: "#contact",
  },
];


export const collection = [
  {
    label: "Oil Cleansers",
    itemCount: 10,
    image: "/collection/oil-cleansers.png",
  },
  {
    label: "Hand Cream",
    itemCount: 5,
    image: "/collection/hand-cream.png",
  },
  {
    label: "Toners Skin",
    itemCount: 15,
    image: "/collection/toners-skin.png",
  },
  {
    label: "Face Musk",
    itemCount: 5,
    image: "/collection/face-mask.png",
  },
];

export const popularProducts = [
  {
    label: "Lipstick",
    price: 180,
    image: "/popular-products/lipstick.png",
    use: "Enhancing lip color",
    discountPercentage: 25,
  },
  {
    label: "Lip Balm",
    price: 90,
    image: "/popular-products/lip-balm.png",
    use: "Moisturizing dry lips",
    discountPercentage: 20,
  },
  {
    label: "Blush",
    price: 150,
    image: "/popular-products/blush.png",
    use: "Adding natural cheek color",
  },
  {
    label: "Eye Shadow",
    price: 200,
    image: "/popular-products/eye-shadow.png",
    use: "Creating eye depth and drama",
    discountPercentage: 30,
  },
  {
    label: "Maskara",
    price: 170,
    image: "/popular-products/maskara.png",
    use: "Volumizing eyelashes instantly",
    discountPercentage: 50,
  },
  {
    label: "Foundation",
    price: 220,
    image: "/popular-products/foundation.png",
    use: "Smoothing skin tone evenly",
  },
  {
    label: "Jel",
    price: 130,
    image: "/popular-products/jel.png",
    use: "Styling and setting hair",
  },
  {
    label: "Cream",
    price: 160,
    image: "/popular-products/cream.png",
    use: "Hydrating and softening skin",
    discountPercentage: 15,
  },
];

export const reviews = [
  {
    name: "Afiya Jaman Sinigdha",
    designtion: "Designer",
    image: "/reviews/1.png",
    comment:
      "Explore our collection of carefully chosen products, expert advice, and inspiring stories crafted to help you unlock your true beauty potential.",
  },
  {
    name: "Nusrat Ahmed",
    designtion: "Beauty Consultant",
    image: "/reviews/2.png",
    comment:
      "From skincare to makeup must-haves, this platform offers everything I need. Love how it elevates my daily routine with premium picks and thoughtful guidance!",
  },
];

export const newsAndBlog = [
  {
    label: "Embrace the Art of Color Harmony",
    description:
      "Discover how curated color tones can transform your skincare and beauty rituals. Learn how expert-selected palettes create a sense of calm, balance, and sophistication for an elevated daily self-care experience.",
  },
  {
    image: "/news-and-blog/1.png",
  },
  {
    label: "Glow Naturally with Botanical Skincare",
    description:
      "Unlock the secrets of nature's most effective ingredients, from soothing chamomile to revitalizing rosehip. These botanical wonders help promote radiant, healthy skin while supporting long-term wellness and sustainability in your routine.",
  },
  {
    image: "/news-and-blog/2.png",
  },
  {
    label: "Minimalist Beauty: Less Is More",
    description:
      "Explore the power of minimalist beauty where simplicity meets effectiveness. Focus on high-quality, multipurpose products that streamline your routine, save time, and help you embrace your natural glow with confidence.",
  },
  {
    image: "/news-and-blog/3.png",
  },
];

export const rightIcons = [
  "/search-icon.svg",
  "/shopping-bag-icon.svg",
  "/user-icon.svg"
]


export const footerServices = [
  {
    label: "Our model",
    href: "#our-model",
  },
  {
    label: "Talent and Workforce Strategy",
    href: "#talent-and-workforce-strategy",
  },
  {
    label: "Optimize your Talent processes",
    href: "#optimize-your-talent-processes",
  },
  {
    label: "Interim Consultants",
    href: "#interium-consultants",
  },
  {
    label: "Advisory Services",
    href: "#advisory-services",
  },
  {
    label: "Recruitment and Executive Search",
    href: "#recruitment-and-executive-search",
  },
]

export const footerQuickLinks = [
  {
    label: "Consulting Services",
    href: "#consumling-services",
  },
  {
    label: "About us",
    href: "#",
  },
  {
    label: "Knowledge bank",
    href: "#knowledge-bank",
  },
]