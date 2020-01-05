export class Retsept {
    public nimi: string;
    public kirjeldus: string;
    public pildiTee: string;

    constructor(nimi: string, kirjeldus: string, pildiTee: string) {
        this.nimi = nimi;
        this.kirjeldus = kirjeldus;
        this.pildiTee = pildiTee;
    }
}