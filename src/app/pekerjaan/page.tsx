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
                        Riwayat Pekerjaan
                    </h2>
                </div>
            </Section>
            
            <Section>
                <div className="flex md:flex-row flex-col-reverse max-w-screen-md text-xl tracking-wider leading-normal gap-8 items-center">
                    <div className="flex-1 w-full gap-4 flex flex-col">
                        <h2 className="text-3xl font-bold">
                            Karir Setelah Lulus Kuliah
                        </h2>
                        <p className="text-xl">
                            Nadiem, seorang lulusan Harvard, cepat terjun ke
                            dunia kerja setelah mendapatkan ijazah dan
                            dipekerjakan sebagai konsultan manajemen di McKinsey
                            & Company, sebuah lembaga konsultan terkenal. Dia
                            bekerja di perusahaan ini selama tiga tahun.
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
                            alt="Karir Setelah Kembali ke Tanah Air"
                            width={400}
                            height={533}
                            className="bg-white object-contain rounded-2xl md:h-80 w-full p-6"
                            unoptimized
                        />
                    </div>
                    <div className="flex-1 w-full gap-4 flex flex-col">
                        <h2 className="text-3xl font-bold">Zalora Indonesia</h2>
                        <p className="text-xl">
                            Setelah mendapatkan gelar master dari Harvard
                            University, Nadiem kembali ke Indonesia untuk
                            bekerja sebagai editor manajer dan Co-Founder Zalora
                            Indonesia.
                        </p>

                        
                    </div>
                </div>
            </Section>
            <Section>
                <div className="flex md:flex-row flex-col-reverse max-w-screen-md text-xl tracking-wider leading-normal gap-8 items-center">
                    <div className="flex-1 w-full gap-4 flex flex-col">
                        <h2 className="text-3xl font-bold">
                            KartuKu
                        </h2>
                        <p className="text-xl">
                            Setelah itu, ia bekerja sebagai Chief
                            Information Officer yang bertanggung jawab dalam
                            manajemen, dan penggunaan teknologi informasi atau
                            IT di Kartuku, sebuah perusahaan baru yang
                            menawarkan layanan pembayaran non-tunai.
                        </p>
                    </div>
                    <div className="md:w-auto  w-full md:h-80 m-auto md:aspect-square">
                        <Image
                            src="/kartuku.png"
                            alt="KartuKu"
                            width={400}
                            height={533}
                            className="bg-white object-contain p-16 rounded-2xl md:h-80 w-full"
                            unoptimized
                        />
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
