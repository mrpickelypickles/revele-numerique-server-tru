
 // Function to create a new "période" section
 function addPeriod(periodCount) {
  const newPeriod = `
    <ul id="periode${periodCount}">
      <ol><b>Période ${periodCount}</b></ol>
      <ol><label for="start_time">Heure de DÉBUT</label>
          <input type="time" id="start_time" name="start_time" class="imput_periode"><br></ol>
      <ol><label for="end_time">Heure de FIN</label>
          <input type="time" id="end_time" name="end_time" class="imput_periode"><br></ol>
    </ul>
  `;

  return newPeriod;
}

// Set the maximum number of periods
let periodCountMax = 5;

  // Create and add the initial "période" sections
  const nb_periode = document.getElementById('nb_periode');
  for (let periodCount = 1; periodCount < periodCountMax; periodCount++) {
    nb_periode.innerHTML += addPeriod(periodCount);
  }

// stucture de base information attendu
const context = [
    {
      id: 0,
      name: "John Doe",
      subject: "Math",
      email: "john.doe@example.com",
      mainPhone: "123-456-7890",
      secondaryPhone: "098-765-4321"
    }
  ];
  
  // cree un enplacement pour mettre les imput
  const addEntry = () => {
    const id = Math.max(...context.map(entry => entry.id)) + 1;
    context.push({ id, name: "", subject: "", email: "", mainPhone: "", secondaryPhone: "" });
    addRow(id);
  };
  
  // cree les imput box et le requirment et l"écriture exemple
  const addRow = id => {
    const row = document.createElement("tr");
    let inputRow = `
      <td><span>${context[id].id}</span></td>
      <td class="case"><input type="text" id="name-${id}" value="${context[id].name}" required ${id===0 ? 'readonly' : ''} placeholder="${context[0].name}" /><span></span></td>
      <td class="case"><input type="text" id="subject-${id}" value="${context[id].subject}" required ${id===0 ? 'readonly' : ''} placeholder="${context[0].subject}" /><span></span></td>
      <td class="case"><input type="email" id="email-${id}" value="${context[id].email}" required ${id===0 ? 'readonly' : ''} placeholder="${context[0].email}" /><span></span></td>
      <td class="case"><input type="tel" id="mainPhone-${id}" value="${context[id].mainPhone}" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required ${id===0 ? 'readonly' : ''} placeholder="${context[0].mainPhone}" /><span></span></td>
      <td class="case"><input type="tel" id="secondaryPhone-${id}" value="${context[id].secondaryPhone}" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required ${id===0 ? 'readonly' : ''} placeholder="${context[0].secondaryPhone}" /><span></span></td>
    `;
    row.innerHTML = inputRow;
    document.getElementById("entryTable").querySelector("tbody").appendChild(row);
    updateEventListeners();
  };

 
  // permet l'enregistrement du text ecrit dans la boite
  const updateEventListeners = () => {
    for (let i = 0; i < context.length; i++) {
      const id = context[i].id;
      document.getElementById(`name-${id}`).addEventListener("input", () => {
        context[id].name = document.getElementById(`name-${id}`).value;
        document.getElementById("name-${id}").innerHTML = context[id].name;
      });
      document.getElementById(`subject-${id}`).addEventListener("input", () => {
        context[i].subject = document.getElementById(`subject-${id}`).value;
        document.getElementById("subject").innerHTML = context[id].subject;
      });
      document.getElementById(`email-${id}`).addEventListener("input", () => {
        context[i].email = document.getElementById(`email-${id}`).value;
        document.getElementById("email").innerHTML = context[id].email;
      });
      document.getElementById(`mainPhone-${id}`).addEventListener("input", () => {
        context[i].mainPhone = document.getElementById(`mainPhone-${id}`).value;
        document.getElementById("mainPhone").innerHTML = context[id].mainPhone;
      });
      document.getElementById(`secondaryPhone-${id}`).addEventListener("input", () => {
        context[i].secondaryPhone = document.getElementById(`secondaryPhone-${id}`).value;
        document.getElementById("secondaryPhone").innerHTML = context[id].secondaryPhone;
      });
    }
  };
  



