// /// <reference types="cypress" />

// describe('Flow for application', () => {
//     beforeEach(() => {
//       // Cypress starts out with a blank slate for each test
//       // so we must tell it to visit our website with the `cy.visit()` command.
//       // Since we want to visit the same URL at the start of all our tests,
//       // we include it in our beforeEach function so that it runs before each test
//       cy.visit('localhost:3000')
//     })
  
//     it('Home Page test', () => {
//       ////Testing Home Page////
//       cy.get('.coloredtext').should('contain', 'YLE CENATIEMPO')
//       cy.get('.navbar-brand').children().should('have.css', 'width', '80px').and('have.css', 'height', '80px')
//       cy.get('#introduction').should('have.css', 'box-sizing', 'border-box')
//       cy.get('#introduction').should('contain', "My name is Kyle Cenatiempo")
//       cy.get('.soft_eng').should('contain', "I am a software engineer.")
//       cy.get(".rsis-image").should('have.css', 'width', '300px')
//       cy.get(".rsis-image").should('have.css', 'height', '350px')
//       cy.get(".rsis-image").should('have.css', 'right', '0px').and('have.css', 'left', '0px')
  
  
//     })
  
//     it('Education Page test', () => {
//       ////Testing Education Page////
//       cy.get('#nav_about').click()
//     //   cy.get('#nav_education').click()
//       cy.get('.coloredtext').should('contain', 'YLE CENATIEMPO')
//       cy.get('.navbar-brand').children().should('have.css', 'width', '80px').and('have.css', 'height', '80px')
//       cy.get('#ed_head').should('contain','Education')
//       cy.get('#ed_head').should('have.css', 'right', 'auto').and('have.css', 'left', 'auto')
//       cy.get('.asu_seal').should('have.css', 'width', '400px').and('have.css', 'height', '400px')
//       cy.get('.asu_seal').should('have.css', 'right', 'auto').and('have.css', 'left', 'auto')
//       cy.get('#know_more').should('contain', 'I would like to know more about you! If you care to share click the button to send me an email.')
//       cy.get('#know_more').should('have.css', 'color', 'rgb(128, 0, 0)').and('have.css', 'font-size', '16px')
  
//       //Testing checkbox buttons
//       cy.get('.ed_bullets li').should('have.length', 6)
//       cy.get('.ed_bullets').should('have.css', 'right', 'auto').and('have.css', 'left', 'auto')
//       cy.get('#bigdata').click()
//       cy.get('#security').click()
//       cy.get('#ai').click()
//       cy.get('#u_school').click()
//       //Testing rendered modal
//       cy.get('#text_area_mod').should('have.css', 'right', 'auto').and('have.css', 'left', 'auto')
//       cy.get('#text_area_mod').type("I went to ASU also and love it.")
//       cy.get('#email_area_mod').type("jomamma@asu.edu")
//       cy.get('#send_but').click()
//     })
//       it('Hobbies Page test', () => {
//        ////Testing the hobbies page//////
//       cy.get('#nav_about').click()
//     //   cy.get('#nav_education').click()
//       cy.get('#nav_hobbies').click()
//       cy.get('.coloredtext').should('contain', 'YLE CENATIEMPO')
//       cy.get('.navbar-brand').children().should('have.css', 'width', '80px').and('have.css', 'height', '80px')
//       cy.get('.hobbie_title').should('contain', "Hobbies")
//       cy.get('.what_i_like li').should('have.length', 7)
//       cy.get('.what_i_like').should('have.css', 'font-size', '23.2px')
//       cy.get(".rsis-image").should('have.css', 'width', '240px')
//       cy.get(".rsis-image").should('have.css', 'height', '300px')
//       cy.get(".rsis-image").should('have.css', 'right', '0px').and('have.css', 'left', '0px')
//       //Testing text box input.
//       cy.get('#hobbie_input').type(`I really enjoys to watch NFL football on Sundays.`)
//       cy.get('#send_hobbie').click()
//       cy.get('.hobbie_mess').should('have.css', 'position', 'static')
//       cy.get('.hobbie_mess').should('contain','Nice I really need to check out that hobbie!')

  
//     })
//        it('About Page test', () => {
//       ////Testing the About Page////
//       cy.get('#nav_about').click()
//     //   cy.get('#nav_education').click()
//       cy.get('#nav_hobbies').click()
//       cy.get('#nav_about').click()

