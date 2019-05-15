import React,{useState} from "react";
import styled from "@emotion/styled";
import background from "../../static/svg/backgroundImage.svg";
import { Layout } from "./Layout";
import articleImage from "../../static/svg/articles.png";
import { ImageHeader } from "../Header/ImageHeader";

const BackgroundImage = styled.div`
  background-image: url(${background});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 100%;
`;
export const Article = () => { 
  const [src] = useState(articleImage)
  const [date] = useState("20.novembra 2018 12:45")
  const [title]=useState("Názov článku resp. novinky")
  const [subtitle]=useState("Podnadpis, resp kratky popis ktory je zobrazeny aj v zozname clankov alebo na domovskej stranke")
  const [paragraph]=useState("Byron departed from England leaving a trail of scandal over his marital conduct and since then saw himself as an exiled expatriate. Shelley was expelled from Oxford and he fell in disgrace by marrying an in-keeper’s daughter; he always struggled to reconcile his origin with his political ideas: “Shelley could find no way of resolving his own contradictory opinions” (Cronin, 2000).There is another social factor that is behind the formation of the romantic myth of the vampire. In the early nineteen century, the foundations of what would later become a mass society were laid; the expansion of the press and of the reading public produced an increased diffusion for literary works and fostered movements such as the gothic and the sensation novel. Byron himself experienced the event of being turned into a proto-bestseller. The unification of literary taste and preferences that was a correlate to this social changes could not be more alien to the romantic notion of individual gusto and original sensibility. In order to combat this unifying forces, romantic poets revered the individual who stands outside society and is free from common concerns. Many of Byron’s heros look down on the masses from above, even though they walk among them and do not lean towards wordsworthian escapades into nature; they achieve to remain untainted by the masses in a sort of exile within the world akin to that of a ghost or a dammed spirit. This self-definition of Manfred is revelatory")
  return( 
  <BackgroundImage>
    <div className="p-6">
        <div key={title} className="bg-white">
          <ImageHeader
           src={src}
            className="flex w-full h-64 justify-center m-0 p-3"
          />
          <Layout title={title}
          date={date}
          subtitle={subtitle}
          paragraph={paragraph}
          source="Zdroj:"
          text="art-therapy.sk"
          />
    </div>
  </div>
  </BackgroundImage>
  )
};
