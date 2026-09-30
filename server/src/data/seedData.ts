import type { Source, Patch, Build, CraftRecipe, FarmRoute, SourceConflict, AuditLog } from '../types/index.ts';

export const initialSources: Source[] = [
  {
    "id": "src-mobalytics-twister",
    "title": "[0.5.5] Twister Gemling Legionnaire - Guia Mobalytics",
    "type": "GUIDE",
    "url": "https://mobalytics.gg/poe-2/builds/twister-gemling-legionnaire?ws-ngf5-f7d82102-7e77-4a44-ad24-33b67e8ae7bf=activeVariantId%2C5f2ab18c-9445-4049-a6ef-a7863bc88bcc",
    "author": "SnooBAE85",
    "publishedAt": "2026-03-12T12:00:00Z",
    "ingestedAt": "2026-03-15T18:00:00Z",
    "poeVersion": "0.5.5",
    "category": "Build Guide",
    "tags": [
      "Mercenary",
      "Gemling Legionnaire",
      "Twister",
      "0.5.5",
      "Mobalytics"
    ],
    "status": "ACTIVE",
    "notes": "Guia mestre de Twister para Mercenário com Ascendência Gemling Legionnaire no Patch 0.5.5.",
    "rawContent": "Build Guia Mobalytics fornecido pelo administrador:\nTítulo: [0.5.5] Twister Gemling Legionnaire por SnooBAE85.\nHabilidade Central: Twister.\nClasse/Ascendência: Mercenary - Gemling Legionnaire.\nVersão POE2: 0.5.5.\nLink do Perfil no poe.ninja: https://poe.ninja/poe2/builds/forbiddenrites/character/SnooBAE85-3311/SnooGemTwist",
    "extractedDataSummary": "Guia cadastrado e relacionado aos vídeos explicativos de SnooBAE85 e ao perfil SnooGemTwist."
  },
  {
    "id": "src-yt-twister-day3",
    "title": "[PoE2 0.5.5] Day Three Build Updates for Gemling Legionnaire Twister",
    "type": "VIDEO",
    "url": "https://www.youtube.com/watch?v=xInCHNuxl1c",
    "author": "SnooBAE85",
    "publishedAt": "2026-03-13T14:00:00Z",
    "ingestedAt": "2026-03-15T18:00:00Z",
    "poeVersion": "0.5.5",
    "category": "Video Guide",
    "tags": [
      "Twister",
      "Gemling Legionnaire",
      "Updates",
      "Leveling",
      "Vendor Regex"
    ],
    "status": "ACTIVE",
    "notes": "Atualizações dos 3 primeiros dias de progressão da build com benchmarks e regex de vendedor.",
    "rawContent": "Metadados e descrição oficial fornecida pelo autor SnooBAE85:\n- Regex de vendedor para início de campanha: \"[egdl] da.*to a|ck s|nt s|rare|insta\" !quiv\n- Capítulos:\n  0:00 - Intro\n  0:49 - Day one Trial of Sekhemas\n  2:04 - Day two Arbiter of Divinity\n  2:48 - Thoughts on Gemling Twister\n  4:24 - Benchmark numbers\n  5:58 - Obtaining the gear\n  21:09 - An unfortunate bug\n  22:35 - Counting support gem colors\n  29:54 - How I'm farming currency\n  33:37 - Build updates\n- Perfil: https://poe.ninja/poe2/builds/forbiddenrites/character/SnooBAE85-3311/SnooGemTwist",
    "extractedDataSummary": "Extraídos marcos de progressão de campanha, regex para vendors e contagem de cores de gemas de suporte."
  },
  {
    "id": "src-yt-twister-tech",
    "title": "[PoE2 0.5.5] Zero-Effort Double-Damage Tech for Gemling Twister",
    "type": "VIDEO",
    "url": "https://www.youtube.com/watch?v=WrTOjTi2LwM",
    "author": "SnooBAE85",
    "publishedAt": "2026-03-14T16:00:00Z",
    "ingestedAt": "2026-03-15T18:00:00Z",
    "poeVersion": "0.5.5",
    "category": "Video Guide",
    "tags": [
      "Twister",
      "Tech",
      "Double Damage",
      "Verglas",
      "Frost Wall",
      "Cast on Crit"
    ],
    "status": "ACTIVE",
    "notes": "Detalha a mecânica de interação entre Frost Wall e Verglas e Cast-on-Crit com Flame Wall.",
    "rawContent": "Metadados e descrição oficial fornecida pelo autor SnooBAE85:\n- Interação central: Frost Wall & Verglas junto com escalonamento de qualidade alternada do Gemling Legionnaire.\n- Conclusão do autor: \"Com essa mecânica em uso, estou convencido de que Gemling Legionnaire é a melhor ascendência geral para Twister.\"\n- Capítulos:\n  1:48 - Comparação entre Spirit Walker e Gemling Legionnaire\n  3:34 - Frost Wall com Verglas\n  6:19 - Cast-on-crit com Flame & Frost Wall\n  7:59 - Escalonamento revelado\n  10:27 - Demonstração do tempo de atividade do buff de Verglas (uptime)\n  11:53 - Correção sobre o notável Gem Studded\n  14:29 - Outras atualizações da build",
    "extractedDataSummary": "Extraída mecânica revolucionária de Frost Wall + Verglas com Cast-on-Crit Flame Wall e o notável Gem Studded."
  },
  {
    "id": "src-yt-chiba-test1",
    "title": "Testando nosso League Starter da 0.5.5 - ChibaTTV",
    "type": "VIDEO",
    "url": "https://www.youtube.com/watch?v=N141_zQrFKI&t=5s",
    "author": "ChibaTTV",
    "publishedAt": "2026-03-12T19:00:00Z",
    "ingestedAt": "2026-03-29T20:00:00Z",
    "poeVersion": "0.5.5",
    "category": "Video Guide",
    "tags": [
      "Twister",
      "Spirit Walker",
      "League Starter",
      "0.5.5",
      "LisoToMirror",
      "ChibaTTV"
    ],
    "status": "ACTIVE",
    "notes": "Início oficial da jornada \"Liso to Mirror\": teste de viabilidade do Twister como starter da liga 0.5.5.",
    "rawContent": "Saga Liso to Mirror por ChibaTTV (Vídeo 1):\nObjetivo: Começar com 1 Divine e alcançar 1 Mirror na liga 0.5.5.\nHabilidade central: Twister.\nClasse/Ascendência: Spirit Walker.\nLink do Perfil no poe.ninja: https://poe.ninja/poe2/profile/Chibatozoide-8559/runesofaldur/character/LisoToMirror\nTópicos abordados:\n- Escolha da classe base e viabilidade de Twister no early game.\n- Dano inicial elemental e mecânica de projéteis de vento.\n- Planejamento de progressão da campanha sem itens herdados.",
    "extractedDataSummary": "Validado o início da saga \"Liso to Mirror\" no Patch 0.5.5 com Twister Spirit Walker."
  },
  {
    "id": "src-yt-chiba-test2",
    "title": "Testando nosso League Starter da 0.5.5 (Parte 2) - ChibaTTV",
    "type": "VIDEO",
    "url": "https://www.youtube.com/watch?v=5Hyl5T9KyfY",
    "author": "ChibaTTV",
    "publishedAt": "2026-03-13T18:00:00Z",
    "ingestedAt": "2026-03-29T20:00:00Z",
    "poeVersion": "0.5.5",
    "category": "Video Guide",
    "tags": [
      "Twister",
      "Spirit Walker",
      "League Starter",
      "0.5.5",
      "Campanha",
      "ChibaTTV"
    ],
    "status": "ACTIVE",
    "notes": "Continuação dos testes do starter: refinamento da rotação de habilidades e passagem de atos.",
    "rawContent": "Saga Liso to Mirror por ChibaTTV (Vídeo 2):\nAjustes finos no consumo de mana do Twister nos atos intermediários.\nUtilização de Spear Throw como habilidade de suporte e abertura de combate.\nPerfil oficial: https://poe.ninja/poe2/profile/Chibatozoide-8559/runesofaldur/character/LisoToMirror",
    "extractedDataSummary": "Refinamento do gameplay de nivelamento e sustentação de mana de Twister."
  },
  {
    "id": "src-yt-chiba-craft-camp",
    "title": "Praticando os crafts iniciais + Campanha - ChibaTTV",
    "type": "VIDEO",
    "url": "https://www.youtube.com/watch?v=CRU5Y1XBTuQ",
    "author": "ChibaTTV",
    "publishedAt": "2026-03-14T15:00:00Z",
    "ingestedAt": "2026-03-29T20:00:00Z",
    "poeVersion": "0.5.5",
    "category": "Crafting Guide",
    "tags": [
      "Crafting",
      "Campanha",
      "Leveling",
      "Twister",
      "Budget",
      "ChibaTTV"
    ],
    "status": "ACTIVE",
    "notes": "Guia de confecção básica para início de liga: armas e resistências com orçamento zero.",
    "rawContent": "Saga Liso to Mirror por ChibaTTV (Vídeo 3):\nTécnicas de artesanato de baixo custo em atos:\n- Escolha de bases normais com 20% de qualidade prévia usando pedras de amolar.\n- Uso de Transmutação e Alteração para velocidade de ataque e dano plano elemental.\n- Capar resistências com bancada de refúgio antes do Ato 6.",
    "extractedDataSummary": "Procedimentos de craft econômico para progressão autossuficiente na campanha."
  },
  {
    "id": "src-yt-chiba-abyss-start",
    "title": "Start de Gemling Twister + Crafts + Farm Abyss - ChibaTTV",
    "type": "VIDEO",
    "url": "https://www.youtube.com/watch?v=UT3PUQBzASI",
    "author": "ChibaTTV",
    "publishedAt": "2026-03-16T17:00:00Z",
    "ingestedAt": "2026-03-29T20:00:00Z",
    "poeVersion": "0.5.5",
    "category": "Farming Route",
    "tags": [
      "Twister",
      "Abyss",
      "Farming",
      "0.5.5",
      "Early Endgame",
      "Atlas",
      "ChibaTTV"
    ],
    "status": "ACTIVE",
    "notes": "Chegada ao Atlas e introdução da mecânica de farm de Abismo (Abyss) para gerar moedas e joias.",
    "rawContent": "Live Oficial por ChibaTTV (Vídeo 4):\nStart no Atlas com foco na mecânica de Abismo (Abyss).\nTwister permite seguir a fenda do abismo disparando projéteis contínuos sem parar de se mover.\nDrops prioritários: Joias de Abismo com vida e dano elemental, moedas de ouro e orbes de caos.",
    "extractedDataSummary": "Estratégia de abertura do Atlas com farm sistemático de Abismo."
  },
  {
    "id": "src-yt-chiba-abyss-farm",
    "title": "Twister Gemling Farm Abyss !055 - ChibaTTV",
    "type": "VIDEO",
    "url": "https://www.youtube.com/watch?v=nEDIBi8GoOU",
    "author": "ChibaTTV",
    "publishedAt": "2026-03-18T18:00:00Z",
    "ingestedAt": "2026-03-29T20:00:00Z",
    "poeVersion": "0.5.5",
    "category": "Farming Route",
    "tags": [
      "Twister",
      "Abyss",
      "Atlas Farm",
      "Currency",
      "0.5.5",
      "ChibaTTV"
    ],
    "status": "ACTIVE",
    "notes": "Otimização avançada de rotas de Abismo no Tier 10+ e preparação para grandes compras.",
    "rawContent": "Live Oficial por ChibaTTV (Vídeo 5):\nSessão avançada de Abismo em mapas amarelos e vermelhos.\nAjustes defensivos: incorporação de Deflection através da conversão de Evasão (Sleek Jacket + Daggerfoot Shoes).\nAcúmulo de capital visando o Headhunter.",
    "extractedDataSummary": "Rota otimizada de Abismo com mitigação via Deflection de Evasão."
  },
  {
    "id": "src-yt-chiba-hh-bought",
    "title": "HH Comprado ! Gemling Twister + Crafts + Farms - ChibaTTV",
    "type": "VIDEO",
    "url": "https://www.youtube.com/watch?v=Wl0hlbOitqc",
    "author": "ChibaTTV",
    "publishedAt": "2026-03-20T19:00:00Z",
    "ingestedAt": "2026-03-29T20:00:00Z",
    "poeVersion": "0.5.5",
    "category": "Video Guide",
    "tags": [
      "Twister",
      "Headhunter",
      "Milestone",
      "0.5.5",
      "Endgame",
      "ChibaTTV"
    ],
    "status": "ACTIVE",
    "notes": "Grande marco da série: compra e equipamento do Headhunter (HH), multiplicando a velocidade do Twister.",
    "rawContent": "Live Oficial por ChibaTTV (Vídeo 6):\nMarco épico: Compra do Headhunter (Heavy Belt).\nAo matar monstros raros, a absorção de auras de velocidade de ação, velocidade de projétil e dano elemental transforma o Twister em uma máquina de destruição em tela cheia.\nTransição de estratégia de farm para conteúdos de alta densidade de raros.",
    "extractedDataSummary": "Aquisição do Headhunter e integração com a Keystone Dance with Death."
  },
  {
    "id": "src-yt-chiba-breach-farm",
    "title": "Gemling Twister + CRAFTS + BREACH FARM - ChibaTTV",
    "type": "VIDEO",
    "url": "https://www.youtube.com/watch?v=xpt6KYXV_5w",
    "author": "ChibaTTV",
    "publishedAt": "2026-03-22T19:30:00Z",
    "ingestedAt": "2026-03-29T20:00:00Z",
    "poeVersion": "0.5.5",
    "category": "Farming Route",
    "tags": [
      "Twister",
      "Breach",
      "Headhunter",
      "Farm",
      "0.5.5",
      "ChibaTTV"
    ],
    "status": "ACTIVE",
    "notes": "Estratégia de farm de Fendas (Breach) combinada com Headhunter: densidade extrema e lucro de fragmentos.",
    "rawContent": "Live Oficial por ChibaTTV (Vídeo 7):\nCom o Headhunter equipado, a mecânica de Breach (Fendas) se torna a fonte de farm mais rápida do jogo.\nMão de fenda abre centenas de monstros em segundos, acumulando dezenas de buffs de raros instantaneamente.\nGeração massiva de Fragmentos de Fenda, anéis de fenda (Breach Rings) com qualidade e catalisadores.",
    "extractedDataSummary": "Estratégia de Breach Farm de altíssima velocidade potencializada por Headhunter."
  },
  {
    "id": "src-yt-chiba-deli-farm",
    "title": "Gemling Twister + CRAFTS + DELIRIUM FARM - ChibaTTV",
    "type": "VIDEO",
    "url": "https://www.youtube.com/watch?v=L6fsjuISKTQ",
    "author": "ChibaTTV",
    "publishedAt": "2026-03-24T18:00:00Z",
    "ingestedAt": "2026-03-29T20:00:00Z",
    "poeVersion": "0.5.5",
    "category": "Farming Route",
    "tags": [
      "Twister",
      "Delirium",
      "Mirror",
      "Farm",
      "0.5.5",
      "ChibaTTV"
    ],
    "status": "ACTIVE",
    "notes": "Escalonamento para farm de Delirium no Tier 15+: acúmulo de recompensas de espelho e sobrevivência em névoa profunda.",
    "rawContent": "Live Oficial por ChibaTTV (Vídeo 8):\nDesafio de Delirium em mapas de alta dificuldade.\nO Twister cobre a névoa inteira com alcance prolongado.\nImportância do anel The Taming potencializando o dano elemental através dos solos afetados pelo vento.",
    "extractedDataSummary": "Farm de Delirium em mapas T15+ com sinergia elemental do anel The Taming."
  },
  {
    "id": "src-yt-chiba-mirror-spear",
    "title": "Mirror Spear Comprada ! Deli BossRush + Leech Farm Breach - ChibaTTV",
    "type": "VIDEO",
    "url": "https://www.youtube.com/watch?v=yGSxZYWE1z8",
    "author": "ChibaTTV",
    "publishedAt": "2026-03-26T20:00:00Z",
    "ingestedAt": "2026-03-29T20:00:00Z",
    "poeVersion": "0.5.5",
    "category": "Video Guide",
    "tags": [
      "Mirror Spear",
      "Twister",
      "BossRush",
      "Leech Farm",
      "Level 98",
      "Endgame",
      "ChibaTTV"
    ],
    "status": "ACTIVE",
    "notes": "Clímax da Saga Liso to Mirror: compra da lendária Mirror Spear (Soaring Spear) e rota de Deli BossRush e Leech de Breach.",
    "rawContent": "Live Oficial por ChibaTTV (Vídeo 9):\nConclusão vitoriosa da saga \"Liso to Mirror\" no nível 98!\nItem obtido: Mirror Spear (\"Woe Edge\" / \"The Ordained\") com 3x Soul Core of Quipolatl e 18% Attack Speed Rune.\nRota final: Deli BossRush (eliminação instantânea de chefes de Delirium) combinado com Leech Farm em grupo (distribuindo XP, Ouro e Hiveblood gratuitos para a comunidade).\nPerfil final: https://poe.ninja/poe2/profile/Chibatozoide-8559/runesofaldur/character/LisoToMirror",
    "extractedDataSummary": "Conclusão da meta com compra da Mirror Spear, rota de Deli BossRush e status de endgame absoluto."
  },
  {
    "id": "src-yt-chiba-craft-day",
    "title": "CRAFT DAY - Hideout gameplays - ChibaTTV",
    "type": "VIDEO",
    "url": "https://www.youtube.com/watch?v=C-id9EzsNXU",
    "author": "ChibaTTV",
    "publishedAt": "2026-03-27T17:00:00Z",
    "ingestedAt": "2026-03-29T20:00:00Z",
    "poeVersion": "0.5.5",
    "category": "Crafting Guide",
    "tags": [
      "Crafting",
      "Hideout",
      "Breach Ring",
      "Deflection",
      "Endgame Craft",
      "ChibaTTV"
    ],
    "status": "ACTIVE",
    "notes": "Sessão profunda de artesanato no refúgio: confecção de Breach Rings com qualidade e armaduras de Deflection.",
    "rawContent": "Live Oficial por ChibaTTV (Vídeo 10):\nAulas práticas de artesanato de ponta:\n- Confecção do anel Carrion Twirl em base de Breach Ring (+20% de qualidade máxima implícita).\n- Rolar dano duplo de frio e raio plano para multiplicar a base do Twister.\n- Rotação de runas de ferreiro perfeitas (Perfect Iron Rune) para bônus de 60% em armadura, evasão e escudo de energia.",
    "extractedDataSummary": "Guia mestre de confecção de Breach Rings e peças com tripla defesa."
  },
  {
    "id": "src-yt-chiba-craft-poor",
    "title": "Hideout Gameplays - Crafts inclusivos para os POBRES - ChibaTTV",
    "type": "VIDEO",
    "url": "https://www.youtube.com/watch?v=armnL1m6NQ4",
    "author": "ChibaTTV",
    "publishedAt": "2026-03-28T16:00:00Z",
    "ingestedAt": "2026-03-29T20:00:00Z",
    "poeVersion": "0.5.5",
    "category": "Crafting Guide",
    "tags": [
      "Crafting",
      "Budget",
      "Pobres",
      "Early Game",
      "Essências",
      "ChibaTTV"
    ],
    "status": "ACTIVE",
    "notes": "Metodologia de confecção inclusiva para jogadores iniciantes ou sem moedas de valor: equipamentos funcionais por menos de 10 Chaos.",
    "rawContent": "Live Oficial por ChibaTTV (Vídeo 11):\n\"Crafts inclusivos para os POBRES\":\nGuia passo a passo para quem tem apenas algumas dezenas de orbes de alteração e essências de nível baixo.\nComo identificar bases com atributos naturais bons no chão dos mapas, limpar com orbes de limpeza e reconstruir com essências garantidas sem depender de comércio com jogadores.",
    "extractedDataSummary": "Manual prático de artesanato para orçamento de entrada (Budget Crafting)."
  },
  {
    "id": "src-yt-chiba-craft-middle",
    "title": "Hideout Gameplays - Crafts para a classe média - ChibaTTV",
    "type": "VIDEO",
    "url": "https://www.youtube.com/watch?v=S8DZMezMiRI",
    "author": "ChibaTTV",
    "publishedAt": "2026-03-29T16:30:00Z",
    "ingestedAt": "2026-03-29T20:00:00Z",
    "poeVersion": "0.5.5",
    "category": "Crafting Guide",
    "tags": [
      "Crafting",
      "Midgame",
      "Classe Média",
      "Runeforging",
      "Bonded Mods",
      "ChibaTTV"
    ],
    "status": "ACTIVE",
    "notes": "Metodologia de confecção intermediária para a \"classe média\": peças com afixos T1/T2, encantamentos Runeforged e mods Bonded de Shaman.",
    "rawContent": "Live Oficial por ChibaTTV (Vídeo 12):\n\"Crafts para a CLASSE MÉDIA\":\nTransição de peças econômicas para itens de nível de mapa vermelho (Tier 14+):\n- Isolamento de prefixos úteis e uso de bancada avançada.\n- Aplicação de encantamentos de runa de velocidade de ataque em luvas e botas com Deflection.\n- Adição dos modificadores especiais ShamanOnlyMods / Bonded (+20 a +60 de vida e mana máxima).",
    "extractedDataSummary": "Metodologia de craft de nível intermediário com Runeforging e Bonded mods."
  }
];

