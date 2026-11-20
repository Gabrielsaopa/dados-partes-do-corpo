const BODY_HIT_TABLE = {
  1: {
    name: "Cabeça",
    icon: "fa-skull",
    parts: {
      1: { name: "Crânio (Osso Frontal)", type: "Osso / Estrutural", severity: "grave" },
      2: { name: "Olho / Órbita Ocular", type: "Órgão Sensorial", severity: "critico" },
      3: { name: "Maxilar / Dentes", type: "Osso / Face", severity: "moderado" },
      4: { name: "Têmpora / Orelha", type: "Equilíbrio / Vascular", severity: "grave" },
      5: { name: "Cérebro (Trauma Intracraniano)", type: "Órgão Vital", severity: "critico" },
      6: { name: "Nariz / Face", type: "Tecido / Cartilagem", severity: "leve" }
    }
  },
  2: {
    name: "Pescoço",
    icon: "fa-user-injured",
    parts: {
      1: { name: "Traqueia / Garganta", type: "Via Aérea", severity: "grave" },
      2: { name: "Artéria Carótida", type: "Artéria Principal", severity: "critico" },
      3: { name: "Veia Jugular", type: "Vascular", severity: "critico" },
      4: { name: "Vértebras Cervicais", type: "Coluna / Sistema Nervoso", severity: "critico" },
      5: { name: "Músculo Lateral (Esternocleido)", type: "Tecido Muscular", severity: "moderado" },
      6: { name: "Laringe / Cordas Vocais", type: "Órgão / Cartilagem", severity: "grave" }
    }
  },
  3: {
    name: "Peito / Tórax",
    icon: "fa-heart-pulse",
    parts: {
      1: { name: "Costelas / Caixa Torácica", type: "Osso / Estrutural", severity: "moderado" },
      2: { name: "Pulmão Direito", type: "Órgão Respiratório", severity: "grave" },
      3: { name: "Pulmão Esquerdo", type: "Órgão Respiratório", severity: "grave" },
      4: { name: "Coração / Pericárdio", type: "Órgão Vital", severity: "critico" },
      5: { name: "Músculo Peitoral / Esterno", type: "Músculo e Osso", severity: "moderado" },
      6: { name: "Artéria Subclávia / Aorta Torácica", type: "Artéria Principal", severity: "critico" }
    }
  },
  4: {
    name: "Barriga / Abdômen",
    icon: "fa-crutch",
    parts: {
      1: { name: "Estômago", type: "Órgão Digestivo", severity: "grave" },
      2: { name: "Fígado / Vesícula", type: "Órgão Vascularizado", severity: "critico" },
      3: { name: "Intestinos", type: "Órgão Interno", severity: "grave" },
      4: { name: "Baço / Pâncreas", type: "Órgão Interno", severity: "grave" },
      5: { name: "Parede Muscular Abdominal", type: "Tecido Muscular", severity: "leve" },
      6: { name: "Rim / Aorta Abdominal", type: "Órgão / Vascular", severity: "critico" }
    }
  },
  5: {
    name: "Braço Esquerdo",
    icon: "fa-hand-fist",
    parts: {
      1: { name: "Músculo (Bíceps / Tríceps)", type: "Tecido Muscular", severity: "leve" },
      2: { name: "Artéria Braquial", type: "Artéria Principal", severity: "grave" },
      3: { name: "Osso (Úmero / Rádio)", type: "Osso / Estrutural", severity: "moderado" },
      4: { name: "Articulação (Ombro / Cotovelo)", type: "Tendão / Cartilagem", severity: "moderado" },
      5: { name: "Tendões do Antebraço", type: "Nervo / Tendão", severity: "moderado" },
      6: { name: "Mão / Dedos", type: "Extremidade", severity: "leve" }
    }
  },
  6: {
    name: "Braço Direito",
    icon: "fa-hand-fist",
    parts: {
      1: { name: "Músculo (Bíceps / Tríceps)", type: "Tecido Muscular", severity: "leve" },
      2: { name: "Artéria Braquial", type: "Artéria Principal", severity: "grave" },
      3: { name: "Osso (Úmero / Rádio)", type: "Osso / Estrutural", severity: "moderado" },
      4: { name: "Articulação (Ombro / Cotovelo)", type: "Tendão / Cartilagem", severity: "moderado" },
      5: { name: "Tendões do Antebraço", type: "Nervo / Tendão", severity: "moderado" },
      6: { name: "Mão / Dedos", type: "Extremidade", severity: "leve" }
    }
  },
  7: {
    name: "Perna Esquerda",
    icon: "fa-shoe-prints",
    parts: {
      1: { name: "Músculo da Coxa (Quadríceps)", type: "Tecido Muscular", severity: "leve" },
      2: { name: "Artéria Femoral", type: "Artéria Principal", severity: "critico" },
      3: { name: "Osso (Fêmur / Tíbia)", type: "Osso / Estrutural", severity: "grave" },
      4: { name: "Articulação do Joelho", type: "Ligamento / Patela", severity: "moderado" },
      5: { name: "Panturrilha / Tendão de Aquiles", type: "Músculo / Tendão", severity: "moderado" },
      6: { name: "Pé / Tornozelo", type: "Extremidade", severity: "leve" }
    }
  },
  8: {
    name: "Perna Direita",
    icon: "fa-shoe-prints",
    parts: {
      1: { name: "Músculo da Coxa (Quadríceps)", type: "Tecido Muscular", severity: "leve" },
      2: { name: "Artéria Femoral", type: "Artéria Principal", severity: "critico" },
      3: { name: "Osso (Fêmur / Tíbia)", type: "Osso / Estrutural", severity: "grave" },
      4: { name: "Articulação do Joelho", type: "Ligamento / Patela", severity: "moderado" },
      5: { name: "Panturrilha / Tendão de Aquiles", type: "Músculo / Tendão", severity: "moderado" },
      6: { name: "Pé / Tornozelo", type: "Extremidade", severity: "leve" }
    }
  }
};

