const fs = require("fs").promises;

async function findSalesFiles(folderName){
        // array que recebe todos os itens na pasta atual
        let salesFiles = [];

        async function findFiles(folderName){
            const items = await fs.readdir(folderName, { withFileTypes: true });
        // iterar sobre cada item encontrado
        for (item of items){
            // se o item é uma pasta, procurar na pasta
            if(item.isDirectory()){
                await findFiles(`${folderName}/${item.name}`);
            }
            else{
                // se não é uma pasta, confirmar que é um sales.json
                if(item.name === "sales.json"){
                    // guardar o caminho do arquivo no array salesFiles
                    await salesFiles.push(`${folderName}/${item.name}`);
                }
            }
        }
    }
// encontrar os arquivos
await findFiles(folderName);
// retornar o array com o caminho dos arquivos
return salesFiles;
}
async function main(){
    const salesFiles = await findSalesFiles("stores");
    console.log(salesFiles);
}

main();