export const initialConflicts: SourceConflict[] = [
  {
    "id": "conf-twister-gemling-vs-spirit",
    "entityType": "BUILD",
    "entityId": "build-twister-gemling",
    "entityName": "Twister Gemling Legionnaire (SnooBAE85) vs Twister Spirit Walker (ChibaTTV)",
    "fieldName": "Ascendência, Keystone e Mecânica de Escalonamento de Dano",
    "sourceAId": "src-mobalytics-twister",
    "sourceAName": "SnooBAE85 (Twister Gemling Legionnaire)",
    "sourceAValue": "Mercenário / Gemling Legionnaire utilizando qualidade alternada de gemas, notável Gem Studded e ativação de dano dobrado via Frost Wall + Verglas com Cast on Crit Flame Wall.",
    "sourceBId": "src-yt-chiba-mirror-spear",
    "sourceBName": "ChibaTTV (Twister Spirit Walker - Saga Liso to Mirror)",
    "sourceBValue": "Ranger/Huntress Spirit Walker com mão secundária vazia (Keystone Dance with Death para 25% MORE skill speed), anel The Taming (concedendo solo de fogo, raio e gelo simultâneo ao vento de Twister), Headhunter e Soaring Spear.",
    "detectedAt": "2026-03-29T20:00:00Z",
    "status": "RECORDED_UNRESOLVED",
    "resolutionNotes": "Ambas as abordagens alcançaram o endgame do Patch 0.5.5 com sucesso absoluto. SnooBAE foca no aproveitamento mecânico da ascendência do Mercenário e interações de paredes de gelo, enquanto ChibaTTV foca na velocidade pura de execução e sinergia de solos elementais do Spirit Walker com Dance with Death e Headhunter."
  }
];

export const initialPatches: Patch[] = [
  {
    "id": "patch-0-5-5",
    "version": "0.5.5",
    "title": "Path of Exile 2: Patch 0.5.5",
    "releaseDate": "2026-03-10",
    "sourceId": "src-mobalytics-twister",
    "summary": "Versão de balanceamento do Patch 0.5.5 com refinamentos de ascendências e interações de gemas.",
    "changes": [
      {
        "id": "chg-055-1",
        "patchId": "patch-0-5-5",
        "category": "SKILL",
        "changeType": "ADJUSTMENT",
        "targetEntityName": "Twister",
        "rawText": "Twister: Ajuste de escala elemental e interação com mecânicas de projéteis e paredes.",
        "affectedBuildIds": [
          "build-twister-gemling"
        ],
        "suggestedAction": "Build validada para o Patch 0.5.5 pelo autor SnooBAE85.",
        "sourceId": "src-mobalytics-twister"
      }
    ]
  }
];

