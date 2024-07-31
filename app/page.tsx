"use client"

import React, { useState } from "react";
import BannerImageComp from "./components/BannerImageComp";
import adsData from "./data/ads.json"
import EditBannerTemplateBs from "./components/EditBannerTemplateBs";


const Home: React.FC = () => {
  const [ads, setAds] = useState(adsData);
  const [selectedAd, setSelectedAd] = useState('');
  const [isEditOpen, setIsEdidOpen] = useState<boolean>(false);

  const handleEditOpen = (ad: any)=>{
    setSelectedAd(ad);
    setIsEdidOpen(true);
  }


  return (
    <div  className="w-full">
      {/* <div className=" mt-5 w-full grid grid-cols-2 px-52 gap-x-2 gap-y-2 mb-5">
        {
          ads.map(ad => (
            <BannerImageComp
              key={ad.id}
              title={ad.title}
              description={ad.description}
              cta={ad.cta}
              image={ad.image}
              bannerImage={ad.bannerImage}
              onEdit={() => handleEditOpen(ad)}
            />
          ))
        }
      </div> */}
      <EditBannerTemplateBs/>
    </div>
  );
}
export default Home