import HomePage from '../../pageobjects/homepage';
import IntersectPage from '../../pageobjects/intersectpage';
const homePage = new HomePage();
const intersectPage = new IntersectPage();
describe('Demo Test for Hobsons', () => {

  context('Demo', () => {

    beforeEach(() => {
      cy.visit('https://www.hobsons.com/')
      cy.log('Navigated to Home Page')
    })

    it('Verify Home page and US maps on Intersect Page ', () => {

      //Verify that the Hobsons.com home page renders as expected (assert on the company logo or page title).
      homePage.verifyHomePageTitle('Education Advances | Hobsons')
      cy.log('Verified Home Page Title')

      //On the home screen there is a Hero graphic with the text “Advancing Lifetime Student Success
      homePage.verifyBannerHomeTitle()
      cy.log('Verified Hero Graphic with text "Advancing Lifetime Student Success"')

      // Select the “Intersect” application card
      homePage.clickOnIntersect();
      cy.log('Clicked Intersect card')

      // click the “learn more” link.
      homePage.clickOnIntersectLearnMore();
      cy.log('Clicked Learn More underneath Intersect Card')

      // scroll down to “The Growing Naviance Footprint” verify the map of the United States is displayed.
      intersectPage.verifyMap()
      cy.log('Verified map of United States is displayed')

      //assert there is an associated tooltip containing text with the correct percentage or a percentage range when hovered or selected
      intersectPage.verifyMapTooltips("WY", "11% to 25% of Students")
      intersectPage.verifyMapTooltips("WA", "26% to 50% of Students")
      intersectPage.verifyMapTooltips("OR", "26% to 50% of Students")
      intersectPage.verifyMapTooltips("AZ", "26% to 50% of Students")
      intersectPage.verifyMapTooltips("MI", "11% to 25% of Students")
      intersectPage.verifyMapTooltips("KY", "11% to 25% of Students")
      intersectPage.verifyMapTooltips("TN", "11% to 25% of Students")
      intersectPage.verifyMapTooltips("WV", "11% to 25% of Students")
      intersectPage.verifyMapTooltips("CA", "45% of Students")
      intersectPage.verifyMapTooltips("AR", "50% of Students")
      intersectPage.verifyMapTooltips("NC", "26% to 50% of Students")
      intersectPage.verifyMapTooltips("SC", "26% to 50% of Students")
      intersectPage.verifyMapTooltips("GA", "26% to 50% of Students")
      intersectPage.verifyMapTooltips("FL", "26% to 50% of Students")
      intersectPage.verifyMapTooltips("CO", "80% of Students")
      intersectPage.verifyMapTooltips("CT", "95% of Students")
      intersectPage.verifyMapTooltips("ND", "Less than 10% of Students")
      intersectPage.verifyMapTooltips("SD", "Less than 10% of Students")
      intersectPage.verifyMapTooltips("HI", "40% of Students")
      intersectPage.verifyMapTooltips("IL", "65% of Students")
      intersectPage.verifyMapTooltips("IN", "55% of Students")
      intersectPage.verifyMapTooltips("ME", "55% of Students")
      intersectPage.verifyMapTooltips("MA", "90% of Students")
      intersectPage.verifyMapTooltips("MN", "50% of Students")
      intersectPage.verifyMapTooltips("NH", "70% of Students")
      intersectPage.verifyMapTooltips("NY", "75% of Students")
      intersectPage.verifyMapTooltips("OH", "55% of Students")
      intersectPage.verifyMapTooltips("PA", "60% of Students")
      intersectPage.verifyMapTooltips("RI", "50% of Students")
      intersectPage.verifyMapTooltips("VA", "50% of Students")
      cy.log('Verified tool tips of all state groupings')
    
    })
  })
})