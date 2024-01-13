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
                
                <div className="flex-row flex gap-4 items-center">
                <BackButton/>
                    <h2 className="text-4xl font-bold text-center">
                        Pendidikan dan Pekerjaan
                    </h2>
                </div>
            </Section>
            <Section>
                <div className="flex md:flex-col flex-col max-w-screen-md text-xl tracking-wider leading-normal gap-8 items-center w-full">
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
                    <div className="flex-1 w-full gap-4 flex flex-col">
                        <h2 className="text-3xl font-bold">
                            Riwayat Pendidikan
                        </h2>
                        <p className="text-xl">
                            Ia berhasil mendapat gelar BA di jurusan
                            International Relations. Ia pun sempat mengikuti
                            pertukaran pelajar di London School of Economics.
                            Tidak puas dengan ilmu yang dimiliki, ia melanjutkan
                            pendidikan layaknya sang ayah dan mengambil
                            masternya di Harvard Business School dan mendapatkan
                            gelar MBA (Master of Business Administration).
                        </p>
                    </div>
                </div>
            </Section>
            <Section>
                <div className="flex md:flex-row flex-col-reverse max-w-screen-md text-xl tracking-wider leading-normal gap-8 items-center">
                    <div className="flex-1 w-full gap-4 flex flex-col">
                        <h2 className="text-3xl font-bold">
                            Riwayat Pekerjaan
                        </h2>
                        <p className="text-xl">
                            Pria lulusan Harvard ini memilih untuk kembali ke
                            tanah airnya Indonesia, Nadiem tidak membutuhkan
                            waktu yang lama untuk terjun ke dunia kerja.
                            Berbekal ijazah yang dimilikinya, Nadiem direkrut di
                            Management Consutant di McKinsey & Company, sebuah
                            lembaga konsultan ternama yang berbasis di Jakarta.
                            Di perusahaan ini, ia menghabiskan waktu 3 tahun.
                        </p>
                    </div>
                    <div className="md:w-auto  w-full md:h-80 m-auto md:aspect-square">
                        <Image
                            src="/mckinsey.png"
                            alt="McKinsey & Company"
                            width={400}
                            height={533}
                            className="bg-white object-contain p-6 rounded-2xl md:h-80 w-full"
                            unoptimized
                        />
                    </div>
                </div>
            </Section>
            <Section>
                <div className="flex md:flex-row flex-col max-w-screen-md text-xl tracking-wider leading-normal gap-8 items-center">
                    <div className="md:w-auto w-full md:h-80 m-auto md:aspect-square">
                        <Image
                            src="/zalora.png"
                            alt="Zalora Indonesia"
                            width={400}
                            height={533}
                            className="bg-white object-contain rounded-2xl md:h-80 w-full p-6"
                            unoptimized
                        />
                    </div>
                    <div className="flex-1 w-full gap-4 flex flex-col">
                        <h2 className="text-3xl font-bold">Zalora Indonesia</h2>
                        <p className="text-xl">
                            Selain itu, ia juga bekerja sebagai Co-founder dan
                            Managing Editor di Zalora Indonesia kemudian menjadi
                            Chief Innovation officer kartuku.
                        </p>
                    </div>
                </div>
            </Section>
            <Section>
                <div className="flex flex-row justify-end text-xl tracking-wider leading-normal gap-8 items-center w-full">
                    <Link
                        href="/karya-nadiem"
                        className="rounded-full bg-[#00aa13] px-6 py-3 hover:ring-2 hover:ring-white text-center flex flex-row items-center gap-2 w-full md:w-auto"
                    >
                        Lanjut ke Karya Nadiem untuk Indonesia
                        <ArrowRight weight="bold" />
                    </Link>
                </div>
            </Section>
        </main>
    );
}
