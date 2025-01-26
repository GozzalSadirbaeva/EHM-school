const Program = () => {
  return (
    <div>
      <section className="container px-4 md:px-8 grid md:grid-cols-2 md: pt-24">
        <div>
          <h2 className="text-[26px] md:text-[54px] font-bold leading-tight">
            Bizning ta’lim dasturimiz – har tomonlama rivojlanish sari qadam!
          </h2>
          <h3>
            Bizning maktabimizning ta’lim dasturi har bir o‘quvchining
            intellektual, ijodiy va jismoniy rivojlanishini qo‘llab-quvvatlash
            uchun maxsus ishlab chiqilgan. Dasturimiz bolalarni zamonaviy dunyo
            talablariga javob beradigan bilim va ko‘nikmalar bilan ta’minlaydi.
          </h3>
        </div>

        <div className="flex justify-center">
          <img
            src="/img3.png"
            alt=""
            className="w-full md:w-auto max-w-sm md:max-w-full"
          />
        </div>
      </section>
    </div>
  );
};

export default Program;
