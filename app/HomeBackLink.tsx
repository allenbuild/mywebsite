import Link from "next/link";

export default function HomeBackLink() {
  return (
    <Link href="/" className="home-back-btn">
      ← home
    </Link>
  );
}
