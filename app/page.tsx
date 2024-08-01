"use client"

import React, { useState } from "react";
import BannerImageComp from "./components/BannerImageComp";
import adsData from "./data/ads.json"
import EditBannerTemplateBs from "./components/EditBannerTemplateBs";


const Home: React.FC = () => {
  const [ads, setAds] = useState(adsData);
  const [selectedAd, setSelectedAd] = useState('');
  const [isEditOpen, setIsEditOpen] = useState<boolean>(true);

  const handleEditOpen = (ad: any)=>{
    setSelectedAd(ad);
    setIsEditOpen(true);
  }

  const handleEditClose = () => {
    setIsEditOpen(false);
    setSelectedAd('');
  };

  const handleSave = (updatedAd: any) => {
    setAds(ads.map(ad => ad.id === updatedAd.id ? updatedAd : ad));
  };


  return (
    <div className=" h-screen relative scrollBar">
      <div className="pt-10 w-full grid grid-cols-2 px-52 gap-x-2 gap-y-2 pb-10">
        {
          ads.map(ad => (
            <BannerImageComp
              key={ad.id}
              title={ad.title}
              description={ad.description}
              cta={ad.cta}
              image={ad.image}
              bannerImage={ad.bannerImage}
              textColor={ad.textColor}
              onEdit={() => handleEditOpen(ad)}
              noEdit={false}
            />
          ))
        }
      </div>
      {selectedAd && (
        <div className="w-full fixed top-0 h-full">
          <EditBannerTemplateBs
            open={isEditOpen}
            onClose={handleEditClose}
            onSave={handleSave}
            bannerData={selectedAd}
          />
        </div>
      )}
    </div>

  );
}
export default Home