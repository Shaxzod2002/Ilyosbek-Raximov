import React from "react";

export default function Business() {
  return (
    <>
      <div className="w-full min-h-screen flex bussiness">
        <div className="left w-1/2 flex flex-col justify-center pl-5 gap-2">
          <h2 className="text-4xl ">
            MLM Biznesi sari qo'yilgan ilk qadamlar...
          </h2>
          <video
            src={require("./videos/1.mp4")}
            className="w-[450px] rounded-lg"
            poster={require("./videos/video-bg.jpg")}
            controls
          ></video>
        </div>
        <div className="right w-1/2 flex flex-col justify-center pr-5 gap-1">
          <h1 className="text-4xl text-center">
            MLM nima? Oddiy so'zlar bilan tushuntirish.
          </h1>
          <p>
            MLM (MLM, ko'p bosqichli marketing - ko'p darajali yoki tarmoq
            marketingi) to'g'ridan-to'g'ri savdo tizimi bo'lib, unda kompaniya
            mijozning mahsulotga qiziqishi va xarid qilishini kutmasdan, odatda
            mustaqil sotuvchilarni (distribyutorlarni) jalb qiladi. yangi
            mijozlar va distribyutorlarni olishga yordam beradigan xaridor bilan
            bevosita bog'langan o'z mijozlari orasidan.
          </p>
          <p>
            <b>Oddiy qilib aytganda</b> , tarmoq marketingi tovarlar yoki
            xizmatlarni taqsimlash sxemasidir. Bu distribyutor bo'ladigan
            odamlarni jalb qilishga asoslangan va kelajakda o'zlari yangi
            mijozlar va hamkorlarni jalb qilishlari mumkin. Ko'p darajali
            tuzilmaga qancha odam jalb qilinsa, ularning daromadlari shunchalik
            yuqori bo'ladi.
          </p>
          <p>
            Tarqatish tarmog'i a'zolari mahsulotlarni sotish uchun foizlar va
            turli bonuslar ko'rinishida daromad oladilar, bu ular jalb qilgan
            sheriklar jamoasining savdo hajmiga bog'liq.
            <br />
            MLM biznesida distribyutorlar mijozlarni asosan o'zlari izlaydilar:
            ular do'stlariga qo'ng'iroq qiladilar, master-klasslar tashkil
            qiladilar yoki ijtimoiy tarmoqlarda guruhlar yaratadilar. Bu
            to'g'ridan-to'g'ri sotish deb ataladi.
            <br />
            Tashqi reklamaga, qoida tariqasida, ikkinchi darajali rol beriladi.
            Bu sizga mijozlarni jalb qilish uchun reklama xarajatlarini
            kamaytirish va bu pulni distribyutorlarni to'lashga yo'naltirish
            imkonini beradi.
          </p>
        </div>
      </div>
      <div>
        <h1 className="capitalize text-center text-4xl business-time font-bold">
          biznes mativatsiya vaqti
        </h1>
        <div className="videos">
          <video src={require("./videos/1")}></video>
        </div>
      </div>
    </>
  );
}
