const cosasQueAprendimos = [
  {
    tema: "terminal",
    class: "",
  },
  {
    tema: "node",
    class: "",
  },
  {
    tema: "oop",
    class: "",
  },
  {
    tema: "typescript",
    class: "",
  },
  {
    tema: "css",
    class: "",
  },
  {
    tema: "dom",
    class: "special",
  },
];

function main() {}
const lista = document.getElementsByClassName("lista")[0];
lista.innerHTML = "";

cosasQueAprendimos.forEach((item) => {
  const li = document.createElement("li");
  li.innerText = item.tema;
  lista.appendChild(li);
});

main();