//       cy.get('.coloredtext').should('contain', 'YLE CENATIEMPO')
//       cy.get('.navbar-brand').children().should('have.css', 'width', '80px').and('have.css', 'height', '80px')
//       cy.get('.about_title').should('contain', "About Me")
//       cy.get('.about_title').should('have.css', 'float', 'none');
//       cy.get('.about_title').should('have.css', 'right', 'auto');
//       cy.get('.about_title').should('have.css', 'left', 'auto');
//       cy.get('.about_title').should('have.css', "text-decoration", 'underline solid rgb(255, 255, 255)')
//       cy.get('#family_image').should('have.css', 'height', '175px')
//       cy.get('#family_image').should('have.css', 'width', '220px')
//       cy.get('#family_image').should('have.css', 'float', 'none')
//       cy.get('#family_image').should('have.css', 'right', 'auto')
//       cy.get('#family_image').should('have.css', 'left', 'auto')
//       cy.get('#family_image_label').should('contain', 'Family Photo')
//       cy.get('#cal_image').should('have.css', 'height', '300px')
//       cy.get('#cal_image').should('have.css', 'width', '250px')
//       cy.get('#cal_image').should('have.css', 'right', 'auto').and('have.css', 'left', 'auto')
//       const nameVal = 'Demo Freedom'
//       const cityVal = 'Tempe'
//       const stVal = 'Arizona'
//       const coVal = 'USA'
//       //Testing the form in about.
//       cy.get('#u_born').should('have.css', 'right', 'auto').and('have.css', 'left', 'auto')
//       cy.get('.u_name').should('have.css', 'font-size', '23.2px')
//       cy.get('#u_name').type(`${nameVal}`)
//       cy.get('.u_city').should('have.css', 'font-size', '23.2px')
//       cy.get('#u_city').type(`${cityVal}`)
//       cy.get('.u_state').should('have.css', 'font-size', '23.2px')
//       cy.get('#u_state').type(`${stVal}`)
//       cy.get('.u_country').should('have.css', 'font-size', '23.2px')
//       cy.get('#u_country').type(`${coVal}`)
//       cy.get('.u_fam').should('have.css', 'font-size', '23.2px')
//       cy.get('#u_fam_yes').click()
//       cy.get('#submit_button').click()
//       //Testing new rendered elements.
//       cy.get('#message_to_input').should('contain',`Greetings ${nameVal} from ${cityVal}, ${stVal} ${coVal}! Thanks for visiting my site`)
//       cy.get('#like_ca').click()
//       cy.get('#sec_mess').should('contain', 'I knew you were pretty cool.')
//       cy.get('#nav_home').click()
//     })
  
//   })
/// <reference types="cypress" />

