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
                        Kurikulum Merdeka
                    </h2>
                </div>
            </Section>

            <Section>
                <div className="flex md:flex-row flex-col-reverse max-w-screen-md text-xl tracking-wider leading-normal gap-8 items-center ">
                    <div className="flex-1 w-full gap-4 flex flex-col">
                        <h2 className="text-3xl font-bold">
                            Dari CEO Gojek Menjadi Menteri
                        </h2>
                        <p className="text-xl">
                            Presiden Joko Widodo menunjuk Nadiem sebagai Menteri
                            Pendidikan dan Kebudayaan pada tahun 2019 untuk
                            melengkapi kabinet Indonesia Maju. Hal tersebut
                            lantas membuat dia harus mundur dari CEO Gojek.
                        </p>
                    </div>
                    <div className="md:w-auto w-full h-80 m-auto aspect-square">
                        <Image
                            src="/nadiem-menteri.jpg"
                            alt="Nadiem Menteri"
                            width={400}
                            height={533}
                            className="bg-zinc-900 object-cover rounded-2xl h-80 w-full"
                            unoptimized
                        />
                    </div>
                </div>
            </Section>
            <Section className="max-w-screen-md">
                <div className="flex md:flex-col flex-col text-xl tracking-wider leading-normal gap-8 items-center">
                    <div className="w-full h-32 m-auto aspect-square flex justify-center items-center bg-white rounded-2xl">
                        <Image
                            src="/kurikulum-merdeka.png"
                            alt="Kurikulum Merdeka"
                            width={400}
                            height={533}
                            className="object-cover rounded-2xl h-32 w-full p-8"
                            unoptimized
                        />
                    </div>
                    <div className="flex-1 w-full gap-4 flex flex-col">
                        <h2 className="text-3xl font-bold">
                            Pelopor Kurikulum Merdeka
                        </h2>
                        <p className="text-xl">
                            Program Merdeka Belajar telah berhasil meningkatkan
                            kualitas pendidikan di negara ini sejak diluncurkan.
                            Kementerian Pendidikan, Kebudayaan, Riset, dan
                            Teknologi telah berhasil memperkuat berbagai aspek
                            pendidikan melalui program tersebut. mulai dari
                            kurikulum, penguatan siswa, dan tenaga pengajar.
                        </p>
                        <p className="text-xl">
                            Merdeka Belajar memungkinkan siswa dan mahasiswa
                            memilih pelajaran yang mereka sukai dan memberikan
                            kontribusi terbaik mereka untuk bangsa.
                        </p>
                    </div>
                </div>
            </Section>
            <Section>
                <div className="flex md:flex-row flex-col-reverse max-w-screen-md text-xl tracking-wider leading-normal gap-8 items-center">
                    <div className="flex-1 w-full gap-4 flex flex-col">
                        <h2 className="text-3xl font-bold">Merdeka Belajar</h2>
                        <p className="text-xl">
                            Menurut Nadiem Makarim, Merdeka Belajar adalah
                            gagasan tentang pengembangan pendidikan di mana
                            setiap pemangku kepentingan diharapkan menjadi agen
                            perubahan (agent of change). Keluarga, guru,
                            institusi pendidikan, industri, dan masyarakat
                            adalah semua pemangku kepentingan ini.
                        </p>
                    </div>

                    <div className="md:w-auto w-full md:h-80 m-auto md:aspect-square">
                        <Image
                            src="/pidato-nakarim.webp"
                            alt="Merdeka Belajar"
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
                        href="/kesimpulan"
                        className="rounded-full bg-[#00aa13] px-6 py-3 hover:ring-2 hover:ring-white text-center flex flex-row items-center gap-2 w-full md:w-auto"
                    >
                        Lanjut ke Kesimpulan
                        <ArrowRight weight="bold" />
                    </Link>
                </div>
            </Section>
        </main>
    );
}
