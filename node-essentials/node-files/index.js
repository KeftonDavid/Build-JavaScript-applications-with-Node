const fs = require("fs").promises;
const path = require("path");

async function findSalesFiles(folderName) {
  // receber arquivos em array
  let salesFiles = [];

  async function findFiles(folderName) {
    // ler todos os itens no diretório atual
    const items = await fs.readdir(folderName, { withFileTypes: true });

    // iterar sobre cada item encontrado
    for (item of items) {
      // se o item for uma pasta, procurar na pasta
      if (item.isDirectory()) {
        // chamada recursiva
        await findFiles(path.join(folderName, item.name));
      } else {
        // ter certeza que  arquivo encontrado é um .json
        if (path.extname(item.name) === ".json") {
          // guardar caminho no array salesFiles
          await salesFiles.push(path.join(folderName, item.name));
        }
      }
    }
  }

  await findFiles(folderName);

  return salesFiles;
}

async function main() {
  const salesDir = path.join(__dirname, "stores");
  const salesTotalDir = path.join(__dirname, "salesTotals");

  // criar o diretório salesTotal se não existir 
  try{
    await fs.mkdir(salesTotalDir)
  } catch{
    console.log(`${salesTotalDir} already exists`);
  }

  // encontar caminho para arquivos
  const salesFiles = await findSalesFiles(salesDir);
  console.log(salesFiles);

  // criar um arquivo vazio chamado "totals.txt"
  await fs.writeFile(path.join(salesTotalDir, "totals.txt"), String());
}

main();