function gerarSenha() {
    const length = document.getElementById('length').value;
    const uppercase = document.getElementById('uppercase').checked;
    const lowercase = document.getElementById('lowercase').checked;
    const numbers = document.getElementById('numbers').checked;
    const symbols = document.getElementById('symbols').checked;

    const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerChars = "abcdefghijklmnopqrstuvwxyz";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()_+{}[]|:;<>,.?/~`-=";

    let allChars = "";
    if (uppercase) allChars += upperChars;
    if (lowercase) allChars += lowerChars;
    if (numbers) allChars += numberChars;
    if (symbols) allChars += symbolChars;

    if (allChars === "") {
        document.getElementById('senhaGerada').textContent = "Selecione pelo menos uma opção.";
        return;
    }

    let senha = "";
    for (let i = 0; i < length; i++) {
        const randIndex = Math.floor(Math.random() * allChars.length);
        senha += allChars[randIndex];
    }

    document.getElementById('senhaGerada').textContent = senha;
}
