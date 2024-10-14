import { writable } from 'svelte/store';

export const domain = 'https://trade.xxbroker.com/';

export const linkTraderoom = writable(domain);
export const linkLogin = writable(domain);
export const linkRegister = writable(domain);
