import Section from "@/components/Section";
import { Quotes } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between gap-8 p-6 m-auto">
            <Section className="max-w-screen-md w-full bg-pattern rounded-2xl">
                <div className="w-full h-full flex portrait:flex-col flex-wrap items-center justify-center  portrait:min-h-screen portrait:h-full">
                    <div className="flex flex-col justify-start items-start gap-4 flex-1 p-6">
                        <div className="flex flex-col gap-2">
                            <h1 className="uppercase text-7xl font-bold tracking-widest text-start font-head">
                                Nadiem
                                <br />
                                Makarim
                            </h1>
                            <h1 className="uppercase text-xl font-bold tracking-widest text-start ">
                                MENTERI PENDIDIKAN DAN KEBUDAYAAN
                            </h1>
                        </div>
                        <h1 className="text-xl text-start tracking-wider bg-[#afe46c] text-black uppercase font-bold px-4 py-2 rounded-full">
                            Biografi
                        </h1>
                    </div>
                    <div className="h-full flex-1 w-auto flex items-end">
                        <Image
                            src="/thumbnail.png"
                            alt="Nadiem Anwar Makarim"
                            width={500}
                            height={500}
                            className="object-contain rounded-2xl h-full w-auto"
                            unoptimized
                        />
                    </div>
                </div>
            </Section>
            <Section>
                <div className="flex md:flex-row flex-col max-w-screen-md text-xl tracking-wider leading-normal gap-8 items-center">
                    <div className="h-80 w-auto m-auto">
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
                            <b>Nadiem Anwar Makarim</b> atau yang lebih dikenal
                            dengan panggilan Pak Nadiem lahir di Jakarta 4 Juli
                            1984 dari pasangan Nono Anwar Makarim dan Atika
                            Algadrie. Ia adalah anak lelaki satu satunya dari
                            pengacara ternama keturunan Arab asal Pekalongan,
                            Jawa Tengah, Nono Anwar Makarim. Ayahnya seorang
                            intelektual dan lawyer dengan gelar Doktor ilmu
                            hukum lulusan Harvard.
                        </p>
                    </div>
                </div>
            </Section>
            <Section>
                <div className="flex md:flex-row flex-col-reverse max-w-screen-md text-xl tracking-wider leading-normal gap-8 items-center">
                    <div className="flex-1 w-full gap-4 flex flex-col">
                        <h2 className="text-3xl font-bold">Keluarga Nadiem</h2>
                        <p className="text-xl">
                            Meski Nadiem adalah anak bungsu dari 3 bersaudara,
                            ia tidak berperilaku manja. Justru ia tetap
                            menunjukkan kemandiriannya. Setelah meluluskan
                            jenjang pendidikan dasar dan menengahnya di Jakarta,
                            ia melanjutkan SMA- nya di Singapura. Bahkan tak
                            hanya di situ kemandiriannya, lulus dari Singapura,
                            ia pergi ke Amerika untuk melanjutkan pendidikannya
                            di Brown University Amerika Serikat.
                        </p>
                    </div>
                    <div className="md:w-auto  w-full  h-80 m-auto aspect-square">
                        <Image
                            src="/family_photo.jpg"
                            alt="Keluarga Nadiem"
                            width={400}
                            height={533}
                            className="bg-zinc-900 object-cover rounded-2xl h-80 w-full"
                            unoptimized
                        />
                    </div>
                </div>
            </Section>
            <Section>
                <div className="flex md:flex-col flex-col max-w-screen-md text-xl tracking-wider leading-normal gap-8 items-center">
                    <div className="flex-row flex gap-4">
                        <div className="w-full h-64 m-auto flex-1">
                            <Image
                                src="/lse.png"
                                alt="London School of Economics"
                                width={400}
                                height={533}
                                className="bg-white object-contain rounded-2xl h-full w-full p-6"
                                unoptimized
                            />
                        </div>
                        <div className="w-full h-64 m-auto flex-1">
                            <Image
                                src="/hbs.png"
                                alt="Harvard Business School"
                                width={400}
                                height={533}
                                className="bg-white object-contain rounded-2xl h-full w-full p-6"
                                unoptimized
                            />
                        </div>
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
                    <div className="md:w-auto  w-full  h-80 m-auto aspect-square">
                        <Image
                            src="/mckinsey.png"
                            alt="McKinsey & Company"
                            width={400}
                            height={533}
                            className="bg-white object-contain p-6 rounded-2xl h-80 w-full"
                            unoptimized
                        />
                    </div>
                </div>
            </Section>
            <Section>
                <div className="flex md:flex-row flex-col max-w-screen-md text-xl tracking-wider leading-normal gap-8 items-center">
                    <div className="md:w-auto w-full h-80 m-auto aspect-square">
                        <Image
                            src="/zalora.jpg"
                            alt="Zalora Indonesia"
                            width={400}
                            height={533}
                            className="bg-black object-contain rounded-2xl h-80 w-full"
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
                    <div className="md:w-auto  w-full h-80 m-auto aspect-square">
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
                    <div className="w-full h-80 m-auto aspect-square flex justify-center items-center bg-white rounded-2xl">
                        <Image
                            src="/gojek_logo.svg"
                            alt="Keluarga Nadiem"
                            width={400}
                            height={533}
                            className="object-contain rounded-2xl h-20 w-full"
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
            <Section className="max-w-screen-md p-8 relative flex-col bg-blue-400 text-black rounded-2xl">
                <Quotes
                    className="absolute right-8 bottom-8"
                    size={48}
                    weight="fill"
                />
                <p className="text-center text-4xl tracking-wider leading-snug">
                    Semua orang bisa mencuri idemu, tetapi tidak semua orang
                    bisa <b>mengeksekusi idemu sebaik dirimu</b>.
                </p>

                <p className="text-center text-2xl tracking-wider leading-snug font-mono">
                    - Nadiem Makarim -
                </p>
            </Section>
        </main>
    );
}
