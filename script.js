// Data alvo da contagem regressiva (16/12/2023)
const targetDate = new Date('2023-12-16T00:00:00');

// Função para calcular o tempo restante e atualizar a exibição
function updateCountdown() {
    const currentDate = new Date();
    const timeDifference = targetDate - currentDate;

    if (timeDifference > 0) {
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        
        const countdownText = `Faltam ${days} dias, ${hours} horas e ${minutes} minutos para 16/12/2023.`;
        document.getElementById('countdown-text').textContent = countdownText;

        // Trocar a imagem a cada dia
        const currentDay = Math.floor(timeDifference / (1000 * 60 * 60 * 24)) + 1;
        const imageContainer = document.getElementById('image-container');
        const dailyImage = document.getElementById('daily-image');
        dailyImage.src = `imagens/imagem${currentDay}.jpg`; // Substitua pelo caminho correto das suas imagens
        dailyImage.alt = `Imagem do Dia ${currentDay}`;
    } else {
        document.getElementById('countdown-text').textContent = "Chegou o grande dia!";
    }
}

// Atualizar a contagem regressiva a cada minuto
updateCountdown();
setInterval(updateCountdown, 60000);

