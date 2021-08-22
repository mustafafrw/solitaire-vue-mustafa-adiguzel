import { shallowMount } from '@vue/test-utils'

import Card from '@/components/Main/Card'

describe('Card Component Tests', () => {
    it('should print Cards title', () => {
    
        //Arrange
        const cardData = {
            id: "1",
            number: 1,
            title: "A",
            open: true
        }

        // Act
        const wrapper = shallowMount(Card, {
            propsData: {
                card: cardData
            }
        })

        const cardTitle= wrapper.find('.card-number-top').text()
        
        // Assert
        expect(cardTitle)
            .toEqual(cardData.title)
    })
    it('should show Card if card.open is true', () => {
    
        //Arrange
        const cardData = {
            id: "1",
            number: 1,
            title: "A",
            open: true
        }

        // Act
        const wrapper = shallowMount(Card, {
            propsData: {
                card: cardData
            }
        })

        const cardOpen = wrapper.find('.card-open')
        
        // Assert
        expect(cardOpen.exists())
            .toBe(true)
    })
    it('should show back side of the Card if card.open is false', () => {
    
        //Arrange
        const cardData = {
            id: "1",
            number: 1,
            title: "A",
            open: false
        }

        // Act
        const wrapper = shallowMount(Card, {
            propsData: {
                card: cardData
            }
        })

        const cardOpen = wrapper.find('.card-back')
        
        // Assert
        expect(cardOpen.exists())
            .toBe(true)
    })
})