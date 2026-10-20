import Image from "next/image";

export default function Brand({ light = false }: { light?: boolean }) {
  return (
    <span className={`brand ${light ? "brand-light" : ""}`}>
      <Image
        src={light ? "/brand/bvg-mark-light.png" : "/brand/bvg-mark.png"}
        width={829}
        height={377}
        alt=""
        className="brand-mark"
        priority
      />
      <span>
        BUSINESS VENTURE
        <span>
          GROUP<span className="brand-inc"> INC.</span>
        </span>
      </span>
    </span>
  );
}
