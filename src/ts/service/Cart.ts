import Buyable from '../domain/Buyable';

export default class Cart {

    name: string = 'Корзина';

    private _items: Buyable[] = [];

    add(item: Buyable): void {
        this._items.push(item);
    }

    get items(): Buyable[] {
        return [...this._items]; 
    }

    total(): number {
        let amount = 0;
        this._items.forEach((item)=>{
          amount += item.price;
        })
        return amount;
    }

    discountedTotal(discount: number): number {
        const total = this.total();
        return total - discount;
    }

    delete(id: number): void {
        const index = this._items.findIndex((item) => {
            return item.id == id
        });

        if(index == -1) return;

        this._items.splice(index,1);

    }
}