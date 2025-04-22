
import ContactUs from "@/components/contact-us/ContactUs";
import ExperienceNumber from "@/components/experience/ExperienceNumber";
import Banner from "@/components/home/banner/banner";
import Opportunity from "@/components/opportunity/Opportunity";
import Soluation from "@/components/soluation/Soluation";

const Home = () => {
  return (
    <main>
      <Banner/>
      <ExperienceNumber/>
      <Soluation/>
      <Opportunity/>
      <ContactUs/>
    </main>
  );
};

export default Home;
