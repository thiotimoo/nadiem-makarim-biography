import BackButton from "@/components/BackButton";
import MainSection from "@/components/MainSection";
import Section from "@/components/Section";
import {
    ArrowLeft,
    ArrowRight,
    CaretDown,
    Quotes,
} from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent } from "react";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between m-auto w-full divide-y divide-white divide-opacity-10">
            <Section>
                <div className="flex-row flex gap-2 items-center">
                    <BackButton />
                    <h2 className="text-4xl font-bold text-start">
                        Riwayat Pendidikan
                    </h2>
                </div>
            </Section>
            <Section>
                <div className="flex md:flex-col flex-col max-w-screen-md text-xl tracking-wider leading-normal gap-8 items-center w-full">
                    <div className="m-auto flex flex-row gap-4 w-full">
                        <Image
                            src="/sekolah_nadiem.jpg"
                            alt="Harvard Business School"
                            width={400}
                            height={533}
                            className="bg-white object-cover rounded-2xl flex-1 w-full h-60"
                            unoptimized
                        />
                    </div>
                    <div className="flex-1 w-full gap-4 flex flex-col">
                        <p className="text-xl">
                            Nadiem bersekolah dari SD hingga SMP di Jakarta
                            sebelum bersekolah di SMA di Singapura. Bahkan
                            setelah lulus dari Singapura, ia pergi ke Amerika
                            untuk melanjutkan studinya di Brown University,
                            Amerika.
                        </p>
                        <div className="m-auto flex flex-row gap-4">
                            <Image
                                src="/lse.png"
                                alt="London School of Economics"
                                width={400}
                                height={533}
                                className="bg-white object-contain rounded-2xl flex-1 w-1/2 p-4"
                                unoptimized
                            />
                            <Image
                                src="/hbs.png"
                                alt="Harvard Business School"
                                width={400}
                                height={533}
                                className="bg-white object-contain rounded-2xl flex-1 w-1/2 p-4"
                                unoptimized
                            />
                        </div>
                        <p className="text-xl">
                            Ia berhasil mendapatkan gelar administrasi bisnis di
                            jurusan hubungan internasional dan sempat mengikuti
                            pertukaran pelajar di London School of Economics.
                            Namun, tidak puas dengan pengetahuannya, ia
                            melanjutkan pendidikan seperti sang ayah dan
                            mendapatkan masternya di Harvard Business School.
                        </p>
                    </div>
                </div>
            </Section>
            <Section>
                <div className="flex flex-row justify-end text-xl tracking-wider leading-normal gap-8 items-center w-full">
                    <Link
                        href="/pekerjaan"
                        className="rounded-full bg-[#00aa13] px-6 py-3 hover:ring-2 hover:ring-white text-center flex flex-row items-center gap-2 w-full md:w-auto"
                    >
                        Lanjut ke Riwayat Pekerjaan
                        <ArrowRight weight="bold" />
                    </Link>
                </div>
            </Section>
        </main>
    );
}
