import { shallowMount, mount } from '@vue/test-utils'

import BackDialog from '@/components/Dialog/BackDialog'

describe('BackDialog Component Tests', () => {
    it('should show the modal if dialogState prop is true', () => {
    
        //Arrange
        const dialogState = true;

        // Act
        const wrapper = shallowMount(BackDialog, {
            propsData: {
                dialogState
            }
        }) 
        
        // Assert
        expect(wrapper.html())
            .toContain('gmodal')
    })
    it('should not show the modal if dialogState prop is false', () => {
    
        //Arrange
        const dialogState = false;

        // Act
        const wrapper = shallowMount(BackDialog, {
            propsData: {
                dialogState
            }
        }) 
        
        // Assert
        expect(wrapper.html())
            .not
            .toContain('gmodal')
    })
    it('should emit when clicked the Back button', () => {
        
        const wrapper = mount(BackDialog, {
            propsData: {
                dialogState: true
            }
        })
        const restartButton = wrapper.findAll('button').at(0)
        restartButton.trigger('click')
        
        // Assert
        expect(wrapper.emitted().agree).toBeTruthy()
    })
    it('should emit when clicked the Cancel button', () => {
        // Arrange
        const wrapper = mount(BackDialog, {
            propsData: {
                dialogState: true
            }
        })
        
        // Act
        const cancelButton = wrapper.findAll('button').at(1)
        cancelButton.trigger('click')
        
        // Assert
        expect(wrapper.emitted().close).toBeTruthy()
    })
})