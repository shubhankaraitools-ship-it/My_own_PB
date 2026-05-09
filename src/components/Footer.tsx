import Link from "next/link";
import Image from "next/image";
import { FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-foreground text-background py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          <div className="md:col-span-2 space-y-8">
            <Image
              src="/images/logo.png"
              alt="my own peanut butter"
              width={160}
              height={50}
              className="object-contain h-10 w-auto brightness-0 invert"
            />
            <p className="text-background/60 max-w-sm leading-relaxed font-light text-lg">
              No spoon. No mess. A modern peanut butter brand designed for convenience,
              portability, and clean everyday usage.
            </p>
            <div className="flex gap-4">
              <Link
                href="https://www.instagram.com/myown.foods?igsh=MTNjYmhvNWxnbmtkcg=="
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-full border border-background/20 flex items-center justify-center hover:bg-white hover:text-foreground transition-all"
                aria-label="Instagram"
              >
                <FaInstagram size={20} />
              </Link>
              <Link
                href="https://youtube.com/@myownfoodsmof?si=ff6vzihnhSo8ehIE"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-full border border-background/20 flex items-center justify-center hover:bg-white hover:text-foreground transition-all"
                aria-label="YouTube"
              >
                <FaYoutube size={20} />
              </Link>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="font-medium text-lg tracking-wide border-b border-background/10 pb-4">Shop</h4>
            <ul className="space-y-4">
              <li>
                <Link href="#products" className="text-background/60 hover:text-white transition-colors font-light">
                  All Products
                </Link>
              </li>
              <li>
                <Link href="#products" className="text-background/60 hover:text-white transition-colors font-light">
                  Travel Packs
                </Link>
              </li>
              <li>
                <Link href="#products" className="text-background/60 hover:text-white transition-colors font-light">
                  High Protein
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="font-medium text-lg tracking-wide border-b border-background/10 pb-4">Contact</h4>
            <ul className="space-y-4 text-background/60 font-light">
              <li>
                <a href="mailto:hey@myownfoods.com" className="hover:text-white transition-colors">
                  hey@myownfoods.com
                </a>
              </li>
              <li>
                <a href="tel:+919667759474" className="hover:text-white transition-colors">
                  +91 9667759474
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-24 pt-8 border-t border-background/10 flex flex-col md:flex-row items-center justify-between gap-4 text-background/40 text-sm font-light">
          <p>© {new Date().getFullYear()} my own peanut butter. All rights reserved.</p>
          <div className="flex gap-8">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
