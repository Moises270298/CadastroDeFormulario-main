$(document).ready(function() {
    let isRotated = false;
    $('#toggleForm').click(function() {
        const formContainer = $('#formContainer');
        const innerContent = formContainer.find('.inner-content');
        const toggleFormButton = $(this);

        if (isRotated) {
            formContainer.css('transform', 'rotateY(0deg)');
            innerContent.css('transform', 'rotateY(0deg)');
            toggleFormButton.text('Cadastre-se');
            updateFormFields('personalizado');
        } else {
            formContainer.css('transform', 'rotateY(180deg)');
            innerContent.css('transform', 'rotateY(-180deg)');
            toggleFormButton.text('Login');
            updateFormFields('login');
        }
        isRotated = !isRotated;
    });
    const updateFormFields = (formType) => {
        const innerContent = $('.inner-content');
        const forms = {
            personalizado: `
                <div class="area-nome-completo">
                    <div class="area">
                        <div class="info">
                            <div class="label">Nome</div>
                            <input type="text" class="data-info" placeholder="Nome" required>
                        </div>
                    </div>
                    <div class="area">
                        <div class="info">
                            <div class="label">Sobrenome</div>
                            <input type="text" class="data-info" placeholder="Sobrenome" required>
                        </div>
                    </div>
                </div>
                <div class="info">
                    <div class="label">Email</div>
                    <input type="email" class="data-info" placeholder="Email" required>
                </div>
                <div class="info">
                    <div class="label">Data de Nascimento</div>
                    <div class="data-nascimento">
                        <select name="dia" class="data-info" required>
                            <!-- Opções de dia omitidas para brevidade -->
                        </select>
                        <select name="mes" class="data-info" required>
                            <!-- Opções de mês omitidas para brevidade -->
                        </select>
                        <select name="ano" class="data-info" required>
                            <!-- Opções de ano omitidas para brevidade -->
                        </select>
                    </div>
                </div>
                <label class="label">Gênero</label>
                <div class="genero">
                    <!-- Opções de gênero omitidas para brevidade -->
                </div>
                <button type="submit" class="btn">Enviar</button>
            `,
            login: `
                <div class="info">
                    <div class="label">Nome de Usuário</div>
                    <input type="text" class="data-info" placeholder="Nome de Usuário" required>
                </div>
                <div class="info">
                    <div class="label">Senha</div>
                    <input type="password" class="data-info" placeholder="Senha" required>
                </div>
                <button type="submit" class="btn">Entrar</button>
            `
        };

        innerContent.html(forms[formType]);
    };

    updateFormFields('personalizado');
});