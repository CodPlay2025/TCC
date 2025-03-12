document.addEventListener("DOMContentLoaded", function () {
    let entrarBtn = document.querySelector(".login-button");
    let cadastroBtn = document.querySelector(".cadastro-button");

    entrarBtn.addEventListener("click", function (event) {
        event.preventDefault(); // Impede o envio do formulário padrão
        

        let usuarioInput = document.querySelector("input[type='text']");
        let senhaInput = document.querySelector("input[type='password']");
        let usuario = usuarioInput.value.trim();
        let senha = senhaInput.value.trim();

        let valid = true;

        // Reseta os estilos para remover erros anteriores
        resetError(usuarioInput);
        resetError(senhaInput);

        // Verifica se o campo usuário está vazio
        if (usuario === "") {
            showError(usuarioInput);
            valid = false;
        }

        // Verifica se o campo senha está vazio
        if (senha === "") {
            showError(senhaInput);
            valid = false;
        }

        // Se ambos os campos estiverem preenchidos, redireciona para a tela inicial
        if (valid) {
            window.location.href = "inicio.html";
        }
    });

    cadastroBtn.addEventListener("click", function (event) {
        event.preventDefault();
        window.location.href = "tela2_cadastro/cadastro.html";
    });

    // Função para exibir o erro estilizando o input
    function showError(inputElement) {
        inputElement.style.border = "2px solid red";
        inputElement.style.backgroundColor = "rgba(255, 0, 0, 0.1)";
        inputElement.placeholder = "Preenchimento Necessário";
        inputElement.classList.add("error-placeholder");
    }

    // Função para resetar o erro quando o usuário começar a digitar
    function resetError(inputElement) {
        inputElement.style.border = "";
        inputElement.style.backgroundColor = "";
        inputElement.placeholder = inputElement.getAttribute("data-placeholder") || "";
        inputElement.classList.remove("error-placeholder");
    }

    // Salva os placeholders originais para restaurá-los depois
    document.querySelectorAll("input").forEach(input => {
        input.setAttribute("data-placeholder", input.placeholder);
        input.addEventListener("input", () => resetError(input)); // Reseta erro ao digitar
    });
});