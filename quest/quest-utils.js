export function generateForm(currentQuest) {
    const inputForm = document.querySelector('section>form');
    const choices = currentQuest.choices;
    for (const choice of choices) {
        const input = document.createElement('input');
        const img = document.createElement('img');
        const label = document.createElement('label');

        input.type = 'radio';
        input.name = 'choice';
        input.value = choice.id;

        img.src = `../assets/${choice.id}.png`;

        label.textContent = choice.description;

        label.append(img, input);
        inputForm.append(label);
    }
}
