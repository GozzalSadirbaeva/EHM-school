const Program = () => {
  return (
    <div>
      <section className="container px-4 md:px-8 grid md:grid-cols-2 md:pt-24 pt-12 md:gap-5 md:pb-[137px]">
        <div>
          <h2 className="text-[26px] md:text-[45px] font-extrabold md:leading-[60px]">
            Bizning ta’lim dasturimiz – har tomonlama rivojlanish sari qadam!
          </h2>
          <h3 className="text-[16px] md:text-[20px] font-medium leading-6 md:leading-[32px] pt-8 pb-20">
            Bizning maktabimizning ta’lim dasturi har bir o‘quvchining
            intellektual, ijodiy va jismoniy rivojlanishini qo‘llab-quvvatlash
            uchun maxsus ishlab chiqilgan. Dasturimiz bolalarni zamonaviy dunyo
            talablariga javob beradigan bilim va ko‘nikmalar bilan ta’minlaydi.
          </h3>
        </div>

        <div className="flex justify-center">
          <img src="/img2.png" alt="" className="  max-w-sm " />
        </div>
      </section>

      <section className="bg-fon-dastur mt-[50px]  py-10 px-4 md:px-8 ">
        <div className="container grid grid-cols-1 gap-8 pt-[48px] pb-[74px]">
          <div className="relative">
            <h2 className="font-bold text-2xl md:text-[40px] leading-8 md:leading-[48px] text-white">
              Bizning Ta'lim Dasturimiz
            </h2>
            <img src="/Illustration.svg" alt="" className="absolute md:right-28 right-10 top-[-80px] md:top-[-50px]  w-[20%]" />
            <div>
              <p className="font-medium text-base md:text-xl leading-6 md:leading-8 pt-4 md:pt-[89px] pb-6 md:pb-8 text-white md:pr-[50%]">
                1. Til Darslari (Rus va Nemis) O'quvchilarimizga yuqori sifatli
                rus va nemis tillari bo'yicha darslar taqdim etiladi. Darslar
                interaktiv usullar bilan olib borilib, bolalarning tilni
                o'rganishdagi qiziqishini oshiradi. Har bir tilni o'ziga xos
                metodika asosida o'rgatamiz, bu esa tilni tez va samarali
                o'zlashtirishga yordam beradi.
              </p>
              <p className="font-medium text-base md:text-xl leading-6 md:leading-8 pt-4 md:pt-6 pb-6 md:pb-8 text-white md:pl-[50%]">
                2. Ijodiy Faoliyat Biz o'quvchilarni san'at, musiqa, va boshqa
                ijodiy faoliyatlarga jalb qilamiz. Bu faoliyatlar bolaning
                ijodiy tafakkurini rivojlantirishga yordam beradi va ularning
                hissiy qobiliyatlarini oshiradi.
              </p>
              <p className="font-medium text-base md:text-xl leading-6 md:leading-8 pt-4 md:pt-6 pb-6 md:pb-8 text-white md:pr-[50%]">
                3. Mantiq va Matematika Matematika va mantiqiy fikrlashni
                rivojlantirish bo'yicha darslar bolalarning analitik fikrlashini
                va muammolarni hal qilish qobiliyatini oshiradi. Biz
                matematikaning asoslarini o'rganishda sodda va tushunarli
                usullarni qo'llaymiz.
              </p>
              <p className="font-medium text-base md:text-xl leading-6 md:leading-8 pt-4 md:pt-6 pb-6 md:pb-8 text-white md:pl-[50%]">
                4. Sport Faoliyati Sog'lom tana – sog'lom ruhni shakllantirishga
                yordam beradi. Maktabimizda bolalar sportning turli turlariga
                jalb qilinadi, bu ularning jismoniy rivojlanishiga va jamoada
                ishlash qobiliyatlarini oshirishga yordam beradi.
              </p>
              <p className="font-medium text-base md:text-xl leading-6 md:leading-8 pt-4 md:pt-6 pb-6 md:pb-8 text-white md:pr-[50%]">
                5. Bilingvizm Bizning ta'lim dasturimizda bilingvizmga alohida
                e'tibor qaratiladi. O'quvchilarimiz ikki tilda: rus va nemis
                tillarida erkin muloqot qilishni o'rganadilar. Bu bilimlar
                ularning kelajakdagi muvaffaqiyatlari uchun poydevor yaratadi.
              </p>
              <img
                src="/Book-Illustration.svg"
                alt=""
                className="absolute left-0 bottom-[-60px] w-[20%] md:w-[10%] md:right-20"
              />

              <p className="font-medium text-base md:text-xl leading-6 md:leading-8 pt-4 md:pt-6 pb-6 md:pb-8 text-white md:pl-[50%]">
                6. Ijtimoiy Faoliyat Biz o'quvchilarimizni jamoaviy ishlarga
                jalb qilamiz, ular birgalikda ijtimoiy loyihalar va tadbirlarda
                ishtirok etadilar. Bu bolalarda liderlik va jamoada ishlash
                ko'nikmalarini rivojlantiradi.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="container py-[85px] md:px-[250px]">
        <h2 className="font-bold text-2xl md:text-[40px] leading-8 md:leading-[48px] text-center">
          Dasturimizning asosiy maqsadi
        </h2>
        <p className="font-medium text-base md:text-xl leading-6 md:leading-8 pt-20 text-center">
          Dasturimizning asosiy maqsadi - har bir bolani o'ziga xos, individual
          yondashuv bilan ta'lim berish va ularni kelajakda muvaffaqiyatli
          insonlar sifatida shakllantirishdir. Har bir bolaning o'z orzulari
          bor, va biz ularga shu orzularni amalga oshirishda yordam beramiz..
        </p>
      </section>
    </div>
  );
};

export default Program;
