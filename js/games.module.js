import { Details } from "./details.module.js";
import { Ui } from "./ui.module.js";

export class Home{
    constructor(){

        document.querySelectorAll('.nav-link').forEach((link)=>{
            link.addEventListener('click', ()=> {
                document.querySelector('.navbar-nav .active').classList.remove("active");
                link.classList.add("active")

                const category = link.dataset.category
                this.getGamesApi(category)
        
               
            })
        } )


        this.loading = document.querySelector('.loading')
        this.details=document.getElementById("details")
        this.games = document.getElementById('games')
        
       
        this.ui = new Ui()
       
        this.getGamesApi('MMORPG')
    
    }

    async getGamesApi(category){
        this.loading.classList.remove('d-none')
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '8bbb14db55mshc545faec7591b4ep1e1d9ejsn578339d0f086',
                'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };
        const api = await fetch (`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`, options)
        const response = await api.json()
        this.loading.classList.add('d-none')
        // console.log(response)

        this.ui.displayGames(response)
        document.querySelectorAll('.card').forEach((card)=>{
            card.addEventListener("click", ()=>{
               this.details.classList.remove('d-none')
               this.games.classList.add('d-none')
               const detailsSection = new Details(card.dataset.id)
             
            })
        })
    
    }
}