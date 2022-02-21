import ColorButton from "./ColorButton";
import { fireEvent, render,screen } from "@testing-library/react";

test('button is rendered',()=>{
    render(<ColorButton />)
    //find an element with role of button
    const colorbutton=screen.getByRole('button')
    expect(colorbutton).toBeInTheDocument()
})


test('button has text as Change Color',()=>{
    render(<ColorButton />)
    //find an element with role of button
    const colorbutton=screen.getByRole('button')
    expect(colorbutton.textContent).toBe('Change Color to blue')
})

test('button has background color as red',()=>{
    render(<ColorButton />)
    //find an element with role of button
    const colorbutton=screen.getByRole('button')
    expect(colorbutton).toHaveStyle({backgroundColor:'red'})
})
test('button is clicked and color changed to blue', ()=>{
    render(<ColorButton />)
    //find an element with role of button
    const colorbutton=screen.getByRole('button')
    fireEvent.click(colorbutton)
    expect(colorbutton).toHaveStyle({backgroundColor:'blue'})
})

test('Checkbox is rendered',()=>{
    render(<ColorButton />)
    //find an element with role of button
    const checkboxcheck=screen.getByRole('checkbox')
    expect(checkboxcheck).toBeInTheDocument()
})

test('Checkbox is initially unchecked',()=>{
    render(<ColorButton />)
    //find an element with role of button
    const checkboxcheck=screen.getByRole('checkbox')
    expect(checkboxcheck).not.toBeChecked()
})

test('Checkbox disabled button on first click & enables on second click', ()=>{
    render(<ColorButton />)
    const checkbox =screen.getByRole('checkbox',{name:'Disable Button'})
    const button = screen.getByRole('button')
    fireEvent.click(checkbox)
    expect(button).toBeDisabled()
    fireEvent.click(checkbox)
    expect(button).toBeEnabled()
})

