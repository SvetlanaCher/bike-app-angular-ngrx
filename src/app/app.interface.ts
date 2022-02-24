export interface City {
    company: string;
    href?: string;
    id: string;
    location: {
        city: string;
        country: string;
        latitude?: string;
        longitude?: string;
    }
    name: string;
};

export interface Bike {
    empty_slots?:number;
    extra: {
        address: string;
        altitude?: number;
        status?: number;
        uid?: number;
    }
    address: string;
    altitude?: number;
    status?: number;
    uid?: number;
    free_bikes: number;
    id: string;
    latitude?: number;
    longitude?: number;
    name: string;
    timestamp: string;
}

export interface AddedBikes {
    empty_slots?:number;
    extra: {
        address: string;
        altitude?: number;
        status?: number;
        uid?: number;
    }
    address: string;
    altitude?: number;
    status?: number;
    uid?: number;
    free_bikes: number;
    id: string;
    latitude?: number;
    longitude?: number;
    name: string;
    timestamp: string;
}