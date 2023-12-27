import { formatDuration } from '/cypress/support/e2e';

describe('troca de pagina', () => {
  let startTime
  beforeEach(() => {
    // Registra o tempo de início
    startTime = new Date();
    cy.visit('http://localhost:3003/')
  });
  it.only('pelo botao',   () => {
    for(let i=0;i<20;i++){
      cy.log(`${i+1} iteração`)
      cy.get('[action="/pages/page2"]').click()
      cy.get('h1').should('include.text', '2') // esse ta dando erro
      cy.get('[action="/pages/page1"]').click()
    }
    cy.get('h1').should('include.text', '1');
  })
  it('pelo link', () => {
    for(let i=0;i<20;i++){
      cy.log(`${i+1} iteração`)
      cy.get('[href="/pages/page2"]').click()
      cy.get('h1').should('include.text', '2') // esse da certo
      cy.get('[href="/pages/page1"]').click()
    }
    cy.get('h1').should('include.text', '1');
  })
  afterEach(() => {
    // Calcula o tempo de término
    const endTime = new Date();
  
    // Calcula a diferença de tempo em milissegundos
    const duration = endTime - startTime;
  
    // Converte a diferença de tempo para um formato mais legível
    const formattedDuration = formatDuration(duration);
  
    // Exibe a duração no console ou faça o que quiser com ela
    cy.log(`Tempo total de execução dos testes: ${formattedDuration}`);
  });
})
