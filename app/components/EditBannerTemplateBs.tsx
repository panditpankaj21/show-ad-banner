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
    const [color, setColor] = useState<string>(bannerData?.textColor || '');
    const colorOptions = [
        'text-white', 'text-red-500', 'text-blue-500', 'text-green-500', 'text-yellow-500', 'text-black'
    ]

    const handleSubmit = () => {
        const newData = {...bannerData, title, description, cta, textColor: color};
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
                    textColor={color}
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

                <p className="font-bold mt-3">Change Text color</p>
                <div className="flex gap-2">
                    {
                        colorOptions.map(color=>(
                            <div
                                key={color}
                                className={`${color.replace('text-', 'bg-')} w-6 h-6 rounded-full cursor-pointer border-[1px] border-black`}
                                onClick={()=>setColor(color)}
                            ></div>
                        ))
                    }
                </div>

                <div className="flex mt-3">
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