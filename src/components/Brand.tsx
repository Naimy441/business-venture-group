import Image from "next/image";

export default function Brand({ light = false }: { light?: boolean }) {
  return (
    <span className={`brand ${light ? "brand-light" : ""}`}>
      <Image
        src="/brand/globe.png"
        width={407}
        height={407}
        alt=""
        className="brand-mark"
        priority
      />
      <span>
        GLOBAL
        <span>INDUSTRIES</span>
      </span>
    </span>
  );
}
