 "use client";

import { Footer } from "./porfolio/footer";
import { HeroSection } from "./porfolio/herosection";
import { NavbarDemo } from "./porfolio/navbar";
import { Section1 } from "./porfolio/section-1";
import { Section2 } from "./porfolio/section-2";
import { Section3 } from "./porfolio/section-3";
import { Section4 } from "./porfolio/section4";
import { Skills } from "./porfolio/ui/skills";


export default function Page() {
    return (
        <>
         <div className="dark:bg-black bg-gray-100 py-3 px-5 ">
              
          <div className=""><NavbarDemo/> </div> 
     
           <HeroSection/>
           <Section1/>
           <Section2/>
           <Section3/>
           <Skills/>
           <Section4/>
           <Footer/>
         </div>
        </>
    )
}