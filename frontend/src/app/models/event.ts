export class Evento {
 
    constructor (_id = '', event= '', category='', quantity='', weight='', date='') {
      this._id = _id;
      this.event = event;
      this.category =category;
      this.quantity= quantity;
      this.weight = weight;      
      this.date = date;    
  }
  
    _id: string;
    event: string;
    category: string;
    quantity: string;
    weight: string;
    date: string;
  
  }
  