const dataseance = [
    {
        id:0,
        seance: "Modelidsaton 3D",
        enseigant: "prénom et nom",
        numerodegroupe: "03",
        nombredeleves: "45",
        niveau: "",
        local:"4005",
        date:"",
        periode:"",
        disponibilite:"verifier"
    }
];
const addEntry2 = () => {
    const id = Math.max(...dataseance.map(entry => entry.id)) + 1;
    dataseance.push({ id,
    seance: "",
    enseigant: "",
    numerodegroupe: "",
    nombredeleves: "",
    niveau: "",
    local:"",
    date:"",
    periode:"",
    disponibilite:"" });
    addRow2(id);
  };
  
  const addRow2 = id => {
    const row = document.createElement("tr");
    let inputRow = `
	<td><span>Séance <span id="seance-id"> ${dataseance[id].id}</span></span></td>
      <td class="case"><select type="text" id="seance-${id}" required ${id===0 ? 'disabled' : ''}>
      <option value="" disabled selected hidden>Select an option</option>
      <option value="animation">Métiers de l'animation</option>
      <option value="cinema">Métiers du cinéma</option>
      <option value="jeu">Métiers du jeu vidéo</option>
      <option value="Autre">Autre</option>
		</select><span></span></td>
      <td class="case"><input type="text" id="enseigant-${id}" value="${dataseance[id].enseigant}" required ${id===0 ? 'readonly' : ''} placeholder="${dataseance[0].enseigant}" /><span></span></td>
      <td class="case"><input type="number" id="numerodegroupe-${id}" value="${dataseance[id].numerodegroupe}" required ${id===0 ? 'readonly' : ''} min="1" placeholder="${dataseance[0].numerodegroupe}" /><span></span></td>
	  <td class="case"><input type="number" id="nombredeleves-${id}" value="${dataseance[id].nombredeleves}" required ${id===0 ? 'readonly' : ''} min="1" placeholder="${dataseance[0].nombredeleves}" /><span></span></td>
      <td class="case"><select type="text" id="niveau-${id}" required ${id===0 ? 'disabled' : ''}>
      <option value="" disabled selected hidden>Select an option</option>
      <option value="Secondaire_1">Secondaire 1</option>
      <option value="Secondaire_2">Secondaire 2</option>
      <option value="Secondaire_3">Secondaire 3</option>
      <option value="Secondaire_4">Secondaire 4</option>
      <option value="Secondaire_5">Secondaire 5</option>
      <option value="Autre">Autre</option>
		</select><span></span></td>
      <td class="case"><input type="text" id="local-${id}" value="${dataseance[id].local}" required ${id===0 ? 'readonly' : ''} placeholder="${dataseance[0].local}" /><span></span></td>
      <td class="case"><input type="date" id="date-${id}" value="${dataseance[id].date}" required ${id===0 ? 'readonly' : ''} placeholder="${dataseance[0].date}" /><span></span></td>
      <td class="case"><select type="text" id="periode-${id}" required ${id===0 ? 'disabled' : ''}>
	  <option value="" disabled selected hidden>Select an option</option>
	  <option value="1periode">1ère période</option>
	  <option value="2periode">2ème période</option>
	  <option value="3periode">3ème période</option>
	  <option value="4periode">4ème période</option>
	  </select><span></span></td>
      <td class="case"><input type="text" id="disponibilite-${id}" value="${dataseance[id].disponibilite}" required ${id===0 ? 'readonly' : ''} placeholder="${dataseance[0].disponibilite}" /><span></span></td>
      `;
    row.innerHTML = inputRow;
    document.getElementById("choix_des_3_seances_d_information").querySelector("tbody").appendChild(row);
    updateEventListeners2();
  };
  
  const updateEventListeners2 = () => {
    for (let i = 0; i < dataseance.length; i++) {
      const id = dataseance[i].id;
      document.getElementById(`seance-${id}`).addEventListener("input", () => {
        dataseance[i].seance = document.getElementById(`seance-${id}`).value;
      });
      document.getElementById(`enseigant-${id}`).addEventListener("input", () => {
        dataseance[i].enseigant = document.getElementById(`enseigant-${id}`).value;
      });
      document.getElementById(`numerodegroupe-${id}`).addEventListener("input", () => {
        dataseance[i].numerodegroupe = document.getElementById(`numerodegroupe-${id}`).value;
      });
      document.getElementById(`nombredeleves-${id}`).addEventListener("input", () => {
        dataseance[i].nombredeleves = document.getElementById(`nombredeleves-${id}`).value;
      });
      document.getElementById(`niveau-${id}`).addEventListener("input", () => {
        dataseance[i].niveau = document.getElementById(`niveau-${id}`).value;
      });
      document.getElementById(`local-${id}`).addEventListener("input", () => {
        dataseance[i].local = document.getElementById(`local-${id}`).value;
      });
      document.getElementById(`date-${id}`).addEventListener("input", () => {
        dataseance[i].date = document.getElementById(`date-${id}`).value;
      });
      document.getElementById(`periode-${id}`).addEventListener("input", () => {
        dataseance[i].periode = document.getElementById(`periode-${id}`).value;
      });
      document.getElementById(`disponibilite-${id}`).addEventListener("input", () => {
        dataseance[i].disponibilite = document.getElementById(`disponibilite-${id}`).value;
      });
    }
  };
  
  const dataAtelier = [
    {
        id:0,
        atelier: "Math",
        enseigant: "John Doe",
        numerodegroupe: "03",
        nombredeleves: "45",
        niveau: "5",
        local:"4005",
        date:"10/20/2023",
        periode:"1periode",
        disponibilite:"verifier"
    }
];
const addEntry3 = () => {
    const id = Math.max(...dataAtelier.map(entry => entry.id)) + 1;
    dataAtelier.push({ id,
    atelier: "",
    enseigant: "",
    numerodegroupe: "",
    nombredeleves: "",
    niveau: "",
    local:"",
    date:"",
    periode:"",
    disponibilite:"" });
    addRow3(id);
  };
  
  const addRow3 = id => {
    const row = document.createElement("tr");
    let inputRow = `
      <td><span>Atelier de sensibilisation <span id="atelier-id"> ${dataAtelier[id].id}</span></span></td>
      <td class="case"><select type="text" id="atelier-${id}" required ${id===0 ? 'disabled' : ''}>
      <option value="" disabled selected hidden>Select an option</option>
      <option value="cybersecurity">Citoyenneté à l'ère du numérique et cybersécurité</option>
      <option value="Autre">Autre</option>
      <td class="case"><input type="text" id="enseigant-${id}" value="${dataAtelier[id].enseigant}" required ${id===0 ? 'readonly' : ''} placeholder="${dataAtelier[0].enseigant}" /><span></span></td>
      <td class="case"><input type="number" id="numerodegroupe-${id}" value="${dataAtelier[id].numerodegroupe}" required ${id===0 ? 'readonly' : ''} min="1" placeholder="${dataAtelier[0].numerodegroupe}" /><span></span></td>
	  <td class="case"><input type="number" id="nombredeleves-${id}" value="${dataAtelier[id].nombredeleves}" required ${id===0 ? 'readonly' : ''} min="1" placeholder="${dataAtelier[0].nombredeleves}" /><span></span></td>
      <td class="case"><select type="text" id="niveau-${id}" required ${id===0 ? 'disabled' : ''}>
      <option value="" disabled selected hidden>Select an option</option>
      <option value="Secondaire_1">Secondaire 1</option>
      <option value="Secondaire_2">Secondaire 2</option>
      <option value="Secondaire_3">Secondaire 3</option>
      <option value="Secondaire_4">Secondaire 4</option>
      <option value="Secondaire_5">Secondaire 5</option>
      <option value="Autre">Autre</option>
    </select><span></span></td>
      <td class="case"><input type="text" id="local-${id}" value="${dataAtelier[id].local}" required ${id===0 ? 'readonly' : ''} placeholder="${dataAtelier[0].local}" /><span></span></td>
      <td class="case"><input type="date" id="date-${id}" value="${dataAtelier[id].date}" required ${id===0 ? 'readonly' : ''} placeholder="${dataAtelier[0].date}" /><span></span></td>
      <td class="case"><select type="text" id="periode-${id}" required ${id===0 ? 'disabled' : ''}>
      <option value="" disabled selected hidden>Select an option</option>
      <option value="1periode">1ère période</option>
      <option value="2periode">2ème période</option>
      <option value="3periode">3ème période</option>
      <option value="4periode">4ème période</option>
    </select><span></span></td>
      <td class="case"><input type="text" id="disponibilite-${id}" value="${dataAtelier[id].disponibilite}" required ${id===0 ? 'readonly' : ''} placeholder="${dataAtelier[0].disponibilite}" /><span></span></td>

      `;
    row.innerHTML = inputRow;
    document.getElementById("choix_des_6_ateliers").querySelector("tbody").appendChild(row);
    updateEventListeners3();
  };
  
  const updateEventListeners3 = () => {
    for (let i = 0; i < dataAtelier.length; i++) {
      const id = dataAtelier[i].id;
      document.getElementById(`atelier-${id}`).addEventListener("input", () => {
        dataAtelier[i].atelier = document.getElementById(`atelier-${id}`).value;
      });
      document.getElementById(`enseigant-${id}`).addEventListener("input", () => {
        dataAtelier[i].enseigant = document.getElementById(`enseigant-${id}`).value;
      });
      document.getElementById(`numerodegroupe-${id}`).addEventListener("input", () => {
        dataAtelier[i].numerodegroupe = document.getElementById(`numerodegroupe-${id}`).value;
      });
      document.getElementById(`nombredeleves-${id}`).addEventListener("input", () => {
        dataAtelier[i].nombredeleves = document.getElementById(`nombredeleves-${id}`).value;
      });
      document.getElementById(`niveau-${id}`).addEventListener("input", () => {
        dataAtelier[i].niveau = document.getElementById(`niveau-${id}`).value;
      });
      document.getElementById(`local-${id}`).addEventListener("input", () => {
        dataAtelier[i].local = document.getElementById(`local-${id}`).value;
      });
      document.getElementById(`date-${id}`).addEventListener("input", () => {
        dataAtelier[i].date = document.getElementById(`date-${id}`).value;
      });
      document.getElementById(`periode-${id}`).addEventListener("input", () => {
        dataAtelier[i].periode = document.getElementById(`periode-${id}`).value;
      });
      document.getElementById(`disponibilite-${id}`).addEventListener("input", () => {
        dataAtelier[i].disponibilite = document.getElementById(`disponibilite-${id}`).value;
      });
    }
  };


  
