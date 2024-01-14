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
                            Bosan bekerja di perusahaan orang, Nadiem pun
                            mencoba peruntungan dengan mendirikan badan usaha
                            sendiri. Ia pun akhirnya mendirikan startup yang
                            berbasis penyedia jasa transportasi pada tahun 2010
                            bernama Gojek.
                        </p>
                    </div>
                </div>
            </Section>
            <Section>
                <div className="flex md:flex-row flex-col-reverse max-w-screen-md text-xl tracking-wider leading-normal gap-8 items-center">
                    <div className="flex-1 w-full gap-4 flex flex-col">
                        <h2 className="text-3xl font-bold">Ide Bisnis Gojek</h2>
                        <p className="text-xl">
                            Ketika ia bekerja di Mckinsey & Company, dia
                            memiliki pengalaman pribadi bahwa ia lebih suka
                            pergi dengan ojek. Dari pengalaman pribadi itulah ia
                            mendapatkan ide untuk bisnis ini. Hal ini cukup
                            efektif untuk menghindari kemacetan di ibu kota.
                        </p>
                    </div>

                    <div className="md:w-auto w-full md:h-80 m-auto md:aspect-square">
                        <Image
                            src="/jakarta-macet.jpg"
                            alt="Jakarta Macet"
                            width={400}
                            height={533}
                            className="bg-zinc-900 object-cover rounded-2xl md:h-80 w-full"
                            unoptimized
                        />
                    </div>
                </div>
            </Section>
            <Section>
                <div className="flex md:flex-row flex-col max-w-screen-md text-xl tracking-wider leading-normal gap-8 items-center">
                    <div className="md:w-auto w-full md:h-80 m-auto md:aspect-square">
                        <Image
                            src="/pangkalan-ojek.jpg"
                            alt="Karir Setelah Kembali ke Tanah Air"
                            width={400}
                            height={533}
                            className="bg-white object-cover rounded-2xl md:h-80 w-full"
                            unoptimized
                        />
                    </div>
                    <div className="flex-1 w-full gap-4 flex flex-col">
                        <p className="text-xl">
                            Sayangnya, menemukan tukang ojek sangat sulit, dan
                            Anda harus memulai dari awal. karena tidak selalu
                            tersedia saat dibutuhkan. Selain itu, pihak mereka
                            menghadapi kesulitan dalam mencari penumpang dan
                            menunggu di pangkalan.
                        </p>
                    </div>
                </div>
            </Section>
            <Section>
                <div className="flex md:flex-row flex-col-reverse max-w-screen-md text-xl tracking-wider leading-normal gap-8 items-center">
                    <div className="flex-1 w-full gap-4 flex flex-col">
                        <h2 className="text-3xl font-bold">Mendirikan Gojek</h2>
                        <p className="text-xl">
                            Nadiem menemukan bahwa ada masalah permintaan dan
                            penawaran yang tidak sesuai setelah mengamati dan
                            berbicara dengan ojek langganan, jadi dia mendirikan
                            Gojek untuk menyelesaikan masalah itu.
                        </p>
                    </div>

                    <div className="md:w-auto w-full md:h-80 m-auto md:aspect-square">
                        <Image
                            src="/nadiem-hijau.jpg"
                            alt="Nadiem Mendirikan Gojek"
                            width={400}
                            height={533}
                            className="bg-zinc-900 object-cover rounded-2xl md:h-80 w-full"
                            unoptimized
                        />
                    </div>
                </div>
            </Section>
            <Section>
                <div className="flex md:flex-row flex-col max-w-screen-md text-xl tracking-wider leading-normal gap-8 items-center">
                    <div className="md:w-auto w-full md:h-80 m-auto md:aspect-square">
                        <Image
                            src="/gojek-apps.png"
                            alt="Gojek Semakin Dikenal"
                            width={400}
                            height={533}
                            className="bg-[#00aa13] object-cover rounded-2xl md:h-80 w-full"
                            unoptimized
                        />
                    </div>
                    <div className="flex-1 w-full gap-4 flex flex-col">
                        <h2 className="text-3xl font-bold">
                            Gojek Semakin Dikenal
                        </h2>
                        <p className="text-xl">
                            Untuk meningkatkan jumlah pelanggan dan
                            memperkenalkan model bisnis mereka, Gojek
                            meluncurkan aplikasi berbasis ponsel pada tahun
                            2015. Kemudian orang-orang mulai menggunakan
                            aplikasi tersebut. Ini sekaligus mengubah gaya hidup
                            banyak orang.
                        </p>
                    </div>
                </div>
            </Section>
            <Section>
                <div className="flex md:flex-row flex-col-reverse max-w-screen-md text-xl tracking-wider leading-normal gap-8 items-center">
                    <div className="flex-1 w-full gap-4 flex flex-col">
                        <h2 className="text-3xl font-bold">
                            Perkembangan Gojek
                        </h2>
                        <p className="text-xl">
                            Investor mulai bermunculan, seperti Softbank dan
                            Google. Pada akhirnya, Gojek memperluas tujuannya
                            dengan menawarkan sistem pembayaran digital Go-pay,
                            pembersih rumah Go-clean, pengantaran paket Go-send,
                            dan fitur pemesanan makanan Go-food.
                        </p>
                    </div>

                    <div className="md:w-auto w-full md:h-80 m-auto md:aspect-square">
                        <Image
                            src="/gofood.png"
                            alt="GoFood"
                            width={400}
                            height={533}
                            className="bg-white object-contain p-6 rounded-2xl md:h-80 w-full"
                            unoptimized
                        />
                    </div>
                </div>
            </Section>
            <Section>
                <div className="flex flex-row justify-end text-xl tracking-wider leading-normal gap-8 items-center w-full">
                    <Link
                        href="/kurikulum-merdeka"
                        className="rounded-full bg-[#00aa13] px-6 py-3 hover:ring-2 hover:ring-white text-center flex flex-row items-center gap-2 w-full md:w-auto"
                    >
                        Lanjut ke Kurikulum Merdeka
                        <ArrowRight weight="bold" />
                    </Link>
                </div>
            </Section>
        </main>
    );
}
