import Image from "next/image";
import imgOne from "../public/img1.png";
import Collection from "@/components/collection";
import CollOne from "../public/coll1.png";
import CollTwo from "../public/coll2.png";
import CollThree from "../public/coll3.png";
import CollFour from "../public/coll4.png";
import "../style.css "

export default function Home() {
  return (
    <main className="text-lg">
      <section className="bg-slate-100">
        <div className="sectionOne bg-no-repeat bg-right-bottom bg-contain px-32">
          <Image
            src={imgOne}
            width={700}
            height={150}
            className="center relative me-5"
          />
          <div className="absolute top-1/3">
            <h1 className="text-5xl font-extrabold mb-8">
              Imported Single <br /> Vision Lenses
            </h1>
            <div className="shop flex items-center justify-center">
              <p>SHOP NOW</p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-32 py-16 text-center">
        <h2 className="pb-10 font-bold text-3xl">Kids Eyewear</h2>
        <div className="grid grid-cols-4 gap-5">
          <Collection
            src={CollOne}
            title={"Todlers"}
            collection={"Frame Collection"}
            age={"0-3"}
          />
          <Collection
            src={CollTwo}
            title={"Little Kids"}
            collection={"Frame Collection"}
            age={"4-7"}
          />
          <Collection
            src={CollThree}
            title={"Pre-Teens"}
            collection={"Frame Collection"}
            age={"8-12"}
          />
          <Collection
            src={CollFour}
            title={"Teens"}
            collection={"Frame Collection"}
            age={"13+"}
          />
        </div>
      </section>
      <section>
        
      </section>
    </main>
  );
}
