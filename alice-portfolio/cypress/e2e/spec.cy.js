describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
  })
})

// cypress/e2e/portfolio.cy.js

describe('Alice Martin Portfolio Application', () => {
  beforeEach(() => {
    // Visit the application before each test
    cy.visit('/')
  })

  describe('Header Navigation Tests', () => {
    it('should display the header with logo and navigation links', () => {
      // Check header is visible
      cy.get('header').should('be.visible')

      // Check logo is present and contains "AM"
      cy.get('.logo').should('contain.text', 'AM')
      cy.get('.logo').should('have.attr', 'href').and('include', '/')

      // Check all navigation links are present
      const expectedNavItems = ['About', 'Experience', 'Education', 'Skills & Projects', 'Contact']
      expectedNavItems.forEach(item => {
        cy.get('.nav-links').should('contain.text', item)
      })
    })

    it('should navigate to different sections when nav links are clicked', () => {
      // Test About navigation
      cy.get('.nav-links a').contains('About').click()
      cy.url().should('include', '/about')

      // Test Experience navigation
      cy.get('.nav-links a').contains('Experience').click()
      cy.url().should('include', '/experience')

      // Test Skills & Projects navigation
      cy.get('.nav-links a').contains('Skills & Projects').click()
      cy.url().should('include', '/skills-and-projects')

      // Test Contact navigation
      cy.get('.nav-links a').contains('Contact').click()
      cy.url().should('include', '/contact')
    })

    it('should highlight active navigation link', () => {
      // Navigate to about page
      cy.get('.nav-links a').contains('About').click()

      // Check that the About link has active class
      cy.get('.nav-links a').contains('About').should('have.class', 'router-link-active')
    })

    it('should show mobile menu toggle on small screens', () => {
      // Set viewport to mobile size
      cy.viewport(375, 667)

      // Mobile toggle should be visible
      cy.get('.mobile-toggle').should('be.visible')

      // Nav links should be hidden initially
      cy.get('.nav-links').should('not.have.class', 'nav-open')

      // Click mobile toggle
      cy.get('.mobile-toggle').click()

      // Nav should now be open
      cy.get('.nav-links').should('have.class', 'nav-open')

      // Click a nav link to close menu
      cy.get('.nav-links a').contains('About').click()
      cy.get('.nav-links').should('not.have.class', 'nav-open')
    })

    it('should apply scrolled styles when page is scrolled', () => {
      // Initially header should not have scrolled class
      cy.get('header').should('not.have.class', 'header-scrolled')

      // Scroll down
      cy.scrollTo(0, 100)

      // Header should now have scrolled class
      cy.get('header').should('have.class', 'header-scrolled')
    })
  })

  describe('Main Section/Hero Tests', () => {
    it('should display hero content with correct information', () => {
      // Check main heading
      cy.get('h1').should('contain.text', 'Alice Martin')

      // Check subtitle
      cy.get('h2').should('contain.text', 'Software Developer')

      // Check description text
      cy.get('p').should('contain.text', 'Creating beautiful, functional applications')

      // Check CTA buttons are present
      cy.get('.cta-buttons .btn.primary').should('contain.text', 'View Projects')
      cy.get('.cta-buttons .btn.secondary').should('contain.text', 'Contact Me')
    })

    it('should navigate when CTA buttons are clicked', () => {
      // Test View Projects button
      cy.get('.cta-buttons .btn.primary').click()
      cy.url().should('include', '/skills-and-projects')

      // Go back to home
      cy.visit('/')

      // Test Contact Me button
      cy.get('.cta-buttons .btn.secondary').click()
      cy.url().should('include', '/contact')
    })

    it('should show hero animation on page load', () => {
      // Hero content should become visible after animation
      cy.get('.hero-content').should('have.class', 'visible')
    })
  })

  describe('Footer Tests', () => {
    it('should display footer with social icons and copyright', () => {
      // Check footer is visible
      cy.get('footer').should('be.visible')

      // Check social icons are present
      cy.get('.social-icons a[aria-label="GitHub"]').should('exist')
      cy.get('.social-icons a[aria-label="LinkedIn"]').should('exist')
      cy.get('.social-icons a[aria-label="Email"]').should('exist')

      // Check copyright contains current year
      const currentYear = new Date().getFullYear()
      cy.get('.copyright').should('contain.text', currentYear.toString())
      cy.get('.copyright').should('contain.text', 'Alice Martin')
      cy.get('.copyright').should('contain.text', 'Built with Vue.js')
    })

    it('should have correct external links for social icons', () => {
      // GitHub link
      cy.get('.social-icons a[aria-label="GitHub"]')
        .should('have.attr', 'href', 'https://github.com/amartinarias')
        .should('have.attr', 'target', '_blank')

      // LinkedIn link
      cy.get('.social-icons a[aria-label="LinkedIn"]')
        .should('have.attr', 'href', 'https://linkedin.com/in/amartinarias')
        .should('have.attr', 'target', '_blank')

      // Email link
      cy.get('.social-icons a[aria-label="Email"]')
        .should('have.attr', 'href', 'mailto:amartinbusiness@outlook.com')
    })

    it('should show hover effects on social icons', () => {
      // Test hover effect on GitHub icon
      cy.get('.social-icons a[aria-label="GitHub"] .social-icon')
        .trigger('mouseover')
        .should('have.css', 'transform')
    })
  })

  describe('About Section Tests', () => {
    beforeEach(() => {
      cy.visit('/about')
    })

    it('should display about section content', () => {
      // Check section title
      cy.get('.section-title').should('contain.text', 'About Me')

      // Check about text content
      cy.get('.about-text p').should('have.length.greaterThan', 0)
      cy.get('.about-text').should('contain.text', 'Software Developer')
      cy.get('.about-text').should('contain.text', 'VueJS')
      cy.get('.about-text').should('contain.text', 'CFG Software Engineering Nanodegree')

      // Check languages mentioned
      cy.get('.about-text').should('contain.text', 'English and Spanish')
    })

    it('should have responsive layout on mobile', () => {
      // Set mobile viewport
      cy.viewport(375, 667)

      // About content should stack vertically on mobile
      cy.get('.about-content').should('be.visible')
    })
  })

  describe('Page Transitions Tests', () => {
    it('should have smooth transitions between pages', () => {
      // Start on home page
      cy.url().should('eq', Cypress.config().baseUrl + '/')

      // Navigate to about with transition
      cy.get('.nav-links a').contains('About').click()
      cy.url().should('include', '/about')

      // Navigate back to home
      cy.get('.logo').click()
      cy.url().should('eq', Cypress.config().baseUrl + '/')
    })
  })

  describe('Responsive Design Tests', () => {
    const viewports = [
      { device: 'mobile', width: 375, height: 667 },
      { device: 'tablet', width: 768, height: 1024 },
      { device: 'desktop', width: 1200, height: 800 }
    ]

    viewports.forEach(viewport => {
      it(`should display correctly on ${viewport.device}`, () => {
        cy.viewport(viewport.width, viewport.height)

        // Check header is visible
        cy.get('header').should('be.visible')

        // Check main content is visible
        cy.get('main').should('be.visible')

        // Check footer is visible
        cy.get('footer').should('be.visible')

        if (viewport.device === 'mobile') {
          // On mobile, hamburger menu should be visible
          cy.get('.mobile-toggle').should('be.visible')
        } else {
          // On larger screens, nav links should be visible
          cy.get('.nav-links ul').should('be.visible')
        }
      })
    })
  })

  describe('Accessibility Tests', () => {
    it('should have proper aria labels for interactive elements', () => {
      // Check social icons have aria labels
      cy.get('[aria-label="GitHub"]').should('exist')
      cy.get('[aria-label="LinkedIn"]').should('exist')
      cy.get('[aria-label="Email"]').should('exist')
    })

    it('should have proper heading hierarchy', () => {
      // Check h1 exists and is unique
      cy.get('h1').should('have.length', 1)

      // Check h2 exists
      cy.get('h2').should('exist')
    })

    it('should be keyboard navigable', () => {
      // Tab through navigation links
      cy.get('.nav-links a').first().focus()
      cy.focused().should('have.class', 'router-link-exact-active')

      // Test keyboard navigation
      cy.get('body').tab()
      cy.focused().should('be.visible')
    })
  })

  describe('Performance Tests', () => {
    it('should load within reasonable time', () => {
      cy.visit('/', {
        onBeforeLoad: (win) => {
          win.performance.mark = cy.stub()
        }
      })

      // Check that main elements load quickly
      cy.get('header', { timeout: 3000 }).should('be.visible')
      cy.get('main', { timeout: 3000 }).should('be.visible')
      cy.get('footer', { timeout: 3000 }).should('be.visible')
    })
  })

  describe('Error Handling Tests', () => {
    it('should handle invalid routes gracefully', () => {
      // Visit an invalid route
      cy.visit('/invalid-route', { failOnStatusCode: false })

      // Should either redirect to home or show 404 page
      // This depends on your router configuration
      cy.url().should('match', /\/(|404)$/)
    })
  })
})