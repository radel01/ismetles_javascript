import Kartyak from "./view/Kartyak.js";
import { kutyaLISTA } from "./model/adat.js";
import Kartya from "./view/Kartya.js";

const kivKutyaLista=[];

let divELEM=$('.tartalom')
let kivELEM=$('.kivalasztott')

new Kartyak(kutyaLISTA, divELEM)

//feliratkozunk a saját eseményünkre
$(window).on("kivalaszt", (event)=>{
    console.log(event.detail);
    kivKutyaLista.push(event.detail)
    new Kartya(event.detail, kivELEM)
})