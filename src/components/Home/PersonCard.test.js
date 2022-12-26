import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import PersonCard from './PersonCard'

describe('PersonCard', () => {
    test('PersonCard renders correctly', () => {
        const name = 'John Doe'
        const img = '/path/to/image.jpg'
        const link = '/profile/john-doe'

        const { getByText, getByAltText } = render(
            <PersonCard name={name} img={img} link={link} />
        )

        // Assert that the name is rendered correctly
        const nameElement = getByText(name)
        expect(nameElement).toBeInTheDocument()

        // Assert that the image is rendered correctly
        const imgElement = getByAltText(name)
        expect(imgElement).toBeInTheDocument()
        expect(imgElement).toHaveAttribute('src', img)

        // Assert that the link is rendered correctly
        const linkElement = nameElement.closest('a')
        expect(linkElement).toHaveAttribute('href', link)
    })

    test('PersonCard navigates to link when clicked', () => {
        const name = 'John Doe'
        const img = '/path/to/image.jpg'
        const link = '/profile/john-doe'

        const { getByText } = render(
            <PersonCard name={name} img={img} link={link} />
        )

        // Find the link element and simulate a click event
        const linkElement = getByText(name).closest('a')
        fireEvent.click(linkElement)

        // Wait for a few seconds and then assert the window location
        setTimeout(() => {
            expect(window.location.pathname).toEqual(link)
        }, 3000)
    })
})
