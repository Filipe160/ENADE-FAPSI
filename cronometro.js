// cronometro.js

// Data alvo: 23 de novembro de 2025, às 00:00 no fuso -03:00 (Horário de Brasília)
const targetIso = '2025-11-23T00:00:00-03:00';
const targetDate = new Date(targetIso);

const $days = document.getElementById('days');
const $hours = document.getElementById('hours');
const $minutes = document.getElementById('minutes');
const $seconds = document.getElementById('seconds');
const $note = document.getElementById('note');

function update() {
  const now = new Date();
  const diff = targetDate - now; // milissegundos

  if (diff <= 0) {
    $days.textContent = '0';
    $hours.textContent = '0';
    $minutes.textContent = '0';
    $seconds.textContent = '0';

    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const targetDay = new Date(targetDate.getFullYear(), targetDate.getMonth(), targetDate.getDate());
    if (today.getTime() === targetDay.getTime()) {
      $note.textContent = 'Hoje é o dia da prova! Boa sorte — faça com calma e atenção.';
    } else {
      $note.textContent = 'A data alvo já passou.';
    }
    clearInterval(interval);
    return;
  }

  const sec = Math.floor(diff / 1000);
  const days = Math.floor(sec / (3600 * 24));
  const hours = Math.floor((sec % (3600 * 24)) / 3600);
  const minutes = Math.floor((sec % 3600) / 60);
  const seconds = sec % 60;

  $days.textContent = String(days);
  $hours.textContent = String(hours).padStart(2, '0');
  $minutes.textContent = String(minutes).padStart(2, '0');
  $seconds.textContent = String(seconds).padStart(2, '0');
}

update();
const interval = setInterval(update, 1000);
