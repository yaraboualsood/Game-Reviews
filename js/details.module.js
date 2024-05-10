import { Ui } from "./ui.module.js";


export class Details{
    constructor(id){
        document.getElementById('btnClose').addEventListener("click", ()=>{
            document.getElementById('details').classList.add('d-none')
            document.getElementById("games").classList.remove('d-none')
        })
        this.loading = document.querySelector('.loading')
        this.getDetails(id)
    }


    async getDetails(id){
        this.loading.classList.remove('d-none')
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '8bbb14db55mshc545faec7591b4ep1e1d9ejsn578339d0f086',
                'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };
        const api = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`, options)
        const response = await api.json()
        this.loading.classList.add('d-none')

        // console.log(response)
        new Ui().displayDetails(response)
    }

}