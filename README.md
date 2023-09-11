# 💸 HackaJUR Algar Telecom projeto DividaZero
 
<p align="center">
<img src="https://img.shields.io/badge/STATUS-EM DESENSOLVIMENTO-green"/>
</p>


## Projeto HackaJUR Algar Telecon
Confissões de dívida por devedores e regularização

## ⚙️ Tecnologias Utilizadas

<div align="center">
    <div style="display: inline_block"><br>
        <img align="center" alt="HTML" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg">
        <img align="center" alt="CSS3" height="30" width="40"  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg">
        <img align="center" alt="Javascript" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg">
        <img align="center" alt="Bootstrap" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg">
    </div>
</div>

<hr>

<div align="center">
    <h1> :octocat: GIT  </h1> 
</div>

O GIT é uma ferramenta que te ajuda a controlar melhor as versões do seu código, ou seja, é uma forma de melhorar a sua organização com códigos.


**Após ver o que é GIT, instale-o em sua máquina**

```
    Git Download:  https://github.com/git-guides/install-git
```

### Como eu faço para utilizar o GIT nesse projeto (aqui começa a entender um pouco de GITHUB)

- Primeiramente acesse o site do GITHUB (é necessário criar uma conta), após isso entre no link: https://github.com/PauloHenriqueAS/DividaZero

- Nessa página você irá ver um monte de abas:
    - Code: é onde está o que queremos, os arquivos do nosso site, nosso código.
    - Issues: quando você quer fazer um comentário, achou algum problema no código de alguém ou no seu mesmo, você abre uma **issue** para isso e quando resolver o problema, você a fecha.
    - Pull request: toda vez que você fizer uma alteração no código e quer colocá-la em outra branch é ideal que você faça um pull request, da sua branch para a branch que você quer, mas antes certifique-se de que está tudo correto.

- Agora vamos colocar o código que está no Github em sua máquina?
    - Na aba code, você vai ver um botão verdinho mais para o lado direito da página, nele está escrito **`Code`**, clique nele e copie o link HTTPS que foi dado;
    - Com o GIT instalado, abra o terminal (linux) ou CMD (windows) e digite o seguinte comando:
        ```
        git clone https://github.com/PauloHenriqueAS/DividaZero.git
        ```
        Pronto você possui todas o conteúdo atual do site em sua máquina
    - Pesquise sobre branches e gitflow - após isso volte aqui;
    - Agora que já entende de branches, vamos criar a sua:
        - dê o comando abaixo para ver as branches que estão sendo utilizadas: 
        ```
        git branch
        ```
        
        - Agora, para criar sua branch **igualzinha** a branch que você está no momento, dê o comando:
        ```
        git branch feature/seu-nome/o-que-vai-fazer-no-projeto
        ```
        Exemplo:
        ```
        git branch feature/Mateus/Conect-API
        ```
        
        - Se quiser copiar outra branch que não seja a que está, dê o comando:
            ```
            git checkout branch-que-voce-deseja-estar
            ```
        **Pronto, você já tem sua branch exclusiva**
    - Agora você precisa mudar da branch que está para a branch que criou, para fazer isso, use o mesmo comando acima:
    ```
    git checkout feature/seu-nome/o-que-vai-fazer-no-projeto
    ```
    Exemplo:
    ```
    git checkout feature/Mateus/Conect-API
    ```
    - Agora comece a fazer suas alterações;
    - Após alterar algo relevante, você precisa registrar isso, é o que chamamos de commits:
        - dê o comando abaixo para ver as alterações que você fez:
        ```
        git status
        ```
        - Agora dê o comando abaixo para o git monitorar todos os arquivos seus que foram editados:
        ```
        git add .
        ```
        - Após isso, dê novamente o `git status` só para você ver a mudança
        - Agora, podemos commitar:
            - dê o comando abaixo para registrar sua mudança no GIT:
            ```
            git commit -m "Aqui você coloca uma BREVE descrição do que acabou de alterar, por exemplo - criação podcast"
            ```
        - Dê novamente um `git status`, viu que agora não tem nada? É porque está salvo suas alterações, para ver isso, execute o comando:
        ```
        git log
        ```

        Para sair, aperte a tecla q

**Esse é o básico do GIT, você aprenderá mais coisas ao longo do tempo**

### Subindo o código para o GITHUB
- Após realizar as alterações dê o comando:
```
git push origin feature/seu-nome/o-que-vai-fazer-no-projeto
```

**Com o tempo você aprenderá estratégias melhores, o que é um FORK, como fazer um PULL REQUEST de forma correta, a fazer um MERGE ou REBASE, a entender melhor, para isso você precisa praticar, é capaz de fazer tudo, vou deixar um link abaixo para que você possa treinar**

```
Git visualizing: https://git-school.github.io/visualizing-git/
```

Entre no link e divirta-se!
<hr>
<div align="center">
    <h1> 🏗️ Padrões de Commits </h1>

| Tag | Descrição |
| --- | --- |
| FIX | Correções de bug localizados sendo  Hotfix ou Bugfix |
| FEAT | Inicio de implementação de funcionalidade/task |
| CHORE | Desenvolvimento de funcionalidade/task  |
| DONE | Finalização do desenvolvimento de funcionalidade/task |
| REFACTOR | Refatoração do código ou formatação |
| MERGE | Realização de merge e correções de conflitos do mesmo  |
| TEST | Implementação/Execução de testes |
| BUILD | Correções/ajustes/criação de build ou projeto base |

</div>

<hr>

<div align="center">
    <h1> 🚀 Participantes do projeto </h1>

| [<img src="https://avatars.githubusercontent.com/u/65378419?v=4" width="100"><br><sub>@PauloHenriqueAS</sub>](https://github.com/PauloHenriqueAS)  |  [<img src="https://avatars.githubusercontent.com/u/43221564?v=4" width="100"><br><sub>@costadev00</sub>](https://github.com/costadev00) | [<img src="https://avatars.githubusercontent.com/u/43917038?v=4" width="100"><br><sub>@matheusjreis</sub>](https://github.com/matheusjreis)  | [<img src="https://avatars.githubusercontent.com/u/62945890?v=4" width="100"><br><sub>@newGabriel</sub>](https://github.com/newGabriel)  |
| ------------ | ------------ | ------------ | ------------ |
|   |  |
[<img src="https://avatars.githubusercontent.com/u/65832126?v=4" width="100"><br><sub>@BruggerPedro</sub>](https://github.com/BruggerPedro)  |  [<img src="https://avatars.githubusercontent.com/u/65620069?v=4" width="100"><br><sub>@flaviozno</sub>](https://github.com/flaviozno) |
</div>
