import React, { useState } from "react";
import BannerImageComp from "./BannerImageComp";
import imageCollection from "../data/imgaes.json"
import Image from "next/image";

interface EditBannerTemplateBsProps {
    open: boolean;
    onClose: () => void;
    onSave: (data: any) => void;
    bannerData: any;
}


const EditBannerTemplateBs:React.FC<EditBannerTemplateBsProps> = ({ open, onClose, onSave, bannerData })=>{

    const [title, setTitle] = useState<string>(bannerData?.title || '');
    const [description, setDescription] = useState<string>(bannerData?.description || '');
    const [cta, setCta] = useState<string>(bannerData?.cta || ''); 
    const [textColor, setTextColor] = useState<string>(bannerData?.textColor || '');
    const [image, setImage] = useState<string>(bannerData?.image || '')


    const colorOptions = [
        '#000', '#ef4444', '#3b82f6', '#22c55e', '#eab308', '#fff'
    ]

    const handleSubmit = () => {
        const newData = {...bannerData, title, description, cta, textColor, image};
        onSave(newData);
        onClose()
    };

    const handleCancel = ()=>{
        onClose()
    }



    return(
        <div className="w-full h-full flex justify-center items-center bg-gray-900 bg-opacity-80">

            <div className="bg-white h-[80%] overflow-y-scroll scrollBar w-[40%] p-5 rounded">
                <BannerImageComp
                    title={title}
                    description={description}
                    bannerImage={bannerData.bannerImage}
                    cta={cta}
                    image={image}
                    noEdit={true}
                    textColor={textColor}
                />

                <p className="font-bold mt-3">Select image</p>
                <div className="flex gap-2 overflow-x-scroll scrollBar">
                    {
                        imageCollection.map((imageName, index)=>{
                            let isTrue = false;
                            if(`/images/${imageName}` === image){
                                isTrue=true;
                            }
                            return <div 
                                key={index}
                                className={`cursor-pointer ${isTrue ? "border-sky-600 border-4": ""}`}
                                onClick={()=>setImage(`/images/${imageName}`)}
                            >  
                                <Image
                                    src={`/images/${imageName}`}
                                    alt={`Image ${index + 1}`}
                                    width={100}
                                    height={100}
                                />
                            </div>
                        })
                    }
                </div>

                <p className="font-bold mb-1 mt-4">Title</p>
                <input 
                    type="text"
                    placeholder="Enter Title" 
                    className="rounded border-[1px] border-gray-400 w-full p-1 mb-3"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    name="title"
                />
                <p className="font-bold mb-1">Description</p>
                <input
                    type="text"
                    placeholder="Enter Description"
                    className="rounded border-[1px] border-gray-400 w-full p-1"
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                    name="description"
                />
                <p className="font-bold mt-3 mb-1">CTA</p>
                <input
                    type="text"
                    placeholder="Enter Description"
                    className="rounded border-[1px] border-gray-400 w-full p-1"
                    value={cta}
                    onChange={e => setCta(e.target.value)}
                    name="cta"
                />

                <p className="font-bold mt-3 mb-1">Change Text color</p>
                <div className="flex gap-2">
                    {
                        colorOptions.map(color=>(
                            <div
                                key={color}
                                style={{"backgroundColor": color}}
                                className={`w-6 ${color === textColor ? "border-l-orange-400 border-r-lime-600 border-t-red-600 border-b-blue-600 border-[3px]" : "border-black border-[1px]"} h-6 rounded-full cursor-pointer `}
                                onClick={()=>setTextColor(color)}
                            ></div>
                        ))
                    }
                </div>

                <div className="flex mt-5">
                    <div 
                        className="rounded px-4 py-1 cursor-pointer bg-blue-600 w-max text-white hover:bg-blue-700"
                        onClick={handleSubmit}
                    >
                        Submit
                    </div>
                    <div 
                        className="rounded px-4 py-1 cursor-pointer bg-red-600 w-max text-white ml-2 hover:bg-red-700"
                        onClick={handleCancel}
                    >
                        Cancel
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditBannerTemplateBs;