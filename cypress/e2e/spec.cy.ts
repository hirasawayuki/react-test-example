describe('My First Test', () => {
  context('Unit Test', () => {
    it('Does not do much!', () => {
      // 普通の単体テスト的なことも可能
      expect(true).to.equal(true)
    })
  })

  context('E2E Test', () => {
    it('.type() - type into a DOM element', () => {
      // Cypress がテスト用に用意しているサイトにアクセス
      cy.visit('https://example.cypress.io/commands/actions')

      // class 属性に .action-email が入っている DOM を取得
      cy.get('.action-email')
        .type('example@example.com').should('have.value', 'example@example.com')

        // 特殊キーのテストもできる
        .type('{leftarrow}{rightarrow}{uparrow}{downarrow}')
        .type('{alt}{option}')
        .type('{ctrl}{control}')
        .type('{meta}{command}{cmd}')
        .type('{shift}').should('have.value', 'example@example.com')
        // 入力フォーム内の文字をすべて選択して backspace で削除
        .type('{selectall}{backspace}').should('have.value', '')

        // delay を使って遅延もできる
        .type('slow.typing@email.com', { delay: 100 })
        .should('have.value', 'slow.typing@email.com')
    })
  })
})
