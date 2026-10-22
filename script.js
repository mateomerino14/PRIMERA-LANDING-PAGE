const form = document.getElementById('signup-form');
const errorMessage = document.getElementById('form-error');
const successMessage = document.getElementById('form-success');
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const markField = (field, isValid) => {
    field.setAttribute('aria-invalid', String(!isValid));
};

const validate = (name, email) => {
    if (!name.value.trim()) {
        return {field: name, message: 'Escribe tu nombre para reservar tu lugar.'};
    }
    if (!emailPattern.test(email.value.trim())) {
        return {field: email, message: 'Revisa el correo: debe tener la forma nombre@dominio.com.'};
    }
    return null;
};

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = form.elements.nombre;
    const email = form.elements.correo;
    const problem = validate(name, email);
    markField(name, problem?.field !== name);
    markField(email, problem?.field !== email);
    if (problem) {
        errorMessage.textContent = problem.message;
        successMessage.textContent = '';
        problem.field.focus();
        return;
    }
    errorMessage.textContent = '';
    successMessage.textContent = `Listo, ${name.value.trim()}. Te escribimos a ${email.value.trim()} con los pasos para completar tu inscripción.`;
    form.reset();
    successMessage.focus();
});