const dataCreation = [
  {
      id:0,
      atelier: "Math",
      enseigant: "John Doe",
      numerodegroupe: "03",
      nombredeleves: "45",
      niveau: "5",
      local:"4005",
      date:"10/20/2023",
      periode:"1periode",
      disponibilite:"verifier"
  }
];
const addEntry4 = () => {
  const id = Math.max(...dataCreation.map(entry => entry.id)) + 1;
  dataCreation.push({ id,
  atelier: "",
  enseigant: "",
  numerodegroupe: "",
  nombredeleves: "",
  niveau: "",
  local:"",
  date:"",
  periode:"",
  disponibilite:"" });
  addRow4(id);
};

const addRow4 = id => {
  const row = document.createElement("tr");
  let inputRow = `
  <td><span>Atelier de création <span id="atelier-id"> ${dataCreation[id].id}</span></span></td>
  <td class="case"><select type="text" id="atelier-${id}" required ${id===0 ? 'disabled' : ''}>
  <option value="" disabled selected hidden>Select an option</option>
  <option value="vectoriel">Design vectoriel</option>
  <option value="bureautique">Initiation à la bureautique</option>
  <option value="artificielle">Intelligence artificielle</option>
  <option value="cinematographique">Langage cinématographique</option>
  <option value="modelisation_3D">Modélisation 3D</option>
  <option value="Montage_photo">Montage photo</option>
  <option value="Montage_video">Montage vidéo</option>
  <option value="Presentation_interactive">Présentation interactive</option>
  <option value="Autre">Autre</option>
    <td class="case"><input type="text" id="enseigant-${id}" value="${dataCreation[id].enseigant}" required ${id===0 ? 'readonly' : ''} placeholder="${dataCreation[0].enseigant}" /><span></span></td>
    <td class="case"><input type="number" id="numerodegroupe-${id}" value="${dataCreation[id].numerodegroupe}" required ${id===0 ? 'readonly' : ''} min="1" placeholder="${dataCreation[0].numerodegroupe}" /><span></span></td>
	  <td class="case"><input type="number" id="nombredeleves-${id}" value="${dataCreation[id].nombredeleves}" required ${id===0 ? 'readonly' : ''} min="1" placeholder="${dataCreation[0].nombredeleves}" /><span></span></td>
    <td class="case"><select type="text" id="niveau-${id}" required ${id===0 ? 'disabled' : ''}>
      <option value="" disabled selected hidden>Select an option</option>
      <option value="Secondaire_1">Secondaire 1</option>
      <option value="Secondaire_2">Secondaire 2</option>
      <option value="Secondaire_3">Secondaire 3</option>
      <option value="Secondaire_4">Secondaire 4</option>
      <option value="Secondaire_5">Secondaire 5</option>
      <option value="Autre">Autre</option>
    </select><span></span></td>
    <td class="case"><input type="text" id="local-${id}" value="${dataCreation[id].local}" required ${id===0 ? 'readonly' : ''} placeholder="${dataCreation[0].local}" /><span></span></td>
    <td class="case"><input type="date" id="date-${id}" value="${dataCreation[id].date}" required ${id===0 ? 'readonly' : ''} placeholder="${dataCreation[0].date}" /><span></span></td>
    <td class="case"><select type="text" id="periode-${id}" required ${id===0 ? 'disabled' : ''}>
    <option value="" disabled selected hidden>Select an option</option>
    <option value="1periode">1ère période</option>
    <option value="2periode">2ème période</option>
    <option value="3periode">3ème période</option>
    <option value="4periode">4ème période</option>
  </select><span></span></td>
    <td class="case"><input type="text" id="disponibilite-${id}" value="${dataCreation[id].disponibilite}" required ${id===0 ? 'readonly' : ''} placeholder="${dataCreation[0].disponibilite}" /><span></span></td>

    `;
  row.innerHTML = inputRow;
  document.getElementById("choix_des_6_ateliers_creation").querySelector("tbody").appendChild(row);
  updateEventListeners4();
};

