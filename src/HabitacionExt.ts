/// <reference path="Habitacion.ts"/>

namespace reservaciones{
    export class HabitacionExt extends reservaciones.Habitacion {

        constructor(cantHab: number, fechaEntrada: string, fechaSalida: string, idReservacion:number,nombre:string){
            super(cantHab,fechaEntrada, fechaSalida, idReservacion,nombre);
        }

        public getPrecioTotal():number{
            return this.cantHab*this.dias*1500;
        }

        public getHabitacionDisponible(): boolean{
            
            var myObj, Jh1, text, obj, sumHab, StarDate,EndDate,StarDateArr,EndDateArr,Qty;
            sumHab=0;
            var j:Date;
            StarDate=new Date(this.fechaEntrada);
            EndDate=new Date(this.fechaSalida);
            Qty=this.cantHab;

            for (var i = 1; i<=sessionStorage.length-1; i++) {
                text = sessionStorage.getItem("H2"+i);
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