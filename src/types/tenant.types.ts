export interface RentalHistoryItem {
    id: string;
    address: string;
    city: string;
    country: string;
    startDate: string;
    endDate: string;
}

export interface Tenant {
    id: string;
    fullName: string;
    email: string;
    phone: string;
    avatar: string;
    score: number;
    rating: string;
    rentals: RentalHistoryItem[];
}