const updateEventListeners4 = () => {
  for (let i = 0; i < dataCreation.length; i++) {
    const id = dataCreation[i].id;
    document.getElementById(`atelier-${id}`).addEventListener("input", () => {
      dataCreation[i].atelier = document.getElementById(`atelier-${id}`).value;
    });
    document.getElementById(`enseigant-${id}`).addEventListener("input", () => {
      dataCreation[i].enseigant = document.getElementById(`enseigant-${id}`).value;
    });
    document.getElementById(`numerodegroupe-${id}`).addEventListener("input", () => {
      dataCreation[i].numerodegroupe = document.getElementById(`numerodegroupe-${id}`).value;
    });
    document.getElementById(`nombredeleves-${id}`).addEventListener("input", () => {
      dataCreation[i].nombredeleves = document.getElementById(`nombredeleves-${id}`).value;
    });
    document.getElementById(`niveau-${id}`).addEventListener("input", () => {
      dataCreation[i].niveau = document.getElementById(`niveau-${id}`).value;
    });
    document.getElementById(`local-${id}`).addEventListener("input", () => {
      dataCreation[i].local = document.getElementById(`local-${id}`).value;
    });
    document.getElementById(`date-${id}`).addEventListener("input", () => {
      dataCreation[i].date = document.getElementById(`date-${id}`).value;
    });
    document.getElementById(`periode-${id}`).addEventListener("input", () => {
      dataCreation[i].periode = document.getElementById(`periode-${id}`).value;
    });
    document.getElementById(`disponibilite-${id}`).addEventListener("input", () => {
      dataCreation[i].disponibilite = document.getElementById(`disponibilite-${id}`).value;
    });
  }
};
  
  
  document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("addEntry").addEventListener("click", addEntry);
    document.getElementById("addEntry2").addEventListener("click", addEntry2);
    document.getElementById("addEntry3").addEventListener("click", addEntry3);
    document.getElementById("addEntry4").addEventListener("click", addEntry4);
});
/******   bar de progression des elements *****/

console.log(document.getElementById("addEntry"));
console.log(document.getElementById("addEntry2"));
console.log(document.getElementById("addEntry3"));
console.log(document.getElementById("addEntry4"));
  

// initialize variables
var current_fs, next_fs, previous_fs;
var left, opacity, scale; //fieldset properties which we will animate
var animating = false;

// add click event listeners to next and previous buttons
var currentIndex = 0; // Commence par le premier fieldset
var fieldsets = $("fieldset");
$(fieldsets[0]).show(); // Affiche seulement le premier au début

$(".next").click(function() {
    if (currentIndex < fieldsets.length - 1) {
        $(fieldsets[currentIndex]).hide();
        currentIndex++;
        $(fieldsets[currentIndex]).show();
    }
});

$(".previous").click(function() {
    if (currentIndex > 0) {
        $(fieldsets[currentIndex]).hide();
        currentIndex--;
        $(fieldsets[currentIndex]).show();
    }
});