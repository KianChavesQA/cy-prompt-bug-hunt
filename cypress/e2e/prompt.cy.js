describe('Cy.Prompt Community Bug Hunt', () => {
  context('EngageSphere', () => {
    beforeEach(() => {
      cy.prompt([
        'Visit https://engage-sphere.vercel.app/',
        'Click the "Accept" button from the cookies consent banner'
      ])
    })

    it('shows the custom greeting (e.g., Hi Rick!)', () => {
      cy.prompt([
        'Fill in the input with placeholder E.g., John Doe with Rick',
        'Ensure a customized greeting containing Hi Rick! is displayed in an h2'
      ])
    })

    it('successfully sends a message', () => {
      cy.prompt([
        'Click the open messenger button',
        'Type "Rick" in the "Type your name here" field',
        'Type "rick@example" in the "Type your email here" field',
        'Type "Test" in the "Type your message here" field',
        'Click the Send button',
        'Ensure the success message "Your message has been sent." is displayed'
      ])
    })

    it('shows and closes the customer details', () => {
      cy.prompt([
        'Click the first View button',
        'Ensure the text "Customer Details" is displayed in an h2',
        'Click the Back button',
        'Ensure a table is visible',
        'Ensure the first View button is visible'
      ])
    })
  })

  context('Hacker Stories', () => {
    it('shows the previous serched term as a button', () => {
      cy.prompt([
        'Visit https://wlsf82-hacker-stories.web.app/',
        'Ensure "React" is the default searched term (it\'s preinputed)',
        'Clear the serch input field',
        'Search form "Cypress" by typing and pressing ENTER',
        'Ensure a button for the previous searched term (i.e., "React") is displayed in the last-searches section'
      ])
    })

    it('searches', () => {
      const terms = [
        'Angular',
        'Vue',
        'Next',
        'Meteor',
        'Vanilla JS'
      ]

      terms.forEach(term => {
        cy.prompt([
          'Given I am at "https://wlsf82-hacker-stories.web.app/"',
          'And I clear the search input field',
          `When I search for ${term}`,
          'And I click the "Submit" button',
          `Then I see the term ${term} is the results list`
        ])
      })
    })

    it('dismisses one item', () => {
      cy.prompt([
        'Visit https://wlsf82-hacker-stories.web.app/',
        'Dismisses the first item using the "button-small" button',
      ])
      cy.get('.item').should('have.length', 19)
    })
  })

  context('Scratch', () => {
    it.skip('successfully logs in', () => {
      cy.prompt([
        'Visit https://notes-serverless-app.com/login',
        'Fill in the email field with {{email}}',
        'Fill in the password field with {{password}}',
        'Click the login button',
        'Ensure you can see the "Your Notes" heading',
        'Ensure the "Logout" link is visible'
      ], {
        excludeFromAI: {
          email: Cypress.env('USER_EMAIL'),
          password: Cypress.env('USER_PASSWORD'),
        },
      })
    })
  })

  context('Cypress Simulator', () => {
    const examples = [
      {
        command: 'cy.get(".btn-primary")',
        result: 'Success',
      },
      {
        command: 'cy.intercept()',
        result: 'Warning',
      },
      {
        command: 'cy.boo()',
        result: 'Error',
      }
    ]

    examples.forEach(({ command, result }) => {
      it(`runs a/an ${result} simulation`, () => {
        cy.viewport(1920, 1024)

        cy.prompt([
          'Visit https://cypress-simulator.s3.eu-central-1.amazonaws.com/index.html?skipCaptcha=true&chancesOfError=0',
          'Click the "Login" button',
          'Click the "Accept" button from the cookies consent banner',
          `Type ${command} in the textarea`,
          'Click the "Run" button',
          `Ensure the output area contains ${result}`,
          ])
      })
    })
  })

  context('EmojiMart', () => {
    it('completes the checkout process', () => {
      cy.prompt([
        'Given I am at https://emoji-mart-one.vercel.app/',
        'When I click the first "Add to Cart" button',
        'Then the shopping cart counter shows "1"',
        'When I open the shopping cart',
        'And I click the "Proceed to Checkout" button',
        'And I fill all the contact information ("Email" and "Full Name") with sample sata',
        'And I fill all the shipping address information ("Street Address", "City", and "Country") with sample data',
        'And I fill all the payment information ("Card Number", "Expiry Date", and "CVV") with sample data',
        'And I click the "Complete Purchase" button',
        'Then I see the "Thank You for Your Purchase!" heading',
        'And I see the "Back to Store" button'
      ])
    })

    it('counts before and after search items', () => {
      cy.prompt([
        'Given I am at https://emoji-mart-one.vercel.app/',
      ])
      // And I see six emoji cards
      cy.get('[data-testid="emoji-card"]').should('have.length', 6)
      cy.prompt([
        'When I type "Rocket" in the input with placeholder "Search emojis..."',
      ])
      // Then I see only one emoji card, for the searched term
      cy.get('[data-testid="emoji-card"]')
        .should('have.length', 1)
        .and('contain.text', 'Rocket')
    })

    it('removes an emoji from the shopping cart', () => {
      cy.prompt([
        'Given I am at https://emoji-mart-one.vercel.app/',
        'When I click the first "Add to Cart" button',
        'Then the shopping cart counter shows "1"',
        'When I open the shopping cart',
        'Then I see an element with "data-testid" equal to "cart-item" inside the "Your Cart" right-side bar panel',
        'When I click the trash button',
        'Then I see the empty state (i.e., "Your cart is empty")',
      ])
    })

    it('opens and closes the shopping cart', () => {
      cy.prompt([
        'Given I am at https://emoji-mart-one.vercel.app/',
        'When I open the shopping cart',
        'Then I see the my cart (i.e., "Your Cart")',
        'When I close the shopping cart',
        'Then I see the open shopping cart button again',
        // 'Then the open shopping cart button should not be covered',
      ])
    })

    it('sees a smile details page and goes back to the emoji list', () => {
      cy.prompt([
        'Given I am at https://emoji-mart-one.vercel.app/',
        'When I click the "Similing Face" item',
        'Then I see the "Smiling Face" emoji details',
        'When I click "Back to all emojis"',
      ])
      // Then I see six elements with the "data-testid" attribute with the value "emoji-card"
      cy.get('[data-testid="emoji-card"').should('have.length', 6)
    })
  })
})
