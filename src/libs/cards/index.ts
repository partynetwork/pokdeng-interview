type Face = 'diamonds' | 'clubs' | 'hearts' | 'spades'
type Number = 'A' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | 'J' | 'Q' | 'K'
export interface Card {
    number: Number;
    face: Face;
}

export const initCard = (): Card[] => {
    const cards: Card[] = []

    return cards
}

