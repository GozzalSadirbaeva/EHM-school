import { useState } from "react";

const Home = () => {
  const [formData, setFormData] = useState({ name: "", phone: "", age: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Maktabda qaysi fanlar o‘qitiladi?",
      answer:
        "Bizning maktabda o‘quvchilar til va akademik fanlar bo‘yicha keng qamrovli ta’lim olishadi. Dasturimizda rus va nemis tillari, matematika, adabiyot, san’at, jismoniy tarbiya va boshqa fanlar mavjud.",
    },
    {
      question: "Qanday qilib ariza yuborish mumkin?",
      answer:
        "Ariza yuborish uchun saytimizdagi ariza formasi orqali ma'lumotlaringizni kiritishingiz kerak. Keyin biz siz bilan bog‘lanamiz va qo‘shimcha ma’lumotlarni taqdim etamiz.",
    },
    {
      question: "Maktabda o‘qish narxi qancha?",
      answer:
        " O‘qish narxi haqida to‘liq ma’lumotni bizning adminstratsiya bo‘limidan olishingiz mumkin. Har bir yil uchun turli to‘lov variantlari mavjud.",
    },
    {
      question: "Maktabda qanday o‘qituvchilar ishlaydi?",
      answer:
        "Bizning o‘qituvchilarimiz yuqori malakali va o‘z sohalarida tajribaga ega. Har bir o‘qituvchi o‘z sohasida mutaxassis va bolalar bilan ishlashda katta tajribaga ega.",
    },
    {
      question: "Maktabga qanday kirish sinovlari bor?",
      answer:
        "Maktabga kirish uchun dastlab sinov imtihonlari o‘tkaziladi, bu o‘quvchilarning bilim darajasini aniqlashga yordam beradi. Sinovlar haqida batafsil ma’lumotni bizning saytimizdan olishingiz mumkin.",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section id="hero" className="container mx-auto px-4 md:px-8 pb-16">
        <img src="/Lines.svg" alt="" className="md:pl-7 w-[50%]" />
        <div className="flex flex-col md:flex-row gap-6 items-center">
          <div className="flex-1">
            <h1 className="text-[32px] md:text-[60px] font-bold leading-tight pb-6">
              Farzandingiz uchun eng yaxshi ta’lim
              <span className="text-[#E0AF00]"> muhitini yarating!</span>
            </h1>
            <p className="text-[16px] md:text-[20px] font-medium leading-6 md:leading-[32px]">
              Maktabimizda farzandingiz rus va nemis tillarini chuqur o‘rganadi,
              kichik sinflarda individual yondashuv bilan bilim oladi. Zamonaviy
              ta’lim metodlari va yuqori darajadagi o‘quv dasturlari bilan
              kelajakka qadam qo‘yaylik.
            </p>
            <div className="flex flex-col md:flex-row gap-3 pt-6">
              <button className="bg-[#E0AF00] text-black py-3 px-6 rounded-lg text-base font-bold">
                Ariza yuborish
              </button>
              <button className="bg-[#F0F0F2DE] py-3 px-6 rounded-lg text-base font-bold">
                📚 Maktab haqida
              </button>
            </div>
          </div>
          <div className="flex-1 pt-[30px]">
            <img
              src="./img5.png"
              alt="Farzandingiz uchun eng yaxshi ta’lim"
              className="w-full"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-8 md:py-[85px] bg-fon">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row bg-white px-6 md:px-[58px] py-8 md:py-[48px] gap-8 md:gap-[95px] rounded-xl">
            <div>
              <img src="/card1.png" alt="Til ta’limi" className="mx-auto" />
              <h3 className="text-xl md:text-2xl font-bold leading-tight py-4">
                Til ta’limi o‘yinlar orqali
              </h3>
              <p className="text-base font-medium leading-6">
                Farzandingiz rus va nemis tillarini o‘rganishda o‘yinlar va
                interaktiv metodlardan foydalanadi.
              </p>
            </div>
            <div>
              <img
                src="/card2.png"
                alt="Individual yondashuv"
                className="mx-auto"
              />
              <h3 className="text-xl md:text-2xl font-bold leading-tight py-4">
                Individual yondashuv
              </h3>
              <p className="text-base font-medium leading-6">
                Kichik sinflar va o‘qituvchilar bilan yaqin aloqada ta’lim
                olish. Har bir bola uchun moslashtirilgan o‘quv jarayoni.
              </p>
            </div>
            <div>
              <img
                src="/card3.png"
                alt="Zamonaviy metodlar"
                className="mx-auto"
              />
              <h3 className="text-xl md:text-2xl font-bold leading-tight py-4">
                Zamonaviy o‘quv metodlari
              </h3>
              <p className="text-base font-medium leading-6">
                Interaktiv texnologiyalar va innovatsion uslublar yordamida
                bilimlarni tez va samarali o‘zlashtirish.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section id="advantages" className="py-8 md:pt-[100px] pt-14">
        <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row gap-6 md:gap-[78px]">
          <div className="flex-1">
            <h2 className="font-bold md:text-2xl text-xl md:text-[40px] md:leading-tight">
              Maktab haqida
            </h2>
            <h3 className="font-medium md:text-xl leading-8 pt-4 pb-6">
              Bizning maktab Toshkentda joylashgan va bolalarga rus va nemis
              tillarini chuqur o‘rgatishga ixtisoslashgan. Bizning ta’lim
              uslubimiz zamonaviy yondashuvlarga asoslangan bo‘lib, har bir bola
              uchun individual o‘quv rejasi ishlab chiqiladi. Kichik sinflar,
              yuqori malakali o‘qituvchilar va interaktiv metodlar yordamida
              farzandingizning bilim olish jarayonini qiziqarli va samarali
              qilamiz.
            </h3>

            <div className="flex-1">
              <div className="flex flex-col gap-9">
                <p className="font-semibold md:text-xl md:leading-8">
                  <span className="md:px-[15px] md:py-[8px] px-[12px] py-[5px] rounded-[50%] bg-[#315033] font-semibold md:text-[22px leading-7] text-white mr-[22px]">
                    1
                  </span>
                  Til ta’limi o‘yinlar orqali
                </p>
                <p className="font-semibold md:text-xl md:leading-8">
                  <span className="md:px-[15px] md:py-[8px] px-[12px] py-[5px] rounded-[50%] bg-[#315033] font-semibold md:text-[22px leading-7] text-white mr-[22px]">
                    2
                  </span>
                  Individual yondashuv
                </p>
                <p className="font-semibold md:text-xl md:leading-8">
                  <span className="md:px-[15px] md:py-[8px] px-[12px] py-[5px] rounded-[50%] bg-[#315033] font-semibold md:text-[22px leading-7] text-white mr-[22px]">
                    3
                  </span>
                  Yuqori malakali o‘qituvchilar
                </p>
                <p className="font-semibold md:text-xl md:leading-8">
                  <span className="md:px-[15px] md:py-[8px] px-[12px] py-[5px] rounded-[50%] bg-[#315033] font-semibold md:text-[22px leading-7] text-white mr-[22px]">
                    4
                  </span>
                  Zamonaviy o‘quv metodlari
                </p>
                <p className="font-semibold md:text-xl md:leading-8">
                  <span className="md:px-[15px] md:py-[8px] px-[12px] py-[5px] rounded-[50%] bg-[#315033] font-semibold md:text-[22px leading-7] text-white mr-[22px]">
                    5
                  </span>
                  Kichik sinflar va yuqori e’tibor
                </p>
                <p className="font-semibold md:text-xl md:leading-8">
                  <span className="md:px-[15px] md:py-[8px] px-[12px] py-[5px] rounded-[50%] bg-[#315033] font-semibold md:text-[22px leading-7] text-white mr-[22px]">
                    6
                  </span>
                  O‘qishdagi yuqori natijalar
                </p>
              </div>
              <button className="px-6 md:px-12 py-2 md:py-3 rounded-lg bg-[#315033] text-white mt-8 md:mt-10 font-bold text-sm md:text-base leading-6">
                📚 Ko’proq
              </button>
            </div>
          </div>
          <div className="flex-1 content-center pt-[50px]">
            <img src="/img2.png" alt="Maktab haqida" className="w-full " />
          </div>
        </div>
      </section>

      <section className="bg-fon-second md:mt-[109px] mt-[50px]  py-10 px-4 md:px-8">
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="font-bold text-2xl md:text-[40px] leading-8 md:leading-[48px] text-white">
              Darslar jarayoni
            </h2>
            <h3 className="font-medium text-base md:text-xl leading-6 md:leading-8 pt-4 md:pt-6 pb-6 md:pb-8 text-white">
              Bizning maktabda o‘quv dasturi farzandlaringizning intellektual va
              ijodiy rivojlanishini ta'minlashga qaratilgan. Darslar rus va
              nemis tillari, matematika, tabiatshunoslik, san’at va jismoniy
              tarbiya kabi fanlarni o‘z ichiga oladi. Har bir dars zamonaviy
              yondashuvlar va interaktiv metodlar orqali olib boriladi,
              shuningdek, bolalarga bilim olish jarayonida ko‘proq mustaqil
              fikrlash va ijodiy yondashuvni o‘rgatish maqsad qilinadi.
            </h3>
            <button className="px-6 md:px-12 py-2 md:py-3 rounded-lg bg-white mt-4 md:mt-6 font-bold text-sm md:text-base leading-6">
              🎓 Ko’proq
            </button>
          </div>
          <div className="flex justify-center">
            <img
              src="/img3.png"
              alt=""
              className="w-full md:w-auto max-w-sm md:max-w-full"
            />
          </div>
        </div>
      </section>

      <section className="bg-fon py-8 md:py-[100px] px-4 md:px-8">
        <div className="container">
          <h2 className="font-bold text-2xl md:text-[40px] leading-8 md:leading-[48px] text-center pb-6">
            Bizning yutuqlarimiz
          </h2>
          <div className="grid grid-cols-1 md:flex gap-8 md:gap-12 items-center">
            <div>
              <p className="font-medium text-center text-base md:text-lg leading-6 pb-2">
                O‘quvchilar soni
              </p>
              <p className="font-bold text-xl md:text-2xl leading-7 md:leading-8 text-center">
                150+ o‘quvchi maktabimizda sifatli ta’lim olmoqda
              </p>
            </div>
            <img src="/Line 94.svg" alt="" className="hidden md:block" />
            <div>
              <p className="font-medium text-center text-base md:text-lg leading-6 pb-2">
                O‘qituvchilar tajribasi
              </p>
              <p className="font-bold text-xl md:text-2xl leading-7 md:leading-8 text-center">
                20+ tajribali va malakali o‘qituvchilar jamoasi.
              </p>
            </div>
            <img src="/Line 94.svg" alt="" className="hidden md:block" />
            <div>
              <p className="font-medium text-center text-base md:text-lg leading-6 pb-2">
                Bitiruvchilar muvaffaqiyati
              </p>
              <p className="font-bold text-xl md:text-2xl leading-7 md:leading-8 text-center">
                90% bitiruvchilar yuqori natijalar bilan ta’limni davom
                ettirishmoqda.
              </p>
            </div>
          </div>
          <h2 className="font-bold text-xl md:text-[36px] leading-8 md:leading-[48px] text-center pt-8 md:pt-14 pb-4 md:pb-6">
            Farzandingizning yorqin kelajagi uchun birinchi{" "}
            <br className="hidden md:block" /> qadam! 🚀
          </h2>
          <h3 className="font-medium text-center text-base md:text-xl leading-6 md:leading-8">
            Farzandingizning kelajagi bugungi tanlovingizdan boshlanadi. Biz
            bilan ular uchun <br className="hidden md:block" />
            mustahkam bilim, cheksiz imkoniyatlar va yorqin kelajak yo‘lini
            yarating!
          </h3>
          <div className="flex justify-center mt-8 md:mt-11">
            <button className="px-5 py-3 bg-[#315033] rounded-lg text-white font-bold text-sm md:text-base leading-6">
              Royhatdan otish
            </button>
          </div>
        </div>
      </section>

      <section id="contact" className="p-6 md:p-10 pt-10">
        <div className="container">
          <h2 className="font-bold text-2xl md:text-[40px] leading-8 md:leading-[48px] text-center">
            Ota-onalar biz haqimizda nima <br className="hidden md:block" />{" "}
            deyishadi?
          </h2>
          <h3 className="font-medium text-base md:text-xl leading-6 md:leading-8 pt-4 md:pt-6 pb-6 md:pb-8 text-center">
            Bizning maktabni tanlaganlar fikri
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="p-6 md:p-[30px] bg-white rounded-xl shadow-md">
              <img src="/Vector1.svg" alt="" className="w-8 md:w-auto" />
              <p className="font-medium text-sm md:text-lg leading-6 md:leading-7 pt-4 md:pt-6 pb-4 md:pb-5">
                Farzandim ushbu maktabda o‘qishni boshlagandan beri uning
                qobiliyatlari yanada rivojlanib bormoqda. Ayniqsa, til
                o‘rganishdagi natijalari bizni hayratga solmoqda. U yerda
                ishlaydigan o‘qituvchilar juda mehribon va e’tiborli.
                Farzandimiz uchun bu maktabni tanlaganimizdan juda xursandmiz!
              </p>
              <div className="flex justify-between items-center">
                <p className="font-bold text-sm md:text-lg leading-5 md:leading-6">
                  Malika R., 8 yoshli <br /> o‘quvchining onasi
                </p>
                <div className="flex">
                  {Array(5)
                    .fill(0)
                    .map((_, starIdx) => (
                      <img
                        key={starIdx}
                        src="/star1.svg"
                        alt=""
                        className="w-4 md:w-auto"
                      />
                    ))}
                </div>
              </div>
            </div>
            <div className="p-6 md:p-[30px] bg-white rounded-xl shadow-md">
              <img src="/Vector1.svg" alt="" className="w-8 md:w-auto" />
              <div className="flex flex-col md:gap-[30px] sm:gap-0">
                <p className="font-medium text-sm md:text-lg leading-6 md:leading-7 pt-4 md:pt-6 pb-4 md:pb-5">
                  Maktabni tanlash biz uchun juda muhim qaror edi, va biz
                  to‘g‘ri tanlov qilganimizga ishonchimiz komil. Ushbu maktab
                  nafaqat bilim beradi, balki bolalarning iste’dodlarini
                  ochishga ham yordam beradi. Biz farzandimizning kelajagi uchun
                  xotirjammiz.
                </p>
                <div className="flex justify-between items-center">
                  <p className="font-bold text-sm md:text-lg leading-5 md:leading-6">
                    Rustam A., 10 yoshli <br />
                    o‘quvchining otasi
                  </p>
                  <div className="flex">
                    {Array(5)
                      .fill(0)
                      .map((_, starIdx) => (
                        <img
                          key={starIdx}
                          src="/star1.svg"
                          alt=""
                          className="w-4 md:w-auto"
                        />
                      ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="p-6 md:p-[30px] bg-white rounded-xl shadow-md">
              <img src="/Vector1.svg" alt="" className="w-8 md:w-auto" />
              <div className="flex flex-col md:gap-[55px] sm:gap-0">
                <p className="font-medium text-sm md:text-lg leading-6 md:leading-7 pt-4 md:pt-6 pb-4 md:pb-5">
                  Ushbu maktab bizni zamonaviy yondashuvi va qulay o‘quv muhiti
                  bilan o‘ziga jalb qildi. Farzandim har kuni maktabga borishni
                  intiqlik bilan kutadi. U yerda nafaqat bilim, balki yaxshi
                  tarbiya ham oladi. O‘qituvchilariga katta rahmat!
                </p>
                <div className="flex justify-between items-center">
                  <p className="font-bold text-sm md:text-lg leading-5 md:leading-6">
                    Dilnoza K., 7 yoshli <br />
                    o‘quvchining onasi
                  </p>
                  <div className="flex">
                    {Array(5)
                      .fill(0)
                      .map((_, starIdx) => (
                        <img
                          key={starIdx}
                          src="/star1.svg"
                          alt=""
                          className="w-4 md:w-auto"
                        />
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-fon mt-14 px-4 md:px-8">
        <div className="container grid md:grid-cols-2 md:pt-[60px] md:gap-[114px] pt-10">
          <div>
            <img src="/img4.png" alt="" />
          </div>
          <div>
            <h2 className="font-bold md:text-[40px] text-[20px] md:leading-[48px] pt-10 text-center md:text-left">
              Farzandingizni eng yaxshi ta’lim bilan ta’minlash uchun ariza
              yuboring!
            </h2>
            <h3 className="font-medium md:text-lg text-sm md:leading-7 pb-10 pt-6 text-center">
              Ariza qoldiring. Biz siz bilan bog‘lanib batafsil malumot beramiz.
            </h3>
            <button className="bg-[#E0AF00] px-4 py-2 text-black md:py-[11.5px] md:px-5 rounded-lg md:text-base font-bold leading-6 text-sm sm:flex sm:self-center">
              Ariza yuborish
            </button>
          </div>
        </div>
        <div className="flex justify-between container pt-7">
          <img src="/frame1.svg" alt="" />
          <img src="/frame2.svg" alt="" />
          <img src="/frame3.svg" alt="" />
        </div>
      </section>

      {/* FAQ Section */}
      <section
        id="faq"
        className="container mx-auto px-4 md:px-8 py-14 grid md:grid-cols-2"
      >
        <h2 className="font-bold text-2xl md:text-[40px] leading-tight text-center md:pt-5">
          Ko‘p beriladigan savollar (FAQ)
        </h2>
        <div className="space-y-4 mt-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b-2 rounded-lg overflow-hidden shadow-sm"
            >
              <button
                className="w-full flex justify-between items-center p-4"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-semibold text-lg md:text-[22px] leading-8">
                  {faq.question}
                </span>
                <span className="text-xl">
                  {activeIndex === index ? (
                    <img
                      src="/minus.svg"
                      alt="collapse"
                      className=" max-w-[70%] md:max-w-[90%]"
                    />
                  ) : (
                    <img
                      src="/plus.svg"
                      alt="expand"
                      className="max-w-[70%] md:max-w-[90%]"
                    />
                  )}
                </span>
              </button>
              {activeIndex === index && faq.answer && (
                <div className="font-medium text-base md:text-lg leading-8 pl-4 md:pl-20 pb-2">
                  Javob: {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
