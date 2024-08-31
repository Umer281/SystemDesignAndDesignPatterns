import { Stocks } from "./stocks";

class Investor implements Stocks {
    _investorName: string;
     
    
    
    public set investorName (name : string) {
        this._investorName = name;
    }
    


    updateStock(company: string, price: number): number {
         
        console.log(`stock price of  ${company} update as `, price);
        return price;
    }
}