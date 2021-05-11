const soldados = [];

const eliminarSolado = async function(){
    let res = await Swal.fire({
        title:"¿Desea ejecutar al Soldado "+soldados[this.nro].nombre+"?",
        showCancelButton: true,
        confirmButtonText:"¡Ejecutar!"
    });
    if (res.isConfirmed){
        soldados.splice(this.nro,1);
        cargarTabla();
        Swal.fire("Soldado eliminado por la aparición.")
    }else{
        Swal.fire("Ejecución cancelada.")
    }
};
const cargarTabla = ()=>{
    let tbody = document.querySelector("#tabla_tbody");

    tbody.innerHTML = "";

    for(let i = 0; i < soldados.length; ++i){
        let p = soldados [i];

        let tr = document.createElement("tr");

        let tdNro = document.createElement("td")
        tdNro.innerText = (i+1);
        let tdNombre = document.createElement("td");
        tdNombre.innerText = p.nombre;
        if(p.tipo){
            tdNombre.classList.add("text-warning");
        }
        let tdTipo = document.createElement("td");
        tdTipo.classList.add("text-center");
        let tdRango = document.createElement("td");
        tdRango.innerHTML = p.rango;
        let tdAccion = document.createElement("button");
        tdAccion.classList.add("text-center");
        let boton = document.createElement("button");
        boton.classList.add("btn","btn-danger");
        boton.innerText = "Enviarlo a Ejecución";
        boton.nro = i;
        boton.addEventListener("click",eliminarSolado);
        tdAccion.appendChild(boton);

        tr.appendChild(tdNro);
        tr.appendChild(tdNombre);
        tr.appendChild(tdTipo);
        tr.appendChild(tdRango);
        tr.appendChild(tdAccion);
        tbody.appendChild(tr);
    };
};

document.querySelector("#registrar-btn").addEventListener("click", ()=>{
    let nombre = document.querySelector("#nombre-txt").value;
    let tipo = document.querySelector("#Tipo-Orco").checked;
    let rango = document.querySelector("#tipo-select").value;

    let Soldado = {};
    Soldado.nombre = nombre;
    Soldado.tipo = tipo;
    Soldado.rango = rango;
    soldados.push(Soldado);
    cargarTabla();
    Swal.fire("Felicidades","Soldado registrado","success");
});

document.querySelector("#limpiar-btn").addEventListener("click", ()=>{
    document.querySelector("#nombre-txt").value = "";
    document.querySelector("#Tipo-Uruk").checked = true;
    document.querySelector("#tipo-select").value = "Uruk";
});