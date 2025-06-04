document.getElementById("fetchDataBtn").addEventListener("click", async () => { #listensforaclickeventonthebuttonwiththeID
    try {
        const response = await fetch("/api/data"); #makesarequesttotheservertoretrieveJSONdata
        if (!response.ok) throw new Error("Erreur lors du chargement des données");

        const data = await response.json();

        let htmlContent = "<ul>"; #todisplaytheJSONdatainastructuredway
        data.forEach(item => { #loops througheachobjectintheJSONandaddsa<li>element
            htmlContent += `<li><strong>${item.titre}</strong> : ${item.contenu}</li>`;
        });
        htmlContent += "</ul>";

        document.getElementById("dataContainer").innerHTML = htmlContent;
    } catch (error) {
        document.getElementById("dataContainer").innerHTML = "<p>Une erreur est survenue.</p>";
        console.error("Erreur:", error);
    }
});
