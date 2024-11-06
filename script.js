document.addEventListener("DOMContentLoaded", () => {
    const planes = {
        galeno: { 
            plans: [
                "A2 - Responsabilidad Civil Basica",
                "A - Responsabilidad Civil Clasica",
                "E - Robo e incendio en garage",
                "B1 - Total Basica", "B - Total Clasica", "C1 - Terceros Completa Basica",
                 "C - Terceros Completa Clasica","C2 -Terceros Completo Platinium"
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
            plans: ["S-Sigma", "S-STD-Sigma Standart", "C1-80", "C2-80", "B-80", "B1-80", "B2","RCA"], 
            descriptions: [
                "Responsabilidad Civil - Perdida total por daños - Perdida total y parcial por incendio - Perdida total y parcial por robo o hurto - Rotura de cristales laterales, parabrisas, luneta y cristales de techo - rotura de cerraduras exteriores - Reposicion Cubierta - Granizo ",
                "Responsabilidad Civil - Perdida total por daños - Perdida total y parcial por incendio - Perdida total y parcial por robo o hurto - Rotura de cristales laterales, parabrisas, luneta y cristales de techo - rotura de cerraduras exteriores - Reposicion Cubierta",
                "Responsabilidad Civil - Perdida total y parcial por incendio - Perdida total y parcial por robo o hurto - Reposicion Cubierta",
                "Responsabilidad Civil - Perdida total y parcial por incendio - Perdida total por robo o hurto",
                "Responsabilidad Civil - Perdida total por daños - Perdida total por incendio - Perdida total por robo o hurto",
                "Responsabilidad Civil - Perdida total por incendio - Perdida total por robo o hurto",
                "Responsabilidad Civil - Perdida total y parcial por incendio - Perdida total por robo o hurto",
                "Responsabilidad Civil - Perdida total por robo o hurto",
                "Responsabilidad Civil"
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

// Función para agregar la funcionalidad de edición y eliminación
function addEditDeleteFunctionality(row) {
    const editButton = row.querySelector(".edit-btn");
    const deleteButton = row.querySelector(".delete-btn");

    // Función de eliminar
    deleteButton.addEventListener("click", () => {
        row.remove();
    });

    // Función de editar
    editButton.addEventListener("click", () => {
        if (editButton.textContent === "Editar") {
            // Cambiar a modo de edición
            const cells = row.querySelectorAll("td");
            cells[0].innerHTML = `<input type="text" value="${cells[0].textContent}">`;
            cells[1].innerHTML = `<input type="text" value="${cells[1].textContent}">`;
            cells[2].innerHTML = `<input type="number" value="${cells[2].textContent.replace('$', '')}">`;
            cells[3].innerHTML = `<input type="text" value="${cells[3].textContent}">`;
            editButton.textContent = "Guardar";
        } else {
            // Guardar cambios
            const cells = row.querySelectorAll("td");
            cells[0].textContent = cells[0].querySelector("input").value;
            cells[1].textContent = cells[1].querySelector("input").value;
            cells[2].textContent = "$" + cells[2].querySelector("input").value;
            cells[3].textContent = cells[3].querySelector("input").value;
            editButton.textContent = "Editar";
        }
    });
}

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
                newRow.innerHTML = `<td></td><td>${plan}</td><td>$${precio}</td><td>${description}</td>
                    <td>
                        <button class="edit-btn">Editar</button>
                        <button class="delete-btn">Eliminar</button>
                    </td>`;
                planTableBody.insertBefore(newRow, row.nextSibling); // Agregar debajo de la fila existente
                addEditDeleteFunctionality(newRow); // Añadir funcionalidad de edición y eliminación
                added = true;
            }
        });

        // Si no se ha añadido a la fila existente, se crea una nueva fila
        if (!added) {
            const row = document.createElement("tr");
            row.innerHTML = `<td>${aseguradora}</td><td>${plan}</td><td>$${precio}</td><td>${description}</td>
                <td>
                    <button class="edit-btn">Editar</button>
                    <button class="delete-btn">Eliminar</button>
                </td>`;
            planTableBody.appendChild(row);
            addEditDeleteFunctionality(row); // Añadir funcionalidad de edición y eliminación
        }

        // Limpiar campos
        planesSelect.value = "";
        precioInput.value = "";
    } else {
        alert("Por favor, completa todos los campos.");
    }
});



