const phone = '5582996402650';

document.querySelectorAll('[data-wa]').forEach((element) => {
  element.href = `https://wa.me/${phone}?text=${encodeURIComponent(element.dataset.wa)}`;
  element.target = '_blank';
  element.rel = 'noopener noreferrer';
});

const leadForm = document.getElementById('lead-form');

if (leadForm) {
  leadForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const form = event.currentTarget;

    if (!form.reportValidity()) {
      return;
    }

    const name = form.elements.name.value.trim();
    const business = form.elements.business.value.trim();

    if (!name || !business) {
      alert('Preencha seu nome e o nome da sua empresa.');
      return;
    }

    const instagram = form.elements.instagram.value.trim();
    const message = `Olá, LVS Page! Meu nome é ${name}. Minha empresa é ${business}.${
      instagram ? ` Meu Instagram: ${instagram}.` : ''
    } Tenho interesse no pacote de R$ 750,00 com domínio, hospedagem e manutenção vitalícia. Gostaria de saber mais!`;

    window.location.href = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  });
}