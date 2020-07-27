
class InstersectPage {
   
  get mapLocator() { return '[aria-label="Stats Map"]'}
  get bannerHomeTitle() { return '[class="banner-home__title"]'}

    /**
     * Verify US map on Intersect page
     */
    verifyMap(){      
      cy.get(this.mapLocator).should('be.visible')
    }

    /**
     * Verify tool tips by State
     * @param state
     * @param toolTips
     */
    verifyMapTooltips(state, toolTips) {
        cy.xpath('//*[@data-state="'+state+'"]/parent::*')
            .should('have.attr', 'data-popup-text', toolTips)
    }  
  }  

  export default InstersectPage;