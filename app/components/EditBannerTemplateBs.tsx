import React, { useState } from "react";
import BannerImageComp from "./BannerImageComp";

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


    const handleSubmit = () => {
        const newData = {...bannerData, title, description, cta};
        onSave(newData);
        onClose()
    };

    const handleCancel = ()=>{
        onClose()
    }



    return(
        <div className="w-full h-full flex justify-center items-center bg-gray-900 bg-opacity-80">
            <div className="bg-white w-[40%] p-5 rounded">

                <BannerImageComp
                    title={title}
                    description={description}
                    bannerImage={bannerData.bannerImage}
                    cta={cta}
                    image={bannerData.image}
                    noEdit={true}
                />

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
                <p className="font-bold mb-1">CTA</p>
                <input
                    type="text"
                    placeholder="Enter Description"
                    className="rounded border-[1px] border-gray-400 w-full p-1"
                    value={cta}
                    onChange={e => setCta(e.target.value)}
                    name="cta"
                />
                <div className="flex">
                    <div 
                        className="mt-3 rounded px-4 py-1 cursor-pointer bg-blue-600 w-max text-white hover:bg-blue-700"
                        onClick={handleSubmit}
                    >
                        Submit
                    </div>
                    <div 
                        className="mt-3 rounded px-4 py-1 cursor-pointer bg-red-600 w-max text-white ml-2 hover:bg-red-700"
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