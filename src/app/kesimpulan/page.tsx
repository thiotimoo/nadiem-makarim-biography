import BackButton from "@/components/BackButton";
import MainSection from "@/components/MainSection";
import Section from "@/components/Section";
import { ArrowRight, CaretDown, Quotes } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between m-auto w-full divide-y divide-white divide-opacity-10">
            <Section>
                <div className="flex-row flex gap-2 items-center">
                    <BackButton />
                    <h2 className="text-4xl font-bold text-start">
                        Kesimpulan
                    </h2>
                </div>
            </Section>

            <Section>
                <div className="flex md:flex-col-reverse flex-col-reverse max-w-screen-md text-xl tracking-wider leading-normal gap-8 items-center ">
                    <div className="flex-1 w-full gap-4 flex flex-col">
                        <h2 className="text-3xl font-bold">
                            Dari CEO Gojek Menjadi Menteri
                        </h2>
                        <p className="text-xl">
                            Nadiem Makarim meraih banyak penghargaan dalam
                            kariernya. Aplikasi Gojek, yang diciptakannya, tidak
                            hanya mempermudah hidup konsumen, tetapi juga
                            memberikan keuntungan kepada tukang ojek dan membuka
                            lapangan pekerjaan baru. Pelajaran berharga dari Pak
                            Nadiem adalah kita sebagai anak muda perlu berani
                            mengambil tantangan, terus berinovasi, dan
                            mengembangkan ide-ide untuk masyarakat dan negara.
                        </p>
                    </div>
                    <div className="md:w-full w-full h-80 m-auto">
                        <Image
                            src="/kesimpulan-nadiem.jpg"
                            alt="Nadiem Menteri"
                            width={400}
                            height={533}
                            className="bg-zinc-900 object-cover object-top rounded-2xl h-80 w-full"
                            unoptimized
                        />
                    </div>
                </div>
            </Section>

            <Section className="max-w-screen-md p-8 relative flex-col bg-[#00aa13] text-white rounded-t-3xl">
                <p className="text-center text-2xl tracking-wider leading-snug">
                    "Semua orang bisa mencuri idemu, tetapi tidak semua orang
                    bisa <b>mengeksekusi idemu sebaik dirimu</b>."
                </p>

                <p className="text-center text-xl tracking-wider leading-snug font-mono">
                    - Nadiem Makarim -
                </p>
            </Section>
        </main>
    );
}
