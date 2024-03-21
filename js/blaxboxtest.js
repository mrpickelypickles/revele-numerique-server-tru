const dataseance = [
    {
        seance: "3d",
        enseigant: "Math",
        numerodegroupe: "03",
        nombredeleves: "45",
        niveau: "5",
        local:"4005",
        date:"10/20/2023",
        periode:"1periode",
        disponibilite:"verifier"
    }
];
const addEntry2 = () => {
    const id = Math.max(...context.map(entry => entry.id)) + 1;
    context.push({ id, name: "", subject: "", email: "", mainPhone: "", secondaryPhone: "", additionalField: "" });
    addRow2(id);
  };
  
  const addRow2 = id => {
    const row = document.createElement("tr");
    let inputRow = `
      <td><span>${context[id].id}</span></td>
      <td class="case"><input type="text" id="name-${id}" value="${context[id].name}" required ${id===0 ? 'readonly' : ''} /><span></span></td>
      <td class="case"><input type="text" id="subject-${id}" value="${context[id].subject}" required ${id===0 ? 'readonly' : ''} /><span></span></td>
      <td class="case"><input type="email" id="email-${id}" value="${context[id].email}" required ${id===0 ? 'readonly' : ''} /><span></span></td>
      <td class="case"><input type="tel" id="mainPhone-${id}" value="${context[id].mainPhone}" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required ${id===0 ? 'readonly' : ''} /><span></span></td>
      <td class="case"><input type="tel" id="secondaryPhone-${id}" value="${context[id].secondaryPhone}" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required ${id===0 ? 'readonly' : ''} /><span></span></td>
      <td class="case"><input type="text" id="additionalField-${id}" value="${context[id].additionalField}" required ${id===0 ? 'readonly' : ''} /><span></span></td>
    `;
    row.innerHTML = inputRow;
    document.getElementById("entryTable").querySelector("tbody").appendChild(row);
    updateEventListeners2();
  };
  
  const updateEventListeners2 = () => {
    for (let i = 0; i < context.length; i++) {
      const id = context[i].id;
      document.getElementById(`name-${id}`).addEventListener("input", () => {
        context[i].name = document.getElementById(`name-${id}`).value;
      });
      document.getElementById(`subject-${id}`).addEventListener("input", () => {
        context[i].subject = document.getElementById(`subject-${id}`).value;
      });
      document.getElementById(`email-${id}`).addEventListener("input", () => {
        context[i].email = document.getElementById(`email-${id}`).value;
      });
      document.getElementById(`mainPhone-${id}`).addEventListener("input", () => {
        context[i].mainPhone = document.getElementById(`mainPhone-${id}`).value;
      });
      document.getElementById(`secondaryPhone-${id}`).addEventListener("input", () => {
        context[i].secondaryPhone = document.getElementById(`secondaryPhone-${id}`).value;
      });
      document.getElementById(`additionalField-${id}`).addEventListener("input", () => {
        context[i].additionalField = document.getElementById(`additionalField-${id}`).value;
      });
    }
  };
  
  document.getElementById("addEntry2").addEventListener("click", addEntry2);
  addRow2(0);
