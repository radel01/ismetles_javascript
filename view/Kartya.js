export default class Kartya {
  //adattag
  #kutyaAdat = {}; //objektum, inicializáln kell!
  #szuloELEM; //html dom elem

  //konstruktor
  constructor(adat, szuloELEM) {
    this.#szuloELEM = szuloELEM;
    this.#kutyaAdat = adat;
    this.KutyaKiir();

    this.gombELEM = $(".kiv:last");
    this.gombKattint();
  }

  //taggfügvény
  KutyaKiir() {
    this.#szuloELEM.append(
      `<div class="card col-4 col-md-4">
                        <div class="card-body">
                            <h3 class="card-title">${this.#kutyaAdat.nev}</h3>
                            <p class="card-text">${this.#kutyaAdat.kor}</p>
                            <p class="card-text">${this.#kutyaAdat.nem}</p>
                        </div>
                        <button type="button" class="kiv btn btn-dark" >Kiválaszt</button>
                    </div>`
    );
  }

  gombKattint() {
    this.gombELEM.on("click", () => {
      console.log(this);

      //saját esemény, hogy az adott objektum át tudjon adni magáról információkat
      const e = new CustomEvent("kivalaszt", {detail: this.#kutyaAdat});
      window.dispatchEvent(e);

    });
  }
  //nyílfüggvény esetén a nyílfüggvényt körülvevő osztályra fog mutatni
}
