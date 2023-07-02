
import { Homepage } from "../../pageObjectModel/homePage";
const homepagePom=new Homepage()

import homePageSecond from "../../pageObjectModel/homePageSecond";


describe('Page Object Model 1inci Kullanimi', () => {
    it('Page object model kullanim ornekleri', () => {

        homepagePom.navigate()
        homepagePom.pricingBtn() // homepage classına return thıs yadıysak her kodun basına homepagePom yazmamıza gerek kalmayacak 
        // .pricingBtn()  gibi yazmamız yeterlı  
    });
    
});

describe.only('Page Object Model 2nci Kullanimi', () => {

    it('Page object model kullanim ornekleri', () => {

    homePageSecond.navigate()
    homePageSecond.pricingBtn.should('be.visible').and('contain',"Pricing").click()



    });

    
});