// third-party

// project imports
export type UserProfile = {
	id: number;
	name: string;
	email: string;
	phone: string;
	avatar: string;
	lang: string;
	currency: string;
};

export type JWTContextType = {
	isLoggedIn: boolean;
	isInitialized?: boolean;
	user?: UserProfile | null;
	logout: () => void;
	login: (email: string, password: string) => void;
};

export interface InitialLoginContextProps {
	isLoggedIn: boolean;
	isInitialized?: boolean;
	user?: UserProfile | null;
}
