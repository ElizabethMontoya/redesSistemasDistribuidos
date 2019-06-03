namespace reservaciones {
    export class Capacidad {

        constructor() {
        }

        static Registrar(h1: Habitacion, h2: HabitacionExt): string {
            if (this.Verifica(h1, h2)) {
                var myObj, Jh1, text, obj;

                if (h1.idReservacion === 1) {
                    Jh1 = JSON.stringify(h1);
                    sessionStorage.setItem("H11", Jh1);

                    Jh1 = JSON.stringify(h2);
                    sessionStorage.setItem("H21", Jh1);
                }
                else {
                    Jh1 = JSON.stringify(h1);
                    sessionStorage.setItem("H1" + sessionStorage.clickcount, Jh1);

                    Jh1 = JSON.stringify(h2);
                    sessionStorage.setItem("H2" + sessionStorage.clickcount, Jh1);

                }
                this.limpia();
                return "Datos Guardados Exitosamente- No.:" + sessionStorage.clickcount;
            }
            else {
                return "No contamos con habitaciones disponibles para estas fechas"

            }
        }

        static Cancel(id: number): string {
            sessionStorage.removeItem("H1" + id);
            sessionStorage.removeItem("H2" + id);
            this.limpia();
            return "la Reservacion :" + id + " fue cancelada"
        }

        static Consultar(id: number): string {
            var myObj, Jh1, text, obj;
            var bObj: boolean;

            bObj = false;
            var H1_List = new Array();
            text = sessionStorage.getItem("H1" + id);
            obj = JSON.parse(text);
            if (obj) {
                H1_List[id] = new Array();
                H1_List[id][0] = obj.nombre;
                H1_List[id][1] = obj.idReservacion;
                H1_List[id][2] = obj.cantHab;
                H1_List[id][3] = obj.fechaEntrada;
                H1_List[id][4] = obj.fechaSalida;
                H1_List[id][5] = obj.dias;
                H1_List[id][6] = obj.precio;
                bObj = true;
            }


            var H2_List = new Array();
            text = sessionStorage.getItem("H2" + id);
            obj = JSON.parse(text);
            if (obj) {
                H2_List[id] = Array();
                H2_List[id][0] = obj.nombre;
                H2_List[id][1] = obj.idReservacion;
                H2_List[id][2] = obj.cantHab;
                H2_List[id][3] = obj.fechaEntrada;
                H2_List[id][4] = obj.fechaSalida;
                H2_List[id][5] = obj.dias;
                H2_List[id][6] = obj.precio;
                bObj = true;
            }

            if (bObj) {
                (<HTMLInputElement>document.getElementById("Nombre")).value = H1_List[id][0].toString();
                (<HTMLInputElement>document.getElementById("Hab1")).value = H1_List[id][2].toString();
                (<HTMLInputElement>document.getElementById("fEntrada1")).value = H1_List[id][3].toString();
                (<HTMLInputElement>document.getElementById("fSalida1")).value = H1_List[id][4].toString();
                (<HTMLInputElement>document.getElementById("Dias1")).innerHTML = H1_List[id][5].toString();
                (<HTMLInputElement>document.getElementById("Precio1")).innerHTML = H1_List[id][6].toString();
                (<HTMLInputElement>document.getElementById("Hab2")).value = H2_List[id][2].toString();
                (<HTMLInputElement>document.getElementById("fEntrada2")).value = H2_List[id][3].toString();
                (<HTMLInputElement>document.getElementById("fSalida2")).value = H2_List[id][4].toString();
                (<HTMLInputElement>document.getElementById("Dias2")).innerHTML = H2_List[id][5].toString();
                (<HTMLInputElement>document.getElementById("Precio2")).innerHTML = H2_List[id][6].toString();
                return "Su busqueda ha sido exitosa";
            }
            else {
                this.limpia();
                return "El numero de reservacion es incorrecto";
            }
            /*text = sessionStorage.getItem("H1"+sessionStorage.clickcount);
            obj = JSON.parse(text);
            //alert(obj.nombre);
            var H1_List = new Array();
            for (var i =1; i<=sessionStorage.length-1; i++) {
                text = sessionStorage.getItem("H1"+i);
                obj = JSON.parse(text);
                if (obj){
                    H1_List[i]= new Array(); 
                    H1_List[i][0] =obj.nombre;
                    H1_List[i][1]=obj.idReservacion;
                    H1_List[i][2]=obj.cantHab;
                    H1_List[i][3]=obj.fechaEntrada;
                    H1_List[i][4]=obj.fechaSalida;
                    H1_List[i][5]=obj.dias; 
                    H1_List[i][6]=obj.precio;
                }
            }

            text = sessionStorage.getItem("H2"+sessionStorage.clickcount);
            obj = JSON.parse(text);
            //alert(obj.nombre);
            
            var H2_List = new Array();
            for (var i = 1; i<=sessionStorage.length-1; i++) {
                text = sessionStorage.getItem("H2"+i);
                obj = JSON.parse(text);
                if (obj){
                    H2_List[i]=Array(); 
                    H2_List[i][0] =obj.nombre;
                    H2_List[i][1]=obj.idReservacion;
                    H2_List[i][2]=obj.cantHab;
                    H2_List[i][3]=obj.fechaEntrada;
                    H2_List[i][4]=obj.fechaSalida;
                    H2_List[i][5]=obj.dias; 
                    H2_List[i][6]=obj.precio;
                }
            }

            for (var i = 1; i<=H1_List.length-1; i++) {
                for (var j = 0; j < 7; j++) {
                    alert(H1_List[i][j]);
                    alert(H2_List[i][j]);
                }
            }*/

        }



        static limpia(nuevo?: string) {
            (<HTMLFormElement>document.getElementById("frm")).reset();
            document.getElementById("Dias1").innerHTML = "";
            document.getElementById("Precio1").innerHTML = "";
            document.getElementById("Dias2").innerHTML = "";
            document.getElementById("Precio2").innerHTML = "";
            document.getElementById("Total").innerHTML = "";
            document.getElementById("message").innerHTML = ""

            if (nuevo !== undefined) {
                if (typeof (Storage) !== "undefined") {
                    if (sessionStorage.clickcount) {
                        sessionStorage.clickcount = Number(sessionStorage.clickcount) + 1;
                    } else {
                        sessionStorage.clickcount = 2;
                    }
                    (<HTMLInputElement>document.getElementById("Numero")).value = sessionStorage.clickcount;
                } else {
                    (<HTMLInputElement>document.getElementById("Numero")).value = "Sorry, your browser does not support web storage...";
                }
            } else {
                (<HTMLInputElement>document.getElementById("Numero")).value = sessionStorage.clickcount;
            }
        }

        static Verifica(h1: Habitacion, h2: HabitacionExt): boolean {

            var disponibles1, disponibles2: boolean;
            var p1, p2: Number;

            document.getElementById("Dias1").innerHTML = h1.getDias().toString();
            p1 = h1.getPrecioTotal();
            document.getElementById("Precio1").innerHTML = p1.toString();

            document.getElementById("Dias2").innerHTML = h2.getDias().toString();
            p2 = h2.getPrecioTotal();
            document.getElementById("Precio2").innerHTML = p2.toString();

            document.getElementById("Total").innerHTML = "$" + (p1 + p2);

            disponibles1 = h1.getHabitacionDisponible();
            disponibles2 = h2.getHabitacionDisponible();
            if (!disponibles1 && (disponibles1 !== undefined)) {
                return false;
            }
            else {
                if (!disponibles2 && (disponibles2 !== undefined)) {
                    return false;
                }
                else {
                    return true;
                }
            }


        }

        disp(): void {
            // console.log(this.n+"/"+this.d);
        }

    }

}
