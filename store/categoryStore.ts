import { create } from "zustand";

interface CategoryProps{
    title:string;
    imgUrl:string;
    setTitle:(title:string)=>void;
    setImgUrl:(imgUrl:string)=>void;
}

export const useCategoryStore = create<CategoryProps>((set)=>({
    title:"",  
    imgUrl:"", 
    setTitle:(title:string)=>set({title}),
    setImgUrl:(imgUrl:string)=>set({imgUrl}),
}))