export const initialBuilds: Build[] = [
  {
    "id": "build-twister-gemling",
    "slug": "twister-gemling-legionnaire",
    "name": "[0.5.5] Twister Gemling Legionnaire",
    "characterClass": "Mercenary",
    "ascendancy": "Gemling Legionnaire",
    "archetype": "Twister / Cold & Fire Tech / Cast on Crit / Alternate Quality",
    "author": "SnooBAE85",
    "sourceId": "src-mobalytics-twister",
    "sourceExcerpt": "Guia Mobalytics & Vídeos Oficiais por SnooBAE85 para o Patch 0.5.5",
    "currentPatch": "0.5.5",
    "status": "UPDATED",
    "tags": [
      "Mercenary",
      "Gemling Legionnaire",
      "Twister",
      "0.5.5",
      "Cast on Crit",
      "Verglas",
      "Frost Wall",
      "Endgame",
      "Mobalytics"
    ],
    "summary": "Build de Mercenário Gemling Legionnaire utilizando Twister com a inovadora tecnologia de dano dobrado sem esforço (Zero-Effort Double-Damage Tech). Combina a interação contínua entre Frost Wall e Verglas, ativações automáticas via Cast on Critical Strike com Flame Wall e escalonamento de qualidade alternada com o notável Gem Studded.",
    "activeVersionId": "ver-twister-1",
    "versions": [
      {
        "id": "ver-twister-1",
        "buildId": "build-twister-gemling",
        "versionNumber": 1,
        "patchVersion": "0.5.5",
        "createdAt": "2026-03-15T18:00:00Z",
        "changeReason": "Versão inicial catalogada no Patch 0.5.5 a partir do guia oficial Mobalytics e vídeos documentados por SnooBAE85.",
        "sourceId": "src-mobalytics-twister",
        "variants": [
          {
            "id": "variant-leveling",
            "name": "1. Campaign & Leveling (Atos 1 a 6)",
            "tag": "Leveling",
            "description": "Fase inicial de progressão de campanha utilizando Burst / Twister com compras aceleradas nos vendedores através do regex oficial do SnooBAE85.",
            "estimatedBudget": "~5 a 20 Chaos / Moedas de Ouro (Leveling & Vendedores)",
            "budgetBreakdown": "Itens adquiridos em NPCs de atos usando ouro de campanha e orbes de transmutação via Vendor Regex oficial. Sem custos de comércio com jogadores.",
            "tradeSearchUrl": "https://www.pathofexile.com/trade2/search/poe2/Forbidden%20Rites/H4sIAAAAAAAACqtWKi5JLCktVrKqVsovKMnMz1OyUipOTS4tSkzKSVWq1QHLFytZRVcrlVQWpCpZKSXmpSjpKKVl5pSkFoEkYmtjawH6Jta0RwAAAA",
            "vendorRegex": "\"[egdl] da.*to a|ck s|nt s|rare|insta\" !quiv",
            "vendorRegexExplanation": "Filtra em todos os vendedores de NPCs: Dano Adicionado aos Ataques ([egdl] da.*to a), Velocidade de Ataque (ck s), Velocidade de Movimento (nt s), Itens Raros (rare) e Frascos de Vida Instantâneos (insta), ignorando aljavas (!quiv).",
            "skills": [
              {
                "slot": "Arma Principal (Nível 1-25)",
                "skillName": "Burst Shot / Twister",
                "supports": [
                  "Added Cold Damage Support",
                  "Faster Attacks Support"
                ],
                "socketColorOrLinks": "G-G-G",
                "notes": "Habilidade primária de avanço rápido de campanha.",
                "sourceId": "src-yt-twister-day3"
              },
              {
                "slot": "Utilidade e Controle",
                "skillName": "Frost Wall",
                "supports": [
                  "Increased Duration"
                ],
                "socketColorOrLinks": "B-B",
                "notes": "Bloqueio de caminho contra elites e chefes de atos.",
                "sourceId": "src-yt-twister-day3"
              },
              {
                "slot": "Mobilidade de Campanha",
                "skillName": "Frostblink / Dash",
                "supports": [],
                "socketColorOrLinks": "B",
                "notes": "Esquiva rápida de telegrafias de chefes de atos.",
                "sourceId": "src-mobalytics-twister"
              }
            ],
            "equipment": [
              {
                "slot": "HELMET",
                "recommendedItem": "Elmo de Couro com Vida e Resistência ao Fogo",
                "rarity": "MAGIC",
                "priorityStats": [
                  "+ Vida Máxima",
                  "+ Resistência a Fogo / Gelo"
                ],
                "sockets": "G-B",
                "sourceId": "src-yt-twister-day3"
              },
              {
                "slot": "BODY_ARMOUR",
                "recommendedItem": "Peitoral de Evasão/Armadura 3-Link",
                "rarity": "RARE",
                "priorityStats": [
                  "+ Vida Máxima",
                  "Encaixes Verdes e Azuis",
                  "Resistências"
                ],
                "sockets": "G-G-B",
                "sourceId": "src-yt-twister-day3"
              },
              {
                "slot": "WEAPON",
                "recommendedItem": "Besta ou Arma com Dano Plano Elemental",
                "rarity": "RARE",
                "priorityStats": [
                  "Dano Adicionado de Frio/Fogo/Raio",
                  "Velocidade de Ataque Aumentada"
                ],
                "sockets": "G-G-G",
                "sourceId": "src-yt-twister-day3"
              },
              {
                "slot": "OFF_HAND",
                "recommendedItem": "Escudo ou Foco de Defesa",
                "rarity": "RARE",
                "priorityStats": [
                  "+ Vida Máxima",
                  "+ Chance de Bloqueio",
                  "Resistência a Raio"
                ],
                "sockets": "B-B",
                "sourceId": "src-yt-twister-day3"
              },
              {
                "slot": "GLOVES",
                "recommendedItem": "Luvas de Couro com Velocidade de Ataque",
                "rarity": "MAGIC",
                "priorityStats": [
                  "Velocidade de Ataque (+10%+)",
                  "+ Vida Máxima"
                ],
                "sockets": "G-G",
                "sourceId": "src-yt-twister-day3"
              },
              {
                "slot": "BOOTS",
                "recommendedItem": "Botas do Vendedor com Velocidade de Movimento",
                "rarity": "RARE",
                "priorityStats": [
                  "Velocidade de Movimento (+15%+)",
                  "+ Resistência Elemental"
                ],
                "sockets": "G-B",
                "sourceId": "src-yt-twister-day3"
              },
              {
                "slot": "BELT",
                "recommendedItem": "Cinto Rústico com Vida",
                "rarity": "MAGIC",
                "priorityStats": [
                  "+ Vida Máxima (+40+)",
                  "+ Força para requisitos de gemas"
                ],
                "sourceId": "src-yt-twister-day3"
              },
              {
                "slot": "AMULET",
                "recommendedItem": "Amuleto de Atributos Híbridos",
                "rarity": "RARE",
                "priorityStats": [
                  "+ Força e Destreza",
                  "+ Vida Máxima"
                ],
                "sourceId": "src-yt-twister-day3"
              },
              {
                "slot": "RING_1",
                "recommendedItem": "Anel de Safira ou Rubi",
                "rarity": "RARE",
                "priorityStats": [
                  "+ Resistências Elementais",
                  "+ Dano Elemental a Ataques"
                ],
                "sourceId": "src-yt-twister-day3"
              },
              {
                "slot": "RING_2",
                "recommendedItem": "Anel com Regeneração de Mana",
                "rarity": "RARE",
                "priorityStats": [
                  "Regeneração de Mana",
                  "+ Vida Máxima",
                  "+ Resistência a Raio"
                ],
                "sourceId": "src-yt-twister-day3"
              },
              {
                "slot": "FLASK",
                "recommendedItem": "Frascos Instantâneos de Vida & Frasco de Mercúrio",
                "rarity": "MAGIC",
                "priorityStats": [
                  "Recuperação Instantânea em Vida Baixa",
                  "Velocidade de Movimento Durante o Efeito"
                ],
                "sourceId": "src-yt-twister-day3"
              }
            ],
            "passiveNotes": "Priorizar nós de vida, velocidade de projétil e sustentação de mana. Guardar pontos de atributos para requisitos de gemas de suporte."
          },
          {
            "id": "variant-early-maps",
            "name": "2. Early Maps & Trial of Sekhemas (T1 a T10)",
            "tag": "Early Maps",
            "description": "Transição após a conclusão do Trial of Sekhemas (Dia 1 de SnooBAE85). Foco na calibração de cores de gemas de suporte (Support Gem Colors) e ativação do notável Gem Studded na ascendência Gemling Legionnaire.",
            "estimatedBudget": "~50 a 120 Chaos Orbs (Entrada de Mapas & Sekhemas)",
            "budgetBreakdown": "Fechar 75% de resistências elementais, adquirir arma de alta chance crítica base e peças 4-Link/5-Link para farm sustentado em mapas T1-T10.",
            "tradeSearchUrl": "https://www.pathofexile.com/trade2/search/poe2/Forbidden%20Rites/H4sIAAAAAAAACqtWKi5JLCktVrKqVsovKMnMz1OyUipOTS4tSkzKSVWq1QHLFytZRVcrlVQWpCpZKSXmpSjpKKVl5pSkFoEkYmtjawH6Jta0RwAAAA",
            "skills": [
              {
                "slot": "Habilidade Central (4-Link)",
                "skillName": "Twister",
                "supports": [
                  "Added Cold Damage Support",
                  "Increased Critical Strikes",
                  "Hypothermia Support"
                ],
                "socketColorOrLinks": "G-G-G-B",
                "notes": "Configuração de dano inicial de mapas com foco em chance crítica consistente.",
                "sourceId": "src-yt-twister-day3"
              },
              {
                "slot": "Setup de Controle Elemental",
                "skillName": "Frost Wall",
                "supports": [
                  "Increased Duration Support"
                ],
                "socketColorOrLinks": "B-B",
                "notes": "Primeiros testes da interação de colisão de projéteis.",
                "sourceId": "src-yt-twister-day3"
              },
              {
                "slot": "Reserva e Utilidade",
                "skillName": "Herald of Ice / Defensiva",
                "supports": [
                  "Steelskin"
                ],
                "socketColorOrLinks": "G-R",
                "notes": "Explosões de gelo para limpeza de monstros em massa.",
                "sourceId": "src-mobalytics-twister"
              }
            ],
            "equipment": [
              {
                "slot": "HELMET",
                "recommendedItem": "Elmo Raro com Precisão e Vida",
                "rarity": "RARE",
                "priorityStats": [
                  "+ Vida Máxima (+70+)",
                  "Chance de Golpe Crítico Global",
                  "Resistência a Caos"
                ],
                "sockets": "G-B-B",
                "estimatedPrice": "~10 a 20 Chaos",
                "tradeQueryUrl": "https://www.pathofexile.com/trade2/search/poe2/Forbidden%20Rites/H4sIAAAAAAAACjXJzQnAIAwG0F2%2BsxNkgu5QPAhNQbDxLx5Esnux0NuDt1AHtwla6Bp09K1cNGYBIUuKwjD3ZQedCzoLgxDkgsMdk3Lb4c27%2Fw5ODyvMXnQWdudeAAAA",
                "sourceId": "src-yt-twister-day3"
              },
              {
                "slot": "BODY_ARMOUR",
                "recommendedItem": "Armadura Híbrida 4-Link/5-Link",
                "rarity": "RARE",
                "priorityStats": [
                  "+ Vida Máxima (+90+)",
                  "Resistências Elementais Capadas (75%)",
                  "Supressão de Dano Mágico"
                ],
                "sockets": "G-G-G-B",
                "estimatedPrice": "~20 a 35 Chaos",
                "tradeQueryUrl": "https://www.pathofexile.com/trade2/search/poe2/Forbidden%20Rites/H4sIAAAAAAAACjXJQQqAIBAF0KvEX3uC2dU1woWggWCOjeNCxLuHQbsHb%2BBpQTpooKrTVpe4aOQMAucUc8A0X1bQOaC9BBBc9jC4YtIgK%2By05r%2BDfd92ubkJ5nwBb68xEWMAAAA%3D",
                "sourceId": "src-yt-twister-day3"
              },
              {
                "slot": "WEAPON",
                "recommendedItem": "Cetro ou Varinha de Alta Chance Crítica",
                "rarity": "RARE",
                "priorityStats": [
                  "Chance Crítica Base de Feitiços/Ataques",
                  "+ Multiplicador de Crítico",
                  "Dano de Frio Aumentado"
                ],
                "sockets": "B-B-G",
                "estimatedPrice": "~15 a 30 Chaos",
                "tradeQueryUrl": "https://www.pathofexile.com/trade2/search/poe2/Forbidden%20Rites/H4sIAAAAAAAACjXJPQrAIAwG0Lt8syfINToWB2lTECT%2BxUEkdy8Wuj14C3Vwm6CFrkFH38pFYxYQsqQoDHNfdtC5oLMwCEFuODwxKbcd3rz773hGYoXZCyKxKqFeAAAA",
                "sourceId": "src-yt-twister-day3"
              },
              {
                "slot": "OFF_HAND",
                "recommendedItem": "Escudo com Chance Crítica e Vida",
                "rarity": "RARE",
                "priorityStats": [
                  "+ Vida Máxima",
                  "Chance Crítica Global",
                  "+ Resistências Elementais"
                ],
                "sockets": "B-B-R",
                "estimatedPrice": "~10 a 15 Chaos",
                "sourceId": "src-yt-twister-day3"
              },
              {
                "slot": "GLOVES",
                "recommendedItem": "Luvas Raras com Precisão e Ataque",
                "rarity": "RARE",
                "priorityStats": [
                  "Velocidade de Ataque (+14%+)",
                  "+ Vida Máxima",
                  "+ Precisão"
                ],
                "sockets": "G-G-B",
                "estimatedPrice": "~5 a 15 Chaos",
                "tradeQueryUrl": "https://www.pathofexile.com/trade2/search/poe2/Forbidden%20Rites/H4sIAAAAAAAACjXJwQnAIAwF0F3%2B2QlcoEMUD0JTECRpTSyIZPdiobcHb%2BLu1AbihFq2rktyWRFGhHAtTPDwpSLuEzYuQkTmAwFnqUZtRfIU%2FtuqPKRwfwHyEq7iXgAAAA%3D%3D",
                "sourceId": "src-yt-twister-day3"
              },
              {
                "slot": "BOOTS",
                "recommendedItem": "Botas de Velocidade e Resistências Capadas",
                "rarity": "RARE",
                "priorityStats": [
                  "Velocidade de Movimento (+25%+)",
                  "+ Resistência a Fogo/Gelo/Raio",
                  "+ Vida"
                ],
                "sockets": "G-G-B",
                "estimatedPrice": "~10 a 20 Chaos",
                "tradeQueryUrl": "https://www.pathofexile.com/trade2/search/poe2/Forbidden%20Rites/H4sIAAAAAAAACjXJMQrAIAwF0Lv82RNk7DWKg9AUBDHWxEEkdy8Wuj14C8%2FgPkELasmGbkmzLBUEqSVXhocvFXQu2GwMQqoXAu5cjPuO6DH8d4iYwv0FVNzlP10AAAA%3D",
                "sourceId": "src-yt-twister-day3"
              },
              {
                "slot": "BELT",
                "recommendedItem": "Cinto Pesado Raro com Alta Vida",
                "rarity": "RARE",
                "priorityStats": [
                  "+ Vida Máxima (+80+)",
                  "+ Resistência a Caos",
                  "+ Força"
                ],
                "estimatedPrice": "~5 a 10 Chaos",
                "tradeQueryUrl": "https://www.pathofexile.com/trade2/search/poe2/Forbidden%20Rites/H4sIAAAAAAAACjXJMQrAIAwF0Lv8OSfI2GsUB6EpCBKtxkEkdy8Wuj14C8%2BQNsEL3aKNvlWqpaJgFM1JBU5fdvC5YLMKGFEvEO6UTdqO4IH%2BOyQb3F9XpdbpXAAAAA%3D%3D",
                "sourceId": "src-yt-twister-day3"
              },
              {
                "slot": "AMULET",
                "recommendedItem": "Amuleto de Multiplicador Crítico e Vida",
                "rarity": "RARE",
                "priorityStats": [
                  "+ Multiplicador de Golpe Crítico",
                  "+ Vida Máxima",
                  "+ Chance Crítica"
                ],
                "estimatedPrice": "~10 a 15 Chaos",
                "tradeQueryUrl": "https://www.pathofexile.com/trade2/search/poe2/Forbidden%20Rites/H4sIAAAAAAAACjXJPQrAIAwG0Lt8syfI1nMUB6EpCDb%2BxUEkdy8Wuj14C3Vwm6CFrkFH38pFYxYQsqQoDHNfdtC5oLMwCEEuONwxKbcd3rz773hGYoXZCyKxKqFeAAAA",
                "sourceId": "src-yt-twister-day3"
              },
              {
                "slot": "RING_1",
                "recommendedItem": "Anel de Dois Tons com Resistências",
                "rarity": "RARE",
                "priorityStats": [
                  "Resistências Elementais Capadas",
                  "+ Vida Máxima",
                  "+ Precisão"
                ],
                "estimatedPrice": "~5 a 15 Chaos",
                "tradeQueryUrl": "https://www.pathofexile.com/trade2/search/poe2/Forbidden%20Rites/H4sIAAAAAAAACjXJMQrAIAwF0Lv82RPkGF2LQ6FpCUi0GgeR3L1Y6PbgTTyd6wBNNDust6VcTLKCkDWJMjx82UD7hI3CIBx6IuCSZFxXRI%2Fhv030hvsL81KmwVwAAAA%3D",
                "sourceId": "src-yt-twister-day3"
              },
              {
                "slot": "RING_2",
                "recommendedItem": "Anel com Dano Elemental e Mana por Acerto",
                "rarity": "RARE",
                "priorityStats": [
                  "Dano Elemental a Ataques",
                  "+ Mana por Acerto",
                  "+ Vida Máxima"
                ],
                "estimatedPrice": "~5 a 15 Chaos",
                "tradeQueryUrl": "https://www.pathofexile.com/trade2/search/poe2/Forbidden%20Rites/H4sIAAAAAAAACjXJMQrAIAwF0Lv82RPkGF2LQ6FpCUi0GgeR3L1Y6PbgTTyd6wBNNDust6VcTLKCkDWJMjx82UD7hI3CIBx6IuCSZFxXRI%2Fhv030hvsL81KmwVwAAAA%3D",
                "sourceId": "src-yt-twister-day3"
              },
              {
                "slot": "FLASK",
                "recommendedItem": "Frascos Utilitários de Prata, Diamante e Vida",
                "rarity": "MAGIC",
                "priorityStats": [
                  "Chance Crítica Aumentada durante o Frasco",
                  "Evasão Aumentada",
                  "Imunidade a Sangramento"
                ],
                "estimatedPrice": "~2 a 5 Chaos cada",
                "sourceId": "src-yt-twister-day3"
              }
            ],
            "passiveNotes": "Alocação da ascendência Gemling Legionnaire selecionando Gem Studded (provado superior a Spirit Walker pelo autor nos benchmarks de DPS)."
          },
          {
            "id": "variant-endgame",
            "name": "3. Endgame Tech Min-Max (0.5.5 Double Damage Tech)",
            "tag": "Endgame Tech",
            "description": "Configuração definitiva demonstrada nos testes contra Arbiter of Divinity e no vídeo de Double-Damage Tech. Combina Twister com Verglas e Frost Wall em rotação automatizada via Cast on Crit.",
            "estimatedBudget": "~20 a 35 Divine Orbs (Setup Endgame Otimizado 0.5.5)",
            "budgetBreakdown": "Cetro Verglas (~4-6 Divines), Peitoral 6-Encaixes com Qualidade Alternada e Gem Studded (~8-12 Divines), Joias e Acessórios com Penetração Elemental e Crítico (~8-15 Divines).",
            "tradeSearchUrl": "https://www.pathofexile.com/trade2/search/poe2/Forbidden%20Rites/H4sIAAAAAAAACqtWKi5JLCktVrKqVsovKMnMz1OyUipOTS4tSkzKSVWq1QHLFytZRVcrlVQWpCpZKSXmpSjpKKVl5pSkFoEkYmtjawH6Jta0RwAAAA",
            "skills": [
              {
                "slot": "Gatilho Central de Dano (6-Link)",
                "skillName": "Twister",
                "supports": [
                  "Cast on Critical Strike Support",
                  "Added Cold Damage Support",
                  "Increased Critical Strikes Support",
                  "Hypothermia Support",
                  "Cold Penetration Support"
                ],
                "socketColorOrLinks": "G-G-G-B-B-B",
                "notes": "O Twister dispara continuamente e ativa os feitiços críticos acoplados instantaneamente.",
                "sourceId": "src-mobalytics-twister"
              },
              {
                "slot": "Motor da Tecnologia de Dano Dobrado (Tech Engine)",
                "skillName": "Frost Wall + Verglas",
                "supports": [
                  "Verglas Buff Tech",
                  "Increased Area of Effect"
                ],
                "socketColorOrLinks": "B-B-B",
                "notes": "A colisão dos projéteis de Twister despedaça a Frost Wall mantendo 100% de tempo de atividade (uptime) do dobro de dano de Verglas.",
                "sourceId": "src-yt-twister-tech"
              },
              {
                "slot": "Automação Elemental Dupla",
                "skillName": "Cast on Critical Strike com Flame Wall & Frost Wall",
                "supports": [
                  "Flame Wall",
                  "Frost Wall"
                ],
                "socketColorOrLinks": "B-R-B",
                "notes": "As paredes sobem no local de impacto dos monstros sem necessidade de conjuração manual.",
                "sourceId": "src-yt-twister-tech"
              },
              {
                "slot": "Mobilidade & Salvaguarda",
                "skillName": "Frostblink + Steelskin",
                "supports": [
                  "More Duration"
                ],
                "socketColorOrLinks": "B-R",
                "notes": "Reposicionamento e amortecimento instantâneo de dano pesado.",
                "sourceId": "src-yt-twister-tech"
              }
            ],
            "equipment": [
              {
                "slot": "HELMET",
                "recommendedItem": "Elmo Gem-Studded com Reserva de Espírito e Vida",
                "rarity": "RARE",
                "priorityStats": [
                  "+ Vida Máxima (+90+)",
                  "Reserva de Espírito Aumentada",
                  "Resistência a Caos (+20%+)",
                  "Chance Crítica Global"
                ],
                "sockets": "B-B-B-G",
                "estimatedPrice": "~2 a 4 Divine Orbs",
                "tradeQueryUrl": "https://www.pathofexile.com/trade2/search/poe2/Forbidden%20Rites/H4sIAAAAAAAACjXJzQnAIAwG0F2%2BsxNkgu5QPAhNQbDxLx5Esnux0NuDt1AHtwla6Bp09K1cNGYBIUuKwjD3ZQedCzoLgxDkgsMdk3Lb4c27%2Fw5ODyvMXnQWdudeAAAA",
                "sourceId": "src-mobalytics-twister"
              },
              {
                "slot": "BODY_ARMOUR",
                "recommendedItem": "Peitoral de Qualidade Alternada Otimizado (6-Encaixes)",
                "rarity": "RARE",
                "priorityStats": [
                  "+ Vida Máxima (+120+)",
                  "Qualidade Alternada de Gemas de Suporte",
                  "Supressão de Dano Mágico (+15%+)",
                  "Resistências Capadas"
                ],
                "sockets": "G-G-G-B-B-B",
                "estimatedPrice": "~8 a 12 Divine Orbs",
                "tradeQueryUrl": "https://www.pathofexile.com/trade2/search/poe2/Forbidden%20Rites/H4sIAAAAAAAACjXJQQqAIBAF0KvEX3uC2dU1woWggWCOjeNCxLuHQbsHb%2BBpQTpooKrTVpe4aOQMAucUc8A0X1bQOaC9BBBc9jC4YtIgK%2By05r%2BDfd92ubkJ5nwBb68xEWMAAAA%3D",
                "sourceId": "src-mobalytics-twister"
              },
              {
                "slot": "WEAPON",
                "recommendedItem": "Cetro Verglas / Cetro de Crítico Notável",
                "rarity": "UNIQUE",
                "priorityStats": [
                  "Mecânica Verglas de Dano Dobrado",
                  "Multiplicador Crítico Global Elevado",
                  "Velocidade de Conjuração/Ataque"
                ],
                "sockets": "B-B-B",
                "estimatedPrice": "~4 a 6 Divine Orbs",
                "tradeQueryUrl": "https://www.pathofexile.com/trade2/search/poe2/Forbidden%20Rites/H4sIAAAAAAAACjXKQQqAIBBG4bv8a0%2FgNYI24WKoKQQbTceFiHcPg3YPvtfxVM4NtqMoaS2zYlIfBRZRghfGMB8W2K1DW2JYkBwwOH1QzhPccAZC97SV8xWowPzzsnPSzBjjBSHq6XhwAAAA",
                "sourceId": "src-yt-twister-tech"
              },
              {
                "slot": "OFF_HAND",
                "recommendedItem": "Foco Arcano de Crítico Notável ou Escudo Raro",
                "rarity": "RARE",
                "priorityStats": [
                  "Chance de Golpe Crítico de Feitiços (+90%+)",
                  "+ Multiplicador Crítico",
                  "+ Vida Máxima",
                  "Resistência a Caos"
                ],
                "sockets": "B-B-G",
                "estimatedPrice": "~2 a 3 Divine Orbs",
                "tradeQueryUrl": "https://www.pathofexile.com/trade2/search/poe2/Forbidden%20Rites/H4sIAAAAAAAACjXJPQrAIAwG0Lt8syfINToWB2lTECT%2BxUEkdy8Wuj14C3Vwm6CFrkFH38pFYxYQsqQoDHNfdtC5oLMwCEFuODwxKbcd3rz773hGYoXZCyKxKqFeAAAA",
                "sourceId": "src-mobalytics-twister"
              },
              {
                "slot": "GLOVES",
                "recommendedItem": "Luvas Raras com Chance Crítica e Frio",
                "rarity": "RARE",
                "priorityStats": [
                  "Chance de Golpe Crítico a Ataques",
                  "Dano de Frio a Ataques",
                  "Velocidade de Ataque (+15%+)",
                  "+ Vida Máxima"
                ],
                "sockets": "G-G-B-R",
                "estimatedPrice": "~1 a 2 Divine Orbs",
                "tradeQueryUrl": "https://www.pathofexile.com/trade2/search/poe2/Forbidden%20Rites/H4sIAAAAAAAACjXJwQnAIAwF0F3%2B2QlcoEMUD0JTECRpTSyIZPdiobcHb%2BLu1AbihFq2rktyWRFGhHAtTPDwpSLuEzYuQkTmAwFnqUZtRfIU%2FtuqPKRwfwHyEq7iXgAAAA%3D%3D",
                "sourceId": "src-mobalytics-twister"
              },
              {
                "slot": "BOOTS",
                "recommendedItem": "Passos Imortais com +30% Movimento",
                "rarity": "RARE",
                "priorityStats": [
                  "Velocidade de Movimento (+30%+)",
                  "Imunidade a Lentidão/Gelo",
                  "Resistências Triplas (+35%+ cada)",
                  "+ Vida Máxima"
                ],
                "sockets": "G-G-B-R",
                "estimatedPrice": "~2 a 3 Divine Orbs",
                "tradeQueryUrl": "https://www.pathofexile.com/trade2/search/poe2/Forbidden%20Rites/H4sIAAAAAAAACjXJMQrAIAwF0Lv82RNk7DWKg9AUBDHWxEEkdy8Wuj14C8%2FgPkELasmGbkmzLBUEqSVXhocvFXQu2GwMQqoXAu5cjPuO6DH8d4iYwv0FVNzlP10AAAA%3D",
                "sourceId": "src-mobalytics-twister"
              },
              {
                "slot": "BELT",
                "recommendedItem": "Cinto Pesado Raro com Resistências Triplas",
                "rarity": "RARE",
                "priorityStats": [
                  "+ Vida Máxima (+110+)",
                  "Resistência a Caos (+30%+)",
                  "Força e Atributos",
                  "Aumento de Recuperação de Frascos"
                ],
                "estimatedPrice": "~1 a 2 Divine Orbs",
                "tradeQueryUrl": "https://www.pathofexile.com/trade2/search/poe2/Forbidden%20Rites/H4sIAAAAAAAACjXJMQrAIAwF0Lv8OSfI2GsUB6EpCBKtxkEkdy8Wuj14C8%2BQNsEL3aKNvlWqpaJgFM1JBU5fdvC5YLMKGFEvEO6UTdqO4IH%2BOyQb3F9XpdbpXAAAAA%3D%3D",
                "sourceId": "src-mobalytics-twister"
              },
              {
                "slot": "AMULET",
                "recommendedItem": "Amuleto Notável com +Nível de Gemas Elementais",
                "rarity": "RARE",
                "priorityStats": [
                  "+1 ao Nível de Todas as Gemas de Habilidade de Frio",
                  "+ Multiplicador de Golpe Crítico (+35%+)",
                  "+ Vida Máxima"
                ],
                "estimatedPrice": "~3 a 5 Divine Orbs",
                "tradeQueryUrl": "https://www.pathofexile.com/trade2/search/poe2/Forbidden%20Rites/H4sIAAAAAAAACjXJPQrAIAwG0Lt8syfI1nMUB6EpCDb%2BxUEkdy8Wuj14C3Vwm6CFrkFH38pFYxYQsqQoDHNfdtC5oLMwCEEuONwxKbcd3rz773hGYoXZCyKxKqFeAAAA",
                "sourceId": "src-mobalytics-twister"
              },
              {
                "slot": "RING_1",
                "recommendedItem": "Anel Raro com Chance Crítica e Resistências Capadas",
                "rarity": "RARE",
                "priorityStats": [
                  "Chance de Golpe Crítico Global",
                  "+ Vida Máxima (+70+)",
                  "Resistências Elementais Capadas"
                ],
                "estimatedPrice": "~1.5 a 3 Divine Orbs",
                "tradeQueryUrl": "https://www.pathofexile.com/trade2/search/poe2/Forbidden%20Rites/H4sIAAAAAAAACjXJMQrAIAwF0Lv82RPkGF2LQ6FpCUi0GgeR3L1Y6PbgTTyd6wBNNDust6VcTLKCkDWJMjx82UD7hI3CIBx6IuCSZFxXRI%2Fhv030hvsL81KmwVwAAAA%3D",
                "sourceId": "src-mobalytics-twister"
              },
              {
                "slot": "RING_2",
                "recommendedItem": "Anel Raro com Dano Elemental e Penetração de Frio",
                "rarity": "RARE",
                "priorityStats": [
                  "Dano Elemental a Ataques (+35%+)",
                  "Penetração de Frio",
                  "+ Vida Máxima",
                  "Resistência a Caos"
                ],
                "estimatedPrice": "~1.5 a 3 Divine Orbs",
                "tradeQueryUrl": "https://www.pathofexile.com/trade2/search/poe2/Forbidden%20Rites/H4sIAAAAAAAACjXJMQrAIAwF0Lv82RPkGF2LQ6FpCUi0GgeR3L1Y6PbgTTyd6wBNNDust6VcTLKCkDWJMjx82UD7hI3CIBx6IuCSZFxXRI%2Fhv030hvsL81KmwVwAAAA%3D",
                "sourceId": "src-mobalytics-twister"
              },
              {
                "slot": "FLASK",
                "recommendedItem": "Conjunto Otimizado: Frasco de Diamante, Safira e Vida Instantânea",
                "rarity": "MAGIC",
                "priorityStats": [
                  "Chance Crítica Sortuda (Lucky Criticals)",
                  "Aumento de Efeito do Frasco",
                  "Remoção de Congelamento e Choque"
                ],
                "estimatedPrice": "~50 a 100 Chaos Orbs",
                "sourceId": "src-mobalytics-twister"
              }
            ],
            "passiveNotes": "Maximização de Gem Studded para qualidade extrema em gemas de suporte, conversão de penetração elemental e nós de escalonamento crítico no tabuleiro."
          }
        ],
        "progression": {
          "leveling": [
            {
              "stage": "Início de Campanha (Leveling Regex)",
              "recommendedSkills": [
                "Burst / Twister",
                "Campaign Vendor Regex"
              ],
              "tips": "Regex oficial fornecido por SnooBAE85 para filtrar vendors no início da campanha: \"[egdl] da.*to a|ck s|nt s|rare|insta\" !quiv"
            },
            {
              "stage": "Dia 1 (Trial of Sekhemas)",
              "recommendedSkills": [
                "Twister",
                "Support Gems"
              ],
              "tips": "Conclusão do Trial of Sekhemas e primeiros benchmarks de dano e contagem de cores de gemas de suporte (Support Gem Colors)."
            },
            {
              "stage": "Dia 2 (Arbiter of Divinity)",
              "recommendedSkills": [
                "Twister",
                "Verglas",
                "Frost Wall"
              ],
              "tips": "Transição e primeiros testes contra o chefe Arbiter of Divinity demonstrando a interação de quebra de gelo com Verglas."
            }
          ],
          "earlyGame": "Foco em obter equipamentos com chance de acerto crítico e calibrar as cores de encaixes de gemas de suporte conforme os benchmarks dos vídeos de SnooBAE85.",
          "midGame": "Consolidação da Ascendência Gemling Legionnaire com o notável Gem Studded (demonstrado como superior a Spirit Walker pelo autor).",
          "endgame": "Ativação da Zero-Effort Double-Damage Tech: Frost Wall posicionado com Verglas para 100% de tempo de atividade (uptime) do bônus de dano.",
          "lateGame": "Automação via Cast on Critical Strike acoplado com Flame Wall e Frost Wall, maximizando a escala de dano elemental."
        },
        "skills": [
          {
            "slot": "Habilidade Central de Ataque",
            "skillName": "Twister",
            "supports": [
              "Cast on Critical Strike Support",
              "Added Cold Damage",
              "Increased Critical Strikes"
            ],
            "socketColorOrLinks": "GGGBBB",
            "notes": "Habilidade de disparo principal e geradora de ciclones contínuos.",
            "sourceId": "src-mobalytics-twister"
          },
          {
            "slot": "Mecânica Central de Dano Dobrado (Tech)",
            "skillName": "Frost Wall + Verglas",
            "supports": [
              "Verglas Buff Tech"
            ],
            "notes": "A colisão do Twister contra o Frost Wall quebra as camadas de gelo e aciona o multiplicador de Verglas continuamente.",
            "sourceId": "src-yt-twister-tech"
          },
          {
            "slot": "Gatilho Crítico Automatizado",
            "skillName": "Cast on Critical Strike com Flame Wall & Frost Wall",
            "supports": [
              "Flame Wall",
              "Frost Wall"
            ],
            "notes": "Automação de paredes elementais que potencializam o dano de projéteis e ativam a mecânica de Verglas sem esforço manual.",
            "sourceId": "src-yt-twister-tech"
          }
        ],
        "equipment": [
          {
            "slot": "HELMET",
            "recommendedItem": "Elmo Gem-Studded com Reserva de Espírito e Vida",
            "rarity": "RARE",
            "priorityStats": [
              "+ Vida Máxima (+90+)",
              "Reserva de Espírito Aumentada",
              "Resistência a Caos (+20%+)",
              "Chance Crítica Global"
            ],
            "sockets": "B-B-B-G",
            "sourceId": "src-mobalytics-twister"
          },
          {
            "slot": "BODY_ARMOUR",
            "recommendedItem": "Peitoral de Qualidade Alternada Otimizado (6-Encaixes)",
            "rarity": "RARE",
            "priorityStats": [
              "+ Vida Máxima (+120+)",
              "Qualidade Alternada de Gemas de Suporte",
              "Supressão de Dano Mágico (+15%+)",
              "Resistências Capadas"
            ],
            "sockets": "G-G-G-B-B-B",
            "sourceId": "src-mobalytics-twister"
          },
          {
            "slot": "WEAPON",
            "recommendedItem": "Cetro Verglas / Cetro de Crítico Notável",
            "rarity": "UNIQUE",
            "priorityStats": [
              "Mecânica Verglas de Dano Dobrado",
              "Multiplicador Crítico Global Elevado",
              "Velocidade de Conjuração/Ataque"
            ],
            "sockets": "B-B-B",
            "sourceId": "src-yt-twister-tech"
          },
          {
            "slot": "OFF_HAND",
            "recommendedItem": "Foco Arcano de Crítico Notável ou Escudo Raro",
            "rarity": "RARE",
            "priorityStats": [
              "Chance de Golpe Crítico de Feitiços (+90%+)",
              "+ Multiplicador Crítico",
              "+ Vida Máxima",
              "Resistência a Caos"
            ],
            "sockets": "B-B-G",
            "sourceId": "src-mobalytics-twister"
          },
          {
            "slot": "GLOVES",
            "recommendedItem": "Luvas Raras com Chance Crítica e Frio",
            "rarity": "RARE",
            "priorityStats": [
              "Chance de Golpe Crítico a Ataques",
              "Dano de Frio a Ataques",
              "Velocidade de Ataque (+15%+)",
              "+ Vida Máxima"
            ],
            "sockets": "G-G-B-R",
            "sourceId": "src-mobalytics-twister"
          },
          {
            "slot": "BOOTS",
            "recommendedItem": "Passos Imortais com +30% Movimento",
            "rarity": "RARE",
            "priorityStats": [
              "Velocidade de Movimento (+30%+)",
              "Imunidade a Lentidão/Gelo",
              "Resistências Triplas (+35%+ cada)",
              "+ Vida Máxima"
            ],
            "sockets": "G-G-B-R",
            "sourceId": "src-mobalytics-twister"
          },
          {
            "slot": "BELT",
            "recommendedItem": "Cinto Pesado Raro com Resistências Triplas",
            "rarity": "RARE",
            "priorityStats": [
              "+ Vida Máxima (+110+)",
              "Resistência a Caos (+30%+)",
              "Força e Atributos",
              "Aumento de Recuperação de Frascos"
            ],
            "sourceId": "src-mobalytics-twister"
          },
          {
            "slot": "AMULET",
            "recommendedItem": "Amuleto Notável com +Nível de Gemas Elementais",
            "rarity": "RARE",
            "priorityStats": [
              "+1 ao Nível de Todas as Gemas de Habilidade de Frio",
              "+ Multiplicador de Golpe Crítico (+35%+)",
              "+ Vida Máxima"
            ],
            "sourceId": "src-mobalytics-twister"
          },
          {
            "slot": "RING_1",
            "recommendedItem": "Anel Raro com Chance Crítica e Resistências Capadas",
            "rarity": "RARE",
            "priorityStats": [
              "Chance de Golpe Crítico Global",
              "+ Vida Máxima (+70+)",
              "Resistências Elementais Capadas"
            ],
            "sourceId": "src-mobalytics-twister"
          },
          {
            "slot": "RING_2",
            "recommendedItem": "Anel Raro com Dano Elemental e Penetração de Frio",
            "rarity": "RARE",
            "priorityStats": [
              "Dano Elemental a Ataques (+35%+)",
              "Penetração de Frio",
              "+ Vida Máxima",
              "Resistência a Caos"
            ],
            "sourceId": "src-mobalytics-twister"
          },
          {
            "slot": "FLASK",
            "recommendedItem": "Conjunto Otimizado: Frasco de Diamante, Safira e Vida Instantânea",
            "rarity": "MAGIC",
            "priorityStats": [
              "Chance Crítica Sortuda (Lucky Criticals)",
              "Aumento de Efeito do Frasco",
              "Remoção de Congelamento e Choque"
            ],
            "sourceId": "src-mobalytics-twister"
          }
        ],
        "passivePoints": {
          "keystones": [],
          "keyNotables": [
            "Gem Studded (Gemling Legionnaire)"
          ],
          "pathNotes": "Foco no escalonamento de qualidade oferecido pela ascendência Gemling Legionnaire através de Gem Studded e nós de chance crítica (conforme detalhado nos vídeos)."
        },
        "gameplay": {
          "mechanics": "A tecnologia de dano dobrado (Double-Damage Tech) opera lançando Twister em conjunto com Frost Wall e Verglas. A quebra do gelo pelos ciclones ativa o bônus elemental com 100% de uptime, enquanto Cast on Crit sustenta as paredes de fogo e gelo automaticamente.",
          "rotation": "Manter Cast on Crit ativo -> Disparar Twister na direção dos monstros ou chefes -> Paredes de gelo e fogo se erguem e ativam o multiplicador de Verglas continuamente.",
          "packClearing": "Os projéteis de Twister varrem a tela em alta velocidade enquanto as paredes elementais amplificam o dano em área.",
          "bossFight": "Posicionar paredes de Frost Wall na área do boss para que o Twister colida repetidamente gerando dano dobrado de Verglas.",
          "strengths": [
            "Dano massivo contra chefes com a técnica de Frost Wall + Verglas",
            "Automação fluida via Cast on Critical Strike",
            "Superioridade demonstrada do Gemling Legionnaire sobre Spirit Walker"
          ],
          "weaknesses": [
            "Exige chance crítica consistente para manter o gatilho automático",
            "Requer atenção ao gerenciamento de recarga e contagem de cores de gemas"
          ]
        }
      }
    ]
  },
  {
    "id": "build-twister-spirit-walker",
    "slug": "twister-spirit-walker-liso-to-mirror",
    "name": "[0.5.5] Twister Spirit Walker - Saga Liso to Mirror",
    "characterClass": "Huntress",
    "ascendancy": "Spirit Walker",
    "archetype": "Twister / Wind Ground Surfaces / Dance with Death 1-Hand Spear / Headhunter",
    "author": "ChibaTTV",
    "sourceId": "src-yt-chiba-mirror-spear",
    "sourceExcerpt": "Saga Liso to Mirror & Guias de Crafts/Farms por ChibaTTV para o Patch 0.5.5 (Level 98 em Runes of Aldur)",
    "currentPatch": "0.5.5",
    "status": "UPDATED",
    "tags": [
      "Spirit Walker",
      "Twister",
      "Dance with Death",
      "0.5.5",
      "Headhunter",
      "The Taming",
      "Breach Ring",
      "Saga Liso to Mirror",
      "Endgame",
      "ChibaTTV"
    ],
    "summary": "Build de Spirit Walker desenvolvida pelo criador ChibaTTV durante a saga \"Liso to Mirror\" no Patch 0.5.5 (Personagem LisoToMirror, Nível 98 na liga Runes of Aldur). Combina Twister com a Keystone Dance with Death (mão secundária vazia com lança de uma mão garantindo 25% mais velocidade de habilidade), o anel único The Taming ativando triplo solo elemental simultâneo para o vento de Twister, roubo de mods com Headhunter, armaduras com Deflection escalada por Evasão e a Mirror Spear final.",
    "activeVersionId": "ver-spirit-twister-1",
    "versions": [
      {
        "id": "ver-spirit-twister-1",
        "buildId": "build-twister-spirit-walker",
        "versionNumber": 1,
        "patchVersion": "0.5.5",
        "createdAt": "2026-03-29T20:00:00Z",
        "changeReason": "Catalogação da build oficial da Saga Liso to Mirror a partir dos 12 vídeos documentados por ChibaTTV e do perfil verificado no poe.ninja.",
        "sourceId": "src-yt-chiba-mirror-spear",
        "variants": [
          {
            "id": "variant-chiba-campaign",
            "name": "1. Início de Campanha & Nivelamento (Atos 1 a 6)",
            "tag": "Leveling",
            "description": "Início da saga \"Liso to Mirror\": progressão de campanha com orçamento zero utilizando Twister com Spear Throw para controle de espaço e crafts básicos com orbes de campanha.",
            "estimatedBudget": "0 a 5 Chaos / Moedas de Ouro (Orçamento Zero)",
            "budgetBreakdown": "Equipamentos adquiridos no chão dos atos e aprimorados via \"Crafts inclusivos para os pobres\" com pedras de amolar e essências de baixo nível.",
            "tradeSearchUrl": "https://poe.ninja/poe2/profile/Chibatozoide-8559/runesofaldur/character/LisoToMirror",
            "skills": [
              {
                "slot": "Arma Principal (Leveling)",
                "skillName": "Twister",
                "supports": [
                  "Projectile Acceleration",
                  "Faster Attacks Support"
                ],
                "socketColorOrLinks": "G-G-G",
                "notes": "Habilidade primária disparada à distância criando vórtices que limpam pacotes de monstros.",
                "sourceId": "src-yt-chiba-test1"
              },
              {
                "slot": "Utilidade e Abertura",
                "skillName": "Spear Throw",
                "supports": [],
                "socketColorOrLinks": "G",
                "notes": "Engajamento rápido à distância contra elites de atos.",
                "sourceId": "src-yt-chiba-test2"
              },
              {
                "slot": "Aura / Buff Elemental",
                "skillName": "Ice-Tipped Arrows / Purity of Fire",
                "supports": [],
                "socketColorOrLinks": "G-R",
                "notes": "Dano de frio adicional e proteção contra dano de fogo.",
                "sourceId": "src-yt-chiba-craft-camp"
              }
            ],
            "equipment": [
              {
                "slot": "WEAPON",
                "recommendedItem": "Lança de Uma Mão com Dano Elemental Plano",
                "rarity": "RARE",
                "priorityStats": [
                  "Dano de Fogo/Gelo/Raio Adicionado",
                  "Velocidade de Ataque Aumentada"
                ],
                "sockets": "G-G-G",
                "sourceId": "src-yt-chiba-craft-poor"
              },
              {
                "slot": "OFF_HAND",
                "recommendedItem": "Mão Secundária Vazia (Ativação Dance with Death)",
                "rarity": "NORMAL",
                "priorityStats": [
                  "Manter mão vazia para receber 25% mais velocidade de habilidade"
                ],
                "sourceId": "src-yt-chiba-test1"
              },
              {
                "slot": "BODY_ARMOUR",
                "recommendedItem": "Peitoral de Evasão com Vida e Resistências",
                "rarity": "RARE",
                "priorityStats": [
                  "+ Vida Máxima",
                  "+ Resistências Elementais"
                ],
                "sockets": "G-G-B",
                "sourceId": "src-yt-chiba-craft-camp"
              },
              {
                "slot": "HELMET",
                "recommendedItem": "Elmo de Evasão/Escudo de Energia",
                "rarity": "RARE",
                "priorityStats": [
                  "+ Vida Máxima",
                  "+ Resistência a Fogo e Raio"
                ],
                "sourceId": "src-yt-chiba-craft-poor"
              },
              {
                "slot": "BOOTS",
                "recommendedItem": "Botas com Velocidade de Movimento",
                "rarity": "RARE",
                "priorityStats": [
                  "Velocidade de Movimento (+15%+)",
                  "+ Resistências"
                ],
                "sourceId": "src-yt-chiba-craft-camp"
              }
            ],
            "passiveNotes": "Rumo direto à Keystone Dance with Death e nós de velocidade de projétil e dano de vento."
          },
          {
            "id": "variant-chiba-abyss",
            "name": "2. Entrada de Mapas & Farm de Abismo (T1 a T12)",
            "tag": "Early Maps",
            "description": "Fase de acumulação de capital com farm intensivo de Abismo (Abyss). Twister se move continuamente ao longo das fendas, colhendo joias, moedas e itens de Deflection.",
            "estimatedBudget": "~30 a 80 Chaos Orbs",
            "budgetBreakdown": "Armadura Sleek Jacket com Deflection rolada via crafts de classe média e joias de abismo com vida.",
            "tradeSearchUrl": "https://poe.ninja/poe2/profile/Chibatozoide-8559/runesofaldur/character/LisoToMirror",
            "skills": [
              {
                "slot": "Twister 4-Link/5-Link",
                "skillName": "Twister",
                "supports": [
                  "Projectile Acceleration",
                  "Rakiata's Flow",
                  "Salvo"
                ],
                "socketColorOrLinks": "G-G-G-B",
                "notes": "Aceleração de projéteis e multiplicação de vórtices em fendas de abismo.",
                "sourceId": "src-yt-chiba-abyss-start"
              },
              {
                "slot": "Setup Defensivo e Mobilidade",
                "skillName": "Wind Dancer / Ghost Dance",
                "supports": [
                  "Cooldown Recovery II"
                ],
                "socketColorOrLinks": "G-B",
                "notes": "Camada de mitigação contra golpes rápidos em mapas amarelos.",
                "sourceId": "src-yt-chiba-abyss-farm"
              },
              {
                "slot": "Companheiro e Suporte",
                "skillName": "Wild Protector",
                "supports": [
                  "Meat Shield II",
                  "Elemental Army"
                ],
                "socketColorOrLinks": "R-B",
                "notes": "Minion distrai monstros raros enquanto o Twister limpa a retaguarda.",
                "sourceId": "src-yt-chiba-abyss-farm"
              }
            ],
            "equipment": [
              {
                "slot": "WEAPON",
                "recommendedItem": "Soaring Spear com Ataque e Dano Elemental",
                "rarity": "RARE",
                "priorityStats": [
                  "Velocidade de Ataque (+15%+)",
                  "Dano Elemental com Ataques",
                  "Encaixes Verdes"
                ],
                "sockets": "G-G-G",
                "sourceId": "src-yt-chiba-abyss-start"
              },
              {
                "slot": "OFF_HAND",
                "recommendedItem": "Mão Secundária Vazia (Dance with Death)",
                "rarity": "NORMAL",
                "priorityStats": [
                  "Espaço vazio permanente para manter bônus de 25% more skill speed"
                ],
                "sourceId": "src-yt-chiba-test1"
              },
              {
                "slot": "BODY_ARMOUR",
                "recommendedItem": "Sleek Jacket com Deflection Rating",
                "rarity": "RARE",
                "priorityStats": [
                  "Gain Deflect equal to 25%+ of Evasion",
                  "+ Vida Máxima (+80+)",
                  "Resistências Capadas"
                ],
                "sockets": "G-G-G-B",
                "sourceId": "src-yt-chiba-craft-middle"
              },
              {
                "slot": "BOOTS",
                "recommendedItem": "Daggerfoot Shoes com Deflection e Velocidade",
                "rarity": "RARE",
                "priorityStats": [
                  "Velocidade de Movimento (+25%+)",
                  "Deflect Rating de Evasão",
                  "+ Escudo de Energia"
                ],
                "sourceId": "src-yt-chiba-craft-middle"
              },
              {
                "slot": "RING_1",
                "recommendedItem": "Anel Raro com Dano Elemental e Vida",
                "rarity": "RARE",
                "priorityStats": [
                  "+ Vida Máxima",
                  "Dano Adicionado de Frio/Raio",
                  "+ Resistências"
                ],
                "sourceId": "src-yt-chiba-abyss-start"
              }
            ],
            "passiveNotes": "Reforçar nós de evasão e deflexão, além de penetração elemental para o Twister."
          },
          {
            "id": "variant-chiba-hh-breach",
            "name": "3. Headhunter & Farm de Fendas / Breach (T13 a T16)",
            "tag": "Mid-Tier Endgame",
            "description": "Marco fundamental da série: Headhunter adquirido com os lucros do farm de Abismo. A combinação de Twister com roubo de modificadores raros em Breach permite limpar telas instantaneamente.",
            "estimatedBudget": "~1 a 2 Divine Orbs + Cinto Headhunter",
            "budgetBreakdown": "Headhunter adquirido no mercado através da acumulação disciplinada da saga. Demais peças otimizadas com Runeforging.",
            "tradeSearchUrl": "https://poe.ninja/poe2/profile/Chibatozoide-8559/runesofaldur/character/LisoToMirror",
            "skills": [
              {
                "slot": "Twister 6-Socket Principal",
                "skillName": "Twister (Nível 20+)",
                "supports": [
                  "Rakiata's Flow",
                  "Projectile Acceleration III",
                  "Salvo",
                  "Vorana's Siege",
                  "Deliberation"
                ],
                "socketColorOrLinks": "G-G-G-G-B-W",
                "notes": "Setup de destruição de fendas com velocidade incomparável sob efeito de Headhunter.",
                "sourceId": "src-yt-chiba-breach-farm"
              },
              {
                "slot": "Ataque Secundário e Rage",
                "skillName": "Whirling Slash / Berserk",
                "supports": [
                  "Rage III",
                  "Rapid Attacks III",
                  "Knockback",
                  "Blazing Critical"
                ],
                "socketColorOrLinks": "R-R-G-B",
                "notes": "Geração de fúria e ativação de Berserk para aceleração extrema em pacotes densos.",
                "sourceId": "src-yt-chiba-hh-bought"
              },
              {
                "slot": "Aura e Proteção",
                "skillName": "Purity of Fire",
                "supports": [
                  "Precision II",
                  "Cannibalism II",
                  "Clarity II"
                ],
                "socketColorOrLinks": "R-G-B",
                "notes": "Sustentação de mana e amplificação de precisão crítica.",
                "sourceId": "src-yt-chiba-breach-farm"
              }
            ],
            "equipment": [
              {
                "slot": "BELT",
                "recommendedItem": "Headhunter (Cinto Pesado Único)",
                "rarity": "UNIQUE",
                "priorityStats": [
                  "Roubo de Modificadores de Raros por 60s",
                  "+51 Vida Máxima",
                  "+ Força e Destreza"
                ],
                "sourceId": "src-yt-chiba-hh-bought"
              },
              {
                "slot": "RING_1",
                "recommendedItem": "The Taming (Anel Prismático Único)",
                "rarity": "UNIQUE",
                "priorityStats": [
                  "24% Dano por Ailment no Inimigo",
                  "Twister conta como energizado por Chão de Fogo, Choque e Gelo simultaneamente"
                ],
                "sourceId": "src-yt-chiba-deli-farm"
              },
              {
                "slot": "RING_2",
                "recommendedItem": "Carrion Twirl (Breach Ring Raro)",
                "rarity": "RARE",
                "priorityStats": [
                  "+20% Qualidade Máxima",
                  "Adds 35-54 Cold damage",
                  "Adds 3-110 Lightning damage",
                  "+45% Cold Res"
                ],
                "sourceId": "src-yt-chiba-craft-day"
              },
              {
                "slot": "AMULET",
                "recommendedItem": "Phoenix Locket (Absent Amulet)",
                "rarity": "RARE",
                "priorityStats": [
                  "+3 Level de todas as Habilidades de Projéteis",
                  "Encaixe de Trinity Support"
                ],
                "sourceId": "src-yt-chiba-breach-farm"
              },
              {
                "slot": "WEAPON",
                "recommendedItem": "Woe Edge (Soaring Spear com 3x Soul Core)",
                "rarity": "RARE",
                "priorityStats": [
                  "3x Soul Core of Quipolatl",
                  "18% increased Attack Speed Rune",
                  "Leech de Vida Físico"
                ],
                "sourceId": "src-yt-chiba-breach-farm"
              },
              {
                "slot": "OFF_HAND",
                "recommendedItem": "Mão Secundária Vazia (Dance with Death)",
                "rarity": "NORMAL",
                "priorityStats": [
                  "Mão secundária rigorosamente vazia"
                ],
                "sourceId": "src-yt-chiba-test1"
              }
            ],
            "passiveNotes": "Maximizar pontos em chance crítica, multiplicador de crítico com lanças e passivas de Shaman Bonded."
          },
          {
            "id": "variant-chiba-mirror-endgame",
            "name": "4. Mirror Spear, Deli BossRush & Leech Farm (Nível 98 Endgame)",
            "tag": "Mirror Tier Endgame",
            "description": "A configuração definitiva alcançada por ChibaTTV no nível 98: Mirror Spear (\"Woe Edge\" / \"The Ordained\" com fragmentos de divindade), amuleto Phoenix Locket (+3 Projéteis e Trinity), armadura Sleek Jacket com Deflection de 28% e 60% de defesas aumentadas por Perfect Iron Runes, realizando rota híbrida de Deli BossRush e Leech de Breach com a comunidade.",
            "estimatedBudget": "~1 Mirror of Kalandra / Múltiplos Divines",
            "budgetBreakdown": "O ápice da jornada \"Liso to Mirror\": arma com 3x Soul Core of Quipolatl, Shrine Sceptre Guiding Palm no swap e runas perfeitas.",
            "tradeSearchUrl": "https://poe.ninja/poe2/profile/Chibatozoide-8559/runesofaldur/character/LisoToMirror",
            "skills": [
              {
                "slot": "Habilidade Central (Nível 21 / Qualidade 23)",
                "skillName": "Twister",
                "supports": [
                  "Rakiata's Flow",
                  "Projectile Acceleration III",
                  "Salvo",
                  "Vorana's Siege",
                  "Deliberation"
                ],
                "socketColorOrLinks": "G-G-G-G-B-W",
                "notes": "Twister de poder devastador em tela inteira disparado a mais de 100% de velocidade sob efeito de Headhunter.",
                "sourceId": "src-yt-chiba-mirror-spear"
              },
              {
                "slot": "Ataque de Mobilidade & Execução",
                "skillName": "Vivid Stampede",
                "supports": [
                  "Magnified Area II",
                  "Living Lightning II",
                  "Culmination II",
                  "Ailith's Chimes",
                  "Charge Profusion II"
                ],
                "socketColorOrLinks": "G-B-R-W",
                "notes": "Deslocamento massivo atropelando chefes de mapa sob névoa de Delirium.",
                "sourceId": "src-yt-chiba-mirror-spear"
              },
              {
                "slot": "Bombardeio de Projéteis",
                "skillName": "Barrage",
                "supports": [
                  "Rapid Casting II",
                  "Cooldown Recovery II",
                  "Uhtred's Constellation",
                  "Heightened Charges",
                  "Perpetual Charge"
                ],
                "socketColorOrLinks": "G-B-W",
                "notes": "Rajada concentrada para aniquilar chefes de mapa e elites de Delirium em frações de segundo.",
                "sourceId": "src-yt-chiba-mirror-spear"
              },
              {
                "slot": "Debuff e Controle de Alvos",
                "skillName": "Wind Dancer",
                "supports": [
                  "Maim",
                  "Blind II",
                  "Punch Through",
                  "Magnified Area II",
                  "Pin II"
                ],
                "socketColorOrLinks": "G-G-G-B",
                "notes": "Cega e prende inimigos em área ampla reduzindo o dano recebido a quase zero.",
                "sourceId": "src-yt-chiba-mirror-spear"
              },
              {
                "slot": "Swap de Armas / Suporte",
                "skillName": "Guiding Palm of the Heart (Shrine Sceptre)",
                "supports": [
                  "Purity of Fire",
                  "Idol of the Martyr",
                  "Idol of Ralakesh"
                ],
                "socketColorOrLinks": "R-R-B",
                "notes": "Gera santuário meteórico guiado concedendo 25% de dano extra de fogo ao grupo.",
                "sourceId": "src-yt-chiba-mirror-spear"
              }
            ],
            "equipment": [
              {
                "slot": "WEAPON",
                "recommendedItem": "Woe Edge (Soaring Spear Rara - Mirror Tier)",
                "rarity": "RARE",
                "priorityStats": [
                  "3x Soul Core of Quipolatl",
                  "18% increased Attack Speed Rune",
                  "Leech Físico 6.46%",
                  "Dano Adicionado de Fogo"
                ],
                "sockets": "G-G-G-W",
                "iconHint": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9TcGVhcnMvU3BlYXIxIiwidyI6MSwiaCI6NCwic2NhbGUiOjF9XQ/46dbdebe85/Spear1.png",
                "sourceId": "src-yt-chiba-mirror-spear"
              },
              {
                "slot": "OFF_HAND",
                "recommendedItem": "Mão Secundária Vazia (Dance with Death)",
                "rarity": "NORMAL",
                "priorityStats": [
                  "Manter Off-Hand vazia para garantir o multiplicador MORE de 25% na velocidade de habilidade"
                ],
                "sourceId": "src-yt-chiba-test1"
              },
              {
                "slot": "BELT",
                "recommendedItem": "Headhunter (Cinto Pesado Único)",
                "rarity": "UNIQUE",
                "priorityStats": [
                  "Absorção de modificadores raros por 60 segundos",
                  "+51 Vida",
                  "+39 Força",
                  "+35 Destreza"
                ],
                "iconHint": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQmVsdHMvSGVhZGh1bnRlciIsInciOjIsImgiOjEsInNjYWxlIjoxfV0/1be060ff50/Headhunter.png",
                "sourceId": "src-yt-chiba-hh-bought"
              },
              {
                "slot": "RING_1",
                "recommendedItem": "The Taming (Anel Prismático Único)",
                "rarity": "UNIQUE",
                "priorityStats": [
                  "24% Dano por Ailment no Inimigo",
                  "Habilidades de Vento contam como energizadas por Chão Ignited, Shocked e Chilled simultaneamente"
                ],
                "iconHint": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvUmluZ3MvVGhlVGFtaW5nIiwidyI6MSwiaCI6MSwic2NhbGUiOjF9XQ/757e937d37/TheTaming.png",
                "sourceId": "src-yt-chiba-deli-farm"
              },
              {
                "slot": "RING_2",
                "recommendedItem": "Carrion Twirl (Breach Ring Raro)",
                "rarity": "RARE",
                "priorityStats": [
                  "+20% Qualidade Máxima",
                  "Adds 35-54 Cold damage to Attacks",
                  "Adds 3-110 Lightning damage to Attacks",
                  "+45% Cold Resistance"
                ],
                "sourceId": "src-yt-chiba-craft-day"
              },
              {
                "slot": "AMULET",
                "recommendedItem": "Phoenix Locket (Absent Amulet Raro)",
                "rarity": "RARE",
                "priorityStats": [
                  "+3 to Level of all Projectile Skills",
                  "Trinity Support Socketed"
                ],
                "sourceId": "src-yt-chiba-breach-farm"
              },
              {
                "slot": "BODY_ARMOUR",
                "recommendedItem": "Behemoth Veil (Sleek Jacket Rara)",
                "rarity": "RARE",
                "priorityStats": [
                  "Deflection Rating equal to 28% of Evasion Rating",
                  "3x Perfect Iron Rune (60% inc Armour/Evasion/ES)",
                  "Bonded: +60 Life, +60 Mana",
                  "+42% Fire Res"
                ],
                "sourceId": "src-yt-chiba-craft-middle"
              },
              {
                "slot": "HELMET",
                "recommendedItem": "Dire Visage (Ancestral Tiara Rara)",
                "rarity": "RARE",
                "priorityStats": [
                  "+72 Energy Shield, 99% inc ES",
                  "+43% Fire Res, +45% Lightning Res",
                  "Raven-Touched Shard & Perfect Iron Rune",
                  "Bonded: +20 Life, +20 Mana"
                ],
                "sourceId": "src-yt-chiba-craft-day"
              },
              {
                "slot": "GLOVES",
                "recommendedItem": "Rapture Paw (Runeforged Elegant Wraps)",
                "rarity": "RARE",
                "priorityStats": [
                  "Adds 28-44 Fire damage",
                  "Adds 1-65 Lightning damage",
                  "23% Total Attack Speed (15% base + 8% rune)",
                  "+20% Chaos Resistance"
                ],
                "sourceId": "src-yt-chiba-craft-middle"
              },
              {
                "slot": "BOOTS",
                "recommendedItem": "Anarchy Span (Daggerfoot Shoes Raras)",
                "rarity": "RARE",
                "priorityStats": [
                  "29% Movement Speed",
                  "Deflection Rating equal to 22% of Evasion Rating",
                  "Chronomancy modifier",
                  "Bonded: 10% Cooldown Recovery Rate"
                ],
                "sourceId": "src-yt-chiba-craft-middle"
              }
            ],
            "passiveNotes": "Distribuição final nível 98: Keystone Dance with Death, nós de deflexão de evasão, velocidade de ataque de lanças e escalonamento de dano elemental."
          }
        ],
        "progression": {
          "leveling": [
            {
              "stage": "Atos 1 a 3",
              "recommendedSkills": [
                "Twister",
                "Spear Throw",
                "Ice-Tipped Arrows"
              ],
              "tips": "Mantenha a mão secundária vazia desde o nível 1 para ativar Dance with Death imediatamente assim que a keystone for alocada."
            },
            {
              "stage": "Atos 4 a 6",
              "recommendedSkills": [
                "Twister (3-Link)",
                "Vivid Stampede",
                "Purity of Fire"
              ],
              "tips": "Utilize os \"Crafts inclusivos para os pobres\" demonstrados no vídeo armnL1m6NQ4 para garantir arma com bom dano plano."
            },
            {
              "stage": "Mapas T1 a T12",
              "recommendedSkills": [
                "Twister (5-Link)",
                "Wind Dancer",
                "Wild Protector"
              ],
              "tips": "Foque na estratégia de farm de Abismo (Abyss) para acumular joias, moedas de ouro e orbes de caos."
            },
            {
              "stage": "Endgame T13+",
              "recommendedSkills": [
                "Twister (6-Link)",
                "Barrage",
                "Whirling Slash / Berserk"
              ],
              "tips": "Equipar Headhunter e transicionar para farm em massa de Breach e Delirium."
            }
          ],
          "earlyGame": "Fase de campanha autossuficiente focada em velocidade de movimento e cap de resistências com bases brancas e essências.",
          "midGame": "Entrada no Atlas e farm sistemático de Abismo (Abyss) acumulando capital para a compra do Headhunter.",
          "endgame": "Limpeza de tela instantânea em Breach com Headhunter roubando dezenas de modificadores raros.",
          "lateGame": "Mirror Spear equipada, anel The Taming garantindo triplo chão elemental para Twister, e Deli BossRush no nível 98."
        },
        "skills": [
          {
            "slot": "Habilidade Central",
            "skillName": "Twister (Nível 21 / Qualidade 23)",
            "supports": [
              "Rakiata's Flow",
              "Projectile Acceleration III",
              "Salvo",
              "Vorana's Siege",
              "Deliberation"
            ],
            "socketColorOrLinks": "G-G-G-G-B-W",
            "notes": "Dano principal da build. Escala de forma colossal com velocidade de projétil e triplo chão elemental de The Taming.",
            "sourceId": "src-yt-chiba-mirror-spear"
          },
          {
            "slot": "Mobilidade Primária",
            "skillName": "Vivid Stampede",
            "supports": [
              "Magnified Area II",
              "Living Lightning II",
              "Culmination II",
              "Ailith's Chimes",
              "Charge Profusion II"
            ],
            "socketColorOrLinks": "G-B-R-W",
            "notes": "Avanço com dano elétrico para atropelar pacotes densos.",
            "sourceId": "src-yt-chiba-mirror-spear"
          },
          {
            "slot": "Burst em Chefes",
            "skillName": "Barrage",
            "supports": [
              "Rapid Casting II",
              "Cooldown Recovery II",
              "Uhtred's Constellation",
              "Heightened Charges",
              "Perpetual Charge"
            ],
            "socketColorOrLinks": "G-B-W",
            "notes": "Disparos em rajada rápida contra chefes de Delirium.",
            "sourceId": "src-yt-chiba-mirror-spear"
          },
          {
            "slot": "Controle e Proteção",
            "skillName": "Wind Dancer",
            "supports": [
              "Maim",
              "Blind II",
              "Punch Through",
              "Magnified Area II",
              "Pin II"
            ],
            "socketColorOrLinks": "G-G-G-B",
            "notes": "Cega e desacelera monstros garantindo mitigação de dano por deflexão.",
            "sourceId": "src-yt-chiba-mirror-spear"
          },
          {
            "slot": "Companheiro Defensivo",
            "skillName": "Wild Protector",
            "supports": [
              "Meat Shield II",
              "Elemental Army",
              "Hulking Minions",
              "Romira's Requital",
              "Tecrod's Revenge"
            ],
            "socketColorOrLinks": "R-R-B-W",
            "notes": "Companheiro tanque que absorve golpes pesados de chefes.",
            "sourceId": "src-yt-chiba-mirror-spear"
          }
        ],
        "equipment": [
          {
            "slot": "WEAPON",
            "recommendedItem": "Woe Edge (Soaring Spear Rara com 3x Soul Core)",
            "rarity": "RARE",
            "priorityStats": [
              "3x Soul Core of Quipolatl",
              "18% Attack Speed Rune",
              "Leech Físico 6.46%",
              "Dano Adicionado de Fogo"
            ],
            "sourceId": "src-yt-chiba-mirror-spear"
          },
          {
            "slot": "OFF_HAND",
            "recommendedItem": "Mão Secundária Vazia (Dance with Death)",
            "rarity": "NORMAL",
            "priorityStats": [
              "Mão secundária vazia para 25% MORE Skill Speed"
            ],
            "sourceId": "src-yt-chiba-test1"
          },
          {
            "slot": "BELT",
            "recommendedItem": "Headhunter (Cinto Pesado Único)",
            "rarity": "UNIQUE",
            "priorityStats": [
              "Ganha mods de monstros raros ao abater por 60 segundos",
              "+51 Vida Máxima",
              "+39 Força",
              "+35 Destreza"
            ],
            "sourceId": "src-yt-chiba-hh-bought"
          },
          {
            "slot": "RING_1",
            "recommendedItem": "The Taming (Anel Prismático Único)",
            "rarity": "UNIQUE",
            "priorityStats": [
              "24% increased Damage for each type of Elemental Ailment",
              "Wind Skills count as being boosted by Ignited, Shocked, and Chilled Ground"
            ],
            "sourceId": "src-yt-chiba-deli-farm"
          },
          {
            "slot": "RING_2",
            "recommendedItem": "Carrion Twirl (Breach Ring Raro)",
            "rarity": "RARE",
            "priorityStats": [
              "+20% Qualidade Máxima",
              "Adds 35-54 Cold damage",
              "Adds 3-110 Lightning damage",
              "+45% Cold Resistance"
            ],
            "sourceId": "src-yt-chiba-craft-day"
          },
          {
            "slot": "AMULET",
            "recommendedItem": "Phoenix Locket (Absent Amulet)",
            "rarity": "RARE",
            "priorityStats": [
              "+3 to Level of all Projectile Skills",
              "Trinity Support Socketed"
            ],
            "sourceId": "src-yt-chiba-breach-farm"
          },
          {
            "slot": "BODY_ARMOUR",
            "recommendedItem": "Behemoth Veil (Sleek Jacket Rara)",
            "rarity": "RARE",
            "priorityStats": [
              "Deflection Rating equal to 28% of Evasion Rating",
              "60% inc Armour/Evasion/ES",
              "Bonded: +60 Life, +60 Mana"
            ],
            "sourceId": "src-yt-chiba-craft-middle"
          },
          {
            "slot": "HELMET",
            "recommendedItem": "Dire Visage (Ancestral Tiara Rara)",
            "rarity": "RARE",
            "priorityStats": [
              "+72 Energy Shield, 99% inc ES",
              "+43% Fire Res, +45% Lightning Res",
              "Raven-Touched Shard & Perfect Iron Rune"
            ],
            "sourceId": "src-yt-chiba-craft-day"
          },
          {
            "slot": "GLOVES",
            "recommendedItem": "Rapture Paw (Runeforged Elegant Wraps)",
            "rarity": "RARE",
            "priorityStats": [
              "Adds 28-44 Fire damage",
              "Adds 1-65 Lightning damage",
              "23% Total Attack Speed",
              "+20% Chaos Resistance"
            ],
            "sourceId": "src-yt-chiba-craft-middle"
          },
          {
            "slot": "BOOTS",
            "recommendedItem": "Anarchy Span (Daggerfoot Shoes Raras)",
            "rarity": "RARE",
            "priorityStats": [
              "29% Movement Speed",
              "Deflection Rating equal to 22% of Evasion Rating",
              "Chronomancy modifier",
              "Bonded: 10% Cooldown Recovery Rate"
            ],
            "sourceId": "src-yt-chiba-craft-middle"
          }
        ],
        "passivePoints": {
          "keystones": [
            "Dance with Death"
          ],
          "keyNotables": [
            "Wind Ground Mastery",
            "Projectile Speed Acceleration",
            "Evasion Deflection Synergy",
            "Spear Critical Mastery"
          ],
          "pathNotes": "Dance with Death é o coração da build: requer mão secundária vazia para obter 25% mais velocidade de habilidade com a lança. The Taming transforma passivamente os vórtices em tufões de fogo, raio e gelo."
        },
        "gameplay": {
          "mechanics": "O Twister gera redemoinhos de vento contínuos que avançam pela tela. Com o anel The Taming, o jogo considera que o vento passa por solo congelado, inflamado e chocado simultaneamente, multiplicando o dano elemental. Com a mão secundária vazia, a Keystone Dance with Death concede um bônus multiplicativo (\"25% MORE\") de velocidade de habilidade.",
          "rotation": "Avançar com Vivid Stampede para posicionamento -> Disparar sequência de Twister -> Ativar Spear Throw ou Barrage para foco em elites -> Berserk acionado em fendas de alta densidade.",
          "packClearing": "Extremamente devastador em tela cheia. Os redemoinhos cobrem fendas inteiras de Breach e Delirium antes que os monstros consigam se aproximar.",
          "bossFight": "Posicionar o Wild Protector para atrair a agressividade do chefe, circundar descarregando Barrage e manter distância segura com Vivid Stampede.",
          "strengths": [
            "Velocidade insana de limpeza de mapa com Headhunter e Dance with Death (+25% MORE)",
            "Sinergia elemental única de The Taming aplicando os 3 bônus de solo em cada vórtice",
            "Alta sobrevivência contra golpes físicos através de Deflection baseada em Evasão",
            "Testada e comprovada em evento oficial da 0.5.5 até o nível 98 em transmissão ao vivo"
          ],
          "weaknesses": [
            "Requer manter a mão secundária rigorosamente vazia (não permite escudo)",
            "Itens de endgame (Headhunter, The Taming, Mirror Spear) demandam capital acumulado"
          ]
        }
      }
    ]
  }
];

