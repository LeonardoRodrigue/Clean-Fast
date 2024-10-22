function showLar() {
    // Exibe a seção "Para o seu lar"
    document.getElementById('lar-section').style.display = 'flex';
    // Oculta a seção "Para sua empresa"
    document.getElementById('empresa-section').style.display = 'none';
}

function showEmpresa() {
    // Exibe a seção "Para sua empresa"
    document.getElementById('empresa-section').style.display = 'flex';
    // Oculta a seção "Para o seu lar"
    document.getElementById('lar-section').style.display = 'none';
}
