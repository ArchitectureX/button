/**
 * @jest-environment jsdom
 */
import { describe, expect, it } from '@jest/globals'
import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/jest-globals'

import Button from '../Button'

describe('Button', () => {
  it('renders a regular button by default', () => {
    render(<Button>Click me</Button>)
    const buttonElement = screen.getByRole('button', { name: /click me/i })
    expect(buttonElement).toBeInTheDocument()
  })

  it('renders a link button when href is provided', () => {
    render(<Button href="/some-path">Click me</Button>)
    const linkElement = screen.getByRole('link', { name: /click me/i })
    expect(linkElement).toBeInTheDocument()
    expect(linkElement).toHaveAttribute('href', '/some-path')
  })

  it('displays loading text when isLoading is true', () => {
    render(
      <Button isLoading loadingText="Loading">
        Click me
      </Button>
    )
    const loadingElement = screen.getByText(/loading.../i)
    expect(loadingElement).toBeInTheDocument()
  })

  it('applies provided className', () => {
    render(<Button className="test-class">Click me</Button>)
    const buttonElement = screen.getByRole('button', { name: /click me/i })
    expect(buttonElement).toHaveClass('test-class')
  })
})