describe('Flow for application', () => {
    beforeEach(() => {
      // Cypress starts out with a blank slate for each test
      // so we must tell it to visit our website with the `cy.visit()` command.
      // Since we want to visit the same URL at the start of all our tests,
      // we include it in our beforeEach function so that it runs before each test
      cy.visit('localhost:3000')
    })
  
    it('Home Page test', () => {
      ////Testing Home Page////
      cy.get('.coloredtext').should('contain', 'YLE CENATIEMPO')
      cy.get('.navbar-brand').children().should('have.css', 'width', '80px').and('have.css', 'height', '80px')
      cy.get('#introduction').should('have.css', 'box-sizing', 'border-box')
      cy.get('#introduction').should('contain', "My name is Kyle Cenatiempo")
      cy.get('.soft_eng').should('contain', "I am a software engineer.")
      cy.get(".rsis-image").should('have.css', 'width', '600px')
      cy.get(".rsis-image").should('have.css', 'height', '650px')
      cy.get(".rsis-image").should('have.css', 'right', '0px').and('have.css', 'left', '0px')
  
  
    })
    it('About Page test', () => {
      ////Testing the About Page////
      cy.get('#nav_about').click()
      cy.get('.coloredtext').should('contain', 'YLE CENATIEMPO')
      cy.get('.navbar-brand').children().should('have.css', 'width', '80px').and('have.css', 'height', '80px')
      cy.get('.about_title').should('contain', "About Me")
      cy.get('.about_title').should('have.css', 'float', 'none');
      cy.get('.about_title').should('have.css', 'right', 'auto');
      cy.get('.about_title').should('have.css', 'left', 'auto');
      cy.get('.about_title').should('have.css', "text-decoration", 'underline solid rgb(255, 255, 255)')
      cy.get('#family_image').should('have.css', 'height', '350px')
      cy.get('#family_image').should('have.css', 'width', '440px')
      cy.get('#family_image').should('have.css', 'float', 'none')
      cy.get('#family_image').should('have.css', 'right', 'auto')
      cy.get('#family_image').should('have.css', 'left', 'auto')
      cy.get('#family_image_label').should('contain', 'Family Photo')
      cy.get('#cal_image').should('have.css', 'height', '600px')
      cy.get('#cal_image').should('have.css', 'width', '450px')
      cy.get('#cal_image').should('have.css', 'right', 'auto').and('have.css', 'left', 'auto')
      const nameVal = 'Demo Freedom'
      const cityVal = 'Tempe'
      const stVal = 'Arizona'
      const coVal = 'USA'
      //Testing the form in about.
      cy.get('#u_born').should('have.css', 'right', 'auto').and('have.css', 'left', 'auto')
      cy.get('.u_name').should('have.css', 'font-size', '23.2px')
      cy.get('#u_name').type(`${nameVal}`)
      cy.get('.u_city').should('have.css', 'font-size', '23.2px')
      cy.get('#u_city').type(`${cityVal}`)
      cy.get('.u_state').should('have.css', 'font-size', '23.2px')
      cy.get('#u_state').type(`${stVal}`)
      cy.get('.u_country').should('have.css', 'font-size', '23.2px')
      cy.get('#u_country').type(`${coVal}`)
      cy.get('.u_fam').should('have.css', 'font-size', '23.2px')
      cy.get('#u_fam_yes').click()
      cy.get('#submit_button').click()
      //Testing new rendered elements.
      cy.get('#message_to_input').should('contain',`Greetings ${nameVal} from ${cityVal}, ${stVal} ${coVal}! Thanks for visiting my site`)
      cy.get('#like_ca').click()
      cy.get('#sec_mess').should('contain', 'I knew you were pretty cool.')
    })
  
    it('Education Page test', () => {
      ////Testing Education Page////
      cy.get('#nav_about').click()
      cy.get('#nav_education').click()
      cy.get('.coloredtext').should('contain', 'YLE CENATIEMPO')
      cy.get('.navbar-brand').children().should('have.css', 'width', '80px').and('have.css', 'height', '80px')
      cy.get('#ed_head').should('contain','Education')
      cy.get('#ed_head').should('have.css', 'right', 'auto').and('have.css', 'left', 'auto')
      cy.get('.asu_seal').should('have.css', 'width', '400px').and('have.css', 'height', '400px')
      cy.get('.asu_seal').should('have.css', 'right', 'auto').and('have.css', 'left', 'auto')
      cy.get('#know_more').should('contain', 'I would like to know more about you! If you care to share click the button to send me an email.')
      cy.get('#know_more').should('have.css', 'color', 'rgb(128, 0, 0)').and('have.css', 'font-size', '16px')
  
      //Testing checkbox buttons
      cy.get('.ed_bullets li').should('have.length', 6)
      cy.get('.ed_bullets').should('have.css', 'right', 'auto').and('have.css', 'left', 'auto')
      cy.get('#bigdata').click()
      cy.get('#security').click()
      cy.get('#ai').click()
      cy.get('#u_school').click()
      //Testing rendered modal
      cy.get('#text_area_mod').should('have.css', 'right', 'auto').and('have.css', 'left', 'auto')
      cy.get('#text_area_mod').type("I went to ASU also and love it.")
      cy.get('#email_area_mod').type("jomamma@asu.edu")
      cy.get('#send_but').click()
    })
      it('Hobbies Page test', () => {
       ////Testing the hobbies page//////
      cy.get('#nav_about').click()
      cy.get('#nav_education').click()
      cy.get('#nav_hobbies').click()
      cy.get('.coloredtext').should('contain', 'YLE CENATIEMPO')
      cy.get('.navbar-brand').children().should('have.css', 'width', '80px').and('have.css', 'height', '80px')
      cy.get('.hobbie_title').should('contain', "Hobbies")
      cy.get('.what_i_like li').should('have.length', 7)
      cy.get('.what_i_like').should('have.css', 'font-size', '23.2px')
      cy.get(".rsis-image").should('have.css', 'width', '600px')
      cy.get(".rsis-image").should('have.css', 'height', '650px')
      cy.get(".rsis-image").should('have.css', 'right', '0px').and('have.css', 'left', '0px')
      //Testing text box input.
      cy.get('#hobbie_input').type(`I really enjoys to watch NFL football on Sundays.`)
      cy.get('#send_hobbie').click()
      cy.get('.hobbie_mess').should('have.css', 'position', 'static')
      cy.get('.hobbie_mess').should('contain','Nice I really need to check out that hobbie!')
  
      cy.get('#nav_home').click()
  
    })
  
  })
  