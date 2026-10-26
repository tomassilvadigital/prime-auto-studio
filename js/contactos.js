// Formulário de demonstração: prepara texto localmente, sem enviar dados.
(() => {
  const form = document.querySelector('#quote-form');
  const result = document.querySelector('#quote-result');
  const output = document.querySelector('#quote-output');
  const copyButton = document.querySelector('#copy-quote');
  const status = document.querySelector('#copy-status');
  if (!form || !result || !output || !copyButton || !status) return;

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    const nome = form.elements.cliente.value.trim();
    const carro = form.elements.automovel.value.trim();
    const servico = form.elements.servico.value;
    const detalhes = form.elements.mensagem.value.trim();
    output.value = `Olá, Prime Auto Studio!

Chamo-me ${nome} e gostaria de pedir informações/orçamento.

Automóvel: ${carro}
Serviço: ${servico}${detalhes ? `
Detalhes: ${detalhes}` : ''}

Obrigado!`;
    result.hidden = false;
    status.textContent = '';
    result.scrollIntoView({behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',block: 'nearest'});
  });
  copyButton.addEventListener('click', async () => {
    try {
      if (!navigator.clipboard || !window.isSecureContext) throw new Error('Clipboard indisponível');
      await navigator.clipboard.writeText(output.value);
      status.textContent = 'Mensagem copiada! Agora podes colá-la no Instagram.';
    } catch (_) {
      output.focus(); output.select();
      status.textContent = 'Selecionámos a mensagem. Copia-a com Ctrl+C (ou Copiar no telemóvel).';
    }
  });
})();
