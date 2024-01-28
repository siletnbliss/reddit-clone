import Image from "next/image";
import logo from "@/assets/logo.png";
interface Props {
  size?: number;
}
export default function Logo({ size = 48 }: Props) {
  return (
    <Image src={logo} alt="logo" width={size} height={size} quality={100} />
  );
}
