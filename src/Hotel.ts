
///<reference path="Capacidad.ts" />

function procesa(oper: any) {

    var soper: string;
    var cantHab1, cantHab2: number;
    var fechaEntrada1, fechaEntrada2: string
    var fechaSalida1, fechaSalida2: string
    var idReservacion: number;
    var nombre: string;
    var h1: reservaciones.Habitacion;
    var h2: reservaciones.HabitacionExt;
    var cap: reservaciones.Capacidad;

    var frm: HTMLFormElement;
    var frm_elements: HTMLFormControlsCollection;

    frm = <HTMLFormElement>document.getElementById("frm");
    frm_elements = <HTMLFormControlsCollection>frm.elements;
    cap = new reservaciones.Capacidad();

    if (frm !== null && frm_elements !== null) {

        nombre = (<HTMLInputElement>frm_elements["Nombre"]).value;
        idReservacion = 0;

        cantHab1 = Number((<HTMLInputElement>frm_elements["Hab1"]).value);
        fechaEntrada1 = (<HTMLInputElement>frm_elements["fEntrada1"]).value;
        fechaSalida1 = (<HTMLInputElement>frm_elements["fSalida1"]).value;

        cantHab2 = Number((<HTMLInputElement>frm_elements["Hab2"]).value);
        fechaEntrada2 = (<HTMLInputElement>frm_elements["fEntrada2"]).value;
        fechaSalida2 = (<HTMLInputElement>frm_elements["fSalida2"]).value;

        h1 = new reservaciones.Habitacion(cantHab1, fechaEntrada1, fechaSalida1, idReservacion, nombre);
        h2 = new reservaciones.HabitacionExt(cantHab2, fechaEntrada2, fechaSalida2, idReservacion, nombre);

        //alert(h1.cantHab)
        //alert(h2.fechaEntrada)
        //alert(Num2)
        //alert(Deno2)
        soper = <string>oper;

    }
    else {
        console.log("no toma la forma")
    }
    if (soper.localeCompare("Reserva") == 0) {
        var sMensaje: string;
        h1.idReservacion = Number((<HTMLInputElement>frm_elements["Numero"]).value);
        h1.dias = Number((<HTMLElement>document.getElementById("Dias1")).textContent);
        h1.precio = Number((<HTMLElement>document.getElementById("Precio1")).textContent);
        h2.idReservacion = Number((<HTMLInputElement>frm_elements["Numero"]).value);
        h2.dias = Number((<HTMLElement>document.getElementById("Dias2")).textContent);
        h2.precio = Number((<HTMLElement>document.getElementById("Precio2")).textContent);
        sMensaje = reservaciones.Capacidad.Registrar(h1, h2);
        document.getElementById("message").innerHTML = sMensaje;

    }
    else
        if (soper.localeCompare("Nueva") == 0) {
            reservaciones.Capacidad.limpia("Nuevo");

        }
        else
            if (soper.localeCompare("Salir") == 0) {
                window.open('location', '_self', '');
                window.close();
            }
            else
                if (soper.localeCompare("Cancela") == 0) {
                    var sMensaje: string;
                    idReservacion = Number((<HTMLInputElement>frm_elements["Numero"]).value);
                    sMensaje = reservaciones.Capacidad.Cancel(idReservacion);
                    document.getElementById("message").innerHTML = sMensaje;
                }
                else
                    if (soper.localeCompare("Verificar") == 0) {
                        var bMensaje: boolean;
                        idReservacion = Number((<HTMLInputElement>frm_elements["Numero"]).value);
                        bMensaje = reservaciones.Capacidad.Verifica(h1, h2);
                        if (!bMensaje) {
                            document.getElementById("message").innerHTML = "No contamos con habitaciones disponibles para estas fechas";
                        }
                    }
                    else
                        if (soper.localeCompare("Consulta") == 0) {
                            var sMensaje: string;
                            idReservacion = Number((<HTMLInputElement>frm_elements["Numero"]).value);
                            sMensaje = reservaciones.Capacidad.Consultar(idReservacion);
                            document.getElementById("message").innerHTML = sMensaje;
                        }



}
