/// <reference types="cypress" />

describe ('Find all button in header & footer', () =>{
    beforeEach(()=>{
        cy.visit('https://guest:welcome2qauto@qauto.forstudy.space/')
    })

    it('Find Home button', () =>{
        cy.get('.header_nav').find('a');
    })

    it('Find About button', () =>{
        cy.get('[appscrollto="aboutSection"]');
    })

    it('Find Contacts button', () =>{
        cy.get('[appscrollto="contactsSection"]');
    })

    it('Find Guest Log in button', () =>{
        cy.get('.-guest');
    })

    it('Find Sign In button', () =>{
        cy.get('.header_signin');
    })

    it('Find Facebook button', () =>{
        cy.get('.contacts_socials').find('[href="https://www.facebook.com/Hillel.IT.School"]');
    })

    it('Find Telegram button', () =>{
        cy.get('.contacts_socials').find('[href="https://t.me/ithillel_kyiv"]');
    })

    it('Find Youtube button', () =>{
        cy.get('.contacts_socials').find('[href="https://www.youtube.com/user/HillelITSchool?sub_confirmation=1"]');
    })

    it('Find Instagram button', () =>{
        cy.get('.contacts_socials').find('[href="https://www.instagram.com/hillel_itschool/"]');
    })

    it('Find LinkedIn button', () =>{
        cy.get('.contacts_socials').find('[href="https://www.linkedin.com/school/ithillel/"]');
    })

    it('Find Hillel site link', () =>{
        cy.get('.contacts_link.display-4');
    })

    it('Find support email link', () =>{
        cy.get('.contacts_link.h4');
    })
})