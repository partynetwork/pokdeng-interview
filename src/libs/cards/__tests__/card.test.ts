import intersection from 'lodash/intersection'
import { initCard, Card } from '..'

const numberCards = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']

describe('Card', () => {
    test('Should return Card[] with 52 members', () => {
        const cards: Card[] = initCard()

        expect(cards.length).toEqual(52)
    })

    test('Should return Card[] have diamonds cards 13 members', () => {
        const cards: Card[] = initCard()

        const faceCards: Card[] = cards.filter((c) => c.face === 'diamonds')
        const haveNumberCard:number = intersection(numberCards, cards.map(c => c.number)).length

        expect(faceCards.length).toEqual(13)
        expect(haveNumberCard).toEqual(13)
    })

    test('Should return Card[] have clubs cards 13 members', () => {
        const cards: Card[] = initCard()

        const faceCards: Card[] = cards.filter((c) => c.face === 'clubs')
        const haveNumberCard:number = intersection(numberCards, cards.map(c => c.number)).length

        expect(faceCards.length).toEqual(13)
        expect(haveNumberCard).toEqual(13)
    })

    test('Should return Card[] have hearts cards 13 members', () => {
        const cards: Card[] = initCard()

        const faceCards: Card[] = cards.filter((c) => c.face === 'hearts')
        const haveNumberCard:number = intersection(numberCards, cards.map(c => c.number)).length

        expect(faceCards.length).toEqual(13)
        expect(haveNumberCard).toEqual(13)
    })

    test('Should return Card[] have spades cards 13 members', () => {
        const cards: Card[] = initCard()

        const faceCards: Card[] = cards.filter((c) => c.face === 'spades')
        const haveNumberCard:number = intersection(numberCards, cards.map(c => c.number)).length

        expect(faceCards.length).toEqual(13)
        expect(haveNumberCard).toEqual(13)
    })
})