const SEVERITY_LABELS = {
  leve: "Impacto Superficial",
  moderado: "Trauma Moderado",
  grave: "Lesão Grave",
  critico: "Ponto Vital / Crítico"
};

/**
 * Executa a rolagem dos 2 dados (1d8 para Região + 1d6 para Anatomia)
 */
async function rollBodyPart() {
  const roll = await new Roll("1d8 + 1d6").evaluate();
  const regionRoll = roll.dice[0].total;
  const partRoll = roll.dice[1].total;

  const region = BODY_HIT_TABLE[regionRoll];
  const specificPart = region.parts[partRoll];
  const severityLabel = SEVERITY_LABELS[specificPart.severity];

  const speaker = ChatMessage.getSpeaker();
  const content = `
    <div class="body-dice-card severity-${specificPart.severity}">
      <header class="body-dice-header">
        <i class="fas ${region.icon}"></i>
        <span>Localização de Ferimento</span>
      </header>

      <div class="body-dice-results">
        <div class="dice-tier">
          <span class="dice-badge" title="Dado 1 (1d8)">🎲 d8: ${regionRoll}</span>
          <div class="tier-info">
            <span class="tier-label">Região Atingida</span>
            <strong class="tier-value">${region.name}</strong>
          </div>
        </div>

        <div class="dice-divider"><i class="fas fa-arrow-down"></i></div>

        <div class="dice-tier specific-tier">
          <span class="dice-badge" title="Dado 2 (1d6)">🎲 d6: ${partRoll}</span>
          <div class="tier-info">
            <span class="tier-label">Estrutura / Órgão (${specificPart.type})</span>
            <strong class="tier-value highlight">${specificPart.name}</strong>
          </div>
        </div>
      </div>

      <div class="severity-banner">
        <span>Grau: <strong>${severityLabel}</strong></span>
      </div>

      <button type="button" class="body-dice-btn" data-action="roll-body-part">
        <i class="fas fa-dice"></i> Rolar Parte do Corpo
      </button>
    </div>
  `;

  await ChatMessage.create({
    user: game.user.id,
    speaker: speaker,
    content: content,
    rolls: [roll]
  });
}

/**
 * Envia um card no chat pedindo para os jogadores clicarem e rolarem
 */
async function sendPromptToChat() {
  const content = `
    <div class="body-dice-card prompt-card">
      <header class="body-dice-header">
        <i class="fas fa-crosshairs"></i>
        <span>Teste de Localização</span>
      </header>
      <p class="prompt-text">Clique abaixo para rolar os dados de <strong>Região (1d8)</strong> e <strong>Anatomia (1d6)</strong> do golpe:</p>
      <button type="button" class="body-dice-btn" data-action="roll-body-part">
        <i class="fas fa-dice"></i> Rolar Parte do Corpo
      </button>
    </div>
  `;

  await ChatMessage.create({
    user: game.user.id,
    speaker: ChatMessage.getSpeaker(),
    content: content
  });
}

// Expor funções globalmente para uso em Macros se desejar
Hooks.once("init", () => {
  game.bodyDice = {
    roll: rollBodyPart,
    prompt: sendPromptToChat
  };
});

// Delegação de clique global para funcionar tanto em jQuery quanto em DOM nativo (Foundry v12-v14)
Hooks.once("ready", () => {
  document.body.addEventListener("click", (event) => {
    const btn = event.target.closest('[data-action="roll-body-part"]');
    if (btn) {
      event.preventDefault();
      rollBodyPart();
    }
  });
});

// Adicionar botão de acesso rápido acima da caixa de mensagem do Chat
Hooks.on("renderChatLog", (app, html) => {
  const root = html instanceof HTMLElement ? html : html[0];
  if (!root) return;

  const chatControls = root.querySelector("#chat-controls") || root.querySelector(".chat-controls");
  if (!chatControls || root.querySelector(".body-dice-toolbar-btn")) return;

  const btn = document.createElement("a");
  btn.className = "chat-control-icon body-dice-toolbar-btn";
  btn.title = "Clique: Rolar Parte do Corpo | Clique Direito: Enviar Botão para os Players";
  btn.innerHTML = '<i class="fas fa-child-reaching"></i>';

  btn.addEventListener("click", (e) => {
    e.preventDefault();
    rollBodyPart();
  });

  btn.addEventListener("contextmenu", (e) => {
    e.preventDefault();
    sendPromptToChat();
  });

  chatControls.appendChild(btn);
});

// Comando de chat "/corpo" para qualquer jogador rolar digitando
Hooks.on("chatMessage", (chatLog, message) => {
  const cleanMsg = message.trim().toLowerCase();
  if (cleanMsg === "/corpo" || cleanMsg === "/ferimento") {
    rollBodyPart();
    return false;
  }
});