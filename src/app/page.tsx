import Footer from "@/components/footer/footer";
import Banner from "@/components/home/banner/banner";


const Home = () => {
  return (
    <main>
      <div className=" max-w-[1440px] mx-auto">
        <div className=" ">
          <div className="">
            <Banner/>
          </div>
          <div className="">main</div>
          <div className="">
            <Footer />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
