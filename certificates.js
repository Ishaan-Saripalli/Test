/*
  Add or edit certificate records below.
  Upload each PDF to the assets/certificates/ folder and use its relative path here.
  Example: pdf: "assets/certificates/01.pdf"
*/
const CERTIFICATES = [
  { name: "Grandhi Usha Rani garu", pdf: "assets/certificates/01.pdf" },
  { name: "Roja Rani garu", pdf: "assets/certificates/02.pdf" },
  { name: "Kolluru Varalakshmi garu", pdf: "assets/certificates/03.pdf" },
  { name: "Kolluru Visala Garu", pdf: "assets/certificates/04.pdf" },
  { name: "Dara Swarna Gouri garu", pdf: "assets/certificates/05.pdf" },
  { name: "Gutta Aruna garu", pdf: "assets/certificates/06.pdf" },
  { name: "Doddi Venkata Padmavathi garu", pdf: "assets/certificates/07.pdf" },
  { name: "S Padmavathi garu", pdf: "assets/certificates/08.pdf" },
  { name: "Tankala Vasavi garu", pdf: "assets/certificates/09.pdf" },
  { name: "AC Radha garu", pdf: "assets/certificates/10.pdf" },
  { name: "Madipalli Venkata Kiranmai garu", pdf: "assets/certificates/11.pdf" },
  { name: "Boddu Vasavi garu", pdf: "assets/certificates/12.pdf" },
  { name: "Radha Vedula garu", pdf: "assets/certificates/13.pdf" },
  { name: "Madipalli Jaganmohini garu", pdf: "assets/certificates/14.pdf" },
  { name: "Mammula Satyamani garu", pdf: "assets/certificates/15.pdf" },
  { name: "Dangeti Vijaya Guptha garu", pdf: "assets/certificates/16.pdf" },
  { name: "Niharika Kapalavayi garu", pdf: "assets/certificates/17.pdf" },
  { name: "N Padmavati garu", pdf: "assets/certificates/18.pdf" },
  { name: "Devarasetty Lakshmi garu", pdf: "assets/certificates/19.pdf" },
  { name: "Kattamuru Ammu garu", pdf: "assets/certificates/20.pdf" },
  { name: "K Parvathi garu", pdf: "assets/certificates/21.pdf" },
  { name: "Grandhi Lakshmi garu", pdf: "assets/certificates/22.pdf" },
  { name: "Kolla Karuna garu", pdf: "assets/certificates/23.pdf" },
  { name: "KVN Suryakantam garu", pdf: "assets/certificates/24.pdf" },
  { name: "Pisipati Nirmala garu", pdf: "assets/certificates/25.pdf" },
  { name: "Pasuparthy Vydehi garu", pdf: "assets/certificates/26.pdf" },
  { name: "Sridevi Potamsetti garu", pdf: "assets/certificates/27.pdf" },
  { name: "Syamala Chilukuri garu", pdf: "assets/certificates/28.pdf" },
  { name: "Pisipati Annapurna Rajeswari garu", pdf: "assets/certificates/29.pdf" },
  { name: "V Umalakshmi garu", pdf: "assets/certificates/30.pdf" }
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