// Descargar PDF optimizado
downloadButton.addEventListener("click", async () => {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    // Función para cargar una imagen optimizada
    const loadImage = (src) => {
        return new Promise((resolve, reject) => {
            const img = new Image();
            img.crossOrigin = 'anonymous';
            img.onload = () => {
                const canvas = document.createElement('canvas');
                const ctx = canvas.getContext('2d');
                // Establecer dimensiones optimizadas
                canvas.width = img.width * 0.5; // Reducir resolución al 50%
                canvas.height = img.height * 0.5;
                ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
                resolve(canvas.toDataURL('image/jpeg', 0.5)); // JPEG a 50% calidad
            };
            img.onerror = reject;
            img.src = src;
        });
    };
    // Cargar y agregar la imagen de encabezado
    const headerPath = './imagenes/header.png';
    try {
        const headerImageData = await loadImage(headerPath);
        
        // Ajustar el tamaño y posición de la imagen de encabezado
        const headerWidth = doc.internal.pageSize.width - 20; // Dejar margen de 10px a cada lado
        const headerHeight = 35; // Ajustar altura del header
        doc.addImage(headerImageData, 'PNG', 10, 10, headerWidth, headerHeight);
        
    } catch (error) {
        console.error("No se pudo cargar la imagen del encabezado", error);
    }

    // Agregar el título principal debajo del header
    doc.setFontSize(18);
    doc.text("Cotización Seguro Automotor", doc.internal.pageSize.width / 2, 55, { align: "center" });

    // Agregar el nombre del auto alineado a la izquierda
    const nombreAuto = document.getElementById("nombre-auto").value; // Asegúrate de tener un input con id="nombre-auto"
    doc.setFontSize(12);
    if (nombreAuto) {
        doc.text(`${nombreAuto.toUpperCase()}`, 10, 62); // Posiciona el texto en el margen izquierdo
    }

    // Preparar los datos de la tabla
    const rows = Array.from(planTableBody.querySelectorAll("tr")).map(row => [
        row.cells[0].textContent,
        row.cells[1].textContent,
        row.cells[2].textContent,
        row.cells[3].textContent // Incluir descripción
    ]);

    // Desplazar la tabla hacia abajo para no superponerla con el título y nombre del auto
    const startY = nombreAuto ? 65 : 60;

    // Optimización en la tabla
    doc.autoTable({
        head: [['Aseguradora', 'Plan', 'Precio', 'Descripción']],
        body: rows,
        theme: 'grid',
        styles: { fontSize: 8, cellPadding: 2 }, // Reducir tamaño de fuente y espaciado
        startY: startY
    });

    // Guardar PDF comprimido
    doc.save("cotizacion_estudio_NAG.pdf", { compress: true });
});


    // // Descargar Imagen
    // document.getElementById("download-image").addEventListener("click", () => {
        
    //     html2canvas(document.getElementById("plan-table")).then(canvas => {
    //         const link = document.createElement("a");
    //         link.href = canvas.toDataURL("image/png");
    //         link.download = "tabla_planes.png";
    //         link.click();
    //     });
    // });


    
    document.getElementById("download-image").addEventListener("click", async () => {
        try {
            // Cargar la imagen de encabezado
            const headerImage = new Image();
            headerImage.src = './imagenes/header.png';
            
            // Esperar a que la imagen de encabezado esté completamente cargada
            await new Promise((resolve, reject) => {
                headerImage.onload = resolve;
                headerImage.onerror = () => reject("No se pudo cargar la imagen de encabezado.");
            });
    
            // Capturar la tabla usando html2canvas
            const tableCanvas = await html2canvas(document.getElementById("plan-table"));
    
            // Obtener el valor del input para el modelo del auto
            const modeloAuto = document.getElementById("nombre-auto").value;
    
            // Configuración para hoja A4 en píxeles (a 72 DPI)
            const A4_WIDTH = 595;
            const A4_HEIGHT = 842;
    
            // Crear un canvas final para combinar todos los elementos
            const finalCanvas = document.createElement("canvas");
            finalCanvas.width = A4_WIDTH;
            finalCanvas.height = A4_HEIGHT;
    
            const ctx = finalCanvas.getContext("2d");
    
            // Escalar la imagen de encabezado para que ocupe todo el ancho A4
            const headerScaledHeight = A4_WIDTH * (headerImage.height / headerImage.width);
            ctx.drawImage(headerImage, 0, 0, A4_WIDTH, headerScaledHeight);
    
            // Agregar el título principal
            ctx.font = "bold 16px Arial";
            ctx.textAlign = "center";
            ctx.fillText("Cotización Seguro Automotor", A4_WIDTH / 2, headerScaledHeight + 20);
    
            // Agregar el texto del modelo del auto
            ctx.font = "14px Arial";
            ctx.textAlign = "left";
            ctx.fillText(`Modelo del auto: ${modeloAuto}`, 10, headerScaledHeight + 40);
    
            // Calcular la posición para la tabla
            const tableStartY = headerScaledHeight + 60;
    
            // Escalar la tabla para que no pierda su tamaño original
            ctx.drawImage(tableCanvas, 0, tableStartY, A4_WIDTH, tableCanvas.height);
    
            // Descargar la imagen final
            const link = document.createElement("a");
            link.href = finalCanvas.toDataURL("image/png");
            link.download = "cotizacion_completa.png";
            link.click();
    
        } catch (error) {
            console.error("Error al generar la imagen:", error);
            alert("Hubo un problema al generar la imagen. Por favor, revisa la consola para más detalles.");
        }
    });
    
    
});
