'use strict';

(() => {
  const $ = id => document.getElementById(id);
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const scrollBehavior = () => reducedMotion.matches ? 'auto' : 'smooth';
  const programs = {
    conversation: {
      goal: 'Conversação', eyebrow: 'CONVERSATION / VOZ, REPERTÓRIO, CONFIANÇA',
      title: ['Mais do que responder.', 'Saber se expressar.'],
      description: 'Conversas relevantes, prática guiada e atenção ao que faz diferença na sua fala: naturalidade, precisão e a confiança para desenvolver uma ideia.',
      features: ['Temas escolhidos a partir dos seus interesses', 'Vocabulário e gramática em contexto', 'Material de conversação incluído'],
      cta: 'Quero desenvolver minha conversação',
      label: 'DO CORRETO AO MAIS EXPRESSIVO', basic: 'I think this is a good idea.', divider: 'Uma forma de ampliar a ideia',
      before: 'From my perspective, this is a ', highlight: 'worthwhile approach.', after: '',
      translation: 'Na minha perspectiva, essa é uma abordagem que vale a pena.',
      context: 'Quando usar: ao apresentar uma opinião e avaliar uma proposta. A melhor escolha depende do contexto e do seu tom.',
      note: 'Um exemplo do repertório que você pode construir.'
    },
    business: {
      goal: 'Business English', eyebrow: 'BUSINESS ENGLISH / CLAREZA QUE FAZ DIFERENÇA',
      title: ['Sua competência merece', 'ser bem comunicada.'],
      description: 'Inglês aplicado a reuniões, apresentações, entrevistas e negociações. A experiência com profissionais do mercado financeiro aproxima a prática da sua rotina.',
      features: ['Comunicação em situações do seu trabalho', 'Vocabulário de negócios e finanças', 'Clareza para apresentar e sustentar suas ideias'],
      cta: 'Quero inglês para minha carreira',
      label: 'NA PRÓXIMA REUNIÃO', basic: "I don't agree.", divider: 'Discorde e mantenha a conversa aberta',
      before: "I see your point. However, I'd like to ", highlight: 'offer a different perspective.', after: '',
      translation: 'Entendo seu ponto. No entanto, gostaria de oferecer uma perspectiva diferente.',
      context: 'Quando usar: para discordar com respeito em uma discussão profissional, sem perder a firmeza.',
      note: 'Linguagem que conecta precisão e intenção.'
    },
    ielts: {
      goal: 'IELTS', eyebrow: 'IELTS / PREPARAÇÃO COM DIREÇÃO',
      title: ['Uma meta clara.', 'Uma preparação individual.'],
      description: 'Prática de linguagem e comunicação orientada ao IELTS, com atenção ao seu ponto de partida e ao que você precisa desenvolver para a prova.',
      features: ['Prática de compreensão e produção em inglês', 'Organização de ideias no speaking e no writing', 'Conteúdo alinhado ao seu objetivo'],
      cta: 'Conversar sobre minha preparação',
      label: 'DESENVOLVA SUA RESPOSTA', basic: 'Technology is useful.', divider: 'Acrescente uma ideia concreta',
      before: 'One of the main benefits of technology is that it ', highlight: 'makes information more accessible.', after: '',
      translation: 'Um dos principais benefícios da tecnologia é tornar a informação mais acessível.',
      context: 'Na prática: desenvolva sua opinião com uma razão ou um exemplo. Vocabulário sofisticado funciona melhor quando ajuda a comunicar a ideia.',
      note: 'Exemplo de linguagem; não é uma resposta oficial do exame.'
    },
    toefl: {
      goal: 'TOEFL', eyebrow: 'TOEFL / INGLÊS ACADÊMICO EM FOCO',
      title: ['Prepare seu inglês', 'para o próximo desafio.'],
      description: 'Estudo direcionado para quem precisa comprovar o inglês em contextos acadêmicos. O trabalho acompanha suas necessidades de compreensão e expressão.',
      features: ['Vocabulário e comunicação acadêmica', 'Clareza para resumir e relacionar ideias', 'Preparação ajustada ao seu nível'],
      cta: 'Quero me preparar para o TOEFL',
      label: 'CONECTE AS IDEIAS', basic: 'The author says something different.', divider: 'Expresse a relação com precisão',
      before: "The author's argument ", highlight: 'contrasts with', after: ' the explanation presented in the lecture.',
      translation: 'O argumento do autor contrasta com a explicação apresentada na palestra.',
      context: 'Quando usar: ao comparar duas fontes que apresentam ideias diferentes. Identifique primeiro a relação entre elas.',
      note: 'Exemplo de linguagem acadêmica; não é uma questão oficial.'
    },
    cambridge: {
      goal: 'Cambridge', eyebrow: 'CAMBRIDGE / PRECISÃO E NATURALIDADE',
      title: ['Conhecimento de quem', 'também examina.'],
      description: 'Preparação para FCE, CAE e CPE com Rodrigo, examinador oficial Cambridge. Um trabalho individual para desenvolver linguagem e comunicação com consistência.',
      features: ['B2 First, C1 Advanced e C2 Proficiency', 'Repertório gramatical aplicado à comunicação', 'Atenção à clareza e à naturalidade das respostas'],
      cta: 'Conversar sobre meu exame Cambridge',
      label: 'ESTRUTURA COM INTENÇÃO', basic: 'I had never felt so confident.', divider: 'Uma inversão para dar ênfase',
      before: '', highlight: 'Never had I felt', after: ' so confident speaking English.',
      translation: 'Nunca antes eu havia me sentido tão confiante falando inglês.',
      context: 'Como funciona: com “never” no início, o auxiliar vem antes do sujeito. É uma escolha enfática, mais marcada do que a ordem comum.',
      note: 'Use a estrutura quando a ênfase fizer sentido.'
    }
  };

  const goal = $('contact-goal');
  const level = $('contact-level');
  const summaries = {
    'Conversação': 'Vamos conversar sobre sua conversação e confiança.',
    'Business English': 'Vamos conversar sobre o inglês que sua carreira pede.',
    'IELTS': 'Vamos conversar sobre seu objetivo no IELTS.',
    'TOEFL': 'Vamos conversar sobre sua preparação para o TOEFL.',
    'Cambridge': 'Vamos conversar sobre seu próximo exame Cambridge.',
    'Ainda quero definir meu objetivo': 'Vamos descobrir o que você quer alcançar com o inglês.'
  };

  function updateContact() {
    let message = 'Olá, Rodrigo! Conheci a Learn English Fast e gostaria de conversar sobre aulas individuais.\n\nMeu interesse: ' + goal.value + '.';
    if (level.value) message += '\nMeu inglês hoje: ' + level.value + '.';
    message += '\n\nPode me contar como funcionam as aulas, os valores e os horários disponíveis?';
    const contactUrl = new URL('https://wa.me/5519997432121');
    contactUrl.searchParams.set('text', message);
    $('contact-whatsapp').href = contactUrl.href;
    $('contact-summary').textContent = summaries[goal.value] || summaries['Ainda quero definir meu objetivo'];
  }
  goal.addEventListener('change', updateContact);
  level.addEventListener('change', updateContact);
  updateContact();

  const tabs = Array.from(document.querySelectorAll('[data-program]'));
  const phraseToggle = $('phrase-toggle');

  function resetPhrase() {
    phraseToggle.setAttribute('aria-expanded', 'false');
    $('phrase-explanation').hidden = true;
    $('phrase-toggle-label').textContent = 'Ver o sentido e o uso';
  }

  function chooseProgram(key, focusTab = false) {
    const data = programs[key];
    if (!data) return;
    tabs.forEach(tab => {
      const selected = tab.dataset.program === key;
      tab.setAttribute('aria-selected', String(selected));
      tab.tabIndex = selected ? 0 : -1;
      if (selected && focusTab) tab.focus({ preventScroll: true });
    });
    $('program-panel').setAttribute('aria-labelledby', 'tab-' + key);
    $('program-eyebrow').textContent = data.eyebrow;
    $('program-title').replaceChildren(document.createTextNode(data.title[0]), document.createElement('br'), document.createTextNode(data.title[1]));
    $('program-description').textContent = data.description;
    const features = data.features.map(text => {
      const li = document.createElement('li'); li.textContent = text; return li;
    });
    $('program-features').replaceChildren(...features);
    $('program-contact-label').textContent = data.cta;
    $('program-contact').dataset.contactGoal = data.goal;
    $('phrase-label').textContent = data.label;
    $('phrase-basic').textContent = '“' + data.basic + '”';
    $('phrase-divider').textContent = data.divider;
    const emphasis = document.createElement('em'); emphasis.textContent = data.highlight;
    $('phrase-elevated').replaceChildren(document.createTextNode('“' + data.before), emphasis, document.createTextNode(data.after + '”'));
    $('phrase-translation').textContent = '“' + data.translation + '”';
    $('phrase-context').textContent = data.context;
    $('phrase-note').textContent = data.note;
    resetPhrase();
    goal.value = data.goal;
    updateContact();
    const panel = $('program-panel');
    if (!reducedMotion.matches) {
      panel.classList.remove('panel-updated');
      requestAnimationFrame(() => panel.classList.add('panel-updated'));
    }
    const activeTab = $('tab-' + key);
    const tabRect = activeTab.getBoundingClientRect();
    const listRect = $('program-tabs').getBoundingClientRect();
    if (tabRect.left < listRect.left || tabRect.right > listRect.right) {
      $('program-tabs').scrollBy({ left: tabRect.left - listRect.left - 20, behavior: scrollBehavior() });
    }
  }

  tabs.forEach(tab => {
    tab.addEventListener('click', () => chooseProgram(tab.dataset.program));
    tab.addEventListener('keydown', event => {
      const current = tabs.indexOf(tab);
      let next;
      if (event.key === 'ArrowRight') next = (current + 1) % tabs.length;
      if (event.key === 'ArrowLeft') next = (current - 1 + tabs.length) % tabs.length;
      if (event.key === 'Home') next = 0;
      if (event.key === 'End') next = tabs.length - 1;
      if (next === undefined) return;
      event.preventDefault();
      chooseProgram(tabs[next].dataset.program, true);
    });
  });

  phraseToggle.addEventListener('click', () => {
    const expanded = phraseToggle.getAttribute('aria-expanded') !== 'true';
    phraseToggle.setAttribute('aria-expanded', String(expanded));
    $('phrase-explanation').hidden = !expanded;
    $('phrase-toggle-label').textContent = expanded ? 'Ocultar explicação' : 'Ver o sentido e o uso';
  });
  document.querySelectorAll('[data-show-program]').forEach(link => link.addEventListener('click', () => chooseProgram(link.dataset.showProgram)));
  document.querySelectorAll('[data-contact-goal]').forEach(link => link.addEventListener('click', () => {
    goal.value = link.dataset.contactGoal;
    updateContact();
  }));

  const music = $('site-music');
  const soundButton = $('sound-toggle');
  function updateSound() {
    const playing = !music.paused;
    soundButton.setAttribute('aria-pressed', String(playing));
    soundButton.setAttribute('aria-label', playing ? 'Pausar música ambiente' : 'Ativar música ambiente');
    $('sound-label').textContent = playing ? 'Pausar piano' : 'Piano ambiente';
  }
  music.volume = 0.22;
  soundButton.addEventListener('click', async () => {
    if (!music.paused) { music.pause(); updateSound(); return; }
    try { await music.play(); updateSound(); }
    catch (_) { updateSound(); $('sound-label').textContent = 'Tentar ativar piano'; }
  });
  music.addEventListener('play', updateSound);
  music.addEventListener('pause', updateSound);
  updateSound();

  const videoDialog = $('video-dialog');
  const menuDialog = $('menu-dialog');
  let videoTrigger;
  let resumeMusic = false;
  function syncModalState() {
    document.body.classList.toggle('modal-open', videoDialog.open || menuDialog.open);
  }
  document.querySelectorAll('[data-video]').forEach(link => link.addEventListener('click', event => {
    if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey || event.button !== 0 || typeof videoDialog.showModal !== 'function') return;
    const id = link.dataset.video;
    if (!/^[\w-]{11}$/.test(id)) return;
    event.preventDefault();
    if (videoDialog.open) return;
    videoTrigger = link;
    const title = link.dataset.videoTitle || 'Vídeo da Learn English Fast';
    $('video-dialog-title').textContent = title;
    $('video-youtube').href = 'https://www.youtube.com/watch?v=' + id;
    const frame = document.createElement('iframe');
    frame.src = 'https://www.youtube-nocookie.com/embed/' + id + '?autoplay=1&rel=0';
    frame.title = title;
    frame.allow = 'autoplay; encrypted-media; picture-in-picture; fullscreen';
    frame.allowFullscreen = true;
    frame.referrerPolicy = 'strict-origin-when-cross-origin';
    $('video-player').replaceChildren(frame);
    resumeMusic = !music.paused;
    if (resumeMusic) music.pause();
    videoDialog.showModal();
    syncModalState();
  }));
  $('video-close').addEventListener('click', () => videoDialog.close());
  videoDialog.addEventListener('close', () => {
    $('video-player').replaceChildren();
    syncModalState();
    videoTrigger?.focus({ preventScroll: true });
    if (resumeMusic) music.play().then(updateSound).catch(updateSound);
    resumeMusic = false;
  });
  function closeOnBackdrop(dialog, event) {
    if (event.target !== dialog) return;
    const rect = dialog.getBoundingClientRect();
    if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close();
  }
  videoDialog.addEventListener('click', event => closeOnBackdrop(videoDialog, event));
  $('menu-toggle').addEventListener('click', () => {
    if (typeof menuDialog.showModal !== 'function' || menuDialog.open) return;
    menuDialog.showModal();
    $('menu-toggle').setAttribute('aria-expanded', 'true');
    syncModalState();
  });
  $('menu-close').addEventListener('click', () => menuDialog.close());
  menuDialog.addEventListener('close', () => {
    $('menu-toggle').setAttribute('aria-expanded', 'false');
    syncModalState();
  });
  menuDialog.addEventListener('click', event => closeOnBackdrop(menuDialog, event));
  menuDialog.querySelectorAll('a[href^="#"]').forEach(link => link.addEventListener('click', event => {
    if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
    const target = document.querySelector(link.getAttribute('href'));
    if (!target) return;
    event.preventDefault();
    menuDialog.close();
    target.scrollIntoView({ behavior: scrollBehavior(), block: 'start' });
    const heading = target.querySelector('h2') || target;
    heading.tabIndex = -1;
    heading.focus({ preventScroll: true });
    history.replaceState(null, '', link.getAttribute('href'));
  }));

  const rail = $('testimonial-rail');
  const cards = Array.from(rail.querySelectorAll('.testimonial-card'));
  function carouselMetrics() {
    const cardWidth = cards[0].getBoundingClientRect().width;
    const gap = parseFloat(getComputedStyle(rail).columnGap) || 23;
    const step = cardWidth + gap;
    const visible = Math.max(1, Math.floor((rail.clientWidth + gap + 2) / step));
    const start = Math.min(cards.length - visible, Math.max(0, Math.round(rail.scrollLeft / step)));
    return { step, visible, start };
  }
  function updateCarousel() {
    const { visible, start } = carouselMetrics();
    const first = String(start + 1).padStart(2, '0');
    const last = String(Math.min(cards.length, start + visible)).padStart(2, '0');
    $('testimonial-count').textContent = (visible === 1 ? first : first + '–' + last) + ' / 06';
    $('testimonial-prev').disabled = rail.scrollLeft < 2;
    $('testimonial-next').disabled = rail.scrollLeft + rail.clientWidth >= rail.scrollWidth - 3;
  }
  function moveCarousel(direction) {
    const { step, visible } = carouselMetrics();
    rail.scrollBy({ left: direction * step * visible, behavior: scrollBehavior() });
  }
  $('testimonial-prev').addEventListener('click', () => moveCarousel(-1));
  $('testimonial-next').addEventListener('click', () => moveCarousel(1));
  let carouselFrame = false;
  rail.addEventListener('scroll', () => {
    if (carouselFrame) return;
    carouselFrame = true;
    requestAnimationFrame(() => { updateCarousel(); carouselFrame = false; });
  }, { passive: true });
  rail.addEventListener('keydown', event => {
    if (event.target !== rail) return;
    if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
      event.preventDefault(); moveCarousel(event.key === 'ArrowRight' ? 1 : -1);
    }
    if (event.key === 'Home' || event.key === 'End') {
      event.preventDefault(); rail.scrollTo({ left: event.key === 'Home' ? 0 : rail.scrollWidth, behavior: scrollBehavior() });
    }
  });
  window.addEventListener('resize', updateCarousel, { passive: true });
  updateCarousel();

  document.querySelectorAll('[data-remote-image]').forEach(img => {
    function imageFailed() {
      img.classList.add('image-unavailable');
      const row = img.closest('.cover-row');
      if (row && Array.from(row.querySelectorAll('img')).every(image => image.classList.contains('image-unavailable'))) row.classList.add('empty');
    }
    img.addEventListener('error', imageFailed);
    if (img.complete && img.naturalWidth === 0) imageFailed();
  });

  let scrollFrame = false;
  function updateProgress() {
    document.documentElement.style.setProperty('--header-height', $('header').offsetHeight + 'px');
    const total = document.documentElement.scrollHeight - window.innerHeight;
    const fraction = total > 0 ? Math.min(1, Math.max(0, window.scrollY / total)) : 0;
    $('reading-progress').style.transform = 'scaleX(' + fraction + ')';
  }
  window.addEventListener('scroll', () => {
    if (scrollFrame) return;
    scrollFrame = true;
    requestAnimationFrame(() => { updateProgress(); scrollFrame = false; });
  }, { passive: true });
  window.addEventListener('resize', updateProgress, { passive: true });
  updateProgress();

  if ('IntersectionObserver' in window) {
    if (!reducedMotion.matches) {
      const revealObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return;
          entry.target.classList.remove('reveal-pending');
          entry.target.classList.add('reveal-ready');
          revealObserver.unobserve(entry.target);
        });
      }, { threshold: 0.08 });
      document.querySelectorAll('[data-reveal]').forEach(element => {
        element.classList.add('reveal-pending');
        revealObserver.observe(element);
      });
    }
    const navigation = Array.from(document.querySelectorAll('.desktop-nav a'));
    const sections = navigation.map(link => document.querySelector(link.getAttribute('href'))).filter(Boolean);
    const navObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const link = navigation.find(item => item.getAttribute('href') === '#' + entry.target.id);
        if (entry.isIntersecting) {
          navigation.forEach(item => item.removeAttribute('aria-current'));
          link?.setAttribute('aria-current', 'location');
        } else link?.removeAttribute('aria-current');
      });
    }, { rootMargin: '-' + ($('header').offsetHeight + 20) + 'px 0px -' + Math.floor(window.innerHeight * 0.55) + 'px 0px', threshold: 0 });
    sections.forEach(section => navObserver.observe(section));
    const contactVisibility = new Map();
    const contactObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => contactVisibility.set(entry.target, entry.isIntersecting));
      document.querySelector('.floating-contact').classList.toggle('is-hidden', Array.from(contactVisibility.values()).some(Boolean));
    }, { threshold: 0.05 });
    contactObserver.observe($('contato'));
    contactObserver.observe(document.querySelector('.footer'));
  }
})();
