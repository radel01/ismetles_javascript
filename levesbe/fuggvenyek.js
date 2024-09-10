

export function KutyaKiir(kutya){
    const divELEM=$('.tartalom')
    divELEM.append(
        `<div class="card col-4 col-md-4">
                    <div class="card-body">
                        <h3 class="card-title">${kutya.nev}</h3>
                        <p class="card-text">${kutya.kor}</p>
                        <p class="card-text">${kutya.nem}</p>
                    </div>
                    <button type="button" class="btn btn-dark">Kiválaszt</button>
                </div>`
)
    }
