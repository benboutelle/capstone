const wishes = require('./db.json')
let globalId = 2

module.exports = {

    getWishes: (req, res) => res.status(200).send(wishes),

    addWishes: (req, res) => {
        let {name, rank, pictureURL} = req.body
        let newWishes = {
            id: globalId,
            name,
            pictureURL,
            rank
        }

        wishes.push(newWishes)
        res.status(200).send(wishes)
        globalId++
    },

    deleteWish: (req, res) => {
        const index = wishes.findIndex((el) => el.id === +req.params.id)
        wishes.splice(index, 1)
        res.status(200).send(wishes)
    },
    
    rankWish: (req, res) => {
        const index = wishes.findIndex((el) => el.id === +req.params.id)
        const {type} = req.body
    //     updateCard: (req, res) => {
    //         let index = cards.findIndex((el) => el.id === +req.params.id)
    //         let {type} = req.body
    
    //         if(cards[index].rating === 5 && type === 'plus'){
    //             res.status(400).send('Cannot go above 5!')
    //           } else if (cards[index].rating === 0 && type === 'minus'){
    //             res.status(400).send('Cannot go below 0!')
    //           } else if (type === 'plus'){
    //             cards[index].rating++
    //             res.status(200).send(cards)
    //           } else if (type === 'minus'){
    //             cards[index].rating--
    //             res.status(200).send(cards)
    //           } else {
    //             res.sendStatus(400)
    //           }
    //     }
    // }
    

    if(wishes[index].rank === 5 && type === 'plus'){
      res.status(400).send('Cannot go above 5!')
    } else if (wishes[index].rank === 0 && type === 'minus'){
      res.status(400).send('Cannot go below 0!')
    } else if (type === 'plus'){
      wishes[index].rank++
      res.status(200).send(wishes)
    } else if (type === 'minus'){
      wishes[index].rank--
      res.status(200).send(wishes)
    } else {
      res.sendStatus(400)
    }
  }


        // if(type === 'ADD'){
        //     wishes[index].urgency++
        // }else if(type === 'MINUS'){
        //     wishes[index].urgency--
        // }
        // res.status(200).send(wishes)
    }
