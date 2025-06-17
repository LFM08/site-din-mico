function mostrarConteudo(id) {
    const conteudoDinamico = document.getElementById("conteudo-dinamico");

    const conteudos = {
        conteudo1: `
            <h2>Sobre Mim</h2>
            <p>Quando chegamos na escola pela primeira vez, eu estava nervosa. Não sabia muito bem como seria a reação dos alunos nem se eles iriam levar a gente a sério. O ambiente era bem familiar pra mim – me lembrou da minha própria época de escola pública. As salas, o barulho pelos corredores, aquele clima meio caótico, mas cheio de vida.</p>
            <p>Eu fiquei pensando: será que eles vão se engajar nas atividades? Será que vão gostar da gente? Ao mesmo tempo, tinha aquele frio na barriga gostoso de saber que estávamos ali para tentar fazer a diferença, mesmo que fosse só um pouquinho.</p>
            
            <!-- Imagens -->
            <div class="image-gallery">
                <img src="escola_1.jpg" alt="Quadra da Escola" style="width: 100%; max-width: 400px; margin-bottom: 10px;">
                <img src="escola_2.jpg" alt="Corredor da Escola" style="width: 100%; max-width: 400px; margin-bottom: 10px;">
                <img src="escola_3.jpg" alt="Escada da Escola" style="width: 100%; max-width: 400px; margin-bottom: 10px;">
                <img src="escola_4.jpg" alt="Vista do Balcão" style="width: 100%; max-width: 400px; margin-bottom: 10px;">
                <img src="escola_5.jpg" alt="Entrada da Escola" style="width: 100%; max-width: 400px; margin-bottom: 10px;">
            </div>
        `,
        conteudo2: `
            <h2>A Primeira Dinâmica: “Rasgar o Melhor de Mim”</h2>
            <p>Essa foi, sem dúvida, uma das dinâmicas mais reflexivas.</p>
            <p>Ler as cartas foi uma experiência muito marcante. Alguns alunos que escreveram coisas como: “Me senti indiferente, era só um papel.” Outros, no entanto, trouxeram reflexões mais profundas, como: “Fiquei triste vendo o outro rasgar o que eu considero o meu melhor”. Essas respostas mostraram como cada um processou a dinâmica de forma única.</p>
            <p>Na minha visão, essa atividade foi um grande aprendizado. Ela trouxe à tona questões importantes sobre como valorizamos (ou desvalorizamos) a nós mesmos e ao outro. Eu senti que foi um momento em que muitos alunos começaram a refletir sobre suas emoções, algo que, talvez, eles nunca tivessem parado para pensar antes.</p>
            
            <!-- Imagens -->
            <div class="image-gallery">
                <img src="dinamica_1.jpg" alt="Alunos participando da dinâmica" style="width: 100%; max-width: 400px; margin-bottom: 10px;">
                <img src="dinamica_2.jpg" alt="Grupo discutindo durante a dinâmica" style="width: 100%; max-width: 400px; margin-bottom: 10px;">
            </div>
        `,
        conteudo3: `
            <h2>Dinâmica Descobrindo Talentos</h2>
            <p>Embora alguns alunos parecessem um pouco tímidos no começo, todos participaram. Quando chegou a hora de falar sobre seus talentos, percebi que, mesmo com certa hesitação, eles estavam dispostos a compartilhar. Alguns precisaram de um empurrãozinho, mas no final, quase todos falaram. Foi interessante notar que, muitas vezes, eles não viam algo como um talento ou não se davam conta de suas próprias qualidades.</p>
            <p>Eu senti que essa atividade ajudou a aumentar a autoestima deles. Foi como se, por um momento, eles começassem a enxergar coisas boas sobre si mesmos que estavam ali o tempo todo, mas que talvez nunca tivessem sido reconhecidas. Para mim, foi gratificante ver que eles entenderam a mensagem: todos têm algo especial a oferecer, mesmo que ainda não tenham percebido.</p>
            
            <!-- Imagens -->
            <div class="image-gallery">
                <img src="talentos_1.jpg" alt="Alunos participando da dinâmica" style="width: 100%; max-width: 400px; margin-bottom: 10px;">
                <img src="talentos_2.jpg" alt="Cartelas com talentos" style="width: 100%; max-width: 400px; margin-bottom: 10px;">
                <img src="talentos_3.jpg" alt="Grupo interagindo" style="width: 100%; max-width: 400px; margin-bottom: 10px;">
                <img src="talentos_4.jpg" alt="Participantes observando" style="width: 100%; max-width: 400px; margin-bottom: 10px;">
            </div>
        `,
        conteudo4: `
            <h2>Dinâmica dos Sonhos</h2>
            <p>Uma aluna me marcou muito quando perguntou: “E se a gente lutar tanto para conquistar algo e, no final, perceber que não era aquilo que queríamos?” Aquela pergunta mexeu comigo, porque me vi nela. Desde criança, meu sonho era ser juíza. Eu sempre quis estudar Direito e me preparava para isso com dedicação. Cheguei a me matricular no curso, passava horas lendo sobre a profissão, acreditando que esse seria o meu futuro. Mas, no último momento, sem saber quase nada sobre Psicologia, decidi mudar de caminho. Foi uma escolha cheia de dúvidas, e muitas vezes me questionei se tinha tomado a decisão certa.</p>
            <p>Outro momento que me tocou foi o relato de uma aluna que sonha em ser professora. Ela contou que enfrenta críticas por querer essa profissão, mas mesmo assim continua firme, porque ama o ambiente escolar. Aquilo me lembrou de um episódio que vivi. Quando escolhi Psicologia, alguém disse com desprezo: “Deixou de ser rica, pra ter uma casinha, um caso, um filho e uma babá.” As palavras foram ditas de uma forma tão ignorante, como se a vida fosse só sobre dinheiro, como se seguir o que o coração quer fosse algo menor.</p>
            <p>Mas, assim como essa aluna, eu também escolhi o que realmente fazia sentido para mim. Escutar a paixão dela pelo sonho de ser professora reforçou minha crença de que, no final, o que importa é o que nos move de verdade.</p>
            <p>Para fechar a atividade, um colega de estágio compartilhou sua história. Ele contou como veio de uma escola pública, enfrentou muitos desafios, mas conseguiu chegar à faculdade. Os alunos ouviam com atenção, como se enxergassem nele a possibilidade de realizar os próprios sonhos. Foi emocionante ver como aquele momento trouxe esperança para todos nós.</p>
            <p>Saí dessa dinâmica com uma sensação de felicidade e gratidão. Percebi que não apenas estávamos ajudando os alunos a refletirem sobre seus sonhos, mas também revivendo os nossos. Essa troca me lembrou por que eu escolhi Psicologia e reforçou que seguir o coração é, sim, o caminho certo.</p>
            
            <!-- Imagens -->
            <div class="image-gallery">
                <img src="sonhos_1.jpg" alt="Alunos ouvindo palestra" style="width: 100%; max-width: 400px; margin-bottom: 10px;">
                <img src="sonhos_2.jpg" alt="Grupo atento" style="width: 100%; max-width: 400px; margin-bottom: 10px;">
                <img src="sonhos_3.jpg" alt="Participantes concentrados" style="width: 100%; max-width: 400px; margin-bottom: 10px;">
                <img src="sonhos_4.jpg" alt="Apresentação no projetor" style="width: 100%; max-width: 400px; margin-bottom: 10px;">
            </div>
        `,
        conteudo5: `
            <h2>Encerramento</h2>
            <p>Passar por essa experiência com a minha turma de estágio foi incrível.</p>
            <p>Cada pessoa da turma teve um papel especial. Desde quem animava as reuniões até quem trazia as ideias mais criativas para as dinâmicas, foi bonito ver como cada um contribuiu à sua maneira. Nós rimos, debatemos, tivemos nossos momentos de dúvida, mas, no final, tudo valeu a pena.</p>
            <p>O que mais me marcou foi perceber como crescemos juntos. Cada um aprendeu um pouco mais sobre si e sobre o que significa ser psicólogo. Mais do que um estágio, foi uma troca que fortaleceu não só nossa formação, mas também nossa amizade e respeito pelo trabalho em equipe.</p>
            <p>Também quero agradecer ao professor por sempre nos proporcionar experiências incríveis de estágio. Este é meu segundo estágio com ele, e desde o primeiro tenho melhorado muito em vários aspectos. A cada encontro, tenho percebido ainda mais que meu sonho é a Psicologia, e isso se deve muito ao apoio e à orientação que ele nos oferece.</p>
            
            <!-- Imagens -->
            <div class="image-gallery">
                <img src="encerramento_1.jpg" alt="Turma sorridente" style="width: 100%; max-width: 400px; margin-bottom: 10px;">
                <img src="encerramento_2.jpg" alt="Momento de reflexão" style="width: 100%; max-width: 400px; margin-bottom: 10px;">
            </div>
        `
    };

    conteudoDinamico.innerHTML = conteudos[id];
}