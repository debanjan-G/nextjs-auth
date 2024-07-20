import Image from "next/image";
import HeroImage from "../../public/HeroImg.png"
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-[85vh] items-center justify-evenly gap-4 ">

      <div className="w-1/3 text-center text-slate-200">
        <h1 className="text-5xl font-extrabold my-4">Welcome Back!</h1>
        <p className="text-xl font-light my-2 text-center">Sign in to access your account and stay connected with everything that matters to you.</p>
        <div className="flex justify-center my-2">
          <Link href='/secret' className="p-3 bg-slate-100 text-slate-900 font-semibold ">Get Started</Link>
        </div>
      </div>
      <div className="w-1/3">
        <Image src={HeroImage} alt="hero-image" className="" />
      </div>


    </main>
  );
}
