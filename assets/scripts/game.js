let game = {

    lockMode: false,
    firstCard: null,
    secondCard: null,
    setCard: function (id){
       let card = this.cards.filter(card =>card.id===id)[0];

       if(card.flipped || this.lockMode){
        return false;
       }

       if(!this.firstCard){
        this.firstCard = card;
        this.firstCard.flipped = true;
        return true;
       
        }else{
            this.secondCard = card;
            this.secondCard.flipped = true;
            this.lockMode = true;
            return true;
        }

    },

    checkMatch: function(){
        if(!this.firstCard || !this.secondCard){
            return false;
        }
        return this.firstCard.icon === this.secondCard.icon;    
    },

    clearCards: function(){
        this.firstCard = null;
        this.secondCard = null;
        this.lockMode = false;

    },

    unflipCards: function(){
        this.firstCard.flipped = false;
        this.secondCard.flipped = false;
        this.clearCards();

    },

    checkGameOver: function(){
        return this.cards.filter(card=>!card.flipped).length == 0;
    },

    cars: [
        "carro-classico",
        "carro-classico1",
        "carro-classico2",
        "carro-classico3",
        "carro-classico4",
        "carro-classico5",
        "carro-classico6",
        "carro-classico7",
        "carro-classico8",
        "carro-classico9"],

        cards: null,

        
createCardFromCars: function (){
    this.cards = []

    this.cars.forEach((car) =>{
        this.cards.push(this.createPairFromCars(car))
        }      
    )
    this.cards = this.cards.flatMap(pair => pair);
    this. shuffleCards();
    return this.cards
},


 createPairFromCars: function(car){
    return [{
        id: this.createIdWithCar(car),
        icon: car,
        flipped: false,
    },{
        id: this.createIdWithCar(car),
        icon: car,
        flipped: false,
    }]
},


createIdWithCar: function(car){
    return car + parseInt(Math.random() * 1000)
},


shuffleCards:function (cards){
    let currentLenght = this.cards.length;
    let randomIndex = 0;

    while(currentLenght !== 0){
        randomIndex = Math.floor(Math.random() * currentLenght);
        currentLenght--;
 
        [this.cards[randomIndex], this.cards[currentLenght]] = [this.cards[currentLenght], this.cards[randomIndex]]
    }
}


};