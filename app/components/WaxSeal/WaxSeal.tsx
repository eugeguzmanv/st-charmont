import Image from "next/image";
import styles from "./WaxSeal.module.css";

type WaxSealProps = {
  open: boolean;
};

export default function WaxSeal({ open }: WaxSealProps) {
  return (
    <span
      className={`${styles.seal} ${open ? styles.peel : ""}`}
      aria-hidden="true"
    >
      <Image
        src="/images/wax_seal.png"
        alt=""
        width={168}
        height={167}
        sizes="120px"
        className={styles.img}
        priority
      />
    </span>
  );
}
