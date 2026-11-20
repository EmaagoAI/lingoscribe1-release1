import Image from "next/image";
import Link from "next/link";
import { ROUTES } from "@/config/routes";

// The white logo file (cropped to the artwork, no padding), turned black in
// light mode by --logo-filter. It grows with the screen, and never shrinks
// to make room (narrow desktops get a slightly smaller size so the menu fits).
export default function Logo({ alt, label, link = true }) {
    const img = (
        <Image src="/images/logo-tight.png" alt={alt} width={956} height={243} priority
            className="block h-auto w-[92px] [filter:var(--logo-filter)] min-[340px]:w-[104px] min-[380px]:w-[124px] md:w-[150px] lg:w-[136px] xl:w-[168px] 2xl:w-[184px]" />
    );
    return link ? <Link href={ROUTES.home} aria-label={label} className="flex shrink-0">{img}</Link> : img;
}
