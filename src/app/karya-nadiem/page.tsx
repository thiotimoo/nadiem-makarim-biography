import BackButton from "@/components/BackButton";
import MainSection from "@/components/MainSection";
import Section from "@/components/Section";
import { CaretDown, Quotes } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between m-auto w-full divide-y divide-white divide-opacity-10">
            <Section>
                <div className="flex-row flex gap-2 items-center">
                    <BackButton />
                    <h2 className="text-4xl font-bold text-start">
                        Karya Nadiem Untuk Indonesia
                    </h2>
                </div>
            </Section>

            <Section>
                <div className="flex md:flex-row flex-col-reverse max-w-screen-md text-xl tracking-wider leading-normal gap-8 items-center font-semibold ">
                    <div className="flex-1 w-full gap-4 flex flex-col">
                        <p className="text-xl">
                            Dari latar belakang seorang ayah dan ibu yang bukan
                            berasal dari kalangan pengusaha, Nadiem banting
                            setir memilih jalur yang berbeda dari latar belakang
                            keluarganya itu, naluri bisnis Nadiem memang sangat
                            tajam.
                            <br />
                            <br />
                            Ia dapat melihat sebuah peluang bisnis yang cocok
                            dan dapat membantu banyak warga Indonesia.
                        </p>
                    </div>
                    <div className="md:w-auto w-full h-80 m-auto aspect-square">
                        <Image
                            src="/nadiem_gojek.jpg"
                            alt="Nadiem Gojek"
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
                    <div className="w-full h-60 m-auto aspect-square flex justify-center items-center bg-white rounded-2xl">
                        <Image
                            src="/gojek_logo.svg"
                            alt="Keluarga Nadiem"
                            width={400}
                            height={533}
                            className="object-contain rounded-2xl  h-40 w-full p-8"
                            unoptimized
                        />
                    </div>
                    <div className="flex-1 w-full gap-4 flex flex-col">
                        <h2 className="text-3xl font-bold">
                            Awal Mula Ojek Online
                        </h2>
                        <p className="text-xl">
                            Bermula dari pengalaman pribadinya kembali ke
                            Jakarta untuk bekerja yang mempertemukan dirinya
                            dengan kemacetan dan dengan jiwa enterpreneurshipnya
                            itulah, pada 2011, ia mulai merintis perusahaan
                            milik sendiri yang kemudian dikenal dengan nama
                            GO-JEK, pesan ojek secara online.
                        </p>
                    </div>
                </div>
                <p className="text-xl tracking-wider ">
                    Nadiem mengaku ia angkat kaki dari perusahaan sebelumnya
                    hanya karena ia tidak betah bekerja di perusahaan orang
                    lain. Ia ingin mengontrol dirinya sendiri. Nadiem dengan
                    cerdas memanfaatkan perkembangan teknologi yang ada untuk
                    kemudahan para pelanggan GO-JEK-nya. Aplikasi GO-JEK pun
                    sudah bisa dirasakan manfaatnya oleh banyak orang.
                </p>
                <p className="text-xl tracking-wider">
                    Dalam perkembangannya, seperti dilihat dalam akun Go-Jek,
                    GO-JEK tak hanya sebagai tarnsportasi online penumpang, tapi
                    ia berkembang menjadi jasa antar barang (Go-Send), makanan
                    (Go-Food), alat kesehatan, massage, dan kebersihan
                    (Go-Clean). Kini Go-JEK sudah memiliki 200 ribu partner
                    pengemudi motor dan mobil, 35 ribu merchant Go Food, dan
                    3.000 penyedia layanan lainnya.
                </p>
            </Section>
            <Section className="max-w-screen-md p-8 pb-0 relative flex-col bg-[#ffffff] text-black rounded-t-3xl">
                <p className="text-center text-2xl tracking-wider leading-snug">
                    Semua orang bisa mencuri idemu, tetapi tidak semua orang
                    bisa <b>mengeksekusi idemu sebaik dirimu</b>.
                </p>

                <p className="text-center text-2xl tracking-wider leading-snug font-mono">
                    - Nadiem Makarim -
                </p>
                <hr className="h-[2px] my-2 bg-gray-200 border-0 "/>
            </Section>
        </main>
    );
}
