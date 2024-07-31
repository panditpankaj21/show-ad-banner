import React from "react"
import Image from "next/image"

interface BannerImageCompProps{
    title: string;
    description: string;
    bannerImage: string;
    cta:string;
    image: string;
    onEdit: ()=>void;
}

const BannerImageComp: React.FC<BannerImageCompProps>  = (props)=>{
    const {title, description, bannerImage, cta, image, onEdit} = props;
    return(
        <div>
            <div className="relative">
                <img 
                src={bannerImage} 
                className="w-full h-60"
                />
                <div className=" absolute top-5 left-4 w-48">
                    <p className="text-2xl font-bold mb-3 leading-6">{title}</p>
                    <p className="text-sm">{description}</p>
                    <button 
                    className=" text-orange-400 px-3 py-1 bg-black rounded font-bold mt-10"
                    >
                    {cta}
                    </button>
                </div>
                <div 
                className="absolute top-2 right-2 text-white px-4 py-0.5 text-md bg-green-700 rounded cursor-pointer hover:bg-green-800"
                onClick={onEdit}
                >
                Edit
                </div>
            </div>
        </div>
    )
}

export default BannerImageComp