export const initialCraftRecipes: CraftRecipe[] = [
  {
    "id": "craft-chiba-poor",
    "name": "Crafts Inclusivos para os Pobres (Armas & Equipamentos de Entrada)",
    "targetItem": "Lança ou Peça Rara com Dano Plano Elemental e Resistências Capadas",
    "baseItem": "Soaring Spear ou Base Normal de Campanha ilvl 50-70",
    "targetMods": [
      "Prefixo: Dano Plano de Fogo ou Raio Adicionado a Ataques",
      "Prefixo: Dano Aumentado ou Vida Máxima",
      "Sufixo: Velocidade de Ataque (+10%+)",
      "Sufixo: Resistência Elemental (+25%+)"
    ],
    "estimatedCost": "Menos de 5 a 10 Chaos Orbs (Uso exclusivo de moedas de campanha)",
    "steps": [
      {
        "stepNumber": 1,
        "instruction": "Coletar a base normal (branca) no chão do mapa ou ato. Aplicar 4x Pedras de Amolar (Blacksmith Whetstone) para garantir 20% de qualidade enquanto o item ainda é normal.",
        "currencyOrMaterial": "Blacksmith's Whetstone (4x)",
        "expectedResult": "Base com 20% de qualidade máxima gastando apenas 4 pedras.",
        "sourceId": "src-yt-chiba-craft-poor"
      },
      {
        "stepNumber": 2,
        "instruction": "Aplicar Orbe de Transmutação para tornar o item Mágico. Usar Orbes de Alteração até obter Velocidade de Ataque ou Dano Plano T2+.",
        "currencyOrMaterial": "Orb of Transmutation, Orb of Alteration (5-10x)",
        "expectedResult": "Item mágico com sufixo ou prefixo elemental desejado.",
        "sourceId": "src-yt-chiba-craft-poor"
      },
      {
        "stepNumber": 3,
        "instruction": "Caso tenha essência de nível baixo (Essence of Torment, Wrath ou Hatred), aplicar diretamente na base branca para forçar o mod garantido sem gastar Regal.",
        "currencyOrMaterial": "Lesser / Normal Essence",
        "expectedResult": "Item Raro com o modificador elemental garantido pela essência.",
        "sourceId": "src-yt-chiba-craft-poor"
      },
      {
        "stepNumber": 4,
        "instruction": "Finalizar na Bancada de Refúgio adicionando a resistência elemental faltante para fechar os 75% nos atos.",
        "currencyOrMaterial": "Crafting Bench (1x Orb of Transmutation / Alchemy)",
        "expectedResult": "Peça pronta para mapas por um custo praticamente nulo.",
        "sourceId": "src-yt-chiba-craft-poor"
      }
    ],
    "alternatives": "Pode ser replicado para elmos, luvas e botas buscando vida e resistências.",
    "sourceId": "src-yt-chiba-craft-poor",
    "poeVersion": "0.5.5"
  },
  {
    "id": "craft-chiba-middle",
    "name": "Crafts para a Classe Média (Equipamentos com Deflection & Runeforging)",
    "targetItem": "Sleek Jacket ou Peça de Evasão/ES com Deflection Rating e Runas Bonded",
    "baseItem": "Sleek Jacket ou Daggerfoot Shoes (ilvl 80+)",
    "targetMods": [
      "Prefixo: Gain Deflect equal to 25%+ of Evasion Rating",
      "Prefixo: + Alta Evasão e Escudo de Energia (+200+)",
      "Sufixo: Resistência a Fogo ou Raio (+40%+)",
      "Runas: 3x Perfect Iron Rune (60% inc Armour/Evasion/ES)",
      "Encantamento Bonded: +60 Life, +60 Mana"
    ],
    "estimatedCost": "~30 a 60 Chaos Orbs + Runas de Ferreiro",
    "steps": [
      {
        "stepNumber": 1,
        "instruction": "Adquirir base Sleek Jacket ilvl 80+. Garantir qualidade 20%. Rolar com Orbes de Caos ou Essências de Evasão até atingir o afixo híbrido de Deflection Rating proporcional à Evasão.",
        "currencyOrMaterial": "Chaos Orb ou Essence of Zeal / Defiance",
        "expectedResult": "Peça rara com mod de Deflection e resistências altas.",
        "sourceId": "src-yt-chiba-craft-middle"
      },
      {
        "stepNumber": 2,
        "instruction": "Abrir 3 encaixes de runas no ferreiro do refúgio.",
        "currencyOrMaterial": "Artisan Orbs / Ouro do Ferreiro",
        "expectedResult": "Armadura com 3 sockets de runas disponíveis.",
        "sourceId": "src-yt-chiba-craft-middle"
      },
      {
        "stepNumber": 3,
        "instruction": "Inserir 3x Perfect Iron Rune para obter o multiplicador de 60% aumentado em Armadura, Evasão e Escudo de Energia.",
        "currencyOrMaterial": "3x Perfect Iron Rune",
        "expectedResult": "Bônus massivo de defesa global na armadura.",
        "sourceId": "src-yt-chiba-craft-middle"
      },
      {
        "stepNumber": 4,
        "instruction": "Aplicar os encantamentos especiais ShamanOnlyMods / Bonded concedendo +60 de vida máxima e +60 de mana máxima.",
        "currencyOrMaterial": "Runa Shamanic / Altar de Bonded",
        "expectedResult": "Armadura concluída com durabilidade de mapas vermelhos.",
        "sourceId": "src-yt-chiba-craft-middle"
      }
    ],
    "alternatives": "Nas botas Daggerfoot Shoes, substituir um Iron Rune por Chronomancy para aceleração de cooldowns.",
    "sourceId": "src-yt-chiba-craft-middle",
    "poeVersion": "0.5.5"
  },
  {
    "id": "craft-chiba-breach-ring",
    "name": "Confecção de Anel de Breach com Qualidade Máxima e Dano Elemental Duplo",
    "targetItem": "Carrion Twirl (Breach Ring Raro com Dano Frio + Raio Plano)",
    "baseItem": "Breach Ring ilvl 82+ com implícito de +20% à Qualidade Máxima",
    "targetMods": [
      "Implícito: +20% to Maximum Quality",
      "Prefixo: Adds 35 to 54 Cold damage to Attacks",
      "Prefixo: Adds 3 to 110 Lightning damage to Attacks",
      "Sufixo: +40%+ to Cold or Lightning Resistance"
    ],
    "estimatedCost": "~1 a 3 Divine Orbs (Catalisadores e Rolagens de Fenda)",
    "steps": [
      {
        "stepNumber": 1,
        "instruction": "Farmar ou adquirir base de Breach Ring que possua o implícito especial \"+20% to Maximum Quality\". Aplicar catalisadores elementais (Prismatic Catalysts) até atingir a qualidade máxima de 20%.",
        "currencyOrMaterial": "Prismatic Catalysts (4x em base branca)",
        "expectedResult": "Anel com qualidade 20% que amplia todos os modificadores de dano e resistências em 20%.",
        "sourceId": "src-yt-chiba-craft-day"
      },
      {
        "stepNumber": 2,
        "instruction": "Rolar com Essências de Tormento Maior para forçar o Dano de Raio Plano (até 110) ou Essências de Hatred para Dano de Frio Plano.",
        "currencyOrMaterial": "Greater Essence of Torment / Hatred",
        "expectedResult": "Anel com um dano plano T1 garantido.",
        "sourceId": "src-yt-chiba-craft-day"
      },
      {
        "stepNumber": 3,
        "instruction": "Buscar a combinação do segundo dano plano elemental (Frio ou Fogo) e alta resistência elemental com Orbes de Anulação (caso necessário para limpar mods inúteis).",
        "currencyOrMaterial": "Orb of Annulment / Exalted Orb",
        "expectedResult": "Dano plano duplo escalado pela qualidade do anel.",
        "sourceId": "src-yt-chiba-craft-day"
      },
      {
        "stepNumber": 4,
        "instruction": "Finalizar com a bancada de artesanato adicionando vida ou dano elemental a ataques.",
        "currencyOrMaterial": "Crafting Bench",
        "expectedResult": "Anel de Fenda de nível endgame para a build de Twister.",
        "sourceId": "src-yt-chiba-craft-day"
      }
    ],
    "alternatives": "Pode ser utilizado tanto no slot de anel principal quanto secundário em conjunto com The Taming.",
    "sourceId": "src-yt-chiba-craft-day",
    "poeVersion": "0.5.5"
  }
];

