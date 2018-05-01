class Deck{
    constructor(){
        this.cards = [];
        var reset_deck = []
        var suit = 0;
        while(suit < 4){
            for(var i=1; i <= 13; i++){
                var card = {};
                if(i === 1){
                    card.val = "Ace";
                    card.num = i;
                }
                else if(i > 1 && i <= 10){
                    card.val = i;
                    card.num = i;
                }
                else if(i === 11){
                    card.val = "Jack";
                    card.num = i;
                }
                else if(i === 12){
                    card.val = "Queen";
                    card.num = i;
                }
                else if(i === 13){
                    card.val = "King";
                    card.num = i;
                }
                if(suit === 0){
                    card.suit = "Hearts";
                    card.suit_code = "h";
                }
                if(suit === 1){
                    card.suit = "Diamonds";
                    card.suit_code = "d";
                }
                if(suit === 2){
                    card.suit = "Clubs";
                    card.suit_code = "c";
                }
                if(suit === 3){
                    card.suit = "Spades";
                    card.suit_code = "s";
                }
                this.cards.push(card);
                reset_deck.push(card);
                if(i === 13){
                    suit += 1;
                }
            }
        }
        var suite = 0;
        console.log(this.cards);
    }
    shuffle(){
        var shuffled_deck = [];
        var n = this.cards.length
        var i;
        while(n){
            i = Math.floor(Math.random() * this.cards.length);
            if (i in this.cards) {
                shuffled_deck.push(this.cards[i]);
                delete this.cards[i];
                n--;
            }
        }
        this.cards = shuffled_deck;
        console.log("Deck shuffled!")
        return this;
    }
    reset(){
        this.cards = reset_deck;
        console.log("The deck has been reset. Don't forget to shuffle it before you play again.")
        return this;
    }
    deal(player){
        var dealt_card = this.cards[this.cards.length - 1];
        this.cards.pop();
        console.log(dealt_card);
        console.log(this.cards)
        player.hand.push(dealt_card);
        return this;
    }
}

class Player{
    constructor(name){
        var self = this;
        this.name = name;
        this.hand = [];
    }
    take_card(deck){
        deck.deal(this);
        return this;
    }
    discard(discard_idx){
        var new_hand = [];
        for(var i=0; i < this.hand.length; i++){
            if(i !== discard_idx){
                var x = new_hand.push(this.hand[i]);
                console.log(x);
            }
        }
        this.hand = new_hand;
        return this;
    }
}