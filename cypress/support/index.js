
import './commands'
const addContext = require('mochawesome/addContext');

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })


Cypress.on('test:after:run', (test, runnable) => {
    if (test.state === 'failed') {
      let item = runnable
      const nameParts = [runnable.title]
  
      // Iterate through all parents and grab the titles
      while (item.parent) {
        nameParts.unshift(item.parent.title)
        item = item.parent
      }
  
      const fullTestName = nameParts
              .filter(Boolean)
              .join(' -- ')           // this is how cypress joins the test title fragments
  
      const imageUrl = `screenshots/${Cypress.spec.name}/${fullTestName} (failed).png`
  
      addContext({ test }, imageUrl)
    }
  })