export const initialFarmRoutes: FarmRoute[] = [
  {
    "id": "farm-chiba-abyss",
    "name": "Estratégia de Farm de Abismo (Abyss) no Early Endgame 0.5.5",
    "objective": "Geração acelerada de orbes de caos, joias de abismo com vida/dano e ouro para vendedores no início do Atlas.",
    "regionOrMaps": "Mapas lineares de Tier 6 a 12 (ex: Ruínas de Aldur, Desfiladeiro).",
    "mechanics": [
      "Abyss (Fendas Subterrâneas de Abismo)"
    ],
    "recommendedBuilds": [
      "Twister Spirit Walker",
      "Twister Gemling Legionnaire",
      "Builds com DPS em movimento contínuo"
    ],
    "estimatedTime": "3 a 5 minutos por mapa (conforme demonstrado por ChibaTTV nos vídeos 4 e 5)",
    "rewards": [
      "Joias de Abismo raras com vida e dano elemental",
      "Orbes de Caos e Divines brutos",
      "Grande volume de ouro para trocas no refúgio",
      "Bases de anéis e cintos de abismo"
    ],
    "risks": [
      "Enxame de monstros de abismo com dano de perfuração e lentidão caso o jogador pare de se mover.",
      "Raros com modificadores de solo nocivo exigem manter a rotação de Twister à frente."
    ],
    "steps": [
      {
        "order": 1,
        "title": "Preparação do Atlas e Mapa",
        "instruction": "Alocar pontos na árvore de Atlas focados em chance de aparição de Abismo e densidade de fendas adicionais."
      },
      {
        "order": 2,
        "title": "Localização e Abertura do Abismo",
        "instruction": "Ao adentrar o mapa, buscar o nó verde de Abismo no minimapa e passar por cima para iniciar a abertura."
      },
      {
        "order": 3,
        "title": "Acompanhamento Disparando Twister",
        "instruction": "Seguir a fenda disparando Twister na direção do avanço. Os redemoinhos eliminam os monstros assim que emergem do subsolo."
      },
      {
        "order": 4,
        "title": "Abertura do Baú Abissal / Trove",
        "instruction": "Ao final do percurso, eliminar o monstro raro principal e abrir o baú abissal recolhendo joias e moedas."
      }
    ],
    "sourceId": "src-yt-chiba-abyss-farm",
    "poeVersion": "0.5.5"
  },
  {
    "id": "farm-chiba-breach-hh",
    "name": "Farm de Fendas (Breach) com Headhunter e Twister em Alta Velocidade",
    "objective": "Explodir telas inteiras de monstros de fenda acumulando dezenas de buffs de monstros raros com o Headhunter, coletando Fragmentos de Fenda, Catalisadores e Bases de Breach Rings com qualidade.",
    "regionOrMaps": "Mapas amplos e abertos de Tier 14 a 16 (sem corredores estreitos).",
    "mechanics": [
      "Breach (Fendas Dimensionais)",
      "Headhunter Buff Stacking"
    ],
    "recommendedBuilds": [
      "Twister Spirit Walker (com Headhunter)",
      "Builds de projéteis de alta velocidade"
    ],
    "estimatedTime": "2 a 4 minutos por mapa (demonstrado nos vídeos 6 e 7 de ChibaTTV)",
    "rewards": [
      "Fragmentos de Fenda (Splinters de Xoph, Tul, Esh, Uul-Netol e Chayula)",
      "Pedras de Fenda puras (Breachstones)",
      "Bases de Breach Rings com qualidade máxima implícita",
      "Orbes Divinos e catalisadores"
    ],
    "risks": [
      "Antes de acumular o primeiro buff do Headhunter, o personagem pode sofrer dano surpresa ao tocar a mão de fenda.",
      "Desconectar ou parar o movimento encerra a cadeia de bônus de velocidade."
    ],
    "steps": [
      {
        "order": 1,
        "title": "Ativação Simultânea de Mãos de Fenda",
        "instruction": "Localizar a primeira Mão de Fenda no mapa aberto e tocá-la imediatamente, já disparando Twister em arco de 360 graus."
      },
      {
        "order": 2,
        "title": "Abate de Raros e Multiplicação com Headhunter",
        "instruction": "Focar na morte do primeiro monstro raro para roubar seus modificadores. A partir desse instante, a velocidade de ação e dano dobram."
      },
      {
        "order": 3,
        "title": "Varredura Contínua e Coleta Rápida",
        "instruction": "Avançar para a próxima fenda enquanto os buffs de 60 segundos do Headhunter estiverem ativos, mantendo o ritmo frenético."
      },
      {
        "order": 4,
        "title": "Filtragem de Drops",
        "instruction": "Coletar prioritariamente catalisadores, fragmentos de fenda e anéis com o implícito de +20% à qualidade."
      }
    ],
    "sourceId": "src-yt-chiba-breach-farm",
    "poeVersion": "0.5.5"
  },
  {
    "id": "farm-chiba-deli-bossrush",
    "name": "Delirium BossRush & Leech Farm de Fendas (XP, Ouro e Hiveblood)",
    "objective": "Execução instantânea de chefes de Delirium no endgame com a Mirror Spear e abertura de slots de grupo para oferecer Leech de XP, Ouro e Hiveblood gratuito para a comunidade.",
    "regionOrMaps": "Mapas Tier 16 com Delirium Mirror ou Orbes de Delírio aplicados.",
    "mechanics": [
      "Delirium (Névoa Profunda)",
      "Boss Rush",
      "Party Leech Farm"
    ],
    "recommendedBuilds": [
      "Twister Spirit Walker (Endgame com Mirror Spear)"
    ],
    "estimatedTime": "2 minutos por corrida de chefe (demonstrado no vídeo yGSxZYWE1z8)",
    "rewards": [
      "Recompensas de Delirium Tier 7 a 10",
      "Orbes de Delírio e Fragmentos de Simulacro",
      "XP massivo para o nível 98-100",
      "Hiveblood e montantes gigantescos de ouro para o refúgio"
    ],
    "risks": [
      "O dano dos monstros de Delirium escala dramaticamente com a profundidade da névoa.",
      "Chefes de Delirium possuem telegrafias letais se não forem eliminados rapidamente."
    ],
    "steps": [
      {
        "order": 1,
        "title": "Abertura do Espelho de Delírio e Reunião do Grupo",
        "instruction": "Entrar no mapa T16, atravessar o espelho de Delirium e liberar a entrada dos membros do grupo na porta do mapa para o leech seguro."
      },
      {
        "order": 2,
        "title": "Disparo Reto em Direção ao Chefe (Boss Rush)",
        "instruction": "Avançar em linha reta com Vivid Stampede atropelando a névoa e limpando o caminho com Twister."
      },
      {
        "order": 3,
        "title": "Detonação do Chefe com Barrage e Mirror Spear",
        "instruction": "Ao alcançar a arena do chefe, aplicar Wind Dancer para cegueira e descarregar Barrage potencializada pela Mirror Spear."
      },
      {
        "order": 4,
        "title": "Conclusão e Distribuição do Loot",
        "instruction": "Coletar as recompensas de Delirium acumuladas e os fragmentos de Simulacro, reiniciando o ciclo imediatamente."
      }
    ],
    "sourceId": "src-yt-chiba-mirror-spear",
    "poeVersion": "0.5.5"
  }
];

