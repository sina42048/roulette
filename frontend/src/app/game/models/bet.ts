export interface Bet {
    name: string;
    color: string;
    amount: number;
}

export interface UserBet {
    id: number;
    color: string;
    amount: number;
    status: string;
    round: number;
    createdAt: string;
    updatedAt: string;
}