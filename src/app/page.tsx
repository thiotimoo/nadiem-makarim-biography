import MainSection from "@/components/MainSection";
import Section from "@/components/Section";
import { ArrowRight, CaretDown, Quotes } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between m-auto w-full divide-y divide-white divide-opacity-10">
            <MainSection className="max-w-screen-md w-full bg-white text-black rounded-2xl portrait:rounded-none overflow-hidden  m-6 portrait:m-0">
                <div className="w-full h-full flex portrait:flex-col-reverse flex-wrap items-center justify-center  portrait:min-h-svh portrait:h-full overflow-hidden">
                    <div className="flex flex-col justify-center items-start gap-4 flex-1 p-6 bg-[#afe46c] portrait:bg-transparent rounded-r-2xl portrait:rounded-none">
                        <div className="flex flex-col gap-2 items-center ">
                            <h1 className="uppercase text-5xl font-bold tracking-widest text-start font-head w-full">
                                Nadiem
                                <br />
                                Makarim
                            </h1>
                            <h1 className="uppercase text-xl font-bold tracking-widest text-start w-full">
                                MENTERI PENDIDIKAN DAN KEBUDAYAAN
                            </h1>
                        </div>
                        <h1 className="text-xl text-start tracking-wider bg-black text-white uppercase font-bold px-4 py-2 rounded-full">
                            Biografi
                        </h1>
                        <CaretDown
                            size={24}
                            className="self-center hidden portrait:block"
                        />
                    </div>
                    <div className="portrait:flex-none flex-1 w-auto flex m-4">
                        <Image
                            src="/thumbnail.png"
                            alt="Nadiem Anwar Makarim"
                            width={500}
                            height={500}
                            className="object-contain rounded-2xl h-full w-auto bg-[#31cee7]"
                            unoptimized
                        />
                    </div>
                </div>
            </MainSection>
            <Section>
                <div className="flex md:flex-row flex-col max-w-screen-md text-xl tracking-wider leading-normal gap-8 items-center">
                    <div className="portrait:hidden h-80 w-auto m-auto">
                        <Image
                            src="/avatar.jpg"
                            alt="Nadiem Anwar Makarim"
                            width={400}
                            height={533}
                            className="bg-zinc-900 object-contain rounded-2xl h-80 w-auto"
                            unoptimized
                        />
                    </div>
                    <div className="flex-1 w-full gap-4 flex flex-col">
                        <h2 className="text-3xl font-bold">Identitas Tokoh</h2>
                        <p className="text-xl">
                            <b>Nadiem Anwar Makarim, B.A., M.B.A.</b> adalah seorang
                            pengusaha berkebangsaan Indonesia yang memegang
                            jabatan Menteri Pendidikan, Kebudayaan, Riset, dan
                            Teknologi. Dari pasangan Nono Anwar Makarim dan
                            Atika Algadrie, Pak Nadiem lahir pada 4 Juli 1984 di
                            Singapura.
                        </p>
                        <p className="text-xl">
                            Ia adalah anak lelaki dari Nono Anwar Makarim,
                            pengacara terkenal dari Pekalongan, Jawa Tengah.
                            Ayahnya adalah seorang pengacara yang memiliki gelar
                            doktor ilmu hukum dan lulus dari Universitas
                            Harvard.
                        </p>
                    </div>
                </div>
            </Section>
            <Section>
                <div className="flex md:flex-row flex-col-reverse max-w-screen-md text-xl tracking-wider leading-normal gap-8 items-center">
                    <div className="flex-1 w-full gap-4 flex flex-col">
                        <h2 className="text-3xl font-bold">Keluarga Nadiem</h2>
                        <p className="text-xl">
                            Nadiem merupakan anak bungsu dari tiga bersaudara. Dia
                            sudah menikah dengan Franka Franklin, dan mereka
                            memiliki anak yang cantik bernama Solara Franklin
                            Makarim.
                        </p>
                    </div>
                    <div className="md:w-auto w-full md:h-80 m-auto md:aspect-square">
                        <Image
                            src="/family_photo.jpg"
                            alt="Keluarga Nadiem"
                            width={400}
                            height={533}
                            className="bg-zinc-900 object-cover rounded-2xl md:h-80 w-full"
                            unoptimized
                        />
                    </div>
                </div>
            </Section>

            <Section>
                <div className="flex flex-row justify-end text-xl tracking-wider leading-normal gap-8 items-center w-full">
                    <Link
                        href="/pendidikan"
                        className="rounded-full bg-[#00aa13] px-6 py-3 hover:ring-2 hover:ring-white text-center flex flex-row items-center gap-2 w-full md:w-auto"
                    >
                        Lanjut ke Riwayat Pendidikan{" "}
                        <ArrowRight weight="bold" />
                    </Link>
                </div>
            </Section>
        </main>
    );
}
