const chai = require('chai');
const Promise = require('bluebird');
const expect = chai.expect;

const db = require('../models').db;
const Page = require('../models').Page;
const User = require('../models').User;

describe('page model', () => {
    // sync the database to clear it
    beforeEach(() => {
        return db.sync({force:true});
    });
    let page;
    // make a fake page
    beforeEach(() => {
        page = Page.build({
            title: 'Geese',
            urlTitle: 'Geese',
            content: 'sharp tongues',
            tags: ['birds', 'waterfowl']
        })
    });
    //what should the returned route be
    describe('route', () => {
        it('returns a url title prepended by /wiki/', () => {
            expect(page.route).to.equal('/wiki/Geese')
        })
    });
    //tests what markdown looks like rendered as html
    describe('rendered content', () => {
        it('takes markdown and converts to HTML', () => {
            expect(page.renderedContent).to.equal('<p>sharp tongues</p>\n');
        })
    });
    describe('tests find by tag functionality', () => {
        let bodybuilding, chairs;
        beforeEach(() => {
            const p1 = Page.create({
                title: 'bodybuilding',
                content: 'get swole',
                tags: ['strong', 'sports']
            });
            const p2 = Page.create({
                title: 'chairs',
                content: 'sit here',
                tags: ['wood', 'furniture']
            });
            return Promise.all([p1,p2]).then(createdPages => {
                [bodybuilding, chairs] = createdPages;
            })
        });
        it('finds pages by tag', () => {
            return Page.findByTag('sports').then(pages => {
                expect(pages).to.have.lengthOf(1);
            })
        });
        it('does not get pages without the tag tag', () => {
            return Page.findByTag('floof').then(pages => {
                expect(pages).to.have.lengthOf(0);
            });
        });
    });
});
