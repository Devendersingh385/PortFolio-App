import About from "@/components/About/About";
import Banner from "@/components/Banner/Banner";
import Contact from "@/components/Contact/Contact";
import MyExperience from "@/components/MyExperience/MyExperience";
import MyWork from "@/components/MyWork/MyWork";
import Services from "@/components/Services/Services";
import Skills from "@/components/Skills/Skills";

export default function Home() {
  return (
    <>
      <Banner />
      <About />
      <Services title='Services' />
      <MyWork title='My Work Portfolio' />
      <Skills title='My Technologies' />   
      <MyExperience title='My Experience' />   
      <Contact title='Contact Us' />
    </>
  );
}
