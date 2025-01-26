const Application = () => {
  return (
    <div>
      <section className="container px-4 md:px-8 md:py-[170px] py-[100px]">
        <div className="grid md:grid-cols-2 grid-cols-1 md:gap-[75px]">
          <div>
            <img src="/Frame2.png" alt="" />
          </div>
          <div className="flex flex-col justify-center  pt-10 ">
            <h2 className="font-bold text-[30px] leading-8 pb-6 text-center md:text-left">
              Ariza yuborish
            </h2>
            <form action="">
              <p className="font-medium text-[16px] leading-5 pb-2">
                Ota ona ismi va Familyasi
              </p>
              <input
                type="text"
                placeholder="Isimi Familyangizni yozing"
                className="md:w-[60%] w-full px-4 py-2 border-[1px] border-black outline-none rounded-lg"
              />
              <p className="font-medium text-[16px] leading-5 pt-4 pb-2">
                Farzand yoshi
              </p>
              <input
                type="text"
                placeholder="Farzandingizni yoshini yozing"
                className="md:w-[60%] w-full px-4 py-2 border-[1px] border-black outline-none rounded-lg"
              />
              <p className="font-medium text-[16px] leading-5 pt-4 pb-2">
                Telefon raqamingiz
              </p>
              <input
                type="text"
                placeholder="Telefon raqamingizni yozing"
                className="md:w-[60%] w-full px-4 py-2 border-[1px] border-black outline-none rounded-lg"
              />
              <button className="font-bold text-[16px] leading-5 py-[10px] px-5 bg-[#315033] text-white mt-[55px] rounded-lg w-full md:w-[60%]">
                Yuborish
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Application;
