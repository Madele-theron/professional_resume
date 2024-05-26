import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: "Home Page",
  description: "Description for the Home Page",
}

export default function HomePage() {

  return (
    <>
      <Image
        src="/images/profile.jpg"
        height={144}
        width={144}
        alt='Madele'
      />
    </>
  );
}