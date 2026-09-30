/*
  Add or edit certificate records below.
  Upload each PDF to the assets/certificates/ folder and use its relative path here.
  Example: pdf: "assets/certificates/01.pdf"
*/

const CERTIFICATES = [
  { name: "Grandhi Usha Rani garu", pdf: "assets/certificates/Grandhi-Usha-Rani.pdf" },
  { name: "Roja Rani garu", pdf: "assets/certificates/Battula-Roja-Rani.pdf" },
  { name: "Kolluru Varalakshmi garu", pdf: "assets/certificates/Kolluru-Varalakshmi.pdf" },
  { name: "Kolluru Visala Garu", pdf: "assets/certificates/Kolluru-Visala.pdf" },
  { name: "Dara Swarna Gouri garu", pdf: "assets/certificates/Dara-Swarna-Gouri.pdf" },
  { name: "Gutta Aruna garu", pdf: "assets/certificates/Gutta-Aruna.pdf" },
  { name: "Doddi Venkata Padmavathi garu", pdf: "assets/certificates/Doddi-Venkata-Padmavathi.pdf" },
  { name: "S Padmavathi garu", pdf: "assets/certificates/S-Padmavathi.pdf" },
  { name: "Tankala Vasavi garu", pdf: "assets/certificates/Tankala-Vasavi.pdf" },
  { name: "AC Radha garu", pdf: "assets/certificates/AC-Radha.pdf" },
  { name: "Madipalli Venkata Kiranmai garu", pdf: "assets/certificates/Madipalli-Venkata-Kiranmai.pdf" },
  { name: "Boddu Vasavi garu", pdf: "assets/certificates/Boddu-Vasavi.pdf" },
  { name: "Radha Vedula garu", pdf: "assets/certificates/Radha-Vedula.pdf" },
  { name: "Madipalli Jaganmohini garu", pdf: "assets/certificates/Madipalli-Venkata-Naga-Jagan-Mohini.pdf" },
  { name: "Mammula Satyamani garu", pdf: "assets/certificates/Mammula-Satyamani.pdf" },
  { name: "Dangeti Vijaya Guptha garu", pdf: "assets/certificates/Dangeti-Vijaya-Guptha.pdf" },
  { name: "Niharika Kapalavayi garu", pdf: "assets/certificates/Niharika-Kapalavayi.pdf" },
  { name: "N Padmavati garu", pdf: "assets/certificates/N-Padmavati.pdf" },
  { name: "Devarasetty Lakshmi garu", pdf: "assets/certificates/Devarasetty-Lakshmi.pdf" },
  { name: "Katumuru Ammu garu", pdf: "assets/certificates/Katumuru-Ammu.pdf" },
  { name: "K Parvathi garu", pdf: "assets/certificates/K-Parvathi.pdf" },
  { name: "Grandhi Lakshmi garu", pdf: "assets/certificates/Grandhi-Lakshmi.pdf" },
  { name: "Kolla Karuna garu", pdf: "assets/certificates/Kolla-Karuna.pdf" },
  { name: "KVN Suryakantam garu", pdf: "assets/certificates/KVN-Suryakantam.pdf" },
  { name: "Pisipati Nirmala garu", pdf: "assets/certificates/Pisipati-Nirmala.pdf" },
  { name: "Pasuparthy Vydehi garu", pdf: "assets/certificates/Pasuparthy-Vydehi.pdf" },
  { name: "Sridevi Potamsetti garu", pdf: "assets/certificates/Sridevi-Potamsetti.pdf" },
  { name: "Syamala Chilukuri garu", pdf: "assets/certificates/Syamala-Chilukuri.pdf" },
  { name: "Pisipati Annapurna Rajeswari garu", pdf: "assets/certificates/Pisipati-Annapurna-Rajeswari.pdf" },
  { name: "V Umalakshmi garu", pdf: "assets/certificates/V-Umalakshmi.pdf" },
  {name: "Kolla Manju garu", pdf: "assets/certificates/Kolla-Manju.pdf" },
  {name: "Chakka Kanaka Lakshmi garu", pdf: "assets/certificates/Chakka-Kanaka-Lakshmi.pdf" },
];

const searchInput = document.getElementById("nameSearch");
const results = document.getElementById("results");
document.getElementById("year").textContent = new Date().getFullYear();

function showMessage(message) {
  results.replaceChildren();
  const box = document.createElement("div");
  box.className = "message";
  box.textContent = message;
  results.appendChild(box);
}

function renderResults() {
  const query = searchInput.value.trim().toLocaleLowerCase();
  if (!query) {
    showMessage("Start typing your name to search for your certificate.");
    return;
  }

  const matches = CERTIFICATES.filter(person =>
    person.name.toLocaleLowerCase().includes(query)
  );

  if (matches.length === 0) {
    showMessage("No matching name found. Please check the spelling or contact Anahata Music Academy.");
    return;
  }

  results.replaceChildren();
  matches.forEach(person => {
    const card = document.createElement("div");
    card.className = "result";

    const info = document.createElement("div");
    const name = document.createElement("div");
    name.className = "name";
    name.textContent = person.name;
    const meta = document.createElement("div");
    meta.className = "meta";
    meta.textContent = "Soundarya Lahari · Batch 1";
    info.append(name, meta);

    const link = document.createElement("a");
    link.className = "download";
    link.href = person.pdf;
    link.target = "_blank";
    link.rel = "noopener";
    link.textContent = "Download Certificate";
    link.setAttribute("aria-label", `Download certificate for ${person.name}`);

    card.append(info, link);
    results.appendChild(card);
  });
}

searchInput.addEventListener("input", renderResults);
