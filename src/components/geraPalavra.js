
export const GeraPalavra= () =>{
    const palavras = [
        'sagaz', 'âmago', 'negro', 'termo', 'êxito', 'mexer', 'nobre', 'senso','etnia', 'fútil', 'égide', 'anexo', 'tange', 'dengo', 'haver', 'lapso',
        'afeto', 'algoz', 'ética', 'plena', 'fazer', 'tênue', 'assim', 'mútua','expor', 'então', 'tempo', 'seara', 'mútuo', 'boçal', 'hábil', 'casal',
        'vigor', 'sobre', 'aquém', 'sutil', 'porém', 'seção', 'poder', 'fosse','saber', 'ávido', 'pesar', 'ardil', 'graça', 'dizer', 'óbice', 'causa',
        'sanar', 'ideia', 'cerne', 'audaz', 'moral', 'inato', 'desde', 'muito','dever', 'sendo', 'genro', 'coser', 'xibiu', 'tenaz', 'pária', 'estar',
        'justo', 'quiçá', 'honra', 'sonho', 'torpe', 'razão', 'amigo', 'ícone','posse', 'brado', 'crivo', 'ainda', 'prole', 'comum', 'temor', 'ápice',
        'anuir', 'trama', 'torço', 'verso', 'brisa', 'ímpar', 'rigor', 'botar','corja', 'ânimo', 'detém', 'pauta', 'ceder', 'assaz', 'ânsia', 'culto',
        'chata', 'massa', 'blasé', 'lazer', 'prece', 'maior', 'dorso', 'pegar','fugaz', 'censo', 'digno', 'mundo', 'atroz', 'forte', 'gleba', 'vício',
        'sorte', 'signo', 'moção', 'seita', 'fauna', 'covil', 'preso', 'credo','vulgo', 'cozer', 'valha', 'criar', 'mesmo', 'saúde', 'revés', 'denso',
        'furor', 'casto', 'morar', 'livro', 'flora', 'vetor', 'adeus', 'dócil','neném', 'pudor', 'dogma', 'jeito', 'todos', 'regra', 'louco', 'atrás',
        'peste', 'liame', 'ambas', 'comer', 'plano', 'faina', 'houve', 'senda','ordem', 'mercê', 'homem', 'feliz', 'impor', 'pedir', 'banal', 'round',
        'ocaso', 'nunca', 'pecha', 'árido', 'saiba', 'setor', 'praia', 'aliás','clava', 'limbo', 'coisa', 'usura', 'juízo', 'sábio', 'apraz', 'forma',
        'manha', 'vírus', 'peixe', 'ardor', 'meses', 'agora', 'visse', 'mudar','servo', 'prosa', 'tenro', 'desse', 'falar', 'pífio', 'presa', 'certo',
        'salvo', 'beata', 'aceso', 'antro', 'vulto', 'rezar', 'vasto', 'breve','ajuda', 'posso', 'cunho', 'ontem', 'viril', 'vendo', 'legal', 'devir',
        'pajem', 'parte', 'saída', 'morro', 'junto', 'banzo', 'risco', 'campo','herói', 'manso', 'falso', 'meiga', 'valor', 'reaça', 'fácil', 'visar',
        'ótimo', 'reger', 'prado', 'avaro', 'sinal', 'grupo', 'áureo', 'birra','mágoa', 'ébrio', 'sério', 'acaso', 'puder', 'fluir', 'guisa', 'afago',
        'anais', 'segue', 'andar', 'lenda', 'serão', 'antes', 'motim', 'opção','platô', 'linda', 'lugar', 'ímpio', 'temer', 'abrir', 'garbo', 'afins',
        'acima', 'chulo', 'estão', 'fugir', 'áurea', 'leite', 'nação', 'conta','praxe', 'obter', 'gerar', 'óbvio', 'cisma', 'matiz', 'burro', 'bruma',
        'rapaz', 'átomo', 'brava', 'treta', 'vilão', 'fruir', 'oxalá', 'parar','união', 'pleno', 'crise', 'êxodo', 'havia', 'fluxo', 'vênia', 'senil',
        'verbo', 'ídolo', 'texto', 'fitar', 'índio', 'tirar', 'tenso', 'jazia','tédio', 'ritmo', 'morte', 'enfim', 'levar', 'tomar', 'olhar', 'visão',
        'prazo', 'reino', 'gerir', 'puxar', 'festa', 'alude', 'norma', 'traga','álibi', 'casta', 'brega', 'gênio', 'prumo', 'parvo', 'vital', 'bravo',
        'tosco', 'exame', 'época', 'prova', 'filho', 'átrio', 'bando', 'malta','favor', 'reles', 'cabal', 'pulha', 'falta', 'ouvir', 'vivaz', 'reter',
        'turba', 'corpo', 'psico', 'anciã', 'arcar', 'preto', 'sinhá', 'cheio','parco', 'tecer', 'calma', 'valia', 'sábia', 'outro', 'ameno', 'laico',
        'aonde', 'acesa', 'avião', 'voraz', 'manhã', 'fatal', 'fatos', 'sarça','grato', 'viver', 'tendo', 'terra', 'possa', 'noção', 'carma', 'passo',
        'quase', 'cópia', 'praga', 'venal', 'certa', 'ligar', 'quota', 'logro','força', 'único', 'achar', 'nicho', 'ranço', 'pobre', 'noite', 'façam',
        'nosso', 'magia', 'fixar', 'apego', 'dessa', 'nível', 'oásis', 'afora','prime', 'rogar', 'rever', 'fardo', 'farsa', 'fator', 'óbito', 'ativo',
        'coito', 'pompa', 'sumir', 'soldo', 'nódoa', 'mente', 'alado', 'messe','selar', 'coeso', 'épico', 'dúbio', 'anelo', 'citar', 'sinto', 'papel',
        'caixa', 'tocar', 'longe', 'jirau', 'perda', 'bônus', 'lidar', 'parca','nossa', 'leigo', 'cisão', 'sesta', 'claro', 'sonso', 'ciúme', 'adiar',
        'tinha', 'livre', 'fraco', 'verve', 'lindo', 'apelo', 'sexta', 'solto','cesta', 'líder', 'haste', 'velho', 'deter', 'tende', 'gente', 'humor',
        'vezes', 'glosa', 'firme', 'grave', 'virão', 'opaco', 'porta', 'bater','atuar', 'revel', 'sulco', 'ideal', 'vemos', 'exato', 'árduo', 'ponto',
        'turva', 'faixa', 'sabia', 'astro', 'salve', 'exijo', 'doído', 'trupe','ficar', 'igual', 'amplo', 'vazio', 'fonte', 'marco', 'labor', 'feixe',
        'fenda', 'irmão', 'navio', 'pardo', 'grata', 'elite', 'cânon', 'abriu','lavra', 'terno', 'débil', 'hiato', 'remir', 'senão', 'cauda', 'capaz',
        'parva', 'supra', 'atual', 'autor', 'alçar', 'deixa', 'besta', 'viria','gesto', 'ótica', 'tanto', 'imune', 'ambos', 'varão', 'inata', 'jovem',
        'pique', 'junco', 'bicho', 'cioso', 'ficha', 'curso', 'ético', 'douto','relva', 'vácuo', 'toada', 'tenra', 'sonsa', 'ciclo', 'apoio', 'caçar',
        'macio', 'reses', 'pagão', 'abuso', 'calda', 'bioma', 'cousa', 'posto','coçar', 'velar', 'raiva', 'algum', 'vimos', 'pouco', 'série', 'xeque',
        'judeu', 'desta', 'rádio', 'locus', 'caber', 'verba', 'menos', 'retém','chuva', 'farão', 'horda', 'leito', 'fusão', 'advém', 'entre', 'feito',
        'vídeo', 'culpa', 'supor', 'privê', 'chato', 'aluno', 'zelar', 'extra','sente', 'probo', 'coesa', 'doido', 'minha', 'frase', 'carro', 'cruel',
        'pomar', 'close', 'rural', 'feita', 'canso', 'arfar', 'rocha', 'nesta','molho', 'drops', 'super', 'torso', 'calão', 'gosto', 'vosso', 'baixo',
        'âmbar', 'pedro', 'bazar', 'tenha', 'silvo', 'nessa', 'vadio', 'recém','light', 'suave', 'advir', 'agudo', 'combo', 'vinha', 'júlia', 'ígneo',
        'vedar', 'santo', 'depor', 'calor', 'fossa', 'grota', 'odiar', 'irado','asilo', 'órfão', 'ruína', 'lápis', 'facho', 'turma', 'sítio', 'pódio',
        'pavor', 'laudo', 'cifra', 'vista', 'negar', 'canto', 'aviar', 'mamãe','traço', 'turvo', 'peito', 'estio', 'pisar', 'passa', 'piada', 'ações',
        'etapa', 'densa', 'xucro', 'bucho', 'clero', 'logos', 'visto', 'bolsa','ereto', 'pilar', 'chama', 'brabo', 'louça', 'amena', 'finda', 'mosto',
        'ferpa', 'verão', 'minar', 'régio', 'marca', 'cinto', 'cerca', 'vagar','refém', 'ávida', 'mesma', 'meigo', 'forem', 'rouca', 'local', 'acolá',
        'cenho', 'cheia', 'segar', 'chula', 'molde', 'lesão', 'invés', 'horto','museu', 'facto', 'metiê', 'páreo', 'surja', 'autos', 'cútis', 'poeta',
        'salmo', 'ágape', 'proto', 'ruído', 'coroa', 'paiol', 'urdir', 'burra','tento', 'rumor', 'paira', 'optar', 'lasso', 'medir', 'teste', 'poema',
        'morfo', 'sótão', 'largo', 'deram', 'letra', 'pasma', 'velha', 'símio','geral', 'coral', 'cocho', 'drama', 'folga', 'aviso', 'busca', 'clima',
        'final', 'penso', 'dança', 'pugna', 'folha', 'vasta', 'troco', 'esgar','feudo', 'urgia', 'hobby', 'boato', 'clean', 'idoso', 'rubro', 'tetra',
        'úbere', 'lesto', 'narco', 'fundo', 'jazer', 'sofia', 'trago', 'ceita','cetro', 'pacto', 'feroz', 'ateia', 'calmo', 'móvel', 'tacha', 'amiga',
        'podar', 'ufano', 'ardis', 'quais', 'mocho', 'linha', 'úmido', 'frota','monge', 'ponha', 'crime', 'golpe', 'lição', 'açude', 'daqui', 'carta',
        'bulir', 'apear', 'ileso', 'piche', 'troço', 'queda', 'pólis', 'preço','ébano', 'ecoar', 'cacho', 'plumo', 'verde', 'monte', 'vigia', 'riste',
        'álamo', 'neste', 'cível', 'peita', 'resto', 'áudio', 'manto', 'matar','corso', 'aroma', 'casar', 'falha', 'saldo', 'fazia', 'briga', 'vetar',
        'folia', 'redor', 'monta', 'misto', 'cosmo', 'seiva', 'mover', 'barro','conto', 'letal', 'manga', 'pasmo', 'artur', 'hoste', 'itens', 'bença',
        'chaga', 'lábia', 'bolso', 'banto', 'outra', 'logia', 'retro', 'chave','tribo', 'pedra', 'volta', 'rival', 'escol', 'grama', 'fórum', 'penta',
        'disso', 'justa', 'limpo', 'olhos', 'álbum', 'barão', 'falsa', 'macho','troça', 'tarde', 'swing', 'roupa', 'mangá', 'chefe', 'súcia', 'venha',
        'campa', 'nácar', 'lutar', 'farol', 'veloz', 'bedel', 'louro', 'calvo','única', 'civil', 'sósia', 'plebe', 'natal', 'fruto', 'úteis', 'plaga',
        'gemer', 'punha', 'axial', 'mimar', 'porca', 'venho', 'arroz', 'findo','cover', 'lesse', 'vento', 'sarau', 'finjo', 'amada', 'cargo', 'átimo',
        'vazia', 'sabor', 'louca', 'toque', 'calça', 'rente', 'longo', 'salva','macro', 'nuvem', 'ornar', 'pinho', 'virar', 'axila', 'órgão', 'berro',
        'enjoo', 'zumbi', 'lucro', 'coevo', 'baixa', 'viger', 'dados', 'nariz','arado', 'vazão', 'magna', 'areia', 'stand', 'farta', 'jogar', 'jejum',
        'fazes', 'lousa', 'firma', 'demão', 'solta', 'subir', 'samba', 'torna','tchau', 'seixo', 'beijo', 'fosso', 'catre', 'tiver', 'troca', 'gíria',
        'farto', 'urgir', 'canil', 'forro', 'ousar', 'diabo', 'sigla', 'fugiu','légua', 'bruta', 'traje', 'deste', 'nesse', 'perto', 'inter', 'mídia',
        'valer', 'reler', 'gueto', 'pagar', 'sexto', 'pluma', 'sabiá', 'bruxa','perco', 'varoa', 'bruto', 'assar', 'viram', 'tição', 'tutor', 'renda',
        'xampu', 'repor', 'míope', 'fátuo', 'corar', 'choça', 'vário', 'bugre','guria', 'trato', 'todas', 'gabar', 'estro', 'amado', 'porte', 'surto',
        'cardo', 'custo', 'tumba', 'lento', 'hífen', 'mania', 'versa', 'corte','pular', 'penca', 'nesga', 'modal', 'sadio', 'rácio', 'ferir', 'voilà',
        'sócio', 'sugar', 'harém', 'digna', 'ceifa', 'pátio', 'usual', 'puído', 'cospe', 'furia', 'casca'
    ];

    const formatDate = (date) => {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    };

    const today = formatDate(new Date());
    const savedDate = localStorage.getItem('data');
    const savedWord = localStorage.getItem('palavra');

    if (savedDate === today) {
        // Se a palavra para hoje já estiver salva, retorne-a
        return savedWord;
    } else {
        // Se não houver palavra para hoje, gere uma nova e salve no localStorage
        const randomIndex = Math.floor(Math.random() * palavras.length);
        const newWord = palavras[randomIndex];
        localStorage.setItem('data', today);
        localStorage.setItem('palavra', newWord);
        return newWord;
    }
}