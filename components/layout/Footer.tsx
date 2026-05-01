import Link from "next/link";
import { Separator } from "@/components/ui/separator";

const categories = [
  { label: "Floor Tiles", href: "/all-tiles?category=floor" },
  { label: "Wall Tiles", href: "/all-tiles?category=wall" },
  { label: "Bathroom Tiles", href: "/all-tiles?category=bathroom" },
  { label: "Kitchen Tiles", href: "/all-tiles?category=kitchen" },
  { label: "Outdoor Tiles", href: "/all-tiles?category=outdoor" },
  { label: "Mosaic Tiles", href: "/all-tiles?category=mosaic" },
];

const company = [
  { label: "About Us", href: "#" },
  { label: "Contact", href: "#" },
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-12 md:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-sm bg-primary">
                <span className="text-sm font-bold text-primary-foreground">
                  S
                </span>
              </div>
              <span className="text-xl font-bold tracking-tight">
                SaniTiles
              </span>
            </Link>
            <p className="text-sm text-secondary-foreground/70 leading-relaxed">
              Premium tile gallery for every space. From terracotta to marble,
              discover tiles that tell your story.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4 text-accent">
              Categories
            </h3>
            <ul className="space-y-2">
              {categories.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-secondary-foreground/70 hover:text-accent transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4 text-accent">
              Company
            </h3>
            <ul className="space-y-2">
              {company.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-secondary-foreground/70 hover:text-accent transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4 text-accent">
              Contact Us
            </h3>
            <address className="not-italic text-sm text-secondary-foreground/70 space-y-2">
              <p>123 Tile Street</p>
              <p>Toronto, ON M5V 3K1</p>
              <p>Canada</p>
              <p className="mt-4">
                <a
                  href="mailto:hello@sanitiles.ca"
                  className="hover:text-accent transition-colors"
                >
                  hello@sanitiles.ca
                </a>
              </p>
              <p>
                <a
                  href="tel:+14165550123"
                  className="hover:text-accent transition-colors"
                >
                  +1 (416) 555-0123
                </a>
              </p>
            </address>
          </div>
        </div>

        <Separator className="my-8 bg-secondary-foreground/20" />

        <p className="text-center text-xs text-secondary-foreground/50">
          &copy; {new Date().getFullYear()} SaniTiles. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
