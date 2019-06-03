var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var reservaciones;
(function (reservaciones) {
    var Capacidad = /** @class */ (function () {
        function Capacidad() {
        }
        Capacidad.Registrar = function (h1, h2) {
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
                return "No contamos con habitaciones disponibles para estas fechas";
            }
        };
        Capacidad.Cancel = function (id) {
            sessionStorage.removeItem("H1" + id);
            sessionStorage.removeItem("H2" + id);
            this.limpia();
            return "la Reservacion :" + id + " fue cancelada";
        };
        Capacidad.Consultar = function (id) {
            var myObj, Jh1, text, obj;
            var bObj;
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
                document.getElementById("Nombre").value = H1_List[id][0].toString();
                document.getElementById("Hab1").value = H1_List[id][2].toString();
                document.getElementById("fEntrada1").value = H1_List[id][3].toString();
                document.getElementById("fSalida1").value = H1_List[id][4].toString();
                document.getElementById("Dias1").innerHTML = H1_List[id][5].toString();
                document.getElementById("Precio1").innerHTML = H1_List[id][6].toString();
                document.getElementById("Hab2").value = H2_List[id][2].toString();
                document.getElementById("fEntrada2").value = H2_List[id][3].toString();
                document.getElementById("fSalida2").value = H2_List[id][4].toString();
                document.getElementById("Dias2").innerHTML = H2_List[id][5].toString();
                document.getElementById("Precio2").innerHTML = H2_List[id][6].toString();
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
        };
        Capacidad.limpia = function (nuevo) {
            document.getElementById("frm").reset();
            document.getElementById("Dias1").innerHTML = "";
            document.getElementById("Precio1").innerHTML = "";
            document.getElementById("Dias2").innerHTML = "";
            document.getElementById("Precio2").innerHTML = "";
            document.getElementById("Total").innerHTML = "";
            document.getElementById("message").innerHTML = "";
            if (nuevo !== undefined) {
                if (typeof (Storage) !== "undefined") {
                    if (sessionStorage.clickcount) {
                        sessionStorage.clickcount = Number(sessionStorage.clickcount) + 1;
                    }
                    else {
                        sessionStorage.clickcount = 2;
                    }
                    document.getElementById("Numero").value = sessionStorage.clickcount;
                }
                else {
                    document.getElementById("Numero").value = "Sorry, your browser does not support web storage...";
                }
            }
            else {
                document.getElementById("Numero").value = sessionStorage.clickcount;
            }
        };
        Capacidad.Verifica = function (h1, h2) {
            var disponibles1, disponibles2;
            var p1, p2;
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
        };
        Capacidad.prototype.disp = function () {
            // console.log(this.n+"/"+this.d);
        };
        return Capacidad;
    }());
    reservaciones.Capacidad = Capacidad;
})(reservaciones || (reservaciones = {}));
var reservaciones;
(function (reservaciones) {
    var Habitacion = /** @class */ (function () {
        function Habitacion(cantHab, fechaEntrada, fechaSalida, idReservacion, nombre) {
            this.precio = 0;
            this.cantHab = 0;
            this.idReservacion = 0;
            this.dias = 0;
            this.cantHab = cantHab;
            this.fechaEntrada = fechaEntrada;
            this.fechaSalida = fechaSalida;
            this.idReservacion = idReservacion;
            this.nombre = nombre;
        }
        Habitacion.prototype.getPrecioTotal = function () {
            return this.cantHab * this.dias * 1000;
        };
        Habitacion.prototype.getDias = function () {
            var date1, date2;
            var vDias;
            date1 = new Date(this.fechaEntrada);
            date2 = new Date(this.fechaSalida);
            vDias = Math.floor((Date.UTC(date2.getFullYear(), date2.getMonth(), date2.getDate()) - Date.UTC(date1.getFullYear(), date1.getMonth(), date1.getDate())) / (1000 * 60 * 60 * 24));
            this.dias = vDias;
            return vDias;
        };
        Habitacion.prototype.getHabitacionDisponible = function () {
            var myObj, Jh1, text, obj, sumHab, StarDate, EndDate, StarDateArr, EndDateArr, Qty;
            sumHab = 0;
            var j;
            StarDate = new Date(this.fechaEntrada);
            EndDate = new Date(this.fechaSalida);
            Qty = this.cantHab;
            for (var i = 1; i <= sessionStorage.length - 1; i++) {
                text = sessionStorage.getItem("H1" + i);
                obj = JSON.parse(text);
                if (obj) {
                    StarDateArr = new Date(obj.fechaEntrada);
                    EndDateArr = new Date(obj.fechaSalida);
                    for (j = StarDate; j < EndDate; j.setDate(j.getDate() + 1)) {
                        if ((StarDateArr <= j) && (j <= EndDateArr)) {
                            sumHab = Number(obj.cantHab) + sumHab;
                        }
                    }
                    if ((sumHab + Qty) > 10) {
                        return false;
                    }
                    else {
                        return true;
                    }
                }
            }
        };
        return Habitacion;
    }());
    reservaciones.Habitacion = Habitacion;
})(reservaciones || (reservaciones = {}));
/// <reference path="Habitacion.ts"/>
var reservaciones;
/// <reference path="Habitacion.ts"/>
(function (reservaciones) {
    var HabitacionExt = /** @class */ (function (_super) {
        __extends(HabitacionExt, _super);
        function HabitacionExt(cantHab, fechaEntrada, fechaSalida, idReservacion, nombre) {
            return _super.call(this, cantHab, fechaEntrada, fechaSalida, idReservacion, nombre) || this;
        }
        HabitacionExt.prototype.getPrecioTotal = function () {
            return this.cantHab * this.dias * 1500;
        };
        HabitacionExt.prototype.getHabitacionDisponible = function () {
            var myObj, Jh1, text, obj, sumHab, StarDate, EndDate, StarDateArr, EndDateArr, Qty;
            sumHab = 0;
            var j;
            StarDate = new Date(this.fechaEntrada);
            EndDate = new Date(this.fechaSalida);
            Qty = this.cantHab;
            for (var i = 1; i <= sessionStorage.length - 1; i++) {
                text = sessionStorage.getItem("H2" + i);
                obj = JSON.parse(text);
                if (obj) {
                    StarDateArr = new Date(obj.fechaEntrada);
                    EndDateArr = new Date(obj.fechaSalida);
                    for (j = StarDate; j < EndDate; j.setDate(j.getDate() + 1)) {
                        if ((StarDateArr <= j) && (j <= EndDateArr)) {
                            sumHab = Number(obj.cantHab) + sumHab;
                        }
                    }
                    if ((sumHab + Qty) > 10) {
                        return false;
                    }
                    else {
                        return true;
                    }
                }
            }
        };
        return HabitacionExt;
    }(reservaciones.Habitacion));
    reservaciones.HabitacionExt = HabitacionExt;
})(reservaciones || (reservaciones = {}));
///<reference path="Capacidad.ts" />
function procesa(oper) {
    var soper;
    var cantHab1, cantHab2;
    var fechaEntrada1, fechaEntrada2;
    var fechaSalida1, fechaSalida2;
    var idReservacion;
    var nombre;
    var h1;
    var h2;
    var cap;
    var frm;
    var frm_elements;
    frm = document.getElementById("frm");
    frm_elements = frm.elements;
    cap = new reservaciones.Capacidad();
    if (frm !== null && frm_elements !== null) {
        nombre = frm_elements["Nombre"].value;
        idReservacion = 0;
        cantHab1 = Number(frm_elements["Hab1"].value);
        fechaEntrada1 = frm_elements["fEntrada1"].value;
        fechaSalida1 = frm_elements["fSalida1"].value;
        cantHab2 = Number(frm_elements["Hab2"].value);
        fechaEntrada2 = frm_elements["fEntrada2"].value;
        fechaSalida2 = frm_elements["fSalida2"].value;
        h1 = new reservaciones.Habitacion(cantHab1, fechaEntrada1, fechaSalida1, idReservacion, nombre);
        h2 = new reservaciones.HabitacionExt(cantHab2, fechaEntrada2, fechaSalida2, idReservacion, nombre);
        //alert(h1.cantHab)
        //alert(h2.fechaEntrada)
        //alert(Num2)
        //alert(Deno2)
        soper = oper;
    }
    else {
        console.log("no toma la forma");
    }
    if (soper.localeCompare("Reserva") == 0) {
        var sMensaje;
        h1.idReservacion = Number(frm_elements["Numero"].value);
        h1.dias = Number(document.getElementById("Dias1").textContent);
        h1.precio = Number(document.getElementById("Precio1").textContent);
        h2.idReservacion = Number(frm_elements["Numero"].value);
        h2.dias = Number(document.getElementById("Dias2").textContent);
        h2.precio = Number(document.getElementById("Precio2").textContent);
        sMensaje = reservaciones.Capacidad.Registrar(h1, h2);
        document.getElementById("message").innerHTML = sMensaje;
    }
    else if (soper.localeCompare("Nueva") == 0) {
        reservaciones.Capacidad.limpia("Nuevo");
    }
    else if (soper.localeCompare("Salir") == 0) {
        window.open('location', '_self', '');
        window.close();
    }
    else if (soper.localeCompare("Cancela") == 0) {
        var sMensaje;
        idReservacion = Number(frm_elements["Numero"].value);
        sMensaje = reservaciones.Capacidad.Cancel(idReservacion);
        document.getElementById("message").innerHTML = sMensaje;
    }
    else if (soper.localeCompare("Verificar") == 0) {
        var bMensaje;
        idReservacion = Number(frm_elements["Numero"].value);
        bMensaje = reservaciones.Capacidad.Verifica(h1, h2);
        if (!bMensaje) {
            document.getElementById("message").innerHTML = "No contamos con habitaciones disponibles para estas fechas";
        }
    }
    else if (soper.localeCompare("Consulta") == 0) {
        var sMensaje;
        idReservacion = Number(frm_elements["Numero"].value);
        sMensaje = reservaciones.Capacidad.Consultar(idReservacion);
        document.getElementById("message").innerHTML = sMensaje;
    }
}
//# sourceMappingURL=app.js.map