
class HomePage {
   
   get intersectBanner() {return '[class="banner-home__cards-container"] > a:nth-child(2) [class="card-home-banner__title"]' };
   get learnMore() { return '[href="/solution/naviance"]'}
   get bannerHomeTitle() { return '[class="banner-home__title"]'}

    /**
     * Navigate to URL
     * @param url
     */
    visit(url) {
      cy.visit(url);
    }

    /**
     * Verify Title
     * @param title
     */
    verifyHomePageTitle(title){
      cy.title().should('eq', title)
    }
    
    /**
     * Click on Intersect banner
     */
    clickOnIntersect(){
      cy.get(this.intersectBanner).click()
    }

    /**
     * Click on Learn More from Intersect Card
     */
    clickOnIntersectLearnMore(){
      cy.get(this.learnMore).click()
    }

     /**
     * Verify text on Home Banner
     */
    verifyBannerHomeTitle(){
      cy.get(this.bannerHomeTitle)
        .should('have.text', 'Advancing Lifetime Student Success')
    }
    
  }  
  export default HomePage;