export const initialAuditLogs: AuditLog[] = [
  {
    "id": "aud-chiba-1",
    "timestamp": "2026-03-29T20:00:00Z",
    "action": "SOURCE_INGESTED",
    "entityType": "SOURCE",
    "entityId": "src-yt-chiba-mirror-spear",
    "details": "12 fontes de vídeo da saga \"Liso to Mirror\" por ChibaTTV cadastradas e indexadas.",
    "sourceId": "src-yt-chiba-mirror-spear"
  },
  {
    "id": "aud-chiba-2",
    "timestamp": "2026-03-29T20:05:00Z",
    "action": "BUILD_UPDATED",
    "entityType": "BUILD",
    "entityId": "build-twister-spirit-walker",
    "details": "Nova build \"[0.5.5] Twister Spirit Walker - Saga Liso to Mirror\" cadastrada com 4 variantes completas.",
    "sourceId": "src-yt-chiba-mirror-spear"
  },
  {
    "id": "aud-chiba-3",
    "timestamp": "2026-03-29T20:10:00Z",
    "action": "CONFLICT_DETECTED",
    "entityType": "BUILD",
    "entityId": "build-twister-gemling",
    "details": "Divergência técnica registrada entre SnooBAE85 (Gemling Legionnaire) e ChibaTTV (Spirit Walker) quanto ao melhor método de escalonamento de Twister.",
    "sourceId": "src-yt-chiba-mirror-spear"
  },
  {
    "id": "aud-5",
    "timestamp": "2026-03-15T18:00:00Z",
    "action": "SOURCE_INGESTED",
    "entityType": "SOURCE",
    "entityId": "src-mobalytics-twister",
    "details": "Fonte \"[0.5.5] Twister Gemling Legionnaire\" (Mobalytics) cadastrada pelo administrador.",
    "sourceId": "src-mobalytics-twister"
  },
  {
    "id": "aud-6",
    "timestamp": "2026-03-15T18:05:00Z",
    "action": "SOURCE_INGESTED",
    "entityType": "SOURCE",
    "entityId": "src-yt-twister-day3",
    "details": "Vídeo \"[PoE2 0.5.5] Day Three Build Updates\" por SnooBAE85 indexado com timestamps e regex de vendor.",
    "sourceId": "src-yt-twister-day3"
  },
  {
    "id": "aud-7",
    "timestamp": "2026-03-15T18:10:00Z",
    "action": "SOURCE_INGESTED",
    "entityType": "SOURCE",
    "entityId": "src-yt-twister-tech",
    "details": "Vídeo \"[PoE2 0.5.5] Zero-Effort Double-Damage Tech\" por SnooBAE85 indexado com mecânica de Frost Wall + Verglas.",
    "sourceId": "src-yt-twister-tech"
  },
  {
    "id": "aud-8",
    "timestamp": "2026-03-15T18:15:00Z",
    "action": "BUILD_UPDATED",
    "entityType": "BUILD",
    "entityId": "build-twister-gemling",
    "details": "Build \"[0.5.5] Twister Gemling Legionnaire\" cadastrada com versão 1 (Patch 0.5.5).",
    "sourceId": "src-mobalytics-twister"
  }
];
