import { kutyaLISTA } from "../../adat.js";
import Kartya from "../../view/Kartya.js";


let cim = "Minden amit a kutyákról tudni kell!";
const nev = "Dézi";

const cimELEM=$("header")
cimELEM.append(`<p>${cim}</p>`)

const kutya1={
    nev: "Dézi",
    kor: 12,
    nem: "Nőstény"
}

//kutya1={nev:"Morzsa"} nem lehet mert konstans
kutya1.nev="Morzsa"

let divELEM=$('.tartalom')

