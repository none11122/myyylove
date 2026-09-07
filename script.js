/* ============================================================
   ЛИЧНЫЙ ТЕКСТ ПИСЬМА
   Поменяй текст ниже на свой. \n внутри строки — перенос строки.
   ============================================================ */
const myLoveLetter = `Матурым, я щас сижу и до меня наконец-то дошло, какой я был дурак все эти дни со своими загонами.

Извини меня, пожалуйста, за всю эту глупую ревность и контроль, пускай даже маленький, я сам не понимал, как меня паничкой накрывало от страха тебя потерять.

Ты уехала в Казань, тебе там самой непросто, а я вместо поддержки устроил какой-то сумбур и только тяжелее тебе делал, мне за это реально жутко стыдно.

Я так тебе благодарен за твоё терпение, за то, что ты всё равно открываешься мне, разговариваешь и успокаиваешь, несмотря на мои тупые косяки.

Ты для меня единственная и самая любимая, у меня в мыслях только ты одна и больше никто, и я сделаю всё, чтобы ты больше из-за меня не плакала.

Я безумно тебя люблю, яратам тебя сильно-сильно, отдыхай моя хорошая, всё будет отлично у нас ❤️`;

/* ============================================================
   СЛОВО-КЛЮЧ (регистр и пробелы по краям не важны)
   ============================================================ */
const SECRET_WORD = "матурым";

/* ============================================================
   ЭЛЕМЕНТЫ
   ============================================================ */
const screenGate   = document.getElementById("screen-gate");
const screenReveal = document.getElementById("screen-reveal");
const gateForm      = document.getElementById("gate-form");
const gateInput     = document.getElementById("gate-input");
const toast         = document.getElementById("toast");

const envelopeWrap = document.getElementById("envelope-wrap");
const seal         = document.getElementById("seal");
const paper        = document.getElementById("paper");
const paperText    = document.getElementById("paper-text");
const paperClose   = document.getElementById("paper-close");
const hint         = document.getElementById("hint");

paperText.textContent = myLoveLetter;

let toastTimer = null;

/* ============================================================
   ЭТАП 1 -> ЭТАП 2: проверка слова
   ============================================================ */
gateForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const value = gateInput.value.trim().toLowerCase();

  if (value === SECRET_WORD) {
    goToReveal();
  } else {
    showToast();
    gateInput.value = "";
    gateInput.focus();
  }
});

function showToast() {
  if (toastTimer) {
    clearTimeout(toastTimer);
  }
  toast.classList.add("show");
  toastTimer = setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);
}

function goToReveal() {
  screenGate.classList.add("hidden");
  screenReveal.classList.remove("hidden");
}

/* ============================================================
   ЭТАП 3: конверт открывается, письмо вырастает из него
   ============================================================ */
seal.addEventListener("click", () => {
  openLetter();
});

paperClose.addEventListener("click", (event) => {
  event.stopPropagation();
  closeLetter();
});

function openLetter() {
  if (envelopeWrap.classList.contains("opened")) return;

  envelopeWrap.classList.add("opened");
  paper.classList.add("show");
  hint.classList.add("fade-out");
}

function closeLetter() {
  envelopeWrap.classList.remove("opened");
  paper.classList.remove("show");
  hint.classList.remove("fade-out");
}
