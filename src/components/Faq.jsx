import Title from "../components/Title";

const Faq = () => {
  return (
    <section className="bg-[#121212]">
      <div className="container">
        <Title
          text={"FREQUENTLY ASKED QUESTION “QUESTION & ANSWER”"}
          position={"left-[140px] md:left-[380px]"}
        />
        <div className="md:flex justify-between flex-wrap py-[10px] pb-[200px]">
          {/* card 1  */}
          <div className=" basis-2/4  w-full md:border-r border-b flex  gap-[40px] pb-[100px] pr-[100px]">
            <div className="bg-[#FF4655] text-white h-[70px] px-[30px] flex items-center justify-center font-barlow text-[38px]">
              1
            </div>
            <div>
              <h2 className="font-barlow text-white text-[22px] uppercase font-[600]">
                HOW TO DOWNLOAD THE GAME ?
              </h2>
              <p className="font-oswald text-[16px] text-[#666666]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perferendis, iste, sed error at adipisci repellat rem maiores
                provident voluptatem ipsum autem fugiat.
              </p>
            </div>
          </div>
          {/* card 2 */}
          <div className=" basis-2/4  w-full  border-b flex  gap-[40px] pt-[100px] md:pt-0 pb-[100px] md:pl-[100px]">
            <div className="bg-[#FF4655] text-white h-[70px] px-[30px] flex items-center justify-center font-barlow text-[38px]">
              2
            </div>
            <div>
              <h2 className="font-barlow text-white text-[22px] uppercase font-[600]">
                IS THERE ANY AGE RESTRICTIONS ?
              </h2>
              <p className="font-oswald text-[16px] text-[#666666]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perferendis, iste, sed error at adipisci repellat rem maiores
                provident voluptatem ipsum autem fugiat.
              </p>
            </div>
          </div>
          {/* card 3 */}
          <div className=" basis-2/4  w-full md:border-r flex  gap-[40px] pt-[100px] pb-[100px] border-b md:border-b-0 md:pb-0 md:pr-[100px]">
            <div className="bg-[#FF4655] text-white h-[70px] px-[30px] flex items-center justify-center font-barlow text-[38px]">
              3
            </div>
            <div>
              <h2 className="font-barlow text-white text-[22px] uppercase font-[600]">
                HOW TO BECOME A TEAM MEMBER ?
              </h2>
              <p className="font-oswald text-[16px] text-[#666666]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perferendis, iste, sed error at adipisci repellat rem maiores
                provident voluptatem ipsum autem fugiat.
              </p>
            </div>
          </div>
          {/* card 4 */}
          <div className=" basis-2/4  w-full  flex  gap-[40px] pt-[100px] pb-[100px] md:pb-0 border-b md:border-b-0 md:pl-[100px]">
            <div className="bg-[#FF4655] text-white h-[70px] px-[30px] flex items-center justify-center font-barlow text-[38px]">
              4
            </div>
            <div>
              <h2 className="font-barlow text-white text-[22px] uppercase font-[600]">
                IS THERE ANY REWARD FOR WINNERS ?
              </h2>
              <p className="font-oswald text-[16px] text-[#666666]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perferendis, iste, sed error at adipisci repellat rem maiores
                provident voluptatem ipsum autem fugiat.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
