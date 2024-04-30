    function calcularJuros() {
        var valorFinanciado = parseFloat(document.getElementById('valorFinanciado').value);
        var taxaJuros = parseFloat(document.getElementById('taxaJuros').value);
        var valorEntrada = parseFloat(document.getElementById('valorEntrada').value);
        var quantidadeMeses = parseInt(document.getElementById('quantidadeMeses').value);
	
        var taxaJurosi = taxaJuros / 100;

        var valorFinanciar = valorFinanciado - valorEntrada;
        
        var calcPot = (1 + taxaJurosi) ** quantidadeMeses;
        
        var parcela = (calcPot * taxaJurosi) / (calcPot - 1) * valorFinanciar;

        document.getElementById('resultado').value = parcela.toFixed(2);
    }

        //CRIAÇÃO DE CARD DE REDIRECIONAMENTO DE CLIQUE//
    const container = document.querySelector('.row');
    const overlay = document.createElement('div');
    overlay.classList.add('overlay');

    sites.forEach(site => {
        const card = document.createElement('div');
        card.classList.add('col-md-3');

        const cardContent = `
            <div class="card">
                <div class="card-body">
                    <div class="tamanho_cards">
                    <img src="${site.img}" class="card-img-top tamanho_cards" alt="...">
                    
                    </div>
                </div>
            </div>
        `;

    //<h5 class="card-title">${site.name}</h5>  //POR DE VOLTA NO CARD, ABAIXO DA IMAGEM.//
    
    card.innerHTML = cardContent;
    container.appendChild(card);

    card.addEventListener('click', () => {
        overlay.innerHTML = `
            <div class="popup">
                <h2>${site.name}</h2>
                <button onclick="window.open('${site.url}', '_blank')">Site</button></br>
                <button onclick="window.open('${site.bko}', '_blank')">Backoffice</button></br>
                <button onclick="window.open('${site.demo}', '_blank')">Site Demo</button></br>
                <button onclick="window.open('${site.bkodemo}', '_blank')">Backoffice Demo</button>
            </div>
        `;
        overlay.classList.add('active');
        document.body.appendChild(overlay);
    });
    });

    // Remove o overlay ao clicar fora dele
    document.addEventListener('click', (event) => {
        if (event.target === overlay) {
            overlay.classList.remove('active');
            overlay.remove();
        }
    });


    // Remove o overlay ao clicar fora dele
    document.addEventListener('click', (event) => {
        if (event.target === overlay) {
            overlay.remove();
        }
    });



    //EXIBIÇÃO DE BOTÕES CENTRAIS//

    let buttonsAdded = false; // Flag para controlar se os botões foram adicionados >>> quando o site era acessado ele redirecionava ao login, por ler a página duas vezes ele duplicava a lista que dependia da leitura da página para aparecer.

    document.addEventListener('DOMContentLoaded', function() {
        const siteList = document.getElementById('site-list');

        sites.forEach(site => {
            const li = document.createElement('li');
            const button = document.createElement('button');
            button.textContent = site.name;
            button.addEventListener('click', () => {
            showAdditionalButtons(site.name, [
                { name: 'Site', url: site.url }, //CRIAÇÃO DE BOTÕES CENTRAIS E REFERENCIAÇÃO DE URL
                { name: 'Backoffice', url: site.bko },
                { name: 'Site Demo', url: site.demo },
                { name: 'Backoffice Demo', url: site.bkodemo }
            ]);
            buttonsAdded = true; // Atualiza a flag para indicar que os botões foram adicionados
        });
                //BOTÕES EXIBIDOS NA LATERAL//
                li.appendChild(button);
                siteList.appendChild(li);
            });
        });

        //CAPTURA DE EVENTO-CLIQUE E REDIRECIONAMENTO AO LINK DE REFERÊNCIA//
    btn.addEventListener('click', () => {
            window.open(button.url, '_blank');
    })

    function salvarAnotacoes() {
        var conteudo = document.getElementById('areaDeTexto').value;

        var blob = new Blob([conteudo], { type: 'text/plain' });
        var link = document.createElement('a');
            link.download = 'anotacoes.txt';
            link.href = window.URL.createObjectURL(blob);
            link.click();
            }


    var cardprov = document.getElementById('tns');

        cardprov.addEventListener('click', () => {
            window.open('https://backoffice.tnscasino.com:8443/login', '_blank');
    });


    function calc() {
        let horas = document.getElementById("horas").value;
        let dias = document.getElementById("dias").value;
        let kwh = document.getElementById("kwh").value;
        let tarifa = document.getElementById("tarifa").value;
        
        let calculo = (horas * dias) * kwh / 1000 * tarifa;

        document.getElementById("result").value = calculo; 
        //<!-- document.getElementById("#result").html("<div><h3>O custo com combustível será de R$" + result.calculo + ".</h3></div>");-->
    }


    function formatarPreco(input) {
        // Remove caracteres não numéricos, exceto ponto decimal e vírgula
        let valor = input.value.replace(/[^\d,]/g, '');

        // Divide a string em parte inteira e parte decimal
        let partes = valor.split(',');

        // Formata o número com ponto de milhar e vírgula como separador decimal
        partes[0] = partes[0].replace(/\B(?=(\d{2})+(?!\d))/g, '.');

        // Atualiza o valor no campo de entrada
        input.value = partes.join(',');
    }

    function calcombust(){

        var distancia = document.getElementById("distancia").value;
        var combustivel = document.getElementById("combustivel").value;
        var consumo = document.getElementById("consumo").value;

        calculo = (distancia / consumo) * combustivel;
        console.log(calculo)
            document.getElementById("result").value = calculo; 
    }