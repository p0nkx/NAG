document.addEventListener("DOMContentLoaded", () => {
    const planes = {
        galeno: { 
            plans: [
                "A2 - Responsabilidad Civil Basica",
                "A - Responsabilidad Civil Clasica",
                "E - Robo e incendio en garage",
                "B1 - Total Basica", "B - Total Clasica", "C1 - Terceros Completa Basica",
                 "C - Terceros Completa Clasica","C2 - Terceros Completo Platinium"
            ], 
            descriptions: [
                "Responsabilidad Civil",
                "Responsabilidad Civil",
                "Incendio Total - Robo total",
                "Responsabilidad Civil, indendio total,robo total",
                "Responsabilidad Civil, daños por accidentes,indendio total,robo total",
                "Responsabilidad Civil, daño total x accidente,incendio total/parcial,robo parcial,rotura cistales laterales, reposicion cubierta",
                "Responsabilidad Civil, daño total x accidente,incendio total/parcial,robo total/parcial,rotura cistales laterales, reposicion cubierta",
                "Responsabilidad Civil - daño total x accidente - incendio total/parcial - robo total/parcial - Accidentes personales - rotura cistales laterales, luneta y parabrisas - rotura cerradura - Daños por inundación - reposicion cubiertas - Daños por Granizo"
            ]
        },
        rivadavia: { 
            plans: ["A - RC", "F - RC + Incendio y Robo Total","B - RC + Coverturas Totales","G - RC + Incendio y Robo Total/Parcial","C - Terceros Completo","M - Mega Plan","P - Mega Premium","MX","Seguro Obligatorio"], 
            descriptions: [
                "Responsabilidad Civil",
                "Responsabilidad Civil - Daño total por incendio - Perdida total por robo o hurto",
                "Responsabilidad Civil - Daño total de la unidad por accidente(Destrucción total) - Daño total por incendio - Perdida total por robo o hurto",
                "Responsabilidad Civil - Daño total y parcial por incendio - Perdida total y parcial por robo o hurto - Covertura de cristales laterales o cerraduras exteriores",
                "Responsabilidad Civil - Daño total de la unidad por accidente(Destrucción total) - Daño total y parcial por incendio - Perdida total y parcial por robo o hurto - Covertura de cristales laterales o cerraduras exteriores",
                "Responsabilidad Civil - Daño total de la unidad por accidente(Destrucción total) - Daño total y parcial por incendio - Perdida total y parcial por robo o hurto - Reposicion Cubiertas - Reposicion de cristales laterales o cerraduras + rotura luneta o parabrisas - Grúa 300km",
                "Responsabilidad Civil - Daño total de la unidad por accidente(Destrucción total) - Daño total y parcial por incendio - Perdida total y parcial por robo o hurto - Reposicion Cubiertas - Reposicion de cristales laterales o cerraduras + rotura luneta o parabrisas - Grúa 300km - Cobertura contra daños por Granizo",
                "",
                "Seguro Obligatorio"
            ]
        },
        sancor: { 
            plans: ["Plan Alpha", "Plan Beta"], 
            descriptions: [
                "Descripción del Plan Alpha: Cubre atención médica y servicios de diagnóstico.",
                "Descripción del Plan Beta: Incluye tratamientos preventivos y de rehabilitación."
            ]
        },
        rus: { 
            plans: ["Plan Río", "Plan Uruguay"], 
            descriptions: [
                "Descripción del Plan Río: Atención médica integral y servicios de urgencias.",
                "Descripción del Plan Uruguay: Consultas médicas y cobertura en viajes."
            ]
        },
        federacion: { 
            plans: ["Plan Patronal A", "Plan Patronal B"], 
            descriptions: [
                "Descripción del Plan Patronal A: Cubre atención médica para empleados.",
                "Descripción del Plan Patronal B: Incluye servicios de salud preventiva."
            ]
        },
        orbis: { 
            plans: ["A2 Simple sin grúa","A0 Simple","B1 Simple ultra","B0 Simple Plus","C0 Full","CC Full Plus","CD Full Plus+"], 
            descriptions: [
                "RESPONSABILIDAD CIVIL HACIA PERSONAS Y COSAS TRANSPORT. Y NO TRANSPORTADAS",
                "RESPONSABILIDAD CIVIL HACIA PERSONAS Y COSAS TRANSPORT. Y NO TRANSPORTADAS",
                "RESPONSABILIDAD CIVIL HACIA PERSONAS Y COSAS TRANSPORT. Y NO TRANSPORT - ROBO Y/O HURTO TOTAL - INCENDIO TOTAL",
                "RESPONSABILIDAD CIVIL HACIA PERSONAS Y COSAS TRANSPORT. Y NO TRANSPORT - ROBO Y/O HURTO TOTAL - INDENDIO TOTAL - DAÑOS TOTALES POR ACCIDENTE",
                "RESPONSABILIDAD CIVIL HACIA PERSONAS Y COSAS TRANSPORT. Y NO TRANSPORT - ROBO/HURTO TOTAL Y PARCIAL - INCENDIO TOTAL Y PARCIAL - DANOS TOTALES POR ACCIDENTE",
                "RESPONSABILIDAD CIVIL HACIA PERSONAS Y COSAS TRANSPORT. Y NO TRANSPORT - ROBO/HURTO TOTAL Y PARCIAL - INCENDIO TOTAL Y PARCIAL - DAÑOS TOTALES POR ACCIDENTE - DAÑOS POR GRANIZO S/CONDICIONES PA",
                "RESPONSABILIDAD CIVIL HACIA PERSONAS Y COSAS TRANSPORT. Y NO TRANSPORT - ROBO/HURTO TOTAL Y PARCIAL - INCENDIO TOTAL Y PARCIAL - DAÑOS TOTALES POR ACCIDENTE - DAÑOS POR GRANIZO S/CONDICIONES PA"
            ]
        },
        externa: { 
            plans: ["Plan Externa 1", "Plan Externa 2"], 
            descriptions: [
                "Descripción del Plan Externa 1: Cubre consultas externas y terapias.",
                "Descripción del Plan Externa 2: Servicios de salud a domicilio."
            ]
        },
        mercantil: { 
            plans: ["Plan Mercantil A", "Plan Mercantil B"], 
            descriptions: [
                "Descripción del Plan Mercantil A: Cubre cirugías y hospitalización.",
                "Descripción del Plan Mercantil B: Atención médica y farmacéutica."
            ]
        },
    };

    const aseguradoraSelect = document.getElementById("aseguradora");
    const planesSelect = document.getElementById("planes");
    const precioInput = document.getElementById("precio");
    const addPlanButton = document.getElementById("add-plan");
    const planTableBody = document.querySelector("#plan-table tbody");
    const downloadButton = document.getElementById("download");

    // Carga los planes según la aseguradora seleccionada
    aseguradoraSelect.addEventListener("change", () => {
        const selectedAseguradora = aseguradoraSelect.value;
        planesSelect.innerHTML = ""; // Limpiar opciones anteriores
        if (planes[selectedAseguradora]) {
            planes[selectedAseguradora].plans.forEach((plan, index) => {
                const option = document.createElement("option");
                option.value = plan;
                option.textContent = plan;
                option.dataset.description = planes[selectedAseguradora].descriptions[index]; // Agregar la descripción como dato
                planesSelect.appendChild(option);
            });
        }
    });

    // Agrega un plan a la tabla
    addPlanButton.addEventListener("click", () => {
        const aseguradora = aseguradoraSelect.options[aseguradoraSelect.selectedIndex].text;
        const selectedOption = planesSelect.options[planesSelect.selectedIndex];
        const plan = selectedOption.value;
        const description = selectedOption.dataset.description; // Obtener la descripción de la opción
        const precio = precioInput.value;

        if (plan && precio) {
            const existingRows = Array.from(planTableBody.querySelectorAll("tr"));
            let added = false;

            // Verificar si ya existe una fila para la aseguradora
            existingRows.forEach((row) => {
                if (row.cells[0].textContent === aseguradora) {
                    // Si existe, añadir una nueva fila debajo con el plan
                    const newRow = document.createElement("tr");
                    newRow.innerHTML = `<td></td><td>${plan}</td><td>$${precio}</td><td>${description}</td>`; // Incluir descripción
                    planTableBody.insertBefore(newRow, row.nextSibling); // Agregar debajo de la fila existente
                    added = true;
                }
            });

            // Si no se ha añadido a la fila existente, se crea una nueva fila
            if (!added) {
                const row = document.createElement("tr");
                row.innerHTML = `<td>${aseguradora}</td><td>${plan}</td><td>$${precio}</td><td>${description}</td>`; // Incluir descripción
                planTableBody.appendChild(row);
            }

            // Limpiar campos
            planesSelect.value = "";
            precioInput.value = "";
        } else {
            alert("Por favor, completa todos los campos.");
        }
    });

    // Descargar PDF
    downloadButton.addEventListener("click", () => {
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();

        const rows = Array.from(planTableBody.querySelectorAll("tr")).map(row => [
            row.cells[0].textContent,
            row.cells[1].textContent,
            row.cells[2].textContent,
            row.cells[3].textContent // Incluir descripción
        ]);

        doc.autoTable({
            head: [['Aseguradora', 'Plan', 'Precio', 'Descripción']],
            body: rows,
            theme: 'grid',
            styles: { halign: 'center' },
        });

        doc.save("planes_seguros.pdf");
    });

    // Descargar Imagen
    document.getElementById("download-image").addEventListener("click", () => {
        html2canvas(document.getElementById("plan-table")).then(canvas => {
            const link = document.createElement("a");
            link.href = canvas.toDataURL("image/png");
            link.download = "tabla_planes.png";
            link.click();
        });
    });
});
