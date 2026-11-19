import Image from "next/image";
import { cx } from "@/lib/format";

// A product screenshot in a thin card frame. It settles into place as it
// scrolls into view and zooms a touch on hover.
//   image  { src, width, height } (see data/platform.js)
export default function Screenshot({ image, alt, sizes, priority = false, className }) {
    return (
        <div className={cx("group scroll-settle rounded-[18px] border border-rule bg-panel p-1.5 shadow-card", className)}>
            <div className="overflow-hidden rounded-[13px]">
                <Image src={image.src} width={image.width} height={image.height} alt={alt} sizes={sizes} priority={priority}
                    className="block h-auto w-full transition-transform duration-700 ease-soft group-hover:scale-[1.012]" />
            </div>
        </div>
    );
}
