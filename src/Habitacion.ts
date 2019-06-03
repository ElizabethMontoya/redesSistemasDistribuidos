namespace reservaciones {

    export class Habitacion {
        precio= 0;
        cantHab = 0;
        fechaEntrada: string;
        fechaSalida: string;
        idReservacion = 0;
        nombre: string;
        dias=0;
        
        constructor(cantHab: number, fechaEntrada: string, fechaSalida: string, idReservacion:number,nombre:string){
            this.cantHab=cantHab;
            this.fechaEntrada=fechaEntrada;
            this.fechaSalida=fechaSalida;
            this.idReservacion=idReservacion;
            this.nombre=nombre;

        }
  
        
        public getPrecioTotal():number{
            return this.cantHab*this.dias*1000;
        }

        public getDias():number{
            var date1,date2:Date;
            var vDias;

            date1=new Date(this.fechaEntrada);
            date2=new Date(this.fechaSalida);
            vDias=Math.floor((Date.UTC(date2.getFullYear(), date2.getMonth(), date2.getDate()) - Date.UTC(date1.getFullYear(), date1.getMonth(), date1.getDate()) ) /(1000 * 60 * 60 * 24));
            this.dias=vDias;
            return vDias;
        }

        public getHabitacionDisponible(): boolean{
            
            var myObj, Jh1, text, obj, sumHab, StarDate,EndDate,StarDateArr,EndDateArr,Qty;
            sumHab=0;
            var j:Date;
            StarDate=new Date(this.fechaEntrada);
            EndDate=new Date(this.fechaSalida);
            Qty=this.cantHab;

            for (var i = 1; i<=sessionStorage.length-1; i++) {
                text = sessionStorage.getItem("H1"+i);
                obj = JSON.parse(text);
                
                if (obj){
                    StarDateArr=new Date(obj.fechaEntrada);
                    EndDateArr=new Date(obj.fechaSalida);
                    for(j=StarDate; j<EndDate;j.setDate(j.getDate() + 1)){
                        if((StarDateArr<=j)&&(j<=EndDateArr)){
                            sumHab=Number(obj.cantHab)+sumHab;
                        }
                    }
                    if((sumHab+Qty)>10){
                        return false
                    }
                    else{
                        return true
                    }
                }

            }
        }
